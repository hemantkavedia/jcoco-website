import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateButton from "@/components/DonateButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://jcoco.org"),
  title: {
    default: "Jain Center of Central Ohio | JCOCO",
    template: "%s | JCOCO",
  },
  description:
    "Jain Center of Central Ohio (JCOCO) — a non-profit Jain Temple in Lewis Center, OH. Founded 1991. Sunday pooja, pathshaala, and community events.",
  keywords: [
    "Jain Temple Ohio",
    "JCOCO",
    "Jain Center Central Ohio",
    "Jainism Columbus Ohio",
    "Lewis Center Jain Temple",
    "Jain community Ohio",
    "Jain pooja Ohio",
    "Pathshaala Ohio",
  ],
  authors: [{ name: "Jain Center of Central Ohio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jcoco.org",
    siteName: "Jain Center of Central Ohio",
    title: "Jain Center of Central Ohio | JCOCO",
    description:
      "A non-profit Jain Temple in Lewis Center, OH. Founded 1991. Sunday pooja, pathshaala, and community events. All are welcome.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jain Center of Central Ohio Temple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jain Center of Central Ohio | JCOCO",
    description:
      "A non-profit Jain Temple in Lewis Center, OH. Founded 1991. Sunday pooja, pathshaala, and community events.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jcoco.org",
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ReligiousOrganization",
  name: "Jain Center of Central Ohio",
  alternateName: "JCOCO",
  url: "https://jcoco.org",
  logo: "https://jcoco.org/logo.png",
  description:
    "A non-profit Jain Temple in Lewis Center, Ohio. Founded in 1991, practicing Jain philosophy.",
  foundingDate: "1991",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6683 South Old State Rd.",
    addressLocality: "Lewis Center",
    addressRegion: "OH",
    postalCode: "43035",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/jaincenterofcentralohio",
    "https://www.youtube.com/channel/UCHC46YQ4KXp3N8VgasAk_qw",
  ],
  openingHours: "Su 10:00-13:00",
  taxID: "31-1336126",
  nonprofitStatus: "Nonprofit501c3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <DonateButton />
        <Footer />
      </body>
    </html>
  );
}
