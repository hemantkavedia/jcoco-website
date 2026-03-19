import Image from "next/image";

export const metadata = {
  title: "Events | JCOCO",
  description: "Upcoming and past events at the Jain Center of Central Ohio.",
};

const events = [
  {
    title: "Paryushan Parva",
    date: "August 2025",
    desc: "The most sacred Jain festival — 8 days of fasting, prayer, forgiveness, and spiritual reflection.",
    img: "/images/temple_event_sd-scaled.jpg",
    tag: "Annual Festival",
  },
  {
    title: "Diwali Celebration",
    date: "October 2025",
    desc: "Community Diwali celebration with prayers, cultural programs, and a festive dinner.",
    img: "/images/sangh_visit.jpg",
    tag: "Community Event",
  },
  {
    title: "Mahavir Jayanti",
    date: "April 2025",
    desc: "Celebrating the birth anniversary of Lord Mahavir with special pooja and community gathering.",
    img: "/images/ron_mcdonald_jcoco.jpg",
    tag: "Religious",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">What&apos;s Happening</p>
        <h1 className="text-4xl font-bold">Events at JCOCO</h1>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={e.img} alt={e.title} fill className="object-cover" unoptimized />
                <span className="absolute top-3 left-3 bg-saffron-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {e.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-saffron-500 text-sm font-semibold mb-1">{e.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{e.title}</h3>
                <p className="text-gray-500 text-sm">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-saffron-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Regular Weekly Schedule</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-6 text-left max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-saffron-500 font-semibold text-sm mb-1">Every Sunday</p>
              <p className="font-bold text-gray-900">Temple Pooja</p>
              <p className="text-gray-500 text-sm">10:00 AM – 1:00 PM ET</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-saffron-500 font-semibold text-sm mb-1">Every Sunday</p>
              <p className="font-bold text-gray-900">Pathshaala &amp; Lunch</p>
              <p className="text-gray-500 text-sm">Included with Sunday Pooja</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
