import Link from "next/link";

export const metadata = {
  title: "JCOCO Prime Membership | JCOCO",
  description: "Join JCOCO Prime — annual pledge membership with exclusive temple benefits.",
};

const benefits = [
  { icon: "🕌", text: "One Swapna Darshan Laabh during Paryushan" },
  { icon: "🪔", text: "One Abhishek Laabh during Aadhaar Abhishek Poojan" },
  { icon: "🙏", text: "One Pooja Laabh during Sattar Bhedi Poojan" },
  { icon: "📚", text: "Annual Pathshaala and Language class membership included" },
  { icon: "🔑", text: "Personal security code for 24/7 temple access" },
  { icon: "❤️", text: "Recognition as a valued JCOCO Prime family member" },
];

export default function MembershipPage() {
  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Annual Pledge</p>
        <h1 className="text-4xl font-bold">JCOCO Prime Membership</h1>
        <p className="mt-3 text-saffron-100 max-w-xl mx-auto">
          Become a JCOCO Prime member and deepen your connection to the temple and community.
        </p>
      </section>

      {/* Pricing card */}
      <section className="py-16 bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="bg-saffron-50 border-2 border-saffron-400 rounded-2xl p-10 text-center shadow-lg">
            <p className="text-saffron-500 font-semibold uppercase tracking-widest text-sm mb-2">JCOCO Prime</p>
            <div className="flex items-end justify-center gap-1 mb-1">
              <span className="text-5xl font-bold text-gray-900">$1,080</span>
              <span className="text-gray-500 mb-2">/year</span>
            </div>
            <p className="text-gray-500 text-sm mb-8">Per family &nbsp;|&nbsp; Tax-deductible</p>

            <ul className="text-left space-y-4 mb-8">
              {benefits.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{b.icon}</span>
                  <span className="text-gray-700">{b.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.paypal.com/donate/?hosted_button_id=C9ZVEWV3TK6Z8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full block text-center text-lg py-4"
            >
              Sign Up via PayPal
            </a>
            <p className="text-xs text-gray-400 mt-3">
              After payment, we will contact you to set up your membership benefits.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-saffron-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subtitle">Questions</p>
            <h2 className="section-title">Membership FAQ</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                q: "When does my membership start?",
                a: "Your membership begins upon receipt of payment and is valid for one calendar year.",
              },
              {
                q: "Can I pay in installments?",
                a: "Please contact us to discuss payment arrangements. We want membership to be accessible to all families.",
              },
              {
                q: "What is a Laabh?",
                a: "A Laabh is the honor of sponsoring or participating in a specific religious ritual or ceremony at the temple.",
              },
              {
                q: "How do I get my 24/7 access code?",
                a: "After your membership is confirmed, we will provide your personal security code via email.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-500">
            More questions?{" "}
            <Link href="/contact" className="text-saffron-500 hover:underline font-medium">
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
