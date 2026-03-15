import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Confidence Hypnotherapy UK | Overcome Phobias & Imposter Syndrome | Piers Day",
  description: "Overcome imposter syndrome, public speaking fears, and specific phobias with specialized online hypnotherapy. Build unshakeable confidence.",
  alternates: { canonical: "https://www.piersday.com/services/confidence" },
  openGraph: {
    title: "Confidence Hypnotherapy UK | Overcome Phobias",
    description: "Overcome imposter syndrome, public speaking fears, and phobias with online hypnotherapy.",
    url: "https://www.piersday.com/services/confidence",
    type: "website",
  },
  twitter: { card: "summary", title: "Confidence Hypnotherapy UK", description: "Overcome imposter syndrome, phobias, and build unshakeable confidence with hypnotherapy." },
};

export default function ConfidencePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can hypnotherapy quickly remove a phobia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most specific phobias (like fear of flying, spiders, or heights) can be completely neutralized in just 1 to 3 sessions using advanced rewind and desensitization techniques."
        }
      },
      {
        "@type": "Question",
        "name": "Will it help with public speaking anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Hypnotherapy is incredibly effective at removing the mental blocks associated with public speaking, leaving you feeling calm, authoritative, and unconditionally confident."
        }
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema-confidence" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="service-layout pt-32 pb-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="mb-6 fade-in-up">Step Fully Into Your Potential</h1>
            <p className="hero-sub mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>Break invisible barriers, permanently neutralize phobias, and build unshakeable, authentic self-confidence.</p>
          </div>

          <div className="content-grid">
            <div className="main-content glass-panel">
              <h2>The Subconscious Blocks</h2>
              <p>A lack of confidence or a severe phobia is rarely logical. You might know consciously that a spider isn't dangerous, or that you are fully qualified for a promotion—but your subconscious mind triggers fear anyway. These are deep-rooted protective mechanisms that need updating.</p>
              
              <h2 className="mt-8">Rewriting the Inner Narrative</h2>
              <p>Through hypnotherapy, we access the parts of your mind where these limiting beliefs and fears originate. We effectively 'update the software', replacing irrational panic with a deep sense of inherent safety and capability.</p>
              <ul className="benefit-list">
                <li>Instantly neutralize specific phobias (flying, heights, etc.)</li>
                <li>Eliminate imposter syndrome in professional settings</li>
                <li>Master public speaking without the dread</li>
                <li>Cultivate a deeply held sense of self-worth</li>
              </ul>

              <div className="cta-box mt-12">
                <h3>Ready to clear the blockages?</h3>
                <Link href="/contact" className="btn btn-primary mt-4">Book Your Free Consultation</Link>
              </div>
            </div>

            <aside className="sidebar">
              <div className="glass-panel p-6 mb-8">
                <h3>Client Testimonial</h3>
                <p className="italic mt-4">"I turned down promotions because I was terrified of public speaking. Two sessions changed everything. I just gave a presentation to 200 people and genuinely enjoyed it."</p>
                <p className="mt-4 font-bold">- David M., Executive Coaching Client</p>
              </div>
              
              <div className="glass-panel p-6">
                <h3>Areas We Clear</h3>
                <ul className="tag-list mt-4">
                  <li>Public Speaking</li>
                  <li>Imposter Syndrome</li>
                  <li>Fear of Flying</li>
                  <li>Social Confidence</li>
                  <li>Specific Phobias</li>
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
