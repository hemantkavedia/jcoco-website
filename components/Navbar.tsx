"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Our Story" },
      { href: "/about/executive-committee", label: "Executive Committee" },
      { href: "/about/board-of-trustees", label: "Board of Trustees" },
    ],
  },
  { href: "/events", label: "Events" },
  { href: "/pathshala", label: "Pathshala" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
  { href: "/membership", label: "Membership" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-saffron-400 text-white text-sm py-1.5 text-center font-medium">
        Sunday Pooja &amp; Pathshaala 10:00 AM – 1:00 PM ET &nbsp;|&nbsp; All Are Welcome
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="JCOCO Logo"
            width={200}
            height={48}
            className="h-12 w-auto"
          />
          <span className="sr-only">Jain Center of Central Ohio</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href} className="relative group">
              <Link
                href={l.href}
                className="text-gray-700 hover:text-saffron-500 font-medium transition-colors flex items-center gap-1"
              >
                {l.label}
                {l.children && (
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {l.children && (
                <ul className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  {l.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-saffron-50 hover:text-saffron-500 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=JCOCO"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Donate Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block text-gray-700 hover:text-saffron-500 font-medium py-1"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
                {l.children && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {l.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block text-sm text-gray-500 hover:text-saffron-500 py-1"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=JCOCO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center text-sm"
              >
                Donate Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
