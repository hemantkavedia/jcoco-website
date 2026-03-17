import Link from "next/link";
import PayPalButton from "@/components/PayPalButton";

export const metadata = {
  title: "Donate | JCOCO",
  description: "Support the Jain Center of Central Ohio with a donation via PayPal.",
};

const tiers = [
  { amount: "$25",     label: "Supporter",  desc: "Helps cover daily operational costs." },
  { amount: "$50",     label: "Friend",      desc: "Supports our weekly pooja and pathshaala." },
  { amount: "$108",    label: "Devotee",     desc: "A sacred amount — contributes to temple maintenance." },
  { amount: "$251",    label: "Patron",      desc: "Sponsors a special event or program." },
  { amount: "$501",    label: "Benefactor",  desc: "Major contribution to our community programs." },
  { amount: "Custom",  label: "Your Choice", desc: "Donate any amount that feels right." },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Give Back</p>
        <h1 className="text-4xl font-bold">Support JCOCO</h1>
        <p className="mt-3 text-saffron-100 max-w-xl mx-auto">
          Your generosity keeps our temple thriving and our community growing.
          All donations are tax-deductible under our 501(c)(3) status.
        </p>
      </section>

      {/* Main donate section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">

          {/* Left — why donate */}
          <div>
            <p className="section-subtitle">Your Impact</p>
            <h2 className="section-title">Every Contribution Matters</h2>
            <p className="text-gray-600 mb-6">
              Your donations help us maintain the temple, run educational programs,
              support pathshaala, and serve our community throughout the year.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {tiers.map((t) => (
                <div key={t.amount} className="bg-saffron-50 rounded-xl p-4 border-2 border-transparent hover:border-saffron-400 transition-all">
                  <p className="text-2xl font-bold text-saffron-500 mb-1">{t.amount}</p>
                  <p className="font-semibold text-gray-900 text-sm">{t.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Federal Tax ID: 31-1336126 &nbsp;|&nbsp; 501(c)(3) Non-Profit
            </p>
          </div>

          {/* Right — PayPal button */}
          <div className="bg-saffron-50 rounded-2xl p-8 shadow-sm">
            <div className="text-5xl text-center mb-4">🙏</div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Donate Securely via PayPal</h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              One-time or recurring. Accepts all major credit cards — no PayPal account required.
            </p>
            <PayPalButton containerId="paypal-donate-main" />
          </div>
        </div>
      </section>

      {/* JCOCO Prime upsell */}
      <section className="py-16 bg-saffron-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-subtitle">Annual Giving</p>
          <h2 className="section-title">Consider JCOCO Prime Membership</h2>
          <p className="text-gray-600 mb-6">
            For $1,080/year per family, JCOCO Prime members receive exclusive benefits including
            24/7 temple access, special laabhs during Paryushan, and more.
          </p>
          <Link href="/membership" className="btn-primary inline-block">Learn About JCOCO Prime</Link>
        </div>
      </section>
    </>
  );
}
