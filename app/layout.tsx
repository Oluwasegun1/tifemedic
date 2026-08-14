import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import AnimationProvider from "./components/AnimationProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tifemedic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TifeMedic – Medical Outreach & Healthcare Consulting Agency in Nigeria",
    template: "%s | TifeMedic Healthcare Agency",
  },
  description:
    "TifeMedic is Nigeria's premier healthcare consulting and medical outreach agency. We organize public health campaigns, provide corporate wellness programs, and supply vetted healthcare personnel.",
  keywords: [
    "medical outreach Nigeria",
    "healthcare consulting agency Lagos",
    "corporate wellness programs Nigeria",
    "community health screening",
    "medical staffing agency",
    "preventive health Nigeria",
    "health outreach organization",
    "TifeMedic",
  ],
  authors: [{ name: "TifeMedic Health Services" }],
  creator: "TifeMedic",
  publisher: "TifeMedic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TifeMedic – Medical Outreach & Healthcare Consulting Agency",
    description:
      "Empowering communities and organizations with professional medical outreaches, corporate wellness programs, and vetted healthcare staffing across Nigeria.",
    url: siteUrl,
    siteName: "TifeMedic",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "TifeMedic Medical Outreach and Healthcare Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TifeMedic – Medical Outreach & Healthcare Consulting",
    description:
      "Empowering communities and corporate teams with accessible, quality healthcare services across Nigeria.",
    creator: "@tifemedic",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "TifeMedic",
      url: siteUrl,
      logo: `${siteUrl}/hero.jpg`,
      description:
        "Professional medical outreach and healthcare consulting agency organizing public health events, supplying verified healthcare personnel, and delivering specialized corporate wellness programs across Nigeria.",
      telephone: "+2348052544332",
      email: "tifemedic@gmail.com",
      areaServed: {
        "@type": "Country",
        name: "Nigeria",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        addressRegion: "Nigeria",
      },
      sameAs: [
        "https://instagram.com/tifemedic",
        "https://x.com/tifemedic",
      ],
      medicalSpecialty: [
        "CommunityHealth",
        "OccupationalMedicine",
        "PreventiveMedicine",
      ],
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Corporate Health & Wellness Programs",
          description:
            "Onsite employee health checkups, executive health screenings, and workplace wellness consultations.",
        },
        {
          "@type": "MedicalProcedure",
          name: "Public Health & Community Medical Outreach",
          description:
            "Free health screenings, blood pressure checks, health education talks, and medication distribution.",
        },
        {
          "@type": "MedicalProcedure",
          name: "Medical Personnel Staffing & Credentialing",
          description:
            "Qualified doctors, nurses, and lab scientists supplied for corporate events and clinical projects.",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "TifeMedic",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-white text-[#334155]`}>
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
