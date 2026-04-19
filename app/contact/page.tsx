"use client";

import { useState } from "react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-saffron-400 text-white py-16 text-center">
        <p className="section-subtitle text-saffron-100">Get In Touch</p>
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <p className="section-subtitle">Temple Information</p>
          <h2 className="section-title">Visit or Reach Out</h2>

          <div className="space-y-6 mt-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-500 flex-shrink-0">
                📍
              </div>
              <div>
                <p className="font-semibold text-gray-900">Temple Address</p>
                <p className="text-gray-600">6683 South Old State Rd.<br />Lewis Center, OH 43035</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-500 flex-shrink-0">
                🕐
              </div>
              <div>
                <p className="font-semibold text-gray-900">Temple Hours</p>
                <p className="text-gray-600">Sunday Pooja: 10:00 AM – 1:00 PM ET</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-500 flex-shrink-0">
                ✉️
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:info@jcoco.org" className="text-saffron-500 hover:underline">info@jcoco.org</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center text-saffron-500 flex-shrink-0">
                🔑
              </div>
              <div>
                <p className="font-semibold text-gray-900">24/7 Access</p>
                <p className="text-gray-600">JCOCO Prime members receive a personal security code for 24/7 temple access.</p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-8 rounded-xl overflow-hidden h-64 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=6683+S+Old+State+Rd,Lewis+Center,OH+43035"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JCOCO Temple Location"
            />
          </div>
          <a
            href="https://maps.google.com/?q=6683+South+Old+State+Rd+Lewis+Center+OH+43035"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-saffron-500 hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </section>
    </>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <p className="section-subtitle">Send a Message</p>
      <h2 className="section-title">We&apos;d Love to Hear From You</h2>

      {status === "success" ? (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-3">🙏</div>
          <p className="font-semibold text-green-800 text-lg">Thank you for reaching out!</p>
          <p className="text-green-700 text-sm mt-2">We&apos;ll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-400"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-400 resize-none"
            />
          </div>
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Something went wrong. Please email us directly at{" "}
              <a href="mailto:info@jcoco.org" className="underline">info@jcoco.org</a>.
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
