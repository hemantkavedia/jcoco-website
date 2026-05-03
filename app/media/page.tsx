"use client";

import Image from "next/image";
import { useState } from "react";

const gallery = [
  { src: "/images/jcoco_temple_lg.jpeg", alt: "JCOCO Temple" },
  { src: "/images/sangh_visit.jpg", alt: "Sangh Visit" },
  { src: "/images/samni_ji-1.jpg", alt: "Samni Ji Visit" },
  { src: "/images/ron_mcdonald_jcoco.jpg", alt: "Community Event" },
  { src: "/images/ExecutiveComm.jpg", alt: "Executive Committee" },
  { src: "/images/temple_event_sd-scaled.jpg", alt: "Temple Event" },
];

const albums = [
  {
    title: "JCOCO MJK 2026",
    url: "https://photos.app.goo.gl/ytZGsJzonCDzYoSs8",
    year: "2026",
    cover: "/images/jcoco_temple_lg.jpeg",
  },
  {
    title: "Worthington Interfaith Event",
    url: "https://photos.app.goo.gl/6PN3u9D9TS3Xm4Bw8",
    year: "2025",
    cover: "/images/ron_mcdonald_jcoco.jpg",
  },
  {
    title: "Ahamgaj",
    url: "https://photos.app.goo.gl/KJnu1eteTsRqY7UW6",
    year: "2023",
    cover: "/images/sangh_visit.jpg",
  },
  {
    title: "Pratishta",
    url: "https://photos.app.goo.gl/4i55ym9SVTU7Mmx59",
    year: "2012",
    cover: "/images/temple_event_sd-scaled.jpg",
  },
  {
    title: "Bhumi Poojan",
    url: "https://photos.app.goo.gl/MBqCrdGMp7cbrpAu8",
    year: "2010",
    cover: "/images/samni_ji-1.jpg",
  },
];

export default function MediaPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Photos &amp; Videos</p>
        <h1 className="text-4xl font-bold">Media Gallery</h1>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Google Photos Albums */}
        <div className="text-center mb-10">
          <p className="section-subtitle">Google Photos</p>
          <h2 className="section-title">Photo Albums</h2>
          <p className="text-gray-500 mt-2">Click any album to view the full collection on Google Photos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {albums.map((album) => (
            <a
              key={album.url}
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block"
            >
              <div className="relative h-56">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <div>
                  <p className="text-white font-semibold text-lg leading-tight">{album.title}</p>
                  <p className="text-white/70 text-sm">{album.year}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-saffron-400 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Photo Gallery with lightbox */}
        <div className="text-center mb-10">
          <p className="section-subtitle">Our Community in Pictures</p>
          <h2 className="section-title">Photo Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img) => (
            <button
              key={img.src}
              onClick={() => setLightbox(img.src)}
              className="relative h-48 md:h-64 rounded-xl overflow-hidden group w-full"
            >
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
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* YouTube */}
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl leading-none"
          >
            &times;
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Full size"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
