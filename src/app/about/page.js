"use client";

import Link from "next/link";
import Script from "next/script";
import styles from "./about.module.css";

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
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className="fade-in-up">
              <h1 className={`${styles.heroTitle} text-gradient-gold`}>
                You shouldn't have to fight yourself.
              </h1>
              <p className={styles.heroSubtitle}>
                For over 25 years, I've watched people try to use sheer willpower to overcome crushing anxiety, deep trauma, and stubborn addictions. It rarely works. Why? Because you are fighting your own survival instincts.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="container">
          <div className={`${styles.statsBanner} glass-panel fade-in-up`}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100s</div>
                <div className={styles.statLabel}>Lives Changed</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>1</div>
                <div className={styles.statLabel}>Proven Method</div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={`${styles.introSection} container`}>
          <div className={`${styles.introCard} glass-panel fade-in-up`}>
            <p className={styles.introText}>
              My name is <span className={styles.highlight}>Piers Day</span>. I do exactly one thing: I give you back control of your mind by erasing limiting beliefs. But I can apply this one skill in hundreds of ways to drastically improve your life.
            </p>
            <p className={styles.introText}>
              Whether you visit my clinic in Bury St Edmunds, Suffolk, or we work together online via Zoom, my approach is the same: absolute zero judgment, and a clear, clinical method for reprogramming the subconscious mind.
            </p>
          </div>
        </section>

        {/* Iceberg Section */}
        <section className={styles.icebergSection}>
          <div className="container">
            <div className={`${styles.sectionHeader} fade-in-up`}>
              <h2 className={`${styles.sectionTitle} text-gradient-light`}>
                How We Fix It: The Iceberg
              </h2>
              <p className={styles.sectionSubtitle}>
                Stop using 10% of your brain to fight the other 90%.
              </p>
            </div>

            <div className={styles.icebergContainer}>
              {/* Visual Iceberg Representation */}
              <div className={styles.icebergVisual}>
                <div className={styles.icebergGrid}>
                  {/* Tip - 10% */}
                  <div className={`${styles.icebergCard} ${styles.icebergCardTip} glass-panel fade-in-up`}>
                    <div className={`${styles.icebergIcon} ${styles.icebergIconTip}`}>
                      <span>&#9651;</span>
                    </div>
                    <div className={`${styles.icebergPercentage} ${styles.icebergPercentageTip}`}>10%</div>
                    <div className={styles.icebergLabel}>The Tip</div>
                    <h3 className={styles.icebergTitle}>Your Conscious Mind</h3>
                    <p className={styles.icebergDescription}>
                      This is your logic, your willpower, and your rational thoughts. When you say "I shouldn't be anxious" or "I need to quit smoking", that is the tip of the iceberg talking. It is small, and it burns a lot of calories to maintain.
                    </p>
                  </div>

                  {/* Mass - 90% */}
                  <div className={`${styles.icebergCard} ${styles.icebergCardMass} glass-panel fade-in-up`} style={{animationDelay: "0.2s"}}>
                    <div className={`${styles.icebergIcon} ${styles.icebergIconMass}`}>
                      <span>&#9660;</span>
                    </div>
                    <div className={`${styles.icebergPercentage} ${styles.icebergPercentageMass}`}>90%</div>
                    <div className={styles.icebergLabel}>The Mass</div>
                    <h3 className={styles.icebergTitle}>Your Subconscious Mind</h3>
                    <p className={styles.icebergDescription}>
                      This is your survival drive, your emotions, and your deep habits. If your subconscious believes smoking keeps you safe from stress, or that social situations are dangerous, it will overpower your rational mind every single time. It is massive and relentless.
                    </p>
                  </div>
                </div>

                {/* Water Line Visual */}
                <div className={styles.waterLine}></div>

                {/* Solution Banner */}
                <div className={`${styles.solutionBanner} glass-panel fade-in-up`} style={{animationDelay: "0.3s"}}>
                  <span className={styles.solutionIcon}>&#10024;</span>
                  <p className={styles.solutionText}>
                    <strong>Clinical Hypnotherapy</strong> bypasses the exhausting 10% and speaks directly to the 90%. We update your survival software so you no longer need the anxiety or the addiction to feel safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className={`${styles.credentialsSection} container`}>
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <h2 className={`${styles.sectionTitle} text-gradient-light`}>
              Why Trust Us
            </h2>
            <p className={styles.sectionSubtitle}>
              Decades of experience. Hundreds of success stories.
            </p>
          </div>

          <div className={styles.credentialsGrid}>
            <div className={`${styles.credentialCard} glass-panel fade-in-up`}>
              <div className={styles.credentialIcon}>&#127891;</div>
              <h4 className={styles.credentialTitle}>Certified Clinical</h4>
              <p className={styles.credentialDesc}>Fully qualified clinical hypnotherapist</p>
            </div>

            <div className={`${styles.credentialCard} glass-panel fade-in-up`} style={{animationDelay: "0.1s"}}>
              <div className={styles.credentialIcon}>&#128337;</div>
              <h4 className={styles.credentialTitle}>25+ Years</h4>
              <p className={styles.credentialDesc}>Over two decades of dedicated practice</p>
            </div>

            <div className={`${styles.credentialCard} glass-panel fade-in-up`} style={{animationDelay: "0.2s"}}>
              <div className={styles.credentialIcon}>&#127760;</div>
              <h4 className={styles.credentialTitle}>In-Person & Online</h4>
              <p className={styles.credentialDesc}>Suffolk clinic or Zoom sessions worldwide</p>
            </div>

            <div className={`${styles.credentialCard} glass-panel fade-in-up`} style={{animationDelay: "0.3s"}}>
              <div className={styles.credentialIcon}>&#128170;</div>
              <h4 className={styles.credentialTitle}>Results Focused</h4>
              <p className={styles.credentialDesc}>We target the root cause, not symptoms</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={`${styles.ctaContent} fade-in-up`}>
              <h2 className={`${styles.ctaTitle} text-gradient-light`}>
                It's time to stop surviving and start thriving.
              </h2>
              <p className={styles.ctaText}>
                Let's have a quick, zero-pressure chat about what's going on. We will tell you exactly whether this approach is right for you.
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
