export const metadata = {
  title: "Board of Trustees | JCOCO",
  description: "Meet the Board of Trustees of the Jain Center of Central Ohio.",
};

const trustees = [
  { name: "Mahendra Daga" },
  { name: "Heena Shah" },
  { name: "Pratik Shah" },
  { name: "Kavindra Vora" },
];

export default function BoardOfTrusteesPage() {
  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Governance</p>
        <h1 className="text-4xl font-bold">Board of Trustees</h1>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          The Board of Trustees provides oversight and governance for the Jain Center of Central Ohio,
          ensuring we remain true to our mission and values.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {trustees.map((t) => (
            <div key={t.name} className="bg-saffron-50 rounded-xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-saffron-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-saffron-500 text-sm">Board of Trustees</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
