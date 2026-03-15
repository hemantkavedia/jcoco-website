import Image from "next/image";

export const metadata = {
  title: "About | JCOCO",
  description: "Learn about the Jain Center of Central Ohio — our history, mission, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Who We Are</p>
        <h1 className="text-4xl font-bold">About JCOCO</h1>
      </section>

      {/* History */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-subtitle">Our History</p>
          <h2 className="section-title">Founded in 1991</h2>
          <p className="text-gray-600 mb-4">
            The Jain Center of Central Ohio (JCOCO) was founded in 1991 as a not-for-profit religious organization
            dedicated to practicing and promoting Jain Philosophy in Central Ohio.
          </p>
          <p className="text-gray-600 mb-4">
            Our Jain Temple — an Ohio Historic Landmark — was established in July 2012 at 6683 South Old State Rd.,
            Lewis Center, OH. It stands as a beacon of Jain values: non-violence (Ahimsa), truth (Satya),
            and compassion for all living beings.
          </p>
          <p className="text-gray-600">
            Over the decades, JCOCO has grown into a vibrant community serving hundreds of families across
            Central Ohio, offering daily worship, educational programs, and cultural events.
          </p>
        </div>
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://jcoco.org/wp-content/uploads/2026/02/jcoco_temple_lg.jpeg"
            alt="JCOCO Temple"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-saffron-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be a thriving center of Jain culture, education, and worship that nurtures the spiritual growth
              of our community and shares the timeless wisdom of Jainism with the broader world.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🕉️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To preserve and promote Jain philosophy, culture, and traditions through worship, education,
              and community service — guided by the principles of Ahimsa, Satya, and Aparigraha.
            </p>
          </div>
        </div>
      </section>

      {/* Spiritual Visit */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://jcoco.org/wp-content/uploads/2026/02/samni_ji-1.jpg"
            alt="Spiritual Visit"
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>
        <div>
          <p className="section-subtitle">Spiritual Guidance</p>
          <h2 className="section-title">Blessed by Saints</h2>
          <p className="text-gray-600 mb-4">
            JCOCO has been blessed with visits from revered Jain saints and scholars who have guided our
            community with their wisdom and blessings.
          </p>
          <p className="text-gray-600">
            These sacred visits inspire our members and reinforce our commitment to living by Jain principles
            in our daily lives.
          </p>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="bg-saffron-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle">Leadership</p>
          <h2 className="section-title">Our Leadership</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            JCOCO is led by dedicated volunteers committed to our community and Jain values.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="/about/executive-committee" className="bg-white rounded-2xl p-8 shadow-sm border-2 border-transparent hover:border-saffron-400 transition-all group">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-saffron-500 transition-colors">Executive Committee</h3>
              <p className="text-gray-500 text-sm">Meet the elected officers and committee members who manage day-to-day operations.</p>
            </a>
            <a href="/about/board-of-trustees" className="bg-white rounded-2xl p-8 shadow-sm border-2 border-transparent hover:border-saffron-400 transition-all group">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-saffron-500 transition-colors">Board of Trustees</h3>
              <p className="text-gray-500 text-sm">Meet the trustees who provide governance and oversight for JCOCO.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
