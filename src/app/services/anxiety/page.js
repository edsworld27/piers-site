import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Anxiety Hypnotherapy UK | Overcome Panic Attacks & Stress | Piers Day",
  description: "Overcome anxiety, panic attacks, and stress with expert online hypnotherapy. Regain control of your mind and step back into calm. Book a free consultation.",
  alternates: { canonical: "https://www.piersday.com/services/anxiety" },
  openGraph: {
    title: "Anxiety Hypnotherapy UK | Overcome Panic Attacks & Stress",
    description: "Overcome anxiety, panic attacks, and stress with expert online hypnotherapy.",
    url: "https://www.piersday.com/services/anxiety",
    type: "website",
  },
  twitter: { card: "summary", title: "Anxiety Hypnotherapy UK", description: "Overcome anxiety, panic attacks, and stress with expert online hypnotherapy." },
};

export default function AnxietyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can hypnotherapy really cure anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hypnotherapy is a highly effective tool for managing and overcoming anxiety. It works by addressing the root subconscious triggers and rewiring your mind's automated stress responses, allowing for deep and lasting calm."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions will I need for anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While every individual is different, most clients experience significant relief within 3 to 6 sessions of targeted hypnotherapy."
        }
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="service-layout pt-32 pb-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="mb-6 fade-in-up">Overcome Anxiety and Regain Control</h1>
            <p className="hero-sub mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>Silence the racing thoughts and physical symptoms of anxiety. Discover the power of targeted subconscious reprogramming.</p>
          </div>

          <div className="content-grid">
            <div className="main-content glass-panel">
              <h2>The Invisible Weight of Anxiety</h2>
              <p>If you are reading this, you already know the toll anxiety takes. The constant "what ifs," the physical tightness in your chest, the inability to switch off at night. Willpower alone cannot stop a subconscious survival response.</p>
              
              <h2 className="mt-8">How Hypnotherapy Helps</h2>
              <p>Anxiety is fundamentally a subconscious program running in overdrive. Your mind is trying to protect you by remaining on high alert. Hypnotherapy allows us to bypass the critical conscious mind and speak directly to this protector.</p>
              <ul className="benefit-list">
                <li>Identify and release deep-rooted triggers</li>
                <li>Rewire automated panic responses into calm</li>
                <li>Restore natural, restorative sleep patterns</li>
                <li>Rebuild self-trust and emotional resilience</li>
              </ul>

              <div className="cta-box mt-12">
                <h3>Ready to feel like yourself again?</h3>
                <Link href="/contact" className="btn btn-primary mt-4">Book a Free Consultation</Link>
              </div>
            </div>

            <aside className="sidebar">
              <div className="glass-panel p-6 mb-8">
                <h3>Client Testimonial</h3>
                <p className="italic mt-4">"After years of debilitating panic attacks, I finally feel free. The shift after just three sessions was profound. I highly recommend Elevate to anyone struggling."</p>
                <p className="mt-4 font-bold">- Sarah T., Online Client</p>
              </div>
              
              <div className="glass-panel p-6">
                <h3>Common Focus Areas</h3>
                <ul className="tag-list mt-4">
                  <li>Generalised Anxiety</li>
                  <li>Social Anxiety</li>
                  <li>Panic Attacks</li>
                  <li>Sleep Issues</li>
                  <li>Performance Anxiety</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <style>{`
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
        .italic { font-style: italic; }
        .font-bold { font-weight: bold; }

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

        .tag-list { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tag-list li { background: rgba(255,255,255,0.05); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.875rem; border: 1px solid var(--glass-border); }

        @media (max-width: 768px) {
          .content-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
