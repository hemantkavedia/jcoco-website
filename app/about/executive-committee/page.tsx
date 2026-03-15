import Image from "next/image";

export const metadata = {
  title: "Executive Committee | JCOCO",
  description: "Meet the Executive Committee of the Jain Center of Central Ohio.",
};

const committee = [
  { name: "Alpesh Mehta",   role: "President",          phone: "(937) 594-8785", email: "mehtaalpesh2000@gmail.com" },
  { name: "Dipen Patwa",    role: "Vice President",      phone: "(614) 930-9669", email: "drpatwa@gmail.com" },
  { name: "Bhavin Shah",    role: "Secretary",           phone: "(513) 290-7424", email: "shahbr77@yahoo.com" },
  { name: "Kanchana Shah",  role: "Education Committee", phone: "(848) 248-9975", email: "mbkanchana@gmail.com" },
  { name: "Mamta Doshi",    role: "Education Committee", phone: "(614) 537-2934", email: "doshimamta@gmail.com" },
  { name: "Yash Lunkad",    role: "Program Committee",   phone: "(614) 216-6422", email: "yashlunkad@gmail.com" },
  { name: "Kunal Banthia",  role: "Council Member",      phone: "(614) 815-5059", email: "kunalbanthia82@gmail.com" },
  { name: "Anshul Jain",    role: "Council Member",      phone: "(602) 503-1229", email: null },
  { name: "Atul Mehta",     role: "Council Member",      phone: "(651) 324-5699", email: "atulbmehta@gmail.com" },
  { name: "Mona Mehta",     role: "EC Advisor",          phone: "(614) 329-1964", email: "neemo03@yahoo.com" },
  { name: "Hemant Kavedia", role: "Tech Committee",      phone: "(614) 787-8773", email: "hemantkavedia@gmail.com" },
  { name: "Umang Patel",    role: "Tech Committee",      phone: "(614) 256-8887", email: "umangp90@gmail.com" },
];

export default function ExecutiveCommitteePage() {
  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Leadership</p>
        <h1 className="text-4xl font-bold">Executive Committee</h1>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-64 md:h-80 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-12">
          <Image
            src="https://jcoco.org/wp-content/uploads/2026/02/ExecutiveComm.jpg"
            alt="JCOCO Executive Committee"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {committee.map((m) => (
            <div key={m.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <p className="font-bold text-gray-900">{m.name}</p>
              <p className="text-saffron-500 text-sm font-medium mb-3">{m.role}</p>
              <div className="space-y-1 text-sm text-gray-500">
                <a href={`tel:${m.phone}`} className="flex items-center gap-2 hover:text-saffron-500 transition-colors">
                  <span>📞</span> {m.phone}
                </a>
                {m.email ? (
                  <a href={`mailto:${m.email}`} className="flex items-center gap-2 hover:text-saffron-500 transition-colors break-all">
                    <span>✉️</span> {m.email}
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-gray-400"><span>✉️</span> Not Available</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
