"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./shop.module.css";

/* ─────────────────────────────────────────────────────────────────
   PRODUCT ILLUSTRATIONS — one unique SVG per tape
───────────────────────────────────────────────────────────────── */

function SleepIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      {/* Ambient warm glow */}
      <circle cx="112" cy="92" r="86" fill="rgba(201,144,106,0.07)"/>
      {/* Moon body */}
      <circle cx="110" cy="90" r="46" fill="rgba(240,235,220,0.82)"/>
      {/* Mask — creates crescent */}
      <circle cx="136" cy="80" r="42" fill="#08111E"/>
      {/* Soft inner glow on crescent edge */}
      <circle cx="110" cy="90" r="46" fill="none" stroke="rgba(240,235,220,0.25)" strokeWidth="3"/>
      {/* Stars */}
      <circle cx="200" cy="42"  r="2.2" fill="rgba(240,235,220,0.7)"/>
      <circle cx="236" cy="68"  r="1.5" fill="rgba(240,235,220,0.5)"/>
      <circle cx="225" cy="108" r="1.2" fill="rgba(240,235,220,0.4)"/>
      <circle cx="178" cy="32"  r="1"   fill="rgba(240,235,220,0.6)"/>
      <circle cx="254" cy="90"  r="1.8" fill="rgba(240,235,220,0.45)"/>
      <circle cx="192" cy="148" r="1.2" fill="rgba(240,235,220,0.3)"/>
      <circle cx="58"  cy="38"  r="1"   fill="rgba(240,235,220,0.35)"/>
      <circle cx="42"  cy="134" r="1.5" fill="rgba(240,235,220,0.22)"/>
      <circle cx="248" cy="138" r="1"   fill="rgba(240,235,220,0.38)"/>
      <circle cx="166" cy="158" r="0.8" fill="rgba(240,235,220,0.28)"/>
      {/* Faint orbit rings */}
      <circle cx="110" cy="90" r="68" stroke="rgba(240,235,220,0.05)" strokeWidth="1"/>
      <circle cx="110" cy="90" r="82" stroke="rgba(240,235,220,0.03)" strokeWidth="1"/>
    </svg>
  );
}

function AnxietyIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      {/* Left ambient */}
      <circle cx="70" cy="90" r="70" fill="rgba(94,155,181,0.06)"/>
      {/* Right ambient */}
      <circle cx="210" cy="90" r="70" fill="rgba(107,174,138,0.07)"/>
      {/* Divider */}
      <line x1="140" y1="20" x2="140" y2="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      {/* Turbulent zigzag — left */}
      <polyline
        points="20,90 36,55 50,118 64,38 78,132 92,62 106,90"
        stroke="rgba(94,155,181,0.6)" strokeWidth="2" strokeLinejoin="round" fill="none"
      />
      {/* Smooth calm wave — right */}
      <path
        d="M 154 90 Q 170 58 188 90 Q 206 122 224 90 Q 242 58 260 90"
        stroke="rgba(107,174,138,0.82)" strokeWidth="2.5" fill="none" strokeLinecap="round"
      />
      {/* Labels */}
      <text x="62"  y="170" fill="rgba(94,155,181,0.45)"  fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.5" textAnchor="middle">BEFORE</text>
      <text x="207" y="170" fill="rgba(107,174,138,0.55)" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.5" textAnchor="middle">AFTER</text>
    </svg>
  );
}

function ConfidenceIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      {/* Ascending steps — lines that grow brighter */}
      <line x1="44"  y1="148" x2="84"  y2="148" stroke="rgba(107,174,138,0.2)"  strokeWidth="2" strokeLinecap="round"/>
      <line x1="64"  y1="130" x2="116" y2="130" stroke="rgba(107,174,138,0.3)"  strokeWidth="2" strokeLinecap="round"/>
      <line x1="86"  y1="112" x2="148" y2="112" stroke="rgba(107,174,138,0.42)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="108" y1="94"  x2="180" y2="94"  stroke="rgba(107,174,138,0.55)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="130" y1="76"  x2="212" y2="76"  stroke="rgba(107,174,138,0.68)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="152" y1="58"  x2="244" y2="58"  stroke="rgba(107,174,138,0.82)" strokeWidth="3"   strokeLinecap="round"/>
      {/* Vertical risers */}
      <line x1="84"  y1="148" x2="84"  y2="130" stroke="rgba(107,174,138,0.18)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="116" y1="130" x2="116" y2="112" stroke="rgba(107,174,138,0.28)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="148" y1="112" x2="148" y2="94"  stroke="rgba(107,174,138,0.38)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="180" y1="94"  x2="180" y2="76"  stroke="rgba(107,174,138,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="212" y1="76"  x2="212" y2="58"  stroke="rgba(107,174,138,0.62)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Arrow at top */}
      <circle cx="244" cy="42" r="10" fill="rgba(107,174,138,0.15)" stroke="#6BAE8A" strokeWidth="1.5"/>
      <polyline points="239,47 244,38 249,47" stroke="#6BAE8A" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      {/* Glow */}
      <circle cx="244" cy="58" r="28" fill="rgba(107,174,138,0.07)"/>
    </svg>
  );
}

function SmokingIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      {/* Chain links — left */}
      <rect x="24"  y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.55)" strokeWidth="2.5" fill="rgba(107,174,138,0.04)"/>
      <rect x="74"  y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.55)" strokeWidth="2.5" fill="rgba(107,174,138,0.04)"/>
      <rect x="124" y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.45)" strokeWidth="2.5" fill="rgba(107,174,138,0.04)"/>
      {/* Break gap */}
      <line x1="162" y1="90" x2="178" y2="90" stroke="rgba(201,144,106,0.3)" strokeWidth="2" strokeDasharray="3 3"/>
      {/* Chain link right — faded/broken */}
      <rect x="180" y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.2)" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
      <rect x="230" y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.12)" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
      {/* Break × mark */}
      <circle cx="170" cy="90" r="16" fill="rgba(201,144,106,0.1)" stroke="rgba(201,144,106,0.4)" strokeWidth="1.5"/>
      <line x1="163" y1="83" x2="177" y2="97" stroke="#C4906A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="177" y1="83" x2="163" y2="97" stroke="#C4906A" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Sparks */}
      <circle cx="155" cy="72" r="2"   fill="rgba(201,144,106,0.7)"/>
      <circle cx="185" cy="70" r="1.5" fill="rgba(201,144,106,0.6)"/>
      <circle cx="172" cy="62" r="1.5" fill="rgba(201,144,106,0.5)"/>
      <circle cx="160" cy="108" r="1.5" fill="rgba(201,144,106,0.5)"/>
      <circle cx="182" cy="112" r="2"   fill="rgba(201,144,106,0.4)"/>
    </svg>
  );
}

function EatingIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      {/* Outer glow */}
      <circle cx="140" cy="88" r="75" fill="rgba(107,174,138,0.05)"/>
      {/* Heart shape — two arcs + bottom point */}
      <path
        d="M 140 130 C 80 100 58 68 70 50 C 80 34 104 36 140 62 C 176 36 200 34 210 50 C 222 68 200 100 140 130 Z"
        fill="rgba(107,174,138,0.1)" stroke="rgba(107,174,138,0.55)" strokeWidth="2"
      />
      {/* Inner lighter heart */}
      <path
        d="M 140 116 C 96 94 78 72 86 58 C 93 46 112 48 140 70 C 168 48 187 46 194 58 C 202 72 184 94 140 116 Z"
        fill="rgba(107,174,138,0.06)" stroke="rgba(107,174,138,0.25)" strokeWidth="1"
      />
      {/* Center glow */}
      <circle cx="140" cy="82" r="20" fill="rgba(107,174,138,0.12)"/>
      <circle cx="140" cy="82" r="6"  fill="rgba(107,174,138,0.45)" stroke="#6BAE8A" strokeWidth="1.5"/>
      {/* Orbiting dots */}
      <circle cx="106" cy="60" r="3"  fill="rgba(107,174,138,0.4)"/>
      <circle cx="174" cy="60" r="3"  fill="rgba(107,174,138,0.4)"/>
      <circle cx="98"  cy="96" r="2.5" fill="rgba(107,174,138,0.3)"/>
      <circle cx="182" cy="96" r="2.5" fill="rgba(107,174,138,0.3)"/>
    </svg>
  );
}

function StressIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      {/* Tight coiled spiral — left side */}
      <path
        d="M 75 90
           A 8 8 0 1 0 83 90
           A 16 16 0 1 0 59 90
           A 24 24 0 1 0 99 90
           A 32 32 0 1 0 43 90
           A 40 40 0 1 1 115 90"
        stroke="rgba(94,155,181,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />
      {/* Transition arrow */}
      <path d="M 118 90 Q 130 80 142 90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
      {/* Unwinding — open relaxed curves right side */}
      <path
        d="M 148 90 Q 162 66 178 90 Q 194 114 212 90 Q 228 66 248 82"
        stroke="rgba(107,174,138,0.75)" strokeWidth="2.5" fill="none" strokeLinecap="round"
      />
      {/* End dot — calm */}
      <circle cx="248" cy="82" r="5" fill="rgba(107,174,138,0.3)" stroke="#6BAE8A" strokeWidth="1.5"/>
      {/* Ambiience */}
      <circle cx="75"  cy="90" r="48" fill="rgba(94,155,181,0.04)"/>
      <circle cx="200" cy="88" r="55" fill="rgba(107,174,138,0.05)"/>
      {/* Labels */}
      <text x="72"  y="158" fill="rgba(94,155,181,0.4)"  fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.5" textAnchor="middle">TENSION</text>
      <text x="210" y="158" fill="rgba(107,174,138,0.5)" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.5" textAnchor="middle">RELEASE</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: "deep-sleep-reset",
    title: "Deep Sleep Reset",
    category: "Sleep & Recovery",
    description: "Dissolve the mental noise that keeps you awake. Guided hypnotherapy that retrains your nervous system to fall asleep fast and wake up restored.",
    duration: "32 min",
    price: "£24.99",
    badge: null,
    Illustration: SleepIllustration,
    accent: "rgba(201,144,106,0.12)",
  },
  {
    id: "anxiety-off-switch",
    title: "The Anxiety Off Switch",
    category: "Anxiety & Stress",
    description: "Switch off the fight-or-flight response and train your nervous system to default to calm. Works in the moment and builds lasting resilience.",
    duration: "28 min",
    price: "£24.99",
    badge: "Bestseller",
    Illustration: AnxietyIllustration,
    accent: "rgba(94,155,181,0.12)",
  },
  {
    id: "confidence-unlocked",
    title: "Confidence Unlocked",
    category: "Confidence & Focus",
    description: "Dismantle the subconscious beliefs that make you feel small. Walk into any room knowing your own worth — and meaning it.",
    duration: "24 min",
    price: "£24.99",
    badge: null,
    Illustration: ConfidenceIllustration,
    accent: "rgba(107,174,138,0.12)",
  },
  {
    id: "break-free-stop-smoking",
    title: "Break Free: Stop Smoking",
    category: "Addiction Release",
    description: "The complete audio session Piers uses in clinic. One listen rewires the habit at its root — no patches, no willpower, no cravings.",
    duration: "45 min",
    price: "£34.99",
    badge: "Most Popular",
    Illustration: SmokingIllustration,
    accent: "rgba(201,144,106,0.14)",
  },
  {
    id: "emotional-eating-release",
    title: "Emotional Eating Release",
    category: "Weight & Eating",
    description: "End the cycle of comfort eating by resolving the emotional trigger behind it. Rebuild a peaceful, natural relationship with food.",
    duration: "30 min",
    price: "£24.99",
    badge: null,
    Illustration: EatingIllustration,
    accent: "rgba(107,174,138,0.1)",
  },
  {
    id: "stress-dissolve",
    title: "Stress Dissolve",
    category: "Stress & Burnout",
    description: "A fast-acting session for high-pressure days. 22 minutes to reset your nervous system, clear your head, and come back to yourself.",
    duration: "22 min",
    price: "£19.99",
    badge: "Quick Session",
    Illustration: StressIllustration,
    accent: "rgba(94,155,181,0.1)",
  },
];

/* ─────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────── */

export default function ShopPage() {
  const [clickedId, setClickedId] = useState(null);
  const [bannerVisible, setBannerVisible] = useState(false);

  const handleBuy = (id) => {
    setClickedId(id);
    setBannerVisible(true);
  };

  return (
    <main className={styles.main}>

      {/* Stripe-coming-soon banner */}
      {bannerVisible && (
        <div className={styles.stripeBanner}>
          <span className={styles.stripeLock}>🔒</span>
          <span>Stripe checkout launching soon — <Link href="/contact" className={styles.bannerLink}>get notified when it goes live</Link></span>
          <button className={styles.bannerClose} onClick={() => { setBannerVisible(false); setClickedId(null); }} aria-label="Dismiss">✕</button>
        </div>
      )}

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroInner} fade-in-up`}>
            <span className="eyebrow">Piers Day Audio Library</span>
            <h1 className={styles.heroTitle}>
              Transform Your Mind.<br/>
              <span className="text-gradient-gold">Anywhere. Anytime.</span>
            </h1>
            <p className={styles.heroSub}>
              Clinical-grade hypnotherapy sessions recorded by Piers — the same techniques used in his clinic, available for instant download. Put them in your ears and let your subconscious do the rest.
            </p>
            {/* Trust chips */}
            <div className={styles.trustRow}>
              <span className={styles.trustChip}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Secure checkout · Stripe
              </span>
              <span className={styles.trustChip}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Instant digital download
              </span>
              <span className={styles.trustChip}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                HD audio · MP3 &amp; WAV
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.grid}>
            {PRODUCTS.map((product, i) => {
              const { id, title, category, description, duration, price, badge, Illustration, accent } = product;
              const isAdded = clickedId === id;
              return (
                <div
                  key={id}
                  className={`${styles.card} glass-panel fade-in-up`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Badge */}
                  {badge && <div className={styles.badge}>{badge}</div>}

                  {/* Illustration area */}
                  <div className={styles.illWrapper} style={{ background: accent || "rgba(107,174,138,0.05)" }}>
                    <Illustration />
                  </div>

                  {/* Content */}
                  <div className={styles.cardBody}>
                    <span className={styles.category}>{category}</span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDesc}>{description}</p>

                    <div className={styles.cardMeta}>
                      <span className={styles.duration}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {duration}
                      </span>
                      <span className={styles.format}>MP3 + WAV</span>
                    </div>
                  </div>

                  {/* Purchase row */}
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{price}</span>
                    <button
                      className={`${styles.buyBtn}${isAdded ? ` ${styles.buyBtnAdded}` : ""}`}
                      onClick={() => handleBuy(id)}
                    >
                      {isAdded ? (
                        <>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          Added
                        </>
                      ) : (
                        "Buy Now →"
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About section ── */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={`${styles.aboutText} fade-in-up`}>
            <span className="eyebrow">Why audio sessions work</span>
            <h2 className="text-gradient-light">Clinical technique. Your own home.</h2>
            <p>Every recording follows the same therapeutic protocol Piers uses in his Suffolk clinic. In a relaxed hypnotic state, your subconscious becomes receptive — meaning the session reaches the 90% of your mind that logic and willpower can&rsquo;t touch.</p>
            <p>No special equipment. No experience needed. Just find a quiet 20–45 minutes, put in your headphones, and let the session do the work.</p>
            <Link href="/about" className="btn btn-secondary" style={{ marginTop: "0.5rem", display: "inline-flex" }}>
              Learn about the method →
            </Link>
          </div>
          <div className={`${styles.aboutFeatures} fade-in-up`} style={{ animationDelay: "0.15s" }}>
            {[
              { icon: "🎧", title: "Same protocol as the clinic",    desc: "Word-for-word the session Piers delivers in person."       },
              { icon: "🔁", title: "Listen as many times as you like", desc: "Download once. The more you listen, the deeper it goes." },
              { icon: "📱", title: "Works on any device",            desc: "Phone, tablet, laptop — wherever you find your quiet."     },
              { icon: "🔒", title: "Private & confidential",         desc: "Your purchase and listening are entirely your own."       },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={`${styles.featureItem} glass-panel`}>
                <span className={styles.featureIcon}>{icon}</span>
                <div>
                  <div className={styles.featureTitle}>{title}</div>
                  <div className={styles.featureDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner} fade-in-up`}>
          <h2 className="text-gradient-light">Prefer a live session?</h2>
          <p>Audio recordings are powerful — but nothing replaces working directly with Piers. If you&rsquo;d like a personalised in-person or Zoom session, get in touch.</p>
          <Link href="/contact" className="btn btn-primary pulse">Book a Session with Piers</Link>
        </div>
      </section>

    </main>
  );
}
