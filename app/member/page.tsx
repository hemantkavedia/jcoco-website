"use client";

import { useEffect, useState, Suspense } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";

type Profile = {
  id: string;
  full_name: string;
  email: string;
  mobile: string;
  dob: string;
  blood_group: string;
  address_line1: string;
  address_city: string;
  address_state: string;
  address_zip: string;
  occupation: string;
  relation: string;
  household_id: number;
};

type Membership = {
  membership_type: string;
  status: string;
  start_date: string;
  expiry_date: string;
};

type Pledge = {
  year: number;
  pledge_amount: number;
  paid_amount: number;
  balance: number;
};

type DoorCode = {
  code: string;
  valid_until: string;
};

type Event = {
  id: number;
  name: string;
  event_date: string;
  event_time: string;
  location: string;
  summary: string;
};

function MemberPortal() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [membership, setMembership] = useState<Membership | null>(null);
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [doorCode, setDoorCode] = useState<DoorCode | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"dashboard" | "profile" | "events" | "pledges">("dashboard");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth event:", event, session?.user?.email ?? "no user");
      if (session?.user) {
        setUser(session.user);
        await loadMemberData(session.user);
      } else {
        setUser(null);
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function loadMemberData(u: User) {
    const { data: mapping } = await supabase
      .from("auth_mapping")
      .select("profile_id")
      .eq("auth_uid", u.id)
      .single();

    if (!mapping) {
      const { data: profileByEmail } = await supabase
        .from("profiles")
        .select("*")
        .eq("email", u.email!)
        .single();

      if (profileByEmail) {
        await supabase.from("auth_mapping").insert({
          auth_uid: u.id,
          profile_id: profileByEmail.id,
          email: u.email,
        });
        setProfile(profileByEmail);
        await loadHouseholdData(profileByEmail.household_id);
      }
    } else {
      const { data: prof } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", mapping.profile_id)
        .single();
      setProfile(prof);
      if (prof) await loadHouseholdData(prof.household_id);
    }

    const { data: events } = await supabase
      .from("events")
      .select("id, name, event_date, event_time, location, summary")
      .gte("event_date", new Date().toISOString())
      .order("event_date", { ascending: true })
      .limit(5);
    setUpcomingEvents(events ?? []);

    setLoading(false);
  }

  async function loadHouseholdData(householdId: number) {
    const { data: mem } = await supabase
      .from("memberships")
      .select("*")
      .eq("household_id", householdId)
      .single();
    setMembership(mem);

    const { data: pl } = await supabase
      .from("pledges")
      .select("*")
      .eq("household_id", householdId)
      .order("year", { ascending: false });
    setPledges(pl ?? []);

    const { data: code } = await supabase
      .from("door_codes")
      .select("code, valid_until")
      .eq("is_active", true)
      .single();
    setDoorCode(code);
  }

  async function handleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://jcoco.org/auth/callback",
      },
    });
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🕉️</div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <section className="bg-saffron-400 text-white py-16 text-center">
          <p className="section-subtitle text-saffron-100">Member Portal</p>
          <h1 className="text-4xl font-bold">Welcome Back</h1>
        </section>
        <section className="py-20 max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Member Login</h2>
            <p className="text-gray-500 mb-8 text-sm">
              Sign in with your Google account to access your membership details,
              temple door code, and upcoming events.
            </p>
            <button
              onClick={handleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-saffron-400 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
            <p className="text-xs text-gray-400 mt-6">
              Only registered JCOCO members can access the portal.
              Contact us at <a href="mailto:info@jcoco.org" className="text-saffron-500 hover:underline">info@jcoco.org</a> if you need help.
            </p>
          </div>
        </section>
      </>
    );
  }

  if (!profile) {
    return (
      <>
        <section className="bg-saffron-400 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Member Portal</h1>
        </section>
        <section className="py-20 max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Account Not Found</h2>
            <p className="text-gray-500 mb-6 text-sm">
              We couldn&apos;t find a JCOCO membership linked to <strong>{user.email}</strong>.
              Please contact us to get your account set up.
            </p>
            <a href="mailto:info@jcoco.org" className="btn-primary inline-block mb-4">Contact Us</a>
            <br />
            <button onClick={handleSignOut} className="text-sm text-gray-400 hover:text-gray-600 underline">Sign out</button>
          </div>
        </section>
      </>
    );
  }

  const statusColor = membership?.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
  const currentPledge = pledges.find(p => p.year === new Date().getFullYear());

  return (
    <>
      <section className="bg-saffron-400 text-white py-12 text-center">
        <p className="section-subtitle text-saffron-100">Member Portal</p>
        <h1 className="text-3xl font-bold">Jai Jinendra, {profile.full_name.split(" ")[0]}!</h1>
        <p className="text-saffron-100 mt-1 text-sm">{user.email}</p>
      </section>

      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {(["dashboard", "profile", "events", "pledges"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-4 text-sm font-medium capitalize whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-saffron-400 text-saffron-500"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
          <button onClick={handleSignOut} className="ml-auto px-5 py-4 text-sm text-gray-400 hover:text-gray-600 whitespace-nowrap">
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Membership</p>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900 text-lg capitalize">{membership?.membership_type ?? "Member"}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusColor}`}>{membership?.status ?? "Unknown"}</span>
              </div>
              {membership?.start_date && (
                <p className="text-sm text-gray-500">Member since {new Date(membership.start_date).getFullYear()}</p>
              )}
              <Link href="/membership" className="mt-4 inline-block text-sm text-saffron-500 hover:underline font-medium">Renew Membership →</Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Temple Access Code</p>
              {doorCode ? (
                <>
                  <p className="text-4xl font-bold tracking-widest text-saffron-500 font-mono">{doorCode.code}</p>
                  {doorCode.valid_until && <p className="text-xs text-gray-400 mt-2">Valid until {new Date(doorCode.valid_until).toLocaleDateString()}</p>}
                  <p className="text-xs text-gray-400 mt-1">🔒 Keep this code confidential</p>
                </>
              ) : (
                <p className="text-sm text-gray-500">No active door code. Contact <a href="mailto:info@jcoco.org" className="text-saffron-500 hover:underline">info@jcoco.org</a>.</p>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{new Date().getFullYear()} Pledge</p>
              {currentPledge ? (
                <>
                  <div className="flex justify-between text-sm mb-2"><span className="text-gray-500">Pledged</span><span className="font-semibold">${currentPledge.pledge_amount.toFixed(2)}</span></div>
                  <div className="flex justify-between text-sm mb-2"><span className="text-gray-500">Paid</span><span className="font-semibold text-green-600">${currentPledge.paid_amount.toFixed(2)}</span></div>
                  <div className="border-t pt-2 flex justify-between text-sm"><span className="text-gray-500">Balance</span><span className={`font-bold ${currentPledge.balance > 0 ? "text-red-500" : "text-green-600"}`}>${currentPledge.balance.toFixed(2)}</span></div>
                  <div className="mt-3 bg-gray-100 rounded-full h-2">
                    <div className="bg-saffron-400 h-2 rounded-full" style={{ width: `${Math.min(100, (currentPledge.paid_amount / currentPledge.pledge_amount) * 100)}%` }} />
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-500">No pledge recorded for {new Date().getFullYear()} yet.</p>
              )}
              <button onClick={() => setActiveTab("pledges")} className="mt-4 inline-block text-sm text-saffron-500 hover:underline font-medium">View All Pledges →</button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Upcoming Events</p>
              {upcomingEvents.length > 0 ? (
                <div className="space-y-3">
                  {upcomingEvents.slice(0, 3).map(evt => (
                    <div key={evt.id} className="flex gap-3 items-start">
                      <div className="bg-saffron-50 rounded-lg p-2 text-center min-w-[48px]">
                        <p className="text-xs text-saffron-500 font-bold">{new Date(evt.event_date).toLocaleString("default", { month: "short" }).toUpperCase()}</p>
                        <p className="text-lg font-bold text-saffron-600 leading-none">{new Date(evt.event_date).getDate()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 leading-tight">{evt.name}</p>
                        <p className="text-xs text-gray-400">{evt.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No upcoming events scheduled.</p>
              )}
              <button onClick={() => setActiveTab("events")} className="mt-4 inline-block text-sm text-saffron-500 hover:underline font-medium">View All Events →</button>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">My Profile</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {[
                { label: "Full Name", value: profile.full_name },
                { label: "Email", value: profile.email },
                { label: "Mobile", value: profile.mobile },
                { label: "Date of Birth", value: profile.dob ? new Date(profile.dob).toLocaleDateString() : null },
                { label: "Blood Group", value: profile.blood_group },
                { label: "Occupation", value: profile.occupation },
                { label: "Address", value: profile.address_line1 },
                { label: "City", value: profile.address_city },
                { label: "State", value: profile.address_state },
                { label: "Zip", value: profile.address_zip },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
                  <p className="text-gray-900 mt-0.5">{value || <span className="text-gray-300">—</span>}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-400">
              To update your profile, contact us at{" "}
              <a href="mailto:info@jcoco.org" className="text-saffron-500 hover:underline">info@jcoco.org</a>.
            </p>
          </div>
        )}

        {activeTab === "events" && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map(evt => (
                  <div key={evt.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-5">
                    <div className="bg-saffron-50 rounded-xl p-3 text-center min-w-[60px]">
                      <p className="text-xs text-saffron-500 font-bold">{new Date(evt.event_date).toLocaleString("default", { month: "short" }).toUpperCase()}</p>
                      <p className="text-2xl font-bold text-saffron-600 leading-none">{new Date(evt.event_date).getDate()}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{evt.name}</h3>
                      <p className="text-sm text-gray-500">{evt.location}{evt.event_time && ` · ${evt.event_time}`}</p>
                      {evt.summary && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{evt.summary}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-400">
                <div className="text-4xl mb-3">📅</div>
                <p>No upcoming events at this time.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "pledges" && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Pledge History</h2>
            {pledges.length > 0 ? (
              <div className="space-y-4">
                {pledges.map(p => (
                  <div key={p.year} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 text-lg">{p.year}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.balance <= 0 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {p.balance <= 0 ? "Paid in Full" : "Balance Due"}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div><p className="text-xs text-gray-400 mb-1">Pledged</p><p className="font-bold text-gray-900">${p.pledge_amount.toFixed(2)}</p></div>
                      <div><p className="text-xs text-gray-400 mb-1">Paid</p><p className="font-bold text-green-600">${p.paid_amount.toFixed(2)}</p></div>
                      <div><p className="text-xs text-gray-400 mb-1">Balance</p><p className={`font-bold ${p.balance > 0 ? "text-red-500" : "text-green-600"}`}>${p.balance.toFixed(2)}</p></div>
                    </div>
                    <div className="mt-4 bg-gray-100 rounded-full h-2">
                      <div className="bg-saffron-400 h-2 rounded-full" style={{ width: `${Math.min(100, (p.paid_amount / p.pledge_amount) * 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-400">
                <div className="text-4xl mb-3">💝</div>
                <p>No pledge history yet for your household.</p>
                <p className="text-sm mt-2">Contact us at <a href="mailto:info@jcoco.org" className="text-saffron-500 hover:underline">info@jcoco.org</a> to set up your annual pledge.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default function MemberPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🕉️</div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    }>
      <MemberPortal />
    </Suspense>
  );
}
