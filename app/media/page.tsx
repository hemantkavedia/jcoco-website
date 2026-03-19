import Image from "next/image";

export const metadata = {
  title: "Media | JCOCO",
  description: "Photos, videos, and resources from the Jain Center of Central Ohio.",
};

const gallery = [
  { src: "/images/jcoco_temple_lg.jpeg", alt: "JCOCO Temple" },
  { src: "/images/sangh_visit.jpg", alt: "Sangh Visit" },
  { src: "/images/samni_ji-1.jpg", alt: "Samni Ji Visit" },
  { src: "/images/ron_mcdonald_jcoco.jpg", alt: "Community Event" },
  { src: "/images/ExecutiveComm.jpg", alt: "Executive Committee" },
  { src: "/images/temple_event_sd-scaled.jpg", alt: "Temple Event" },
];

export default function MediaPage() {
  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Photos &amp; Videos</p>
        <h1 className="text-4xl font-bold">Media Gallery</h1>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="section-subtitle">Our Community in Pictures</p>
          <h2 className="section-title">Photo Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img) => (
            <div key={img.src} className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube placeholder */}
        <div className="mt-16 text-center">
          <p className="section-subtitle">Video</p>
          <h2 className="section-title">Watch on YouTube</h2>
          <p className="text-gray-500 mb-6">
            Subscribe to our YouTube channel for recordings of poojas, events, and spiritual discourses.
          </p>
          <a
            href="https://www.youtube.com/channel/UCHC46YQ4KXp3N8VgasAk_qw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit Our YouTube Channel
          </a>
        </div>
      </section>
    </>
  );
}
