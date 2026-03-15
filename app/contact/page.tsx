export const metadata = {
  title: "Contact | JCOCO",
  description: "Get in touch with the Jain Center of Central Ohio.",
};

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
                🔑
              </div>
              <div>
                <p className="font-semibold text-gray-900">24/7 Access</p>
                <p className="text-gray-600">JCOCO Prime members receive a personal security code for 24/7 temple access.</p>
              </div>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="mt-8 rounded-xl overflow-hidden h-56 bg-gray-200 flex items-center justify-center">
            <a
              href="https://maps.google.com/?q=6683+South+Old+State+Rd+Lewis+Center+OH+43035"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <p className="section-subtitle">Send a Message</p>
          <h2 className="section-title">We&apos;d Love to Hear From You</h2>
          <form className="mt-6 space-y-4" action="mailto:info@jcoco.org" method="get">
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
                name="body"
                rows={5}
                required
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-400 resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
