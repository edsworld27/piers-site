import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./components/navbar.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TabTitleHandler from "./components/TabTitleHandler";
import { CartProvider } from "./components/CartContext";
import CookieBanner from "./components/CookieBanner";
import ScrollAnimator from "./components/ScrollAnimator";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'optional',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'optional',
  weight: ['400', '500'],
});

export const metadata = {
  title: "Piers Day | Clinical Hypnotherapy in Suffolk & Online UK",
  description: "25+ years experience. Overcome anxiety, trauma, and limiting beliefs with Piers Day. Online hypnotherapy and in-person clinic in Bury St Edmunds.",
  alternates: {
    canonical: "https://www.piersday.com",
  },
  openGraph: {
    title: "Piers Day | Clinical Hypnotherapy in Suffolk & Online",
    description: "25+ years experience. Overcome anxiety, trauma, and limiting beliefs with Piers Day. Online hypnotherapy and in-person clinic.",
    url: "https://www.piersday.com",
    siteName: "Piers Day Hypnotherapy",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://www.piersday.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Piers Day Clinical Hypnotherapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piers Day | Clinical Hypnotherapy",
    description: "25+ years of clinical hypnotherapy for anxiety, smoking, weight loss, and confidence.",
    images: ["https://www.piersday.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Piers Day Hypnotherapy",
    "image": "https://piersday.com/piers-photo.svg",
    "@id": "https://piersday.com",
    "url": "https://piersday.com",
    "telephone": "07716008836",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bury St Edmunds Clinic",
      "addressLocality": "Bury St Edmunds",
      "addressRegion": "Suffolk",
      "postalCode": "IP33",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2429,
      "longitude": 0.7108
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": ["https://piersday.com"]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://link.msgsndr.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <CartProvider>
          <TabTitleHandler />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
          <ScrollAnimator />
        </CartProvider>

        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="68065d4930666bdf1727d1d2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
