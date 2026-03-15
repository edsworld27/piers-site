import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Weight Loss Hypnotherapy UK | End Emotional Eating | Piers Day",
  description: "End emotional eating, master portion control, and reshape your relationship with food through advanced weight loss hypnotherapy. Online & in-person.",
  alternates: { canonical: "https://www.piersday.com/services/weight-loss" },
  openGraph: {
    title: "Weight Loss Hypnotherapy UK | End Emotional Eating",
    description: "End emotional eating and reshape your relationship with food through advanced weight loss hypnotherapy.",
    url: "https://www.piersday.com/services/weight-loss",
    type: "website",
  },
  twitter: { card: "summary", title: "Weight Loss Hypnotherapy UK", description: "End emotional eating and reshape your relationship with food through hypnotherapy." },
};

export default function WeightLossPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does hypnotherapy work for weight loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hypnotherapy targets the root emotional and subconscious causes of overeating. Rather than relying on restrictive dieting, it naturally shifts your desires towards healthier choices and smaller portions."
        }
      },
      {
        "@type": "Question",
        "name": "Is this a 'hypnotic gastric band'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We utilize techniques similar to the hypnotic gastric band, convincing the subconscious mind that the stomach is smaller, leading to feeling full much faster."
        }
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema-weight" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="service-layout pt-32 pb-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="mb-6 fade-in-up">Transform Your Relationship With Food</h1>
            <p className="hero-sub mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>Break the cycle of emotional eating and yo-yo dieting. Create natural, effortless weight management from the inside out.</p>
          </div>

          <div className="content-grid">
            <div className="main-content glass-panel">
              <h2>Diets Fail. Reprogramming Lasts.</h2>
              <p>Traditional diets rely entirely on conscious willpower, which is a finite resource. When you are stressed, tired, or emotional, willpower collapses, leading to bingeing and guilt. Your weight isn't a failure of discipline; it's a subconscious coping mechanism.</p>
              
              <h2 className="mt-8">The Hypnotherapy Approach</h2>
              <p>By accessing the subconscious mind, we sever the emotional link between stress and eating. We reprogram your mind to recognize true hunger signals and desire nourishing, healthy fuels.</p>
              <ul className="benefit-list">
                <li>Eliminate sugar cravings and emotional eating</li>
                <li>Naturally reduce portion sizes without feeling deprived</li>
                <li>Increase subconscious motivation for physical activity</li>
                <li>Rebuild self-esteem and body confidence</li>
              </ul>

              <div className="cta-box mt-12">
                <h3>Ready to end the struggle?</h3>
                <Link href="/contact" className="btn btn-primary mt-4">Start Your Transformation Today</Link>
              </div>
            </div>

            <aside className="sidebar">
              <div className="glass-panel p-6 mb-8">
                <h3>Client Testimonial</h3>
                <p className="italic mt-4">"For 20 years I bounced between extreme diets. Hypnotherapy finally switched off that constant internal negotiation about food. I'm 3 stone lighter and I don't even think about it."</p>
                <p className="mt-4 font-bold">- Mark R., Online Client</p>
              </div>
              
              <div className="glass-panel p-6">
                <h3>Focus Areas</h3>
                <ul className="tag-list mt-4">
                  <li>Emotional Eating</li>
                  <li>Sugar Addiction</li>
                  <li>Binge Eating</li>
                  <li>Portion Control</li>
                  <li>Body Image</li>
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
