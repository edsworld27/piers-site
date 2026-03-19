import Link from "next/link";
import Script from "next/script";
import FaqAccordion from "@/app/components/FaqAccordion";

const FAQS = [
  { q: "Can hypnotherapy really help me stop smoking?", a: "Yes. Hypnotherapy is widely recognized as one of the most effective ways to quit smoking because it directly addresses the subconscious habit loop rather than relying solely on conscious willpower." },
  { q: "Is it a single session?", a: "Our specialist stop smoking program is designed to be completed in a single, intensive 2-hour session that completely reframes your relationship with cigarettes." },
  { q: "What if I've tried to quit before and failed?", a: "Previous failed attempts are actually very common and say nothing about your ability to succeed. They simply mean your conscious willpower wasn't enough — hypnotherapy works at the subconscious level where the habit truly lives." },
  { q: "Will I experience cravings afterwards?", a: "Most clients report dramatically reduced or eliminated cravings immediately after the session. The goal is to change how your brain perceives cigarettes entirely, rather than just suppressing the urge." },
  { q: "Do I need to be motivated to quit first?", a: "A genuine desire to stop is helpful, but even partial ambivalence is fine — we explore your motivations as part of the session itself. Many clients arrive nervous and leave as committed non-smokers." },
];

export const metadata = {
  title: "Stop Smoking Hypnotherapy | Quit in One Session | Piers Day",
  description: "Quit smoking for good in a single session with advanced online hypnotherapy. No cravings, no patches, just freedom. Book your session today.",
  alternates: { canonical: "https://www.piersday.com/services/stop-smoking" },
  openGraph: {
    title: "Stop Smoking Hypnotherapy | Quit in One Session",
    description: "Quit smoking for good in a single session with advanced online hypnotherapy. No cravings, no patches.",
    url: "https://www.piersday.com/services/stop-smoking",
    type: "website",
  },
  twitter: { card: "summary", title: "Stop Smoking Hypnotherapy", description: "Quit smoking for good in a single session with advanced online hypnotherapy." },
};

export default function StopSmokingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can hypnotherapy really help me stop smoking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Hypnotherapy is widely recognized as one of the most effective ways to quit smoking because it directly addresses the subconscious habit loop rather than relying solely on conscious willpower."
        }
      },
      {
        "@type": "Question",
        "name": "Is it a single session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our specialist stop smoking program is designed to be completed in a single, intensive 2-hour session that completely reframes your relationship with cigarettes."
        }
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema-smoking" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="service-layout pt-32 pb-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="mb-6 fade-in-up">Stop Smoking For Good</h1>
            <p className="hero-sub mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>Break the habit in a single session. Transform from a smoker to a non-smoker without the excruciating withdrawals.</p>
          </div>

          <div className="content-grid">
            <div className="main-content glass-panel">
              <h2>Why Willpower Isn't Enough</h2>
              <p>You know smoking is bad for you. You know how much it costs. Yet, you still do it. This conflict happens because smoking is not a logical choice—it's a subconscious program. Your conscious mind wants to quit, but your subconscious believes smoking provides comfort, a break, or stress relief.</p>
              
              <h2 className="mt-8">The One-Session Method</h2>
              <p>Our advanced hypnotherapy protocol targets that subconscious belief system. We don't just 'suggest' you stop smoking; we fundamentally alter how your brain perceives cigarettes.</p>
              <ul className="benefit-list">
                <li>Sever the emotional connection to smoking</li>
                <li>Dramatically reduce or eliminate cravings</li>
                <li>Prevent weight gain by addressing substitute habits</li>
                <li>Walk out of the session as a proud non-smoker</li>
              </ul>

              <div className="cta-box mt-12">
                <h3>Ready to breathe easier?</h3>
                <Link href="/contact" className="btn btn-primary mt-4">Book Your Session Today</Link>
              </div>
            </div>

            <aside className="sidebar">
              <div className="glass-panel p-6 mb-8">
                <h3>The Cost of Waiting</h3>
                <p className="mt-4">The average UK smoker spends over £4,000 a year on cigarettes. A single hypnotherapy session pays for itself in less than a month.</p>
              </div>
              
              <div className="glass-panel p-6">
                <h3>What's Included</h3>
                <ul className="tag-list mt-4">
                  <li>2-Hour Intensive Session</li>
                  <li>Pre-session Preparation Guide</li>
                  <li>Custom Subliminal Audio</li>
                  <li>1-Month Support Check-in</li>
                </ul>
              </div>
            </aside>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </main>

      <style>{`
        .faq-section { margin-top: 4rem; max-width: 760px; margin-left: auto; margin-right: auto; }
        .faq-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 500;
          color: #f5f0e8;
          margin: 0 0 1.5rem;
          text-align: center;
        }
        .pt-32 { padding-top: 8rem; }
        .pb-24 { padding-bottom: 6rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .mt-12 { margin-top: 3rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .p-6 { padding: 1.5rem; }
        .text-center { text-align: center; }
        .hero-sub { font-size: 1.25rem; color: var(--color-text-muted); max-width: 800px; }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-8);
        }

        .main-content { padding: var(--space-8); }
        .main-content h2 { color: var(--color-accent-gold); font-size: 2rem; }
        
        .benefit-list { margin-top: var(--space-4); padding-left: var(--space-4); }
        .benefit-list li { margin-bottom: var(--space-2); color: var(--color-text-muted); }
        
        .cta-box {
          background: linear-gradient(to right, rgba(29, 53, 87, 0.4), rgba(42, 67, 101, 0.4));
          padding: var(--space-8);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .tag-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .tag-list li { background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: var(--radius-md); font-size: 0.875rem; border: 1px solid var(--glass-border); text-align: center; }

        @media (max-width: 768px) {
          .content-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
