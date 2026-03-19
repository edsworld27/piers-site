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

const credentials = [
  {
    title: "Certified Clinical",
    desc: "Fully qualified clinical hypnotherapist",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <polyline points="9 11 11 13 15 9"/>
      </svg>
    ),
  },
  {
    title: "25+ Years",
    desc: "Over two decades of dedicated practice",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <polyline points="12 7 12 12 15 15"/>
      </svg>
    ),
  },
  {
    title: "In-Person & Online",
    desc: "Suffolk clinic or Zoom sessions worldwide",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    title: "Root Cause Focus",
    desc: "We fix the source, not just the symptom",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/>
        <path d="M12 12C12 12 8 10 8 6a4 4 0 0 1 8 0c0 4-4 6-4 6z"/>
        <path d="M9 17c-2 0-3 1-3 2"/>
        <path d="M15 17c2 0 3 1 3 2"/>
        <path d="M12 17v2"/>
      </svg>
    ),
  },
];

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

      <main className={styles.pageWrapper}>

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
              <div className={styles.badge}>
                <span className={styles.badgeNumber}>25+</span>
                <span className={styles.badgeLabel}>Years of Practice</span>
              </div>
            </div>

            {/* Text column */}
            <div className={`${styles.heroText} fade-in-up`} style={{ animationDelay: "0.15s" }}>
              <span className={styles.eyebrow}>Meet Your Guide</span>
              <h1 className={styles.heroTitle}>
                I&apos;m Piers Day.
              </h1>
              <p className={styles.heroLead}>
                I&rsquo;ve spent over 25 years doing one thing: giving people back control of their own minds. Not through willpower or talking therapy alone, but by going directly to the source — the subconscious beliefs that run your life without your permission.
              </p>
              <p className={styles.heroBody}>
                I work from my clinic in Bury St Edmunds, Suffolk, and online via Zoom — with complete confidentiality and zero judgment. If you feel stuck, broken, or exhausted from fighting yourself, you&apos;re exactly who I work with.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Talk to Piers
              </Link>
            </div>

          </div>
        </section>

        {/* ── STORY: Why I do this ── */}
        <section className={styles.storySection}>
          <div className="container">
            <div className={styles.storyGrid}>

              <div className={`${styles.storyQuote} fade-in-up`}>
                <span className={styles.quoteMarks}>&ldquo;</span>
                <blockquote className={styles.quoteText}>
                  I have never once met a person who is broken. I have only ever met people whose subconscious is doing exactly what it was programmed to do — protect them. My job is to update that programming.
                </blockquote>
                <cite className={styles.quoteCite}>— Piers Day</cite>
              </div>

              <div className={`${styles.storyContent} fade-in-up`} style={{ animationDelay: "0.2s" }}>
                <h2 className={styles.storyTitle}>Why I Do This</h2>
                <p>
                  I became a hypnotherapist because I kept watching intelligent, capable people suffer — not because they were weak, but because no one had ever addressed the real problem. Talking about anxiety doesn&apos;t make the subconscious feel safe. Willpower doesn&apos;t override a survival mechanism. You need the right key for the right lock.
                </p>
                <p>
                  Clinical hypnotherapy is that key. It&apos;s not stage hypnosis. It&apos;s not mysticism. It&apos;s a clinically grounded method for communicating directly with the part of your brain that controls fear, habit, and automatic response — and changing what it believes.
                </p>
                <p>
                  I&apos;ve refined this approach over hundreds of sessions. The result is a method that is direct, respectful, and genuinely effective. My clients don&apos;t just feel better temporarily — they change at the root.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── THE METHOD ── */}
        <section className={styles.methodSection}>
          <div className="container">
            <div className={`${styles.sectionHeader} fade-in-up`}>
              <h2 className={styles.sectionHeading}>The Method</h2>
              <p className={styles.sectionSubtitle}>
                Stop fighting your survival brain. Let&apos;s change what it believes.
              </p>
            </div>

            <div className={styles.methodGrid}>
              <div className={`${styles.methodCard} ${styles.methodCardConscious} fade-in-up`}>
                <div className={styles.methodPercent} style={{ color: "rgba(94,155,181,0.9)" }}>10%</div>
                <h3 className={styles.methodCardTitle}>Your Conscious Mind</h3>
                <p className={styles.methodCardText}>Logic. Willpower. Rational thought. This is where your &ldquo;I should stop smoking&rdquo; lives. It is small, exhausting to maintain, and easily overpowered.</p>
                <div className={styles.methodTag} style={{ borderColor: "rgba(94,155,181,0.3)", color: "rgba(94,155,181,0.85)" }}>The Tip of the Iceberg</div>
              </div>

              <div className={`${styles.methodVs} fade-in-up`} style={{ animationDelay: "0.1s" }}>
                <div className={styles.vsLine}></div>
                <span className={styles.vsLabel}>vs</span>
                <div className={styles.vsLine}></div>
              </div>

              <div className={`${styles.methodCard} ${styles.methodCardSub} fade-in-up`} style={{ animationDelay: "0.2s" }}>
                <div className={styles.methodPercent} style={{ color: "#6BAE8A" }}>90%</div>
                <h3 className={styles.methodCardTitle}>Your Subconscious Mind</h3>
                <p className={styles.methodCardText}>Survival drive. Deep habits. Emotional memory. This is what tells you social situations are dangerous, or that cigarettes mean safety. It will win every time — unless we change what it believes.</p>
                <div className={styles.methodTag} style={{ borderColor: "rgba(107,174,138,0.3)", color: "rgba(107,174,138,0.85)" }}>The Mass of the Iceberg</div>
              </div>
            </div>

            <div className={`${styles.methodSolution} fade-in-up`} style={{ animationDelay: "0.3s" }}>
              <p className={styles.methodSolutionText}>
                <strong>Hypnotherapy bypasses the 10% and speaks directly to the 90%.</strong> We update your survival software so the anxiety, the craving, or the block simply no longer needs to exist.
              </p>
            </div>
          </div>
        </section>

        {/* ── CREDENTIALS ── */}
        <section className={`${styles.credentialsSection} container`}>
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <h2 className={styles.sectionHeading}>What I Bring to Every Session</h2>
          </div>

          <div className={styles.credentialsGrid}>
            {credentials.map((c, i) => (
              <div
                key={c.title}
                className={`${styles.credentialCard} fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.credentialIcon}>{c.icon}</div>
                <h3 className={styles.credentialTitle}>{c.title}</h3>
                <p className={styles.credentialDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PODCAST ── */}
        <section className={styles.podcastSection}>
          <div className="container">
            <div className={`${styles.podcastInner} fade-in-up`}>
              <div className={styles.podcastMeta}>
                <span className={styles.podcastEyebrow}>Listen</span>
                <h2 className={styles.podcastTitle}>The Podcast</h2>
                <p className={styles.podcastDesc}>
                  Piers hosts a podcast exploring the subconscious mind, mental health, and the stories behind real transformations. Episodes coming soon — link to be added.
                </p>
                <a href="#" className={styles.podcastCta} aria-label="Listen to the podcast (coming soon)">
                  Listen now →
                </a>
              </div>
              <div className={styles.podcastArt}>
                <div className={styles.podcastIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="3"/>
                    <line x1="12" y1="2" x2="12" y2="5"/>
                    <line x1="12" y1="19" x2="12" y2="22"/>
                    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
                    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={`${styles.ctaContent} fade-in-up`}>
              <h2 className={styles.ctaTitle}>
                It&apos;s time to stop surviving and start thriving.
              </h2>
              <p className={styles.ctaText}>
                Let&apos;s have a quick, zero-pressure chat about what&apos;s going on. I&apos;ll tell you honestly whether this approach is right for you.
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
