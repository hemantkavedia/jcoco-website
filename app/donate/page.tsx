import PayPalButton from "@/components/PayPalButton";

export const metadata = {
  title: "Donate | JCOCO",
  description: "Support the Jain Center of Central Ohio with a donation via PayPal.",
};

const tiers = [
  { amount: "$25", label: "Supporter", desc: "Helps cover daily operational costs." },
  { amount: "$50", label: "Friend", desc: "Supports our weekly pooja and pathshaala." },
  { amount: "$108", label: "Devotee", desc: "A sacred amount — contributes to temple maintenance." },
  { amount: "$251", label: "Patron", desc: "Sponsors a special event or program." },
  { amount: "$501", label: "Benefactor", desc: "Major contribution to our community programs." },
  { amount: "Custom", label: "Your Choice", desc: "Donate any amount that feels right." },
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

      {/* Main PayPal CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-saffron-50 rounded-2xl p-10 shadow-sm">
            <div className="text-6xl mb-4">🙏</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Donate Securely via PayPal</h2>
            <p className="text-gray-600 mb-8">
              Make a one-time or recurring donation. PayPal accepts all major credit cards —
              no PayPal account required.
            </p>
            <div className="flex justify-center">
              <PayPalButton containerId="paypal-donate-main" />
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Federal Tax ID: 31-1336126 &nbsp;|&nbsp; 501(c)(3) Non-Profit
            </p>
          </div>
        </div>
      </section>

      {/* Giving tiers */}
      <section className="py-16 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle">Ways to Give</p>
            <h2 className="section-title">Suggested Donation Amounts</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <a
                key={t.amount}
                href="https://www.paypal.com/donate/?hosted_button_id=C9ZVEWV3TK6Z8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:border-saffron-400 border-2 border-transparent transition-all group"
              >
                <p className="text-3xl font-bold text-saffron-500 group-hover:text-saffron-600 mb-1">{t.amount}</p>
                <p className="font-semibold text-gray-900 mb-2">{t.label}</p>
                <p className="text-gray-500 text-sm">{t.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* JCOCO Prime upsell */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-subtitle">Annual Giving</p>
          <h2 className="section-title">Consider JCOCO Prime Membership</h2>
          <p className="text-gray-600 mb-6">
            For $1,080/year per family, JCOCO Prime members receive exclusive benefits including
            24/7 temple access, special laabhs during Paryushan, and more.
          </p>
          <a href="/membership" className="btn-primary inline-block">Learn About JCOCO Prime</a>
        </div>
      </section>
    </>
  );
}
