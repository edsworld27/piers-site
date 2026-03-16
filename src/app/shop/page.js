"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useCart } from "../components/CartContext";
import styles from "./shop.module.css";
import drawerStyles from "./drawer.module.css";

/* ─────────────────────────────────────────────────────────────────
   PRODUCT ILLUSTRATIONS
───────────────────────────────────────────────────────────────── */

function SleepIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      <circle cx="112" cy="92" r="86" fill="rgba(201,144,106,0.07)"/>
      <circle cx="110" cy="90" r="46" fill="rgba(240,235,220,0.82)"/>
      <circle cx="136" cy="80" r="42" fill="#08111E"/>
      <circle cx="110" cy="90" r="46" fill="none" stroke="rgba(240,235,220,0.25)" strokeWidth="3"/>
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
      <circle cx="110" cy="90" r="68" stroke="rgba(240,235,220,0.05)" strokeWidth="1"/>
      <circle cx="110" cy="90" r="82" stroke="rgba(240,235,220,0.03)" strokeWidth="1"/>
    </svg>
  );
}

function AnxietyIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      <circle cx="70" cy="90" r="70" fill="rgba(94,155,181,0.06)"/>
      <circle cx="210" cy="90" r="70" fill="rgba(107,174,138,0.07)"/>
      <line x1="140" y1="20" x2="140" y2="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <polyline points="20,90 36,55 50,118 64,38 78,132 92,62 106,90" stroke="rgba(94,155,181,0.6)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <path d="M 154 90 Q 170 58 188 90 Q 206 122 224 90 Q 242 58 260 90" stroke="rgba(107,174,138,0.82)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <text x="62"  y="170" fill="rgba(94,155,181,0.45)"  fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.5" textAnchor="middle">BEFORE</text>
      <text x="207" y="170" fill="rgba(107,174,138,0.55)" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.5" textAnchor="middle">AFTER</text>
    </svg>
  );
}

function ConfidenceIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      <line x1="44"  y1="148" x2="84"  y2="148" stroke="rgba(107,174,138,0.2)"  strokeWidth="2" strokeLinecap="round"/>
      <line x1="64"  y1="130" x2="116" y2="130" stroke="rgba(107,174,138,0.3)"  strokeWidth="2" strokeLinecap="round"/>
      <line x1="86"  y1="112" x2="148" y2="112" stroke="rgba(107,174,138,0.42)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="108" y1="94"  x2="180" y2="94"  stroke="rgba(107,174,138,0.55)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="130" y1="76"  x2="212" y2="76"  stroke="rgba(107,174,138,0.68)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="152" y1="58"  x2="244" y2="58"  stroke="rgba(107,174,138,0.82)" strokeWidth="3"   strokeLinecap="round"/>
      <line x1="84"  y1="148" x2="84"  y2="130" stroke="rgba(107,174,138,0.18)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="116" y1="130" x2="116" y2="112" stroke="rgba(107,174,138,0.28)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="148" y1="112" x2="148" y2="94"  stroke="rgba(107,174,138,0.38)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="180" y1="94"  x2="180" y2="76"  stroke="rgba(107,174,138,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="212" y1="76"  x2="212" y2="58"  stroke="rgba(107,174,138,0.62)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="244" cy="42" r="10" fill="rgba(107,174,138,0.15)" stroke="#6BAE8A" strokeWidth="1.5"/>
      <polyline points="239,47 244,38 249,47" stroke="#6BAE8A" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <circle cx="244" cy="58" r="28" fill="rgba(107,174,138,0.07)"/>
    </svg>
  );
}

function SmokingIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      <rect x="24"  y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.55)" strokeWidth="2.5" fill="rgba(107,174,138,0.04)"/>
      <rect x="74"  y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.55)" strokeWidth="2.5" fill="rgba(107,174,138,0.04)"/>
      <rect x="124" y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.45)" strokeWidth="2.5" fill="rgba(107,174,138,0.04)"/>
      <line x1="162" y1="90" x2="178" y2="90" stroke="rgba(201,144,106,0.3)" strokeWidth="2" strokeDasharray="3 3"/>
      <rect x="180" y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.2)" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
      <rect x="230" y="72" width="38" height="36" rx="18" stroke="rgba(107,174,138,0.12)" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
      <circle cx="170" cy="90" r="16" fill="rgba(201,144,106,0.1)" stroke="rgba(201,144,106,0.4)" strokeWidth="1.5"/>
      <line x1="163" y1="83" x2="177" y2="97" stroke="#C4906A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="177" y1="83" x2="163" y2="97" stroke="#C4906A" strokeWidth="2.5" strokeLinecap="round"/>
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
      <circle cx="140" cy="88" r="75" fill="rgba(107,174,138,0.05)"/>
      <path d="M 140 130 C 80 100 58 68 70 50 C 80 34 104 36 140 62 C 176 36 200 34 210 50 C 222 68 200 100 140 130 Z" fill="rgba(107,174,138,0.1)" stroke="rgba(107,174,138,0.55)" strokeWidth="2"/>
      <path d="M 140 116 C 96 94 78 72 86 58 C 93 46 112 48 140 70 C 168 48 187 46 194 58 C 202 72 184 94 140 116 Z" fill="rgba(107,174,138,0.06)" stroke="rgba(107,174,138,0.25)" strokeWidth="1"/>
      <circle cx="140" cy="82" r="20" fill="rgba(107,174,138,0.12)"/>
      <circle cx="140" cy="82" r="6"  fill="rgba(107,174,138,0.45)" stroke="#6BAE8A" strokeWidth="1.5"/>
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
      <path d="M 75 90 A 8 8 0 1 0 83 90 A 16 16 0 1 0 59 90 A 24 24 0 1 0 99 90 A 32 32 0 1 0 43 90 A 40 40 0 1 1 115 90" stroke="rgba(94,155,181,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 118 90 Q 130 80 142 90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
      <path d="M 148 90 Q 162 66 178 90 Q 194 114 212 90 Q 228 66 248 82" stroke="rgba(107,174,138,0.75)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="248" cy="82" r="5" fill="rgba(107,174,138,0.3)" stroke="#6BAE8A" strokeWidth="1.5"/>
      <circle cx="75"  cy="90" r="48" fill="rgba(94,155,181,0.04)"/>
      <circle cx="200" cy="88" r="55" fill="rgba(107,174,138,0.05)"/>
      <text x="72"  y="158" fill="rgba(94,155,181,0.4)"  fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.5" textAnchor="middle">TENSION</text>
      <text x="210" y="158" fill="rgba(107,174,138,0.5)" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1.5" textAnchor="middle">RELEASE</text>
    </svg>
  );
}

/* Bundle illustrations */
function BundleIllustration({ accent }) {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      <circle cx="140" cy="90" r="72" fill={accent || "rgba(107,174,138,0.06)"}/>
      {/* Stack of tapes */}
      <rect x="86" y="110" width="108" height="28" rx="6" stroke="rgba(107,174,138,0.55)" strokeWidth="1.8" fill="rgba(107,174,138,0.08)"/>
      <rect x="91" y="98"  width="98"  height="28" rx="6" stroke="rgba(107,174,138,0.65)" strokeWidth="1.8" fill="rgba(107,174,138,0.10)"/>
      <rect x="96" y="86"  width="88"  height="28" rx="6" stroke="rgba(107,174,138,0.75)" strokeWidth="2"   fill="rgba(107,174,138,0.12)"/>
      {/* Tape reel circles on top card */}
      <circle cx="124" cy="100" r="8" stroke="rgba(107,174,138,0.7)" strokeWidth="1.5" fill="rgba(107,174,138,0.08)"/>
      <circle cx="124" cy="100" r="3" fill="rgba(107,174,138,0.45)"/>
      <circle cx="156" cy="100" r="8" stroke="rgba(107,174,138,0.7)" strokeWidth="1.5" fill="rgba(107,174,138,0.08)"/>
      <circle cx="156" cy="100" r="3" fill="rgba(107,174,138,0.45)"/>
      <line x1="132" y1="100" x2="148" y2="100" stroke="rgba(107,174,138,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Save ribbon */}
      <circle cx="210" cy="50" r="22" fill="rgba(184,117,46,0.15)" stroke="rgba(184,117,46,0.55)" strokeWidth="1.5"/>
      <text x="210" y="46" fill="rgba(184,117,46,0.95)" fontSize="8" fontFamily="Inter,sans-serif" fontWeight="700" textAnchor="middle">SAVE</text>
      <text x="210" y="58" fill="rgba(184,117,46,0.95)" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="800" textAnchor="middle">25%</text>
    </svg>
  );
}

function MegaBundleIllustration() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.illSvg}>
      <circle cx="140" cy="90" r="80" fill="rgba(196,148,50,0.06)"/>
      {/* 6 mini tapes arranged in 2 rows */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={60 + i*58} y="58" width="46" height="30" rx="5" stroke="rgba(107,174,138,0.6)" strokeWidth="1.5" fill="rgba(107,174,138,0.07)"/>
          <circle cx={60 + i*58 + 14} cy="73" r="6" stroke="rgba(107,174,138,0.55)" strokeWidth="1.2" fill="none"/>
          <circle cx={60 + i*58 + 14} cy="73" r="2.5" fill="rgba(107,174,138,0.45)"/>
          <circle cx={60 + i*58 + 32} cy="73" r="6" stroke="rgba(107,174,138,0.55)" strokeWidth="1.2" fill="none"/>
          <circle cx={60 + i*58 + 32} cy="73" r="2.5" fill="rgba(107,174,138,0.45)"/>
          <line x1={60 + i*58 + 20} y1="73" x2={60 + i*58 + 26} y2="73" stroke="rgba(107,174,138,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
        </g>
      ))}
      {[0,1,2].map(i => (
        <g key={i+'b'}>
          <rect x={60 + i*58} y="98" width="46" height="30" rx="5" stroke="rgba(107,174,138,0.45)" strokeWidth="1.5" fill="rgba(107,174,138,0.05)"/>
          <circle cx={60 + i*58 + 14} cy="113" r="6" stroke="rgba(107,174,138,0.40)" strokeWidth="1.2" fill="none"/>
          <circle cx={60 + i*58 + 14} cy="113" r="2.5" fill="rgba(107,174,138,0.35)"/>
          <circle cx={60 + i*58 + 32} cy="113" r="6" stroke="rgba(107,174,138,0.40)" strokeWidth="1.2" fill="none"/>
          <circle cx={60 + i*58 + 32} cy="113" r="2.5" fill="rgba(107,174,138,0.35)"/>
          <line x1={60 + i*58 + 20} y1="113" x2={60 + i*58 + 26} y2="113" stroke="rgba(107,174,138,0.25)" strokeWidth="1.2" strokeLinecap="round"/>
        </g>
      ))}
      {/* Crown */}
      <path d="M 116 44 L 116 34 L 128 44 L 140 24 L 152 44 L 164 34 L 164 44 Z" stroke="rgba(196,148,50,0.80)" strokeWidth="1.8" fill="rgba(196,148,50,0.10)" strokeLinejoin="round"/>
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
    longDescription: `Most people who can't sleep aren't struggling with their body — they're struggling with their mind. This session works directly with your subconscious to dissolve the racing thoughts, the hyper-vigilance, and the learned pattern of wakefulness.\n\nPiers guides you into a deep hypnotic state, then uses direct suggestion and neurological reset techniques to retrain your sleep association. After repeated listening, your mind begins to treat bedtime as a trigger for rest — not anxiety.\n\nIdeal for: insomnia, stress-related wakefulness, early morning waking, mind-racing at night.`,
    whatYouGet: ["32-minute guided session", "MP3 + WAV download", "Listen as many times as you like", "Works on any device"],
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
    longDescription: `Anxiety isn't a character flaw — it's a misfiring survival mechanism. This session targets the subconscious programs that keep your nervous system stuck in high alert, and systematically resets them to a baseline of calm.\n\nUsing a combination of progressive relaxation, hypnotic suggestion, and mental rehearsal, Piers guides you to experience genuine calm — then anchors that state so you can access it more easily in daily life.\n\nIdeal for: generalised anxiety, social anxiety, panic attacks, overwhelm, nervous tension.`,
    whatYouGet: ["28-minute guided session", "MP3 + WAV download", "Listen as many times as you like", "Works on any device"],
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
    longDescription: `Low confidence isn't something you're born with — it's a story your subconscious learned, usually early in life. This session goes directly to the source, locating and dissolving the root beliefs that fuel self-doubt and replacing them with a stable, grounded sense of self.\n\nPiers uses age regression, belief restructuring, and identity-level suggestion to help you feel different — not just think different. The shift tends to be subtle at first, then compounding.\n\nIdeal for: low self-esteem, imposter syndrome, public speaking fear, social confidence, leadership presence.`,
    whatYouGet: ["24-minute guided session", "MP3 + WAV download", "Listen as many times as you like", "Works on any device"],
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
    longDescription: `Smoking is maintained in the subconscious — which is exactly why willpower alone almost never works. This session delivers the same protocol Piers uses in his clinical one-to-one sessions: a structured hypnotic intervention that severs the subconscious association between smoking and reward, relief, or identity.\n\nMost clients who use this session find the cravings dissolve or feel meaningless after just one listen. For best results, listen once before sleep and once in the first week as a reinforcement.\n\nIdeal for: any smoker ready to stop — no matter how long they've smoked or how many times they've tried before.`,
    whatYouGet: ["45-minute guided session", "MP3 + WAV download", "Reinforcement track included", "Works on any device"],
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
    longDescription: `Emotional eating isn't about food — it's about feelings that have no other outlet. This session identifies the emotional triggers behind the eating pattern and resolves them at the subconscious level, so food stops feeling like a coping mechanism.\n\nRather than focusing on restriction or willpower, Piers helps you rebuild a neutral, healthy relationship with food — where eating becomes simple and natural again.\n\nIdeal for: comfort eating, binge eating, stress eating, sugar cravings, weight loss struggles rooted in emotion rather than habit.`,
    whatYouGet: ["30-minute guided session", "MP3 + WAV download", "Listen as many times as you like", "Works on any device"],
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
    longDescription: `When you're deep in stress, your prefrontal cortex goes offline — which is exactly when you need it most. This session bypasses the conscious mind and speaks directly to the nervous system, triggering the parasympathetic response and flushing out the accumulated tension.\n\nShort enough to fit in a lunch break, powerful enough to genuinely reset your state. Many clients use this weekly as a maintenance tool, or on particularly high-pressure days.\n\nIdeal for: work stress, burnout, deadline pressure, general overwhelm, anyone who just needs to decompress properly.`,
    whatYouGet: ["22-minute guided session", "MP3 + WAV download", "Listen as many times as you like", "Works on any device"],
    duration: "22 min",
    price: "£19.99",
    badge: "Quick Session",
    Illustration: StressIllustration,
    accent: "rgba(94,155,181,0.1)",
  },
];

const BUNDLES = [
  {
    id: "bundle-calm-sleep",
    title: "The Calm & Sleep Reset",
    category: "Bundle · 2 sessions",
    description: "Anxiety and poor sleep feed each other in a loop. This bundle breaks both at once — calming the nervous system by day and resetting sleep patterns by night.",
    longDescription: `Anxiety and insomnia are two of the most common complaints Piers sees in clinic — and they almost always arrive together. The racing mind that drives anxiety is the same mind that refuses to switch off at bedtime.\n\nThis bundle pairs The Anxiety Off Switch with Deep Sleep Reset for a complete nervous system reset. Use the anxiety session during the day or early evening, and the sleep session right before bed. Within a week, most clients notice a meaningful shift in both.\n\nWhat's included:\n• The Anxiety Off Switch (28 min)\n• Deep Sleep Reset (32 min)\n\nTotal combined value: £49.98`,
    whatYouGet: ["The Anxiety Off Switch — 28 min", "Deep Sleep Reset — 32 min", "MP3 + WAV for both", "Save £12.49 vs buying separately"],
    includes: ["anxiety-off-switch", "deep-sleep-reset"],
    duration: "2 sessions",
    price: "£37.49",
    originalPrice: "£49.98",
    badge: "Save 25%",
    Illustration: BundleIllustration,
    illustrationProps: { accent: "rgba(94,155,181,0.10)" },
    accent: "rgba(94,155,181,0.10)",
    isBundle: true,
  },
  {
    id: "bundle-confidence-stress",
    title: "The Clarity Collection",
    category: "Bundle · 2 sessions",
    description: "Feel clearer, calmer, and more in control. Confidence Unlocked and Stress Dissolve work together to clear the mental fog and rebuild your sense of self.",
    longDescription: `Stress erodes confidence, and low confidence amplifies stress — they spiral together. This bundle tackles both sides of that equation.\n\nStress Dissolve resets your nervous system when it's overwhelmed. Confidence Unlocked rebuilds the subconscious identity that stress chips away at. Used together, they create a foundation of calm self-assurance that holds even under pressure.\n\nWhat's included:\n• Confidence Unlocked (24 min)\n• Stress Dissolve (22 min)\n\nTotal combined value: £44.98`,
    whatYouGet: ["Confidence Unlocked — 24 min", "Stress Dissolve — 22 min", "MP3 + WAV for both", "Save £11.24 vs buying separately"],
    includes: ["confidence-unlocked", "stress-dissolve"],
    duration: "2 sessions",
    price: "£33.74",
    originalPrice: "£44.98",
    badge: "Save 25%",
    Illustration: BundleIllustration,
    illustrationProps: { accent: "rgba(107,174,138,0.10)" },
    accent: "rgba(107,174,138,0.10)",
    isBundle: true,
  },
  {
    id: "bundle-complete",
    title: "The Complete Mind Library",
    category: "Bundle · All 6 sessions",
    description: "Every session Piers has recorded. Sleep, anxiety, confidence, smoking, eating, and stress — the full toolkit for lasting subconscious change.",
    longDescription: `This is everything. All six clinical hypnotherapy sessions in a single collection — the complete audio library from Piers Day's practice.\n\nWhether you're working on one specific issue or want a comprehensive toolkit for your mental wellbeing, this bundle gives you lifetime access to every session. Use them one at a time, or cycle through them as your needs shift.\n\nWhat's included:\n• The Anxiety Off Switch (28 min)\n• Deep Sleep Reset (32 min)\n• Confidence Unlocked (24 min)\n• Break Free: Stop Smoking (45 min)\n• Emotional Eating Release (30 min)\n• Stress Dissolve (22 min)\n\nTotal combined value: £164.94`,
    whatYouGet: ["All 6 sessions (181 min total)", "MP3 + WAV for every session", "Lifetime download access", "Save over £41 vs buying separately"],
    includes: ["anxiety-off-switch","deep-sleep-reset","confidence-unlocked","break-free-stop-smoking","emotional-eating-release","stress-dissolve"],
    duration: "6 sessions",
    price: "£124.99",
    originalPrice: "£164.94",
    badge: "Best Value",
    Illustration: MegaBundleIllustration,
    illustrationProps: {},
    accent: "rgba(196,148,50,0.10)",
    isBundle: true,
  },
];

/* ─────────────────────────────────────────────────────────────────
   PRODUCT DRAWER
───────────────────────────────────────────────────────────────── */

function ProductDrawer({ product, onClose, onAddToCart, addedId }) {
  const isOpen = !!product;

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!product) return null;

  const { title, category, longDescription, whatYouGet, price, originalPrice, badge, Illustration, illustrationProps, accent, isBundle, includes: bundleIds } = product;
  const isAdded = addedId === product.id;

  const paragraphs = longDescription.split("\n\n");

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${drawerStyles.backdrop} ${isOpen ? drawerStyles.backdropOpen : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`${drawerStyles.drawer} ${isOpen ? drawerStyles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Close button */}
        <button className={drawerStyles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className={drawerStyles.drawerInner}>
          {/* Illustration */}
          <div className={drawerStyles.illBlock} style={{ background: accent }}>
            {badge && <div className={drawerStyles.badge}>{badge}</div>}
            <Illustration {...(illustrationProps || {})} />
          </div>

          {/* Content */}
          <div className={drawerStyles.content}>
            <span className={drawerStyles.category}>{category}</span>
            <h2 className={drawerStyles.title}>{title}</h2>

            <div className={drawerStyles.priceRow}>
              <span className={drawerStyles.price}>{price}</span>
              {originalPrice && (
                <span className={drawerStyles.originalPrice}>{originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <div className={drawerStyles.description}>
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* What you get */}
            <div className={drawerStyles.whatYouGet}>
              <h4>What&rsquo;s included</h4>
              <ul>
                {whatYouGet.map((item, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bundle includes */}
            {isBundle && bundleIds && (
              <div className={drawerStyles.bundleItems}>
                <h4>Sessions in this bundle</h4>
                <div className={drawerStyles.bundleList}>
                  {bundleIds.map(id => {
                    const p = PRODUCTS.find(p => p.id === id);
                    return p ? (
                      <div key={id} className={drawerStyles.bundleItem}>
                        <span className={drawerStyles.bundleItemTitle}>{p.title}</span>
                        <span className={drawerStyles.bundleItemMeta}>{p.duration} · {p.price}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <button
              className={`${drawerStyles.addBtn}${isAdded ? ` ${drawerStyles.addBtnAdded}` : ""}`}
              onClick={() => onAddToCart(product)}
            >
              {isAdded ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Added to basket
                </>
              ) : (
                `Add to Basket — ${price}`
              )}
            </button>

            <Link href="/cart" className={drawerStyles.viewCart} onClick={onClose}>
              View basket →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────── */

export default function ShopPage() {
  const [addedId, setAddedId] = useState(null);
  const [openProduct, setOpenProduct] = useState(null);
  const { addItem } = useCart();

  const handleAddToCart = useCallback((product) => {
    const cartItem = product.isBundle
      ? { id: product.id, title: product.title, price: product.price, duration: product.duration }
      : { id: product.id, title: product.title, price: product.price, duration: product.duration };
    addItem(cartItem);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  }, [addItem]);

  const openDrawer = useCallback((product) => setOpenProduct(product), []);
  const closeDrawer = useCallback(() => setOpenProduct(null), []);

  const renderCard = (product, i, isBundle = false) => {
    const { id, title, category, description, duration, price, originalPrice, badge, Illustration, illustrationProps, accent } = product;
    const isAdded = addedId === id;
    return (
      <div
        key={id}
        className={`${styles.card} ${isBundle ? styles.bundleCard : ""} glass-panel fade-in-up`}
        style={{ animationDelay: `${i * 0.08}s`, cursor: "pointer" }}
        onClick={() => openDrawer(product)}
      >
        {badge && <div className={styles.badge}>{badge}</div>}

        <div className={styles.illWrapper} style={{ background: accent || "rgba(107,174,138,0.05)" }}>
          <Illustration {...(illustrationProps || {})} />
        </div>

        <div className={styles.cardBody}>
          <span className={styles.category}>{category}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDesc}>{description}</p>

          {!product.isBundle && (
            <div className={styles.cardMeta}>
              <span className={styles.duration}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {duration}
              </span>
              <span className={styles.format}>MP3 + WAV</span>
            </div>
          )}
        </div>

        <div className={styles.cardFooter}>
          <div>
            <span className={styles.price}>{price}</span>
            {originalPrice && <span className={styles.originalPrice}>{originalPrice}</span>}
          </div>
          <button
            className={`${styles.buyBtn}${isAdded ? ` ${styles.buyBtnAdded}` : ""}`}
            onClick={e => { e.stopPropagation(); handleAddToCart(product); }}
          >
            {isAdded ? (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Added
              </>
            ) : (
              "Add to Basket →"
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className={styles.main}>

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
              Clinical-grade hypnotherapy sessions recorded by Piers — the same techniques used in his clinic, available for instant download.
            </p>
            <div className={styles.trustRow}>
              <span className={styles.trustChip}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Secure checkout
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

      {/* ── Individual Sessions ── */}
      <section className={styles.productsSection}>
        <div className="container">
          <h2 className={styles.productsSectionTitle}>Individual Sessions</h2>
          <p className={styles.sectionSubtitle}>Click any session for full details</p>
          <div className={styles.grid}>
            {PRODUCTS.map((product, i) => renderCard(product, i, false))}
          </div>
        </div>
      </section>

      {/* ── Bundles ── */}
      <section className={styles.productsSection} style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className={styles.productsSectionTitle}>Bundles &amp; Collections</h2>
          <p className={styles.sectionSubtitle}>Save up to 25% with a curated bundle</p>
          <div className={`${styles.grid} ${styles.bundleGrid}`}>
            {BUNDLES.map((bundle, i) => renderCard(bundle, i, true))}
          </div>
        </div>
      </section>

      {/* ── About section ── */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={`${styles.aboutText} fade-in-up`}>
            <span className="eyebrow">Why audio sessions work</span>
            <h2 className="text-gradient-sage">Clinical technique. Your own home.</h2>
            <p>Every recording follows the same therapeutic protocol Piers uses in his Suffolk clinic. In a relaxed hypnotic state, your subconscious becomes receptive — meaning the session reaches the 90% of your mind that logic and willpower can&rsquo;t touch.</p>
            <p>No special equipment. No experience needed. Just find a quiet 20–45 minutes, put in your headphones, and let the session do the work.</p>
            <Link href="/about" className="btn btn-secondary" style={{ marginTop: "0.5rem", display: "inline-flex" }}>
              Learn about the method →
            </Link>
          </div>
          <div className={`${styles.aboutFeatures} fade-in-up`} style={{ animationDelay: "0.15s" }}>
            {[
              { icon: "🎧", title: "Same protocol as the clinic",      desc: "Word-for-word the session Piers delivers in person."        },
              { icon: "🔁", title: "Listen as many times as you like", desc: "Download once. The more you listen, the deeper it goes."    },
              { icon: "📱", title: "Works on any device",              desc: "Phone, tablet, laptop — wherever you find your quiet."      },
              { icon: "🔒", title: "Private & confidential",           desc: "Your purchase and listening are entirely your own."         },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={`${styles.featureItem} glass-panel`}>
                <span className={styles.featureIcon}>{icon}</span>
                <div>
                  <h4 className={styles.featureTitle}>{title}</h4>
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
          <h2 className="text-gradient-sage">Prefer a live session?</h2>
          <p>Audio recordings are powerful — but nothing replaces working directly with Piers. If you&rsquo;d like a personalised in-person or Zoom session, get in touch.</p>
          <Link href="/contact" className="btn btn-primary pulse">Book a Session with Piers</Link>
        </div>
      </section>

      {/* ── Product drawer ── */}
      <ProductDrawer
        product={openProduct}
        onClose={closeDrawer}
        onAddToCart={handleAddToCart}
        addedId={addedId}
      />

    </main>
  );
}
