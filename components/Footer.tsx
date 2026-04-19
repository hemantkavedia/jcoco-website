import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="/logo.png"
            alt="JCOCO Logo"
            width={160}
            height={40}
            className="h-10 w-auto mb-3"
          />
          <p className="text-sm mt-1 text-gray-400">
            Jain Center of Central Ohio<br />
            A Non-Profit 501(c)(3) Organization
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Federal Tax ID: 31-1336126<br />
            D&amp;B: 019524166
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["/about", "/events", "/media", "/contact", "/membership", "/donate"].map((href) => (
              <li key={href}>
                <Link href={href} className="hover:text-saffron-300 capitalize transition-colors">
                  {href.replace("/", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Temple Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Temple Hours</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>Sunday Pooja &amp; Pathshaala<br /><span className="text-gray-300">10:00 AM – 1:00 PM ET</span></li>
            <li className="text-saffron-300 font-medium">All Are Welcome</li>
          </ul>
        </div>

        {/* Address & Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Visit Us</h3>
          <address className="not-italic text-sm text-gray-400 mb-4">
            6683 South Old State Rd.<br />
            Lewis Center, OH 43035
          </address>
          <div className="flex gap-3">
            {[
              { label: "Facebook", href: "https://www.facebook.com/jaincenterofcentralohio", icon: "f" },
              { label: "Instagram", href: "https://www.instagram.com/jaincenterofcentralohio/", icon: "in" },
              { label: "YouTube", href: "https://www.youtube.com/channel/UCHC46YQ4KXp3N8VgasAk_qw", icon: "yt" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-saffron-400 flex items-center justify-center text-xs font-bold transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Jain Center of Central Ohio. All rights reserved.
      </div>
    </footer>
  );
}
