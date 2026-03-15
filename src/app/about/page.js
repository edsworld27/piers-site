import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "./about.module.css";

export const metadata = {
  title: "About Piers Day | Clinical Hypnotherapist | 25+ Years Experience",
  description: "Meet Piers Day — 25+ years of clinical hypnotherapy. Discover how direct subconscious intervention helps clients overcome anxiety, trauma, and limiting beliefs for good.",
  alternates: { canonical: "https://www.piersday.com/about" },
  openGraph: {
    title: "About Piers Day | Clinical Hypnotherapist",
    description: "25+ years helping clients overcome anxiety, trauma, and limiting beliefs through clinical hypnotherapy.",
    url: "https://www.piersday.com/about",
    type: "profile",
    images: [{ url: "https://www.piersday.com/piers-photo.svg", width: 480, height: 560, alt: "Piers Day Clinical Hypnotherapist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Piers Day | Clinical Hypnotherapist",
    description: "25+ years helping clients overcome anxiety, trauma, and limiting beliefs.",
    images: ["https://www.piersday.com/piers-photo.svg"],
  },
};

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

      <main>

        {/* ── HERO: Split layout ── */}
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroInner}`}>

            {/* Photo column */}
            <div className={`${styles.heroPhoto} fade-in-up`}>
              <div className={styles.photoFrame}>
                <Image
                  src="/piers-photo.svg"
                  alt="Piers Day – Clinical Hypnotherapist"
                  width={480}
                  height={560}
                  className={styles.photo}
                  priority
                />
              </div>
              {/* Floating credential badge */}
              <div className={`${styles.badge} glass-panel`}>
                <span className={styles.badgeNumber}>25+</span>
                <span className={styles.badgeLabel}>Years of Practice</span>
              </div>
            </div>

            {/* Text column */}
            <div className={`${styles.heroText} fade-in-up`} style={{ animationDelay: "0.15s" }}>
              <span className="eyebrow">Meet Your Guide</span>
              <h1 className={`${styles.heroTitle} text-gradient-gold`}>
                I'm Piers Day.
              </h1>
              <p className={styles.heroLead}>
                I've spent over 25 years doing one thing: giving people back control of their own minds. Not through willpower or talking therapy alone, but by going directly to the source — the subconscious beliefs that run your life without your permission.
              </p>
              <p className={styles.heroBody}>
                I work from my clinic in Bury St Edmunds, Suffolk, and online via Zoom — with complete confidentiality and zero judgment. If you feel stuck, broken, or exhausted from fighting yourself, you're exactly who I work with.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Talk to Piers
              </Link>
            </div>

          </div>
        </section>

        {/* ── STORY: Why I do this ── */}
        <section className={`${styles.storySection}`}>
          <div className="container">
            <div className={styles.storyGrid}>

              <div className={`${styles.storyQuote} glass-panel fade-in-up`}>
                <span className={styles.quoteMarks}>&ldquo;</span>
                <blockquote className={styles.quoteText}>
                  I have never once met a person who is broken. I have only ever met people whose subconscious is doing exactly what it was programmed to do — protect them. My job is to update that programming.
                </blockquote>
                <cite className={styles.quoteCite}>— Piers Day</cite>
              </div>

              <div className={`${styles.storyContent} fade-in-up`} style={{ animationDelay: "0.2s" }}>
                <h2 className={`${styles.storyTitle} text-gradient-light`}>Why I Do This</h2>
                <p>
                  I became a hypnotherapist because I kept watching intelligent, capable people suffer — not because they were weak, but because no one had ever addressed the real problem. Talking about anxiety doesn't make the subconscious feel safe. Willpower doesn't override a survival mechanism. You need the right key for the right lock.
                </p>
                <p>
                  Clinical hypnotherapy is that key. It's not stage hypnosis. It's not mysticism. It's a clinically grounded method for communicating directly with the part of your brain that controls fear, habit, and automatic response — and changing what it believes.
                </p>
                <p>
                  I've refined this approach over hundreds of sessions. The result is a method that is direct, respectful, and genuinely effective. My clients don't just feel better temporarily — they change at the root.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── THE METHOD ── */}
        <section className={styles.methodSection}>
          <div className="container">
            <div className={`${styles.sectionHeader} fade-in-up`}>
              <h2 className="text-gradient-light">The Method</h2>
              <p className={styles.sectionSubtitle}>
                Stop fighting your survival brain. Let's change what it believes.
              </p>
            </div>

            <div className={styles.methodGrid}>
              <div className={`${styles.methodCard} ${styles.methodCardConscious} glass-panel fade-in-up`}>
                <div className={styles.methodPercent} style={{ color: "rgba(94,155,181,0.9)" }}>10%</div>
                <h3 className={styles.methodCardTitle}>Your Conscious Mind</h3>
                <p>Logic. Willpower. Rational thought. This is where your "I should stop smoking" lives. It is small, exhausting to maintain, and easily overpowered.</p>
                <div className={styles.methodTag} style={{ borderColor: "rgba(94,155,181,0.3)", color: "rgba(94,155,181,0.8)" }}>The Tip of the Iceberg</div>
              </div>

              <div className={`${styles.methodVs} fade-in-up`} style={{ animationDelay: "0.1s" }}>
                <div className={styles.vsLine}></div>
                <span className={styles.vsLabel}>vs</span>
                <div className={styles.vsLine}></div>
              </div>

              <div className={`${styles.methodCard} ${styles.methodCardSub} glass-panel fade-in-up`} style={{ animationDelay: "0.2s" }}>
                <div className={styles.methodPercent} style={{ color: "var(--color-accent-gold)" }}>90%</div>
                <h3 className={styles.methodCardTitle}>Your Subconscious Mind</h3>
                <p>Survival drive. Deep habits. Emotional memory. This is what tells you social situations are dangerous, or that cigarettes mean safety. It will win every time — unless we change what it believes.</p>
                <div className={styles.methodTag} style={{ borderColor: "rgba(107,174,138,0.3)", color: "rgba(107,174,138,0.8)" }}>The Mass of the Iceberg</div>
              </div>
            </div>

            <div className={`${styles.methodSolution} glass-panel fade-in-up`} style={{ animationDelay: "0.3s" }}>
              <p className={styles.methodSolutionText}>
                <strong>Hypnotherapy bypasses the 10% and speaks directly to the 90%.</strong> We update your survival software so the anxiety, the craving, or the block simply no longer needs to exist.
              </p>
            </div>
          </div>
        </section>

        {/* ── CREDENTIALS ── */}
        <section className={`${styles.credentialsSection} container`}>
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <h2 className="text-gradient-light">What I Bring to Every Session</h2>
          </div>

          <div className={styles.credentialsGrid}>
            {[
              { icon: "🎓", title: "Certified Clinical", desc: "Fully qualified clinical hypnotherapist" },
              { icon: "⏱", title: "25+ Years", desc: "Over two decades of dedicated practice" },
              { icon: "🌐", title: "In-Person & Online", desc: "Suffolk clinic or Zoom sessions worldwide" },
              { icon: "💪", title: "Root Cause Focus", desc: "We fix the source, not just the symptom" },
            ].map((c, i) => (
              <div
                key={c.title}
                className={`${styles.credentialCard} glass-panel fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.credentialIcon}>{c.icon}</div>
                <h4 className={styles.credentialTitle}>{c.title}</h4>
                <p className={styles.credentialDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={`${styles.ctaContent} fade-in-up`}>
              <h2 className={`${styles.ctaTitle} text-gradient-light`}>
                It's time to stop surviving and start thriving.
              </h2>
              <p className={styles.ctaText}>
                Let's have a quick, zero-pressure chat about what's going on. I'll tell you honestly whether this approach is right for you.
              </p>
              <Link href="/contact" className="btn btn-primary pulse">
                Get Support
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
