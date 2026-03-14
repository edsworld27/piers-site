import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Piers Day | Clinical Hypnotherapy in Suffolk & Online UK",
  description: "25+ years experience. Overcome anxiety, trauma, and limiting beliefs with Piers Day. Online hypnotherapy and in-person clinic in Bury St Edmunds.",
  alternates: {
    canonical: "https://www.piersday.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        
        {/* LeadConnector Real-Time Chatbot Widget */}
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
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: var(--space-4);
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          padding: var(--space-4);
          display: flex;
          align-items: center;
          gap: var(--space-8);
          max-width: 90vw;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
        }
        .cookie-banner p { margin: 0; font-size: 0.875rem; text-wrap: balance; }
        .cookie-actions { display: flex; gap: var(--space-2); }
        .btn-sm { padding: var(--space-2) var(--space-4); font-size: 0.875rem; border-radius: var(--radius-full); }
        @media (max-width: 640px) {
          .cookie-banner { flex-direction: column; text-align: center; border-radius: var(--radius-md); }
        }
      `}</style>
    </div>
  )
}
