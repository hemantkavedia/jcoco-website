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
              Click below to make a one-time or recurring donation. PayPal accepts all major credit cards —
              no PayPal account required.
            </p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=C9ZVEWV3TK6Z8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-saffron-400 hover:bg-saffron-500 text-white font-bold px-10 py-5 rounded-xl text-xl transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
              </svg>
              Donate Now via PayPal
            </a>
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
