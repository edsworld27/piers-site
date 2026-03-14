"use client";

import Link from "next/link";
import Script from "next/script";

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Piers Day",
    "jobTitle": "Clinical Hypnotherapist",
    "url": "https://piersday.com/about",
    "sameAs": [],
    "description": "Clinical Hypnotherapist with over 25 years of experience helping clients overcome anxiety, trauma, and addictions by rewiring the subconscious mind.",
    "knowsAbout": ["Hypnotherapy", "Anxiety Treatment", "Trauma Recovery", "Smoking Cessation", "Weight Management"]
  };

  return (
    <>
      <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <main className="pt-32 pb-24">
        {/* 1. EMPATHY & AUTHORITY: The Guide */}
        <section className="container max-w-4xl mb-24">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="mb-4 text-gradient-gold">You shouldn't have to fight yourself.</h1>
            <p className="hero-sub mx-auto">
              For over 25 years, I've watched people try to use sheer willpower to overcome crushing anxiety, deep trauma, and stubborn addictions. It rarely works. Why? Because you are fighting your own survival instincts.
            </p>
          </div>

          <div className="glass-panel p-8 fade-in-up" style={{animationDelay: "0.2s"}}>
            <p className="text-lg mb-6 text-gray">
              My name is <span className="highlight">Piers Day</span>. I do exactly one thing: I give you back control of your mind by erasing limiting beliefs. But I can apply this one skill in hundreds of ways to drastically improve your life.
            </p>
            <p className="text-lg text-gray">
              Whether you visit my clinic in Bury St Edmunds, Suffolk, or we work together online via Zoom, my approach is the same: absolute zero judgment, and a clear, clinical method for reprogramming the subconscious mind.
            </p>
          </div>
        </section>

        {/* 2. THE PLAN / THE MECHANISM: The Iceberg Model explained simply */}
        <section className="container max-w-5xl mb-24">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-gradient-light text-3xl">How We Fix It: The Iceberg</h2>
            <p className="text-gray mt-4 text-xl">Stop using 10% of your brain to fight the other 90%.</p>
          </div>

          <div className="iceberg-grid">
            <div className="glass-panel p-8 fade-in-up">
              <h3 className="mb-4 text-xl text-white border-b pb-4">The Tip (10%)</h3>
              <p className="text-gray mb-4"><strong>Your Conscious Mind.</strong></p>
              <p className="text-gray">
                This is your logic, your willpower, and your rational thoughts. When you say "I shouldn't be anxious" or "I need to quit smoking", that is the tip of the iceberg talking. It is small, and it burns a lot of calories to maintain.
              </p>
            </div>

            <div className="glass-panel p-8 fade-in-up" style={{animationDelay: "0.2s", borderColor: "rgba(244, 162, 97, 0.4)"}}>
              <h3 className="mb-4 text-xl highlight border-b pb-4" style={{borderColor: "rgba(244, 162, 97, 0.2)"}}>The Mass (90%)</h3>
              <p className="text-gray mb-4"><strong>Your Subconscious Mind.</strong></p>
              <p className="text-gray">
                This is your survival drive, your emotions, and your deep habits. If your subconscious believes smoking keeps you safe from stress, or that social situations are dangerous, it will overpower your rational mind every single time. It is massive and relentless.
              </p>
            </div>
          </div>
          
          <div className="glass-panel p-8 text-center mt-8 fade-in-up">
            <p className="text-xl text-white">
              <strong>Clinical Hypnotherapy</strong> bypasses the exhausting 10% and speaks directly to the 90%. We update your survival software so you no longer need the anxiety or the addiction to feel safe.
            </p>
          </div>
        </section>

        {/* 3. CTA */}
        <section className="container max-w-3xl text-center fade-in-up">
          <h2 className="mb-6 text-gradient-light">It's time to stop surviving and start thriving.</h2>
          <p className="text-lg text-gray mb-8">
            Let's have a quick, zero-pressure chat about what's going on. We will tell you exactly whether this approach is right for you.
          </p>
          <Link href="/contact" className="btn btn-primary pulse">Get Support</Link>
        </section>
      </main>

      <style jsx>{`
        .pt-32 { padding-top: 8rem; }
        .pb-24 { padding-bottom: 6rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mb-24 { margin-bottom: 6rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .pb-4 { padding-bottom: 1rem; }
        .border-b { border-bottom: 1px solid var(--glass-border); }
        .text-center { text-align: center; }
        .text-3xl { font-size: 2rem; }
        .text-xl { font-size: 1.25rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.8; }
        .text-white { color: white; }
        .hero-sub { font-size: 1.25rem; color: var(--color-text-muted); max-width: 800px; line-height: 1.6; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-gray { color: var(--color-text-muted); }

        .iceberg-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
        }

        @media (max-width: 768px) {
          .iceberg-grid {
             grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
