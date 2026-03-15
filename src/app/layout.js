import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./components/navbar.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TabTitleHandler from "./components/TabTitleHandler";
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
        <TabTitleHandler />
        <Navbar />
        <TreeDecoration />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />

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

/* ─────────────────────────────────────────────────────────────
   Tree branch decoration — fixed left edge, wide screens only
   Trunk = brown, branches = brown, leaves = sage, apples = red
───────────────────────────────────────────────────────────── */
function TreeDecoration() {
  return (
    <div aria-hidden="true" style={{
      position: "fixed",
      left: 0,
      top: 0,
      width: "72px",
      height: "100vh",
      pointerEvents: "none",
      zIndex: 5,
      display: "none",
    }} className="tree-deco">
      <style>{`
        @media (min-width: 1380px) { .tree-deco { display: block !important; } }
        @keyframes leafSway {
          from { transform: rotate(-3deg); }
          to   { transform: rotate(3deg);  }
        }
        @keyframes appleDrop {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(3px); }
        }
        .td-leaf { animation: leafSway 3.5s ease-in-out infinite alternate; }
        .td-leaf2 { animation: leafSway 4.2s ease-in-out .8s infinite alternate; }
        .td-leaf3 { animation: leafSway 3.8s ease-in-out 1.5s infinite alternate; }
        .td-apple { animation: appleDrop 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .td-leaf,.td-leaf2,.td-leaf3,.td-apple { animation: none !important; }
        }
      `}</style>
      <svg viewBox="0 0 72 900" fill="none" xmlns="http://www.w3.org/2000/svg"
           style={{ width: "72px", height: "100vh", display: "block" }}>

        {/* ── Trunk ── */}
        <path d="M 38 900 Q 36 700 35 500 Q 34 300 36 100"
              stroke="rgba(100,60,20,0.55)" strokeWidth="6" strokeLinecap="round" fill="none"/>
        {/* Trunk texture lines */}
        <path d="M 36 800 Q 34 750 35 700" stroke="rgba(80,45,15,0.30)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 37 600 Q 35 555 36 510" stroke="rgba(80,45,15,0.25)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 36 400 Q 34 360 35 320" stroke="rgba(80,45,15,0.25)" strokeWidth="2" fill="none" strokeLinecap="round"/>

        {/* ── Branch 1 — low, right (y≈800) ── */}
        <path d="M 36 820 Q 50 815 64 808" stroke="rgba(100,60,20,0.50)" strokeWidth="3" strokeLinecap="round" fill="none"/>
        {/* Shrub cluster at base */}
        <ellipse cx="58" cy="806" rx="10" ry="7" fill="rgba(45,106,79,0.18)" stroke="rgba(45,106,79,0.45)" strokeWidth="1.2"/>
        <ellipse cx="65" cy="800" rx="7" ry="5"  fill="rgba(45,106,79,0.14)" stroke="rgba(45,106,79,0.38)" strokeWidth="1"/>

        {/* ── Branch 2 — mid-low left (y≈680) ── */}
        <path d="M 36 690 Q 22 682 10 675" stroke="rgba(100,60,20,0.48)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Leaf cluster */}
        <g className="td-leaf2" style={{ transformOrigin: "36px 690px" }}>
          <circle cx="12" cy="668" r="10" fill="rgba(107,174,138,0.15)" stroke="rgba(107,174,138,0.50)" strokeWidth="1.2"/>
          <circle cx="4"  cy="674" r="7"  fill="rgba(107,174,138,0.12)" stroke="rgba(107,174,138,0.42)" strokeWidth="1"/>
          <circle cx="18" cy="660" r="8"  fill="rgba(107,174,138,0.13)" stroke="rgba(107,174,138,0.45)" strokeWidth="1"/>
        </g>

        {/* ── Branch 3 — mid right (y≈540) ── */}
        <path d="M 36 548 Q 52 538 66 528" stroke="rgba(100,60,20,0.48)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Sub-branch */}
        <path d="M 52 538 Q 58 524 64 514" stroke="rgba(100,60,20,0.38)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        {/* Leaf cluster */}
        <g className="td-leaf" style={{ transformOrigin: "36px 548px" }}>
          <circle cx="66" cy="524" r="12" fill="rgba(107,174,138,0.16)" stroke="rgba(107,174,138,0.52)" strokeWidth="1.3"/>
          <circle cx="58" cy="514" r="9"  fill="rgba(107,174,138,0.13)" stroke="rgba(107,174,138,0.44)" strokeWidth="1.1"/>
          <circle cx="72" cy="516" r="8"  fill="rgba(107,174,138,0.12)" stroke="rgba(107,174,138,0.40)" strokeWidth="1"/>
        </g>
        {/* Apple on branch 3 */}
        <g className="td-apple">
          <circle cx="64" cy="535" r="4.5" fill="rgba(180,45,35,0.45)" stroke="rgba(160,35,25,0.60)" strokeWidth="1"/>
          <line x1="64" y1="530" x2="64" y2="527" stroke="rgba(100,60,20,0.55)" strokeWidth="1" strokeLinecap="round"/>
        </g>

        {/* ── Branch 4 — upper left (y≈390) ── */}
        <path d="M 36 398 Q 20 386 8 374" stroke="rgba(100,60,20,0.45)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        {/* Sub-branch up */}
        <path d="M 16 382 Q 10 368 8 352" stroke="rgba(100,60,20,0.35)" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
        {/* Leaf cluster */}
        <g className="td-leaf3" style={{ transformOrigin: "36px 398px" }}>
          <circle cx="6"  cy="368" r="13" fill="rgba(107,174,138,0.17)" stroke="rgba(107,174,138,0.54)" strokeWidth="1.3"/>
          <circle cx="14" cy="356" r="10" fill="rgba(107,174,138,0.15)" stroke="rgba(107,174,138,0.48)" strokeWidth="1.2"/>
          <circle cx="-2" cy="358" r="9"  fill="rgba(107,174,138,0.13)" stroke="rgba(107,174,138,0.42)" strokeWidth="1"/>
        </g>
        {/* Apple on branch 4 */}
        <g className="td-apple" style={{ animationDelay: "1.5s" }}>
          <circle cx="10" cy="378" r="4"  fill="rgba(180,45,35,0.40)" stroke="rgba(160,35,25,0.55)" strokeWidth="1"/>
          <line x1="10" y1="374" x2="11" y2="371" stroke="rgba(100,60,20,0.50)" strokeWidth="1" strokeLinecap="round"/>
        </g>

        {/* ── Branch 5 — high right (y≈240) ── */}
        <path d="M 36 248 Q 54 234 68 220" stroke="rgba(100,60,20,0.42)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* Sub-branch */}
        <path d="M 54 234 Q 60 218 62 200" stroke="rgba(100,60,20,0.32)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        {/* Leaf cluster */}
        <g className="td-leaf" style={{ transformOrigin: "36px 248px" }}>
          <circle cx="68" cy="212" r="11" fill="rgba(107,174,138,0.16)" stroke="rgba(107,174,138,0.50)" strokeWidth="1.2"/>
          <circle cx="60" cy="200" r="9"  fill="rgba(107,174,138,0.14)" stroke="rgba(107,174,138,0.46)" strokeWidth="1.1"/>
          <circle cx="72" cy="202" r="7"  fill="rgba(107,174,138,0.12)" stroke="rgba(107,174,138,0.40)" strokeWidth="1"/>
        </g>

        {/* ── Treetop crown (y≈100) ── */}
        <path d="M 36 110 Q 24 95 14 80" stroke="rgba(100,60,20,0.40)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M 36 110 Q 48 92 56 75"  stroke="rgba(100,60,20,0.40)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <g className="td-leaf2" style={{ transformOrigin: "36px 110px" }}>
          <circle cx="36" cy="74"  r="16" fill="rgba(107,174,138,0.18)" stroke="rgba(107,174,138,0.55)" strokeWidth="1.4"/>
          <circle cx="18" cy="84"  r="12" fill="rgba(107,174,138,0.15)" stroke="rgba(107,174,138,0.48)" strokeWidth="1.2"/>
          <circle cx="54" cy="82"  r="11" fill="rgba(107,174,138,0.14)" stroke="rgba(107,174,138,0.45)" strokeWidth="1.1"/>
          <circle cx="28" cy="62"  r="10" fill="rgba(107,174,138,0.13)" stroke="rgba(107,174,138,0.42)" strokeWidth="1"/>
          <circle cx="46" cy="60"  r="10" fill="rgba(107,174,138,0.13)" stroke="rgba(107,174,138,0.42)" strokeWidth="1"/>
        </g>
        {/* Top apple */}
        <g className="td-apple" style={{ animationDelay: "2.5s" }}>
          <circle cx="22" cy="80" r="4"   fill="rgba(180,45,35,0.42)" stroke="rgba(160,35,25,0.58)" strokeWidth="1"/>
          <line x1="22" y1="76" x2="23" y2="73" stroke="rgba(100,60,20,0.50)" strokeWidth="1" strokeLinecap="round"/>
        </g>

        {/* ── Ground shrubs at base ── */}
        <ellipse cx="30" cy="892" rx="18" ry="10" fill="rgba(45,106,79,0.18)" stroke="rgba(45,106,79,0.45)" strokeWidth="1.2"/>
        <ellipse cx="50" cy="895" rx="14" ry="8"  fill="rgba(45,106,79,0.14)" stroke="rgba(45,106,79,0.38)" strokeWidth="1"/>
        <ellipse cx="14" cy="896" rx="10" ry="6"  fill="rgba(45,106,79,0.12)" stroke="rgba(45,106,79,0.35)" strokeWidth="1"/>
      </svg>
    </div>
  );
}

function CookieBanner() {
  return (
    <div
      className="cookie-banner glass-panel"
      role="region"
      aria-labelledby="cookie-msg"
    >
      <p id="cookie-msg">We use essential cookies for site functionality and analytics. You can manage your preferences.</p>
      <div className="cookie-actions">
        <button className="btn btn-secondary btn-sm" aria-label="Manage cookie preferences">Manage</button>
        <button className="btn btn-primary btn-sm" aria-label="Accept all cookies">Accept All</button>
      </div>
    </div>
  );
}
