import Image from "next/image";
import Link from "next/link";

const highlights = [
  { icon: "🕉️", title: "Sunday Pooja", desc: "Weekly pooja and pathshaala with light lunch, 10 AM – 1 PM ET." },
  { icon: "📚", title: "Pathshala", desc: "Religious education and language classes for children and adults.", href: "/pathshala" },
  { icon: "🤝", title: "Community", desc: "A welcoming community practicing Jain philosophy since 1991." },
  { icon: "🎉", title: "Temple Events", desc: "Paryushan, Diwali, Mahavir Jayanti, and many more celebrations throughout the year." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://jcoco.org/wp-content/uploads/2026/02/jcoco_temple_lg.jpeg"
          alt="Jain Center of Central Ohio Temple"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-saffron-300 font-semibold uppercase tracking-widest text-sm mb-3">
            Jain Center of Central Ohio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Samyak Darshan. Samyak Gyan.<br />Samyak Charitra.
          </h1>
          <p className="text-lg text-gray-200 mb-2">
            Right Faith &nbsp;·&nbsp; Right Knowledge &nbsp;·&nbsp; Right Conduct
          </p>
          <p className="text-base text-gray-300 mb-8">
            An Ohio Historic Landmark — practicing Jain philosophy since 1991.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="btn-primary">Learn About Us</Link>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=C9ZVEWV3TK6Z8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-saffron-500"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle">What We Offer</p>
            <h2 className="section-title">Welcome to JCOCO</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our temple is a place of worship, learning, and community for Jains and all those interested in Jain philosophy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => {
              const inner = (
                <>
                  <div className="text-4xl mb-3">{h.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
                  <p className="text-gray-500 text-sm">{h.desc}</p>
                </>
              );
              return h.href ? (
                <Link key={h.title} href={h.href} className="bg-saffron-50 rounded-xl p-6 text-center hover:shadow-md hover:border-saffron-400 border-2 border-transparent transition-all">
                  {inner}
                </Link>
              ) : (
                <div key={h.title} className="bg-saffron-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title">An Ohio Historic Landmark</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1991, the Jain Center of Central Ohio (JCOCO) is a not-for-profit religious organization
              practicing the Jain Philosophy. Our Jain Temple in Central Ohio — an Ohio Historic Landmark — was
              established in July 2012.
            </p>
            <p className="text-gray-600 mb-6">
              We are a vibrant community dedicated to the principles of non-violence, truth, and compassion.
              Our doors are open to everyone.
            </p>
            <Link href="/about" className="btn-primary inline-block">Read Our Story</Link>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://jcoco.org/wp-content/uploads/2026/02/sangh_visit.jpg"
              alt="JCOCO Community"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 bg-saffron-400 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Support Our Temple</h2>
          <p className="text-saffron-100 mb-8 text-lg">
            Your generous donations help us maintain the temple, run educational programs, and serve our community.
            Every contribution makes a difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=C9ZVEWV3TK6Z8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-saffron-500 hover:bg-saffron-50 font-bold px-8 py-4 rounded-lg text-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
              </svg>
              Donate via PayPal
            </a>
            <Link href="/membership" className="border-2 border-white text-white hover:bg-white hover:text-saffron-500 font-bold px-8 py-4 rounded-lg text-lg transition-colors">
              JCOCO Prime Membership
            </Link>
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://jcoco.org/wp-content/uploads/2026/02/temple_event_sd-scaled.jpg"
              alt="Temple Event"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <p className="section-subtitle">Stay Connected</p>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="text-gray-600 mb-6">
              From Paryushan and Diwali celebrations to community gatherings and educational workshops —
              there is always something happening at JCOCO.
            </p>
            <Link href="/events" className="btn-primary inline-block">View All Events</Link>
          </div>
        </div>
      </section>
    </>
  );
}
