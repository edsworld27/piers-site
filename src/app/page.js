import Link from "next/link";
import Script from "next/script";
import styles from "./home.module.css";
import TestimonialsScroller from "./components/TestimonialsScroller";
import AnimatedHourglass from "./components/AnimatedHourglass";
import TherapyHeroIllustration from "./components/TherapyHeroIllustration";

export const metadata = {
  title: "Piers Day | Hypnotherapy for Anxiety, Stress & More | Suffolk & Online",
  description: "Clinical hypnotherapy that works. 25+ years helping people overcome anxiety, quit smoking, lose weight, and unlock confidence. Book a free consultation today.",
  alternates: { canonical: "https://www.piersday.com" },
  openGraph: {
    title: "Piers Day | Clinical Hypnotherapy Suffolk & Online",
    description: "25+ years helping people overcome anxiety, quit smoking, and unlock confidence. Book a free consultation.",
    url: "https://www.piersday.com",
    type: "website",
    images: [{ url: "https://www.piersday.com/og-image.jpg", width: 1200, height: 630, alt: "Piers Day Hypnotherapy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piers Day | Clinical Hypnotherapy",
    description: "Overcome anxiety, quit smoking, lose weight, and build confidence with clinical hypnotherapy.",
    images: ["https://www.piersday.com/og-image.jpg"],
  },
};

/* ─────────────────────────────────────────────────────────────────
   SVG ILLUSTRATIONS — therapeutic, organic, warm
───────────────────────────────────────────────────────────────── */

/* Empathy — Tree of Awareness: trunk/branches above ground = conscious, roots below = subconscious */
function TreeSVG() {
  return (
    <svg viewBox="0 0 260 368" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Ground line */}
      <line x1="0" y1="122" x2="260" y2="122" stroke="rgba(107,174,138,0.55)" strokeWidth="1.5"/>
      <line x1="0" y1="129" x2="260" y2="129" stroke="rgba(107,174,138,0.18)" strokeWidth="1"/>

      {/* Labels */}
      <text x="8" y="112" fill="rgba(45,106,79,0.85)" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.8">CONSCIOUS — 10%</text>
      <text x="8" y="272" fill="rgba(45,106,79,0.65)" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.8">SUBCONSCIOUS — 90%</text>

      {/* Trunk */}
      <line x1="130" y1="122" x2="130" y2="76" stroke="rgba(107,174,138,0.75)" strokeWidth="3.5" strokeLinecap="round"/>

      {/* Primary branches */}
      <path d="M 130 96 C 118 89 104 83 90 73" stroke="rgba(107,174,138,0.60)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 130 89 C 142 81 156 75 170 65" stroke="rgba(107,174,138,0.60)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 130 82 C 126 69 122 56 119 42" stroke="rgba(107,174,138,0.54)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M 130 82 C 135 69 140 55 143 40" stroke="rgba(107,174,138,0.54)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

      {/* Secondary branches */}
      <path d="M 90 73 C 81 66 72 60 62 55" stroke="rgba(107,174,138,0.42)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M 170 65 C 180 58 188 52 196 47" stroke="rgba(107,174,138,0.42)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M 119 42 C 113 33 107 25 103 17" stroke="rgba(107,174,138,0.36)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M 143 40 C 149 31 156 23 160 15" stroke="rgba(107,174,138,0.36)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

      {/* Leaf clusters */}
      <circle cx="90"  cy="71"  r="10" fill="rgba(107,174,138,0.17)" stroke="rgba(107,174,138,0.50)" strokeWidth="1.2"/>
      <circle cx="62"  cy="53"  r="8"  fill="rgba(107,174,138,0.14)" stroke="rgba(107,174,138,0.44)" strokeWidth="1"/>
      <circle cx="170" cy="63"  r="10" fill="rgba(107,174,138,0.17)" stroke="rgba(107,174,138,0.50)" strokeWidth="1.2"/>
      <circle cx="196" cy="45"  r="8"  fill="rgba(107,174,138,0.14)" stroke="rgba(107,174,138,0.44)" strokeWidth="1"/>
      <circle cx="119" cy="40"  r="9"  fill="rgba(107,174,138,0.16)" stroke="rgba(107,174,138,0.47)" strokeWidth="1.1"/>
      <circle cx="143" cy="38"  r="9"  fill="rgba(107,174,138,0.16)" stroke="rgba(107,174,138,0.47)" strokeWidth="1.1"/>
      <circle cx="103" cy="15"  r="11" fill="rgba(107,174,138,0.20)" stroke="rgba(107,174,138,0.54)" strokeWidth="1.3"/>
      <circle cx="160" cy="13"  r="11" fill="rgba(107,174,138,0.20)" stroke="rgba(107,174,138,0.54)" strokeWidth="1.3"/>

      {/* Main roots */}
      <path d="M 130 122 C 126 148 118 168 108 190 C 98 212 83 230 68 248" stroke="rgba(107,174,138,0.48)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 130 122 C 134 150 142 172 153 194 C 163 216 180 234 194 250" stroke="rgba(107,174,138,0.48)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 130 122 C 130 150 128 178 130 204 C 132 228 130 250 130 272" stroke="rgba(107,174,138,0.52)" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Secondary roots */}
      <path d="M 108 158 C 92 165 76 168 58 172" stroke="rgba(107,174,138,0.34)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M 153 162 C 169 168 185 172 202 178" stroke="rgba(107,174,138,0.34)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M 98 192 C 80 200 62 204 44 208" stroke="rgba(107,174,138,0.26)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 162 196 C 180 204 198 208 216 212" stroke="rgba(107,174,138,0.26)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 68 246 C 54 254 40 258 26 262" stroke="rgba(107,174,138,0.20)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M 194 250 C 208 258 222 262 236 266" stroke="rgba(107,174,138,0.20)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>

      {/* Fine root tendrils */}
      <path d="M 58 170 C 44 178 32 181 18 184" stroke="rgba(107,174,138,0.18)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M 202 176 C 216 184 228 186 242 188" stroke="rgba(107,174,138,0.18)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M 130 270 C 126 284 122 298 120 310" stroke="rgba(107,174,138,0.22)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 130 270 C 134 284 138 298 140 312" stroke="rgba(107,174,138,0.22)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

/* Service card icons — organic, warm, therapeutic */

function CalmIcon() {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true">
      {/* Concentric calm ripples */}
      <circle cx="22" cy="22" r="18" stroke="rgba(107,174,138,0.14)" strokeWidth="1"   fill="none"/>
      <circle cx="22" cy="22" r="13" stroke="rgba(107,174,138,0.28)" strokeWidth="1.2" fill="none"/>
      <circle cx="22" cy="22" r="8"  stroke="rgba(107,174,138,0.50)" strokeWidth="1.4" fill="none"/>
      <circle cx="22" cy="22" r="3"  fill="rgba(107,174,138,0.88)"/>
      {/* Breath wave */}
      <path d="M 40 22 Q 46 14 52 22 Q 58 30 64 22"
        stroke="#6BAE8A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true">
      {/* Stem */}
      <line x1="36" y1="42" x2="36" y2="8" stroke="rgba(107,174,138,0.70)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Left leaf */}
      <path d="M 36 30 C 36 30 22 22 24 10 C 30 12 37 22 36 30 Z"
        fill="rgba(107,174,138,0.16)" stroke="rgba(107,174,138,0.62)" strokeWidth="1.2"/>
      {/* Right leaf */}
      <path d="M 36 20 C 36 20 50 12 48 2 C 42 4 35 14 36 20 Z"
        fill="rgba(107,174,138,0.16)" stroke="rgba(107,174,138,0.62)" strokeWidth="1.2"/>
      {/* Bud */}
      <ellipse cx="36" cy="6" rx="4" ry="5"
        fill="rgba(107,174,138,0.24)" stroke="rgba(107,174,138,0.70)" strokeWidth="1.3"/>
      {/* Tiny soil roots */}
      <path d="M 36 42 C 30 42 24 44 20 44" stroke="rgba(107,174,138,0.32)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M 36 42 C 42 42 48 44 52 44" stroke="rgba(107,174,138,0.32)" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function BalanceIcon() {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true">
      {/* Central pillar */}
      <line x1="36" y1="8" x2="36" y2="38" stroke="rgba(107,174,138,0.68)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Balance beam — slightly tilted left (harmony, not perfection) */}
      <path d="M 9 20 Q 36 16 63 20" stroke="rgba(107,174,138,0.78)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Left bowl */}
      <path d="M 9 20 Q 8 30 14 32 Q 20 34 22 30 Q 24 26 20 20"
        stroke="rgba(107,174,138,0.58)" strokeWidth="1.3" fill="rgba(107,174,138,0.09)"/>
      {/* Right bowl */}
      <path d="M 63 20 Q 64 30 58 32 Q 52 34 50 30 Q 48 26 52 20"
        stroke="rgba(107,174,138,0.58)" strokeWidth="1.3" fill="rgba(107,174,138,0.09)"/>
      {/* Small heart in left bowl */}
      <path d="M 13 26 C 13 24 15 23 16 25 C 17 23 19 24 19 26 C 19 28 16 30 16 30 C 16 30 13 28 13 26 Z"
        fill="rgba(107,174,138,0.60)"/>
    </svg>
  );
}

function SunriseIcon() {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true">
      {/* Background mountain */}
      <path d="M 28 42 L 46 22 L 64 42 Z"
        fill="rgba(107,174,138,0.07)" stroke="rgba(107,174,138,0.38)" strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Foreground mountain */}
      <path d="M 2 42 L 24 12 L 46 42 Z"
        fill="rgba(107,174,138,0.12)" stroke="rgba(107,174,138,0.62)" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Rising sun at peak */}
      <circle cx="24" cy="11" r="5.5"
        fill="rgba(201,144,106,0.32)" stroke="rgba(201,144,106,0.72)" strokeWidth="1.3"/>
      {/* Sun rays */}
      <line x1="24" y1="4"  x2="24" y2="2"   stroke="rgba(201,144,106,0.62)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="30" y1="7"  x2="32" y2="5"   stroke="rgba(201,144,106,0.52)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="18" y1="7"  x2="16" y2="5"   stroke="rgba(201,144,106,0.52)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="32" y1="12" x2="34" y2="12"  stroke="rgba(201,144,106,0.48)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="16" y1="12" x2="14" y2="12"  stroke="rgba(201,144,106,0.48)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

/* Step icons */
function HeartHandIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M 24 38 C 10 27 8 20 8 16 C 8 11 12 8 16 8 C 19 8 22 10 24 13 C 26 10 29 8 32 8 C 36 8 40 11 40 16 C 40 20 38 27 24 38 Z"
        fill="rgba(107,174,138,0.12)" stroke="#6BAE8A" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Small inner heart highlight */}
      <path d="M 24 32 C 16 26 15 22 15 20 C 15 18 17 17 19 19 C 21 17 23 18 24 20 C 25 18 27 17 29 19 C 31 17 33 18 33 20 C 33 22 32 26 24 32 Z"
        fill="rgba(107,174,138,0.22)"/>
    </svg>
  );
}

function ConnectionIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Two interlocking circles — meeting of minds */}
      <circle cx="17" cy="24" r="13" stroke="#6BAE8A" strokeWidth="1.5" fill="rgba(107,174,138,0.07)"/>
      <circle cx="31" cy="24" r="13" stroke="#6BAE8A" strokeWidth="1.5" fill="rgba(107,174,138,0.07)"/>
      {/* Vesica overlap — shared space */}
      <path d="M 24 12 Q 31 18 31 24 Q 31 30 24 36 Q 17 30 17 24 Q 17 18 24 12 Z"
        fill="rgba(107,174,138,0.22)"/>
    </svg>
  );
}

function PathStarIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Journey path */}
      <path d="M 8 40 Q 18 30 28 22 Q 36 16 40 10"
        stroke="#6BAE8A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="3 3"/>
      {/* Start */}
      <circle cx="8" cy="40" r="3.5" fill="rgba(107,174,138,0.45)" stroke="#6BAE8A" strokeWidth="1"/>
      {/* Destination star */}
      <polygon points="40,4 41.8,9 47,9 43,12.5 44.8,17.5 40,14 35.2,17.5 37,12.5 33,9 38.2,9"
        fill="rgba(107,174,138,0.55)" stroke="#6BAE8A" strokeWidth="1"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────── */
export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Piers Day Hypnotherapy",
    "url": "https://www.piersday.com",
    "description": "Clinical hypnotherapy for anxiety, smoking cessation, weight loss, and confidence. 25+ years experience. Online & Bury St Edmunds.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.piersday.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <div className={styles.pageWrapper}>

        {/* ── 1. HERO ── */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>

            <div className={`${styles.heroText} fade-in-up`}>
              <span className="eyebrow">Clinical Hypnotherapy · Bury St Edmunds</span>
              <h1 className={styles.heroHeadline}>
                The thoughts that hold you back<br/>
                <span className={styles.heroAccent}>can be changed.</span>
              </h1>
              <p className={`${styles.heroSub} fade-in-up`} style={{ animationDelay: "0.3s" }}>
                Sit with us. We work directly with your subconscious mind to dissolve what weighs you down — and let the real you emerge.
              </p>
              <div className={`${styles.heroBtns} fade-in-up`} style={{ animationDelay: "0.5s" }}>
                <a href="#process" className="btn btn-primary pulse">How Does It Work?</a>
                <Link href="/contact" className={styles.btnSoft}>Is This Right For Me?</Link>
              </div>
            </div>

            <div className={`${styles.heroVisual} fade-in-up`} style={{ animationDelay: "0.2s" }}>
              <div className={styles.chairWrapper}>
                <TherapyHeroIllustration />
              </div>
            </div>

          </div>
        </section>

        {/* ── 2. STATS BAND ── */}
        <section className={styles.statsBand}>
          <div className="container">
            <p className={`${styles.statsBandEyebrow} fade-in-up`}>Why clients trust us</p>
            <div className={styles.statsRow}>

              <div className={`${styles.statItem} fade-in-up`}>
                <div className={styles.statIconWrap}>
                  {/* Hourglass / time */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 3h14M5 21h14M7 3v4a5 5 0 0 0 5 5 5 5 0 0 0 5-5V3M7 21v-4a5 5 0 0 1 5-5 5 5 0 0 1 5 5v4"/>
                  </svg>
                </div>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>Years in Practice</div>
                <div className={styles.statSub}>Two and a half decades helping people heal</div>
              </div>

              <div className={`${styles.statItem} ${styles.statItemFeatured} fade-in-up`} style={{ animationDelay: "0.1s" }}>
                <div className={styles.statIconWrap}>
                  {/* Heart */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className={styles.statNumber}>100s</div>
                <div className={styles.statLabel}>Lives Transformed</div>
                <div className={styles.statSub}>Real people, lasting results — and still counting</div>
              </div>

              <div className={`${styles.statItem} fade-in-up`} style={{ animationDelay: "0.2s" }}>
                <div className={styles.statIconWrap}>
                  {/* Leaf / growth */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 22c1-4 4-8 9-10 2.5-1 5-1 7-1-1 5-4 9-9 11C6 23 4 22 2 22z"/>
                    <path d="M12 22c2-5 1-10-2-14"/>
                  </svg>
                </div>
                <div className={styles.statNumber}>1</div>
                <div className={styles.statLabel}>Proven Method</div>
                <div className={styles.statSub}>One focused approach. Applied to every challenge.</div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. PROBLEM + HOW WE SOLVE IT ── */}
        <section className={styles.empathySection}>
          <div className={`container ${styles.empathyInner}`}>
            <div className={`${styles.empathyVisual} fade-in-up`}>
              <TreeSVG />
            </div>
            <div className={`${styles.empathyText} fade-in-up`} style={{ animationDelay: "0.15s" }}>
              <h2>You shouldn&rsquo;t have to fight your own mind every day.</h2>
              <p>
                If you are struggling with anxiety, addiction, or self-doubt, we know exactly how exhausting it feels to try and use willpower to fix it. Your brain is stuck in survival mode — running a faulty subconscious program — and no amount of positive thinking will turn it off.
              </p>
              <p className={styles.emphasisText}>
                <strong>You are not alone, and you are not broken.</strong> As clinical hypnotherapists, we bypass the conscious mind entirely and update the subconscious program at the root. That&rsquo;s why our clients see change fast — and it lasts.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. PROBLEMS SOLVED ── */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={`${styles.sectionHeader} fade-in-up`}>
              <h2>What We Can Help You With</h2>
              <p>One method, applied to hundreds of challenges. Here are the most common ways people use hypnotherapy to take back control.</p>
            </div>

            <div className={styles.bentoGrid}>
              <Link href="/services/anxiety" className={`${styles.bentoCard} ${styles.bentoWide} glass-panel fade-in-up`}>
                <div className={styles.bentoIcon}><CalmIcon /></div>
                <div className={styles.bentoBody}>
                  <span className="eyebrow">If you struggle with:</span>
                  <h3>Anxiety &amp; Trauma</h3>
                  <p>Turn off the constant &ldquo;fight or flight&rdquo; alarms. Sleep deeply, focus clearly, and feel safe in your own body.</p>
                </div>
                <div className={styles.bentoArrow}>→</div>
              </Link>

              <Link href="/services/stop-smoking" className={`${styles.bentoCard} glass-panel fade-in-up`} style={{ animationDelay: "0.1s" }}>
                <div className={styles.bentoIcon}><GrowthIcon /></div>
                <div className={styles.bentoBody}>
                  <span className="eyebrow">If you struggle with:</span>
                  <h3>Smoking &amp; Addictions</h3>
                  <p>Break the subconscious craving at the root cause, without relying on willpower.</p>
                </div>
                <div className={styles.bentoArrow}>→</div>
              </Link>

              <Link href="/services/weight-loss" className={`${styles.bentoCard} glass-panel fade-in-up`} style={{ animationDelay: "0.2s" }}>
                <div className={styles.bentoIcon}><BalanceIcon /></div>
                <div className={styles.bentoBody}>
                  <span className="eyebrow">If you struggle with:</span>
                  <h3>Weight &amp; Eating</h3>
                  <p>Stop emotional eating. We reprogram your relationship with food so you don&rsquo;t have to starve.</p>
                </div>
                <div className={styles.bentoArrow}>→</div>
              </Link>

              <Link href="/services/confidence" className={`${styles.bentoCard} ${styles.bentoWide} glass-panel fade-in-up`} style={{ animationDelay: "0.3s" }}>
                <div className={styles.bentoIcon}><SunriseIcon /></div>
                <div className={styles.bentoBody}>
                  <span className="eyebrow">If you struggle with:</span>
                  <h3>Confidence &amp; Focus</h3>
                  <p>Remove the invisible mental blocks and limiting beliefs that keep you playing small.</p>
                </div>
                <div className={styles.bentoArrow}>→</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. THE PROCESS ── */}
        <section id="process" className={styles.planSection}>
          <div className="container">
            <div className={`${styles.sectionHeader} fade-in-up`}>
              <h2>How It Works</h2>
              <p>Getting started is easier than you think. Three simple steps stand between you and a calmer, freer mind.</p>
            </div>

            <div className={styles.planGrid}>
              <div className={`${styles.planCard} glass-panel fade-in-up`}>
                <div className={styles.planIcon}><HeartHandIcon /></div>
                <div className={styles.planNum}>01</div>
                <h3>Reach Out Your Way</h3>
                <p>Fill out a quick form, call, or email. Choose the method that feels easiest for you. Zero pressure.</p>
              </div>

              <div className={styles.planConnector} aria-hidden="true">
                <svg viewBox="0 0 60 24" fill="none">
                  <path d="M 0 12 Q 30 2 60 12" stroke="rgba(107,174,138,0.45)" strokeWidth="1.5" fill="none" strokeDasharray="3 4"/>
                  <polygon points="57,8 60,12 57,16" fill="rgba(107,174,138,0.50)"/>
                </svg>
              </div>

              <div className={`${styles.planCard} glass-panel fade-in-up`} style={{ animationDelay: "0.2s" }}>
                <div className={styles.planIcon}><ConnectionIcon /></div>
                <div className={styles.planNum}>02</div>
                <h3>Free Intake Review</h3>
                <p>We figure out exactly what your problem is, why you are stuck, and how we can solve it for you.</p>
              </div>

              <div className={styles.planConnector} aria-hidden="true">
                <svg viewBox="0 0 60 24" fill="none">
                  <path d="M 0 12 Q 30 2 60 12" stroke="rgba(107,174,138,0.45)" strokeWidth="1.5" fill="none" strokeDasharray="3 4"/>
                  <polygon points="57,8 60,12 57,16" fill="rgba(107,174,138,0.50)"/>
                </svg>
              </div>

              <div className={`${styles.planCard} glass-panel fade-in-up`} style={{ animationDelay: "0.4s" }}>
                <div className={styles.planIcon}><PathStarIcon /></div>
                <div className={styles.planNum}>03</div>
                <h3>Get Your Plan &amp; Tools</h3>
                <p>You&rsquo;ll walk away with a clear plan and the mental equipment to support you so you can finally thrive.</p>
              </div>
            </div>

            <div className={`${styles.planCta} fade-in-up`} style={{ animationDelay: "0.6s" }}>
              <Link href="/contact" className="btn btn-primary pulse">Book Your Free Consultation</Link>
            </div>
          </div>
        </section>

        {/* ── 6. PROOF ── */}
        <section className={styles.testimonialsSection}>
          <div className="container">
            <div className={`${styles.sectionHeader} fade-in-up`}>
              <h2>Real People. Real Results.</h2>
              <p>Don&rsquo;t just take our word for it. Here is what happens when you decide to take control.</p>
            </div>
          </div>
          <TestimonialsScroller />
        </section>

        {/* ── 7. STAKES ── */}
        <section className={styles.stakesSection}>
          <div className={`container ${styles.stakesInner}`}>
            <div className={`${styles.stakesText} fade-in-up`}>
              <h2 className={styles.stakesTitle}>What happens if you don&rsquo;t take control?</h2>
              <p>
                I have seen far too many people stop their lives and fail to reach their potential because they let their primal fears dictate their future. They lose time, they damage their health, and they accept a life of just &lsquo;surviving&rsquo;.
              </p>
              <p className={styles.stakesEmphasis}>
                <strong>It&rsquo;s time to make a change that actually lasts. Not another patch. Not more willpower. A real shift — at the root.</strong>
              </p>
            </div>
            <div className={`${styles.stakesVisual} fade-in-up`} style={{ animationDelay: "0.2s" }}>
              <AnimatedHourglass />
              <p className={styles.hourglassHint}>tap to flip</p>
            </div>
          </div>
        </section>

        {/* ── 8. FINAL CTA ── */}
        <section className={styles.ctaSection}>
          <div className={`container ${styles.ctaInner} fade-in-up`}>
            <h2>Stop letting your mind hold you back.</h2>
            <p>
              If you are struggling with anxiety, addiction, or limiting beliefs, we want to be absolutely clear:{" "}
              <strong>reaching out is the right decision</strong>. Don&rsquo;t waste another year trying to survive on your own. Let us help you win.
            </p>
            <Link href="/contact" className="btn btn-primary pulse">Yes, I Want to Take Control</Link>
          </div>
        </section>

      </div>
    </>
  );
}
