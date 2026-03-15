import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./components/navbar.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TabTitleHandler from "./components/TabTitleHandler";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: 'swap' });

export const metadata = {
  title: "Piers Day | Clinical Hypnotherapy in Suffolk & Online UK",
  description: "25+ years experience. Overcome anxiety, trauma, and limiting beliefs with Piers Day. Online hypnotherapy and in-person clinic in Bury St Edmunds.",
  alternates: {
    canonical: "https://www.piersday.com",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Piers Day Hypnotherapy",
    "image": "https://piersday.com/logo.png",
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
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://piersday.com"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <TabTitleHandler />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        
        {/* LeadConnector Real-Time Chatbot Widget - Deferred for Performance */}
        <Script 
          src="https://widgets.leadconnectorhq.com/loader.js" 
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="68065d4930666bdf1727d1d2" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

function CookieBanner() {
  return (
    <div className="cookie-banner glass-panel">
      <p>We use essential cookies for site functionality and analytics. You can manage your preferences.</p>
      <div className="cookie-actions">
        <button className="btn btn-secondary btn-sm">Manage</button>
        <button className="btn btn-primary btn-sm">Accept All</button>
      </div>
    </div>
  )
}
