import Link from "next/link";
import styles from "./home.module.css";

/* ─────────────────────────────────────────────────────────────────
   SVG ILLUSTRATIONS
   All inline — no external assets needed
───────────────────────────────────────────────────────────────── */

function NeuralOrb() {
  return (
    <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="orbCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#6BAE8A" stopOpacity="0.28"/>
          <stop offset="100%" stopColor="#6BAE8A" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Atmosphere halos */}
      <circle cx="240" cy="240" r="232" stroke="rgba(107,174,138,0.04)" strokeWidth="1"/>
      <circle cx="240" cy="240" r="212" stroke="rgba(107,174,138,0.06)" strokeWidth="1"/>
      {/* Globe parallels */}
      <ellipse cx="240" cy="240" rx="192" ry="57"  stroke="rgba(107,174,138,0.11)" strokeWidth="1"/>
      <ellipse cx="240" cy="240" rx="192" ry="115" stroke="rgba(107,174,138,0.11)" strokeWidth="1"/>
      <ellipse cx="240" cy="240" rx="192" ry="172" stroke="rgba(107,174,138,0.11)" strokeWidth="1"/>
      {/* Globe meridians */}
      <ellipse cx="240" cy="240" rx="57"  ry="192" stroke="rgba(107,174,138,0.11)" strokeWidth="1"/>
      <ellipse cx="240" cy="240" rx="115" ry="192" stroke="rgba(107,174,138,0.11)" strokeWidth="1"/>
      <ellipse cx="240" cy="240" rx="172" ry="192" stroke="rgba(107,174,138,0.11)" strokeWidth="1"/>
      {/* Main equator */}
      <circle cx="240" cy="240" r="192" stroke="rgba(107,174,138,0.22)" strokeWidth="1.5"/>
      {/* Highlight arc — top-hemisphere brightens */}
      <path d="M 98 190 Q 240 108 382 190" stroke="rgba(107,174,138,0.48)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Inner rings */}
      <circle cx="240" cy="240" r="115" stroke="rgba(107,174,138,0.26)" strokeWidth="1.5" strokeDasharray="4 8"/>
      <circle cx="240" cy="240" r="57"  stroke="rgba(107,174,138,0.46)" strokeWidth="2"/>
      {/* Core glow + nucleus */}
      <circle cx="240" cy="240" r="32" fill="url(#orbCore)"/>
      <circle cx="240" cy="240" r="15" fill="rgba(107,174,138,0.16)" stroke="#6BAE8A" strokeWidth="2"/>
      <circle cx="240" cy="240" r="5.5" fill="#6BAE8A"/>
      {/* Pole nodes */}
      <circle cx="240" cy="48"  r="5"   fill="rgba(107,174,138,0.7)"/>
      <circle cx="240" cy="432" r="4"   fill="rgba(107,174,138,0.4)"/>
      <circle cx="48"  cy="240" r="4.5" fill="rgba(107,174,138,0.55)"/>
      <circle cx="432" cy="240" r="4.5" fill="rgba(107,174,138,0.55)"/>
      {/* Diagonal nodes */}
      <circle cx="108" cy="108" r="3.5" fill="rgba(107,174,138,0.48)"/>
      <circle cx="372" cy="108" r="3.5" fill="rgba(107,174,138,0.48)"/>
      <circle cx="372" cy="372" r="3"   fill="rgba(107,174,138,0.32)"/>
      <circle cx="108" cy="372" r="3"   fill="rgba(107,174,138,0.32)"/>
      {/* Pole connectors */}
      <line x1="240" y1="48"  x2="240" y2="130" stroke="rgba(107,174,138,0.2)"  strokeWidth="1"/>
      <line x1="240" y1="350" x2="240" y2="432" stroke="rgba(107,174,138,0.15)" strokeWidth="1"/>
      <line x1="48"  y1="240" x2="130" y2="240" stroke="rgba(107,174,138,0.18)" strokeWidth="1"/>
      <line x1="350" y1="240" x2="432" y2="240" stroke="rgba(107,174,138,0.18)" strokeWidth="1"/>
    </svg>
  );
}

function IcebergSVG() {
  return (
    <svg viewBox="0 0 260 368" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Water line */}
      <line x1="0" y1="108" x2="260" y2="108" stroke="rgba(107,174,138,0.38)" strokeWidth="1.5"/>
      <line x1="0" y1="115" x2="260" y2="115" stroke="rgba(107,174,138,0.12)" strokeWidth="1"/>
      {/* Labels */}
      <text x="8" y="97"  fill="rgba(107,174,138,0.72)" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.8">CONSCIOUS — 10%</text>
      <text x="8" y="250" fill="rgba(107,174,138,0.52)" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.8">SUBCONSCIOUS — 90%</text>
      {/* Above-water tip */}
      <polygon points="130,14 178,108 82,108" fill="rgba(107,174,138,0.16)" stroke="rgba(107,174,138,0.58)" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="130,30 164,108 96,108" fill="rgba(107,174,138,0.07)"/>
      {/* Below-water mass */}
      <polygon points="82,108 178,108 222,264 172,356 88,356 38,264"
               fill="rgba(10,20,42,0.78)" stroke="rgba(107,174,138,0.3)" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="92,124 168,124 210,258 166,344 94,344 50,258" fill="rgba(107,174,138,0.05)"/>
      {/* Depth lines */}
      <line x1="44"  y1="178" x2="216" y2="178" stroke="rgba(107,174,138,0.1)"  strokeWidth="1"/>
      <line x1="40"  y1="224" x2="220" y2="224" stroke="rgba(107,174,138,0.08)" strokeWidth="1"/>
      <line x1="50"  y1="270" x2="210" y2="270" stroke="rgba(107,174,138,0.06)" strokeWidth="1"/>
      <line x1="66"  y1="316" x2="194" y2="316" stroke="rgba(107,174,138,0.04)" strokeWidth="1"/>
    </svg>
  );
}

/* Bento card icons */
function AnxietyIcon() {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true">
      <polyline points="0,22 7,8 13,36 19,4 25,38 31,14 36,22"
        stroke="rgba(94,155,181,0.55)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <line x1="36" y1="0" x2="36" y2="44" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <path d="M 38 22 Q 47 13 56 22 Q 65 31 72 22"
        stroke="rgba(107,174,138,0.82)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function SmokingIcon() {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true">
      <rect x="4"  y="16" width="16" height="12" rx="6" stroke="rgba(107,174,138,0.6)" strokeWidth="1.5" fill="none"/>
      <rect x="26" y="16" width="16" height="12" rx="6" stroke="rgba(107,174,138,0.55)" strokeWidth="1.5" fill="none"/>
      <line x1="20" y1="22" x2="26" y2="22" stroke="rgba(201,144,106,0.45)" strokeWidth="1.5" strokeDasharray="2 2"/>
      <line x1="46" y1="19" x2="50" y2="25" stroke="rgba(201,144,106,0.92)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="50" y1="19" x2="46" y2="25" stroke="rgba(201,144,106,0.92)" strokeWidth="2" strokeLinecap="round"/>
      <rect x="52" y="16" width="16" height="12" rx="6" stroke="rgba(107,174,138,0.35)" strokeWidth="1.5" fill="none" strokeDasharray="3 2"/>
    </svg>
  );
}

function WeightIcon() {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true">
      <line x1="36" y1="8"  x2="36" y2="24" stroke="rgba(107,174,138,0.72)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="24" x2="62" y2="24" stroke="rgba(107,174,138,0.72)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="24" x2="12" y2="32" stroke="rgba(107,174,138,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="58" y1="24" x2="60" y2="32" stroke="rgba(107,174,138,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="12" cy="34" rx="9" ry="3" fill="none" stroke="rgba(107,174,138,0.62)" strokeWidth="1.5"/>
      <ellipse cx="60" cy="34" rx="9" ry="3" fill="none" stroke="rgba(107,174,138,0.62)" strokeWidth="1.5"/>
      <polygon points="36,4 39.5,10 32.5,10" fill="rgba(107,174,138,0.45)"/>
    </svg>
  );
}

function ConfidenceIcon() {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true">
      <rect x="8"  y="6"  width="24" height="32" rx="2" stroke="rgba(107,174,138,0.4)"  strokeWidth="1.5" fill="rgba(12,27,46,0.4)"/>
      <path d="M 32 6 L 44 10 L 44 38 L 32 38"   stroke="rgba(107,174,138,0.72)" strokeWidth="1.5" fill="rgba(107,174,138,0.07)"/>
      <line x1="47" y1="22" x2="63" y2="16" stroke="rgba(201,144,106,0.65)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="47" y1="24" x2="65" y2="24" stroke="rgba(201,144,106,0.78)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="47" y1="26" x2="63" y2="32" stroke="rgba(201,144,106,0.65)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="29" cy="24" r="2.5" fill="none" stroke="rgba(107,174,138,0.6)" strokeWidth="1.5"/>
    </svg>
  );
}

/* Step icons */
function ReachOutIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="24" rx="6" stroke="#6BAE8A" strokeWidth="1.5" fill="rgba(107,174,138,0.07)"/>
      <path d="M 14 34 L 10 42" stroke="#6BAE8A" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16" y1="20" x2="32" y2="20" stroke="rgba(107,174,138,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16" y1="26" x2="26" y2="26" stroke="rgba(107,174,138,0.38)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="13" stroke="#6BAE8A" strokeWidth="1.5" fill="rgba(107,174,138,0.07)"/>
      <line x1="30" y1="30" x2="42" y2="42" stroke="#6BAE8A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="20" x2="26" y2="20" stroke="rgba(107,174,138,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20" y1="14" x2="20" y2="26" stroke="rgba(107,174,138,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="#6BAE8A" strokeWidth="1.5" fill="rgba(107,174,138,0.07)"/>
      <line x1="24" y1="8"  x2="24" y2="16" stroke="#6BAE8A"             strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="32" x2="24" y2="40" stroke="rgba(107,174,138,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8"  y1="24" x2="16" y2="24" stroke="rgba(107,174,138,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="32" y1="24" x2="40" y2="24" stroke="rgba(107,174,138,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="24" x2="32" y2="16" stroke="#6BAE8A"              strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="3.5" fill="#6BAE8A"/>
    </svg>
  );
}

function HourglassSVG() {
  return (
    <svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Caps */}
      <rect x="5"  y="4"   width="70" height="10" rx="5" fill="rgba(201,144,106,0.2)" stroke="rgba(201,144,106,0.48)" strokeWidth="1.5"/>
      <rect x="5"  y="126" width="70" height="10" rx="5" fill="rgba(201,144,106,0.2)" stroke="rgba(201,144,106,0.48)" strokeWidth="1.5"/>
      {/* Top chamber */}
      <path d="M 8 14 L 72 14 L 42 66 L 38 66 Z" fill="rgba(12,27,42,0.72)" stroke="rgba(201,144,106,0.28)" strokeWidth="1"/>
      {/* Remaining sand — top (small amount) */}
      <path d="M 8 14 L 28 14 L 41 42 L 38 42 Z" fill="rgba(201,144,106,0.22)"/>
      {/* Neck */}
      <rect x="37" y="66" width="6" height="8" fill="rgba(201,144,106,0.45)"/>
      {/* Bottom chamber */}
      <path d="M 38 74 L 42 74 L 72 126 L 8 126 Z" fill="rgba(12,27,42,0.72)" stroke="rgba(201,144,106,0.28)" strokeWidth="1"/>
      {/* Sand pile — bottom (almost full) */}
      <path d="M 15 110 Q 40 98 65 110 L 72 126 L 8 126 Z" fill="rgba(201,144,106,0.24)"/>
      {/* Falling stream */}
      <line x1="40" y1="66" x2="40" y2="78" stroke="rgba(201,144,106,0.62)" strokeWidth="1.5" strokeDasharray="2 3"/>
      {/* Depth line */}
      <line x1="16" y1="96" x2="64" y2="96" stroke="rgba(201,144,106,0.1)" strokeWidth="1"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>

          <div className={`${styles.heroText} fade-in-up`}>
            <span className="eyebrow">Clinical Hypnotherapy · Bury St Edmunds</span>
            <h1 className={styles.heroHeadline}>
              Take Back Control<br/>
              <span className="text-gradient-gold">Of Your Mind.</span>
            </h1>
            <p className={`${styles.heroSub} fade-in-up`} style={{ animationDelay: "0.3s" }}>
              Stop fighting yourself. We rewire your subconscious mind so you can quickly overcome limiting beliefs and start improving your life.
            </p>
            <div className="fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Link href="/contact" className="btn btn-primary pulse">Get Support Now</Link>
            </div>
          </div>

          <div className={`${styles.heroVisual} fade-in-up`} style={{ animationDelay: "0.2s" }}>
            <div className={styles.orbWrapper}>
              <NeuralOrb />
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. STATS BAND ── */}
      <section className={styles.statsBand}>
        <div className="container">
          <div className={styles.statsRow}>
            {[
              { num: "25+",  label: "Years Experience", sub: "of dedicated practice" },
              { num: "100s", label: "Lives Changed",    sub: "and still counting"    },
              { num: "1",    label: "Proven Method",    sub: "applied everywhere"    },
            ].map(({ num, label, sub }) => (
              <div key={label} className={`${styles.statItem} fade-in-up`}>
                <div className={styles.statNumber}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
                <div className={styles.statSub}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EMPATHY ── */}
      <section className={styles.empathySection}>
        <div className={`container ${styles.empathyInner}`}>
          <div className={`${styles.empathyVisual} fade-in-up`}>
            <IcebergSVG />
          </div>
          <div className={`${styles.empathyText} fade-in-up`} style={{ animationDelay: "0.15s" }}>
            <h2 className="text-gradient-light">You shouldn&rsquo;t have to fight your own mind every day.</h2>
            <p>
              If you are struggling with anxiety, addiction, or self-doubt, we know exactly how exhausting it feels to try and use willpower to fix it. Your brain is stuck in survival mode, and it feels impossible to turn off.
            </p>
            <p className={styles.emphasisText}>
              <strong>You are not alone, and you are not broken.</strong> As clinical hypnotherapists, we have helped hundreds of people solve this exact problem and take back control of their lives.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. PROBLEMS SOLVED ── */}
      <section className="section">
        <div className="container">
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <h2 className="text-gradient-light">Common Problems We Help Solve</h2>
            <p>We do one thing: we give you back control of your mind. Here are the most common ways we apply this to help you win.</p>
          </div>

          <div className={styles.bentoGrid}>
            <Link href="/services/anxiety" className={`${styles.bentoCard} ${styles.bentoWide} glass-panel fade-in-up`}>
              <div className={styles.bentoIcon}><AnxietyIcon /></div>
              <div className={styles.bentoBody}>
                <span className="eyebrow">If you struggle with:</span>
                <h3>Anxiety &amp; Trauma</h3>
                <p>Turn off the constant &ldquo;fight or flight&rdquo; alarms. Sleep deeply, focus clearly, and feel safe in your own body.</p>
              </div>
              <div className={styles.bentoArrow}>→</div>
            </Link>

            <Link href="/services/stop-smoking" className={`${styles.bentoCard} glass-panel fade-in-up`} style={{ animationDelay: "0.1s" }}>
              <div className={styles.bentoIcon}><SmokingIcon /></div>
              <div className={styles.bentoBody}>
                <span className="eyebrow">If you struggle with:</span>
                <h3>Smoking &amp; Addictions</h3>
                <p>Break the subconscious craving at the root cause, without relying on willpower.</p>
              </div>
              <div className={styles.bentoArrow}>→</div>
            </Link>

            <Link href="/services/weight-loss" className={`${styles.bentoCard} glass-panel fade-in-up`} style={{ animationDelay: "0.2s" }}>
              <div className={styles.bentoIcon}><WeightIcon /></div>
              <div className={styles.bentoBody}>
                <span className="eyebrow">If you struggle with:</span>
                <h3>Weight &amp; Eating</h3>
                <p>Stop emotional eating. We reprogram your relationship with food so you don&rsquo;t have to starve.</p>
              </div>
              <div className={styles.bentoArrow}>→</div>
            </Link>

            <Link href="/services/confidence" className={`${styles.bentoCard} ${styles.bentoWide} glass-panel fade-in-up`} style={{ animationDelay: "0.3s" }}>
              <div className={styles.bentoIcon}><ConfidenceIcon /></div>
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

      {/* ── 5. STAKES ── */}
      <section className={styles.stakesSection}>
        <div className={`container ${styles.stakesInner}`}>
          <div className={`${styles.stakesText} fade-in-up`}>
            <h2 className={styles.stakesTitle}>What happens if you do nothing?</h2>
            <p>
              I have seen far too many people stop their lives and fail to reach their potential because they let their primal fears dictate their future. They lose time, they damage their health, and they accept a life of just &lsquo;surviving&rsquo;.
            </p>
            <p className={styles.stakesEmphasis}>
              <strong>We cannot let this happen anymore. Let&rsquo;s get serious about your mental health and take back control right now.</strong>
            </p>
          </div>
          <div className={`${styles.stakesVisual} fade-in-up`} style={{ animationDelay: "0.2s" }}>
            <HourglassSVG />
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <h2 className="text-gradient-light">Proof That This Works</h2>
            <p>Don&rsquo;t just take our word for it. Here is what happens when you decide to take control.</p>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={`${styles.testimonialCard} glass-panel fade-in-up`} style={{ animationDelay: "0.1s" }}>
              <div className={styles.quoteDecor}>&ldquo;</div>
              <p className={styles.quoteText}>I had struggled with crippling anxiety for 15 years. I thought my brain was just broken. In just a few sessions, the constant &ldquo;fight or flight&rdquo; noise completely stopped. I finally have my life back.</p>
              <div className={styles.quoteStars}>★★★★★</div>
              <div className={styles.quoteAttrib}>
                <span className={styles.quoteName}>Sarah T.</span>
                <span className={styles.quotePlace}>Suffolk</span>
              </div>
            </div>
            <div className={`${styles.testimonialCard} glass-panel fade-in-up`} style={{ animationDelay: "0.2s" }}>
              <div className={styles.quoteDecor}>&ldquo;</div>
              <p className={styles.quoteText}>I tried willpower, patches, and gums to quit smoking. Nothing worked because I was fighting my own mind. Piers rewired the habit at the root. I haven&rsquo;t craved a cigarette since.</p>
              <div className={styles.quoteStars}>★★★★★</div>
              <div className={styles.quoteAttrib}>
                <span className={styles.quoteName}>James R.</span>
                <span className={styles.quotePlace}>Online Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. THREE-STEP PLAN ── */}
      <section className={styles.planSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} fade-in-up`}>
            <h2 className="text-gradient-light">Three Steps to Reclaim Your Life</h2>
            <p>Taking back control is incredibly simple.</p>
          </div>

          <div className={styles.planGrid}>
            <div className={`${styles.planCard} glass-panel fade-in-up`}>
              <div className={styles.planIcon}><ReachOutIcon /></div>
              <div className={styles.planNum}>01</div>
              <h3>Reach Out Your Way</h3>
              <p>Fill out a quick form, call, or email. Choose the method that feels easiest for you. Zero pressure.</p>
            </div>

            <div className={styles.planConnector} aria-hidden="true">
              <svg viewBox="0 0 60 24" fill="none">
                <path d="M 0 12 Q 30 2 60 12" stroke="rgba(107,174,138,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="3 4"/>
                <polygon points="57,8 60,12 57,16" fill="rgba(107,174,138,0.35)"/>
              </svg>
            </div>

            <div className={`${styles.planCard} glass-panel fade-in-up`} style={{ animationDelay: "0.2s" }}>
              <div className={styles.planIcon}><ReviewIcon /></div>
              <div className={styles.planNum}>02</div>
              <h3>Free Intake Review</h3>
              <p>We figure out exactly what your problem is, why you are stuck, and how we can solve it for you.</p>
            </div>

            <div className={styles.planConnector} aria-hidden="true">
              <svg viewBox="0 0 60 24" fill="none">
                <path d="M 0 12 Q 30 2 60 12" stroke="rgba(107,174,138,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="3 4"/>
                <polygon points="57,8 60,12 57,16" fill="rgba(107,174,138,0.35)"/>
              </svg>
            </div>

            <div className={`${styles.planCard} glass-panel fade-in-up`} style={{ animationDelay: "0.4s" }}>
              <div className={styles.planIcon}><PlanIcon /></div>
              <div className={styles.planNum}>03</div>
              <h3>Get Your Plan &amp; Tools</h3>
              <p>You&rsquo;ll walk away with a clear plan and the mental equipment to support you so you can finally thrive.</p>
            </div>
          </div>

          <div className={`${styles.planCta} fade-in-up`} style={{ animationDelay: "0.6s" }}>
            <Link href="/contact" className="btn btn-primary pulse">Let&rsquo;s Talk Today</Link>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner} fade-in-up`}>
          <h2 className="text-gradient-light">Stop letting your mind hold you back.</h2>
          <p>
            If you are struggling with anxiety, addiction, or limiting beliefs, we want to be absolutely clear:{" "}
            <strong>reaching out is the right decision</strong>. Don&rsquo;t waste another year trying to survive on your own. Let us help you win.
          </p>
          <Link href="/contact" className="btn btn-primary pulse">Yes, I Want to Take Control</Link>
        </div>
      </section>
    </>
  );
}
