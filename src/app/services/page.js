"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import "./services.css";

/* ── Category icons ─────────────────────────────────────────────── */
const ICONS = {
  anxiety:       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4M12 16h.01"/></svg>,
  anger:         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M18.364 5.636a9 9 0 1 1-12.728 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>,
  business:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  children:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  confidence:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  habits:        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  health:        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  hypnobirthing: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  phobias:       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  relationships: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  sleep:         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  speech:        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  smoking:       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="15" x2="22" y2="15"/><line x1="2" y1="19" x2="22" y2="19"/><path d="M16 11V9a4 4 0 0 0-4-4"/><path d="M20 11V9a8 8 0 0 0-8-8"/></svg>,
  trauma:        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  weight:        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.38L2.5 17h19l-2.095-7.62A2 2 0 0 0 17.5 8z"/></svg>,
};

/* ── Featured services (link to sub-pages) ──────────────────────── */
const FEATURED = [
  {
    href: "/services/anxiety",
    label: "Anxiety & Panic",
    desc: "Panic attacks, GAD, social anxiety, OCD, and every flavour of overwhelm — treated at the root.",
    id: "anxiety",
  },
  {
    href: "/services/stop-smoking",
    label: "Stop Smoking",
    desc: "One intensive session. No patches. No willpower. The single most effective thing you can do for your health.",
    id: "smoking",
  },
  {
    href: "/services/weight-loss",
    label: "Weight Management",
    desc: "Change what you want — not just what you're allowed. The only approach that produces lasting results.",
    id: "weight",
  },
  {
    href: "/services/confidence",
    label: "Confidence & Self-Worth",
    desc: "Imposter syndrome, people-pleasing, public speaking terror — build the inner foundation that changes everything.",
    id: "confidence",
  },
];

/* ── Full conditions by category ────────────────────────────────── */
const CATEGORIES = [
  {
    id: "anxiety",
    label: "Anxiety & Depression",
    items: [
      "Generalised anxiety disorder (GAD)",
      "Panic attacks",
      "Social anxiety",
      "Health anxiety",
      "Depression (mild to moderate)",
      "Low mood & emotional flatness",
      "Burnout & exhaustion",
      "Stress management",
      "Intrusive thoughts",
      "Constant overthinking",
      "Dark or suicidal thoughts",
      "Emotional overwhelm",
      "Morning anxiety",
      "Performance anxiety",
    ],
  },
  {
    id: "anger",
    label: "Anger & Emotional Regulation",
    items: [
      "Anger management",
      "Rage & explosive reactions",
      "Emotional dysregulation",
      "Road rage",
      "Jealousy & controlling behaviour",
      "Shame & guilt",
      "Emotional numbness",
      "Grief & loss",
    ],
  },
  {
    id: "phobias",
    label: "Phobias & Specific Fears",
    items: [
      "Fear of flying (aerophobia)",
      "Fear of spiders (arachnophobia)",
      "Fear of needles / injections",
      "Fear of vomiting (emetophobia)",
      "Fear of heights (acrophobia)",
      "Fear of driving",
      "Fear of dentists",
      "Fear of doctors / hospitals",
      "Fear of enclosed spaces (claustrophobia)",
      "Fear of open spaces (agoraphobia)",
      "Fear of death (thanatophobia)",
      "Fear of choking",
      "Fear of blood",
      "Fear of water",
      "Fear of losing control",
    ],
  },
  {
    id: "habits",
    label: "Habits & Addictions",
    items: [
      "Alcohol reduction",
      "Drug dependency support",
      "Gambling addiction",
      "Pornography addiction",
      "Nail biting",
      "Hair pulling (trichotillomania)",
      "Skin picking (dermatillomania)",
      "Teeth grinding (bruxism)",
      "Compulsive checking",
      "OCD (obsessive-compulsive disorder)",
      "Hoarding behaviours",
      "Social media compulsion",
      "Thumb sucking",
    ],
  },
  {
    id: "smoking",
    label: "Stop Smoking & Vaping",
    items: [
      "Stop smoking (1-session intensive)",
      "Quit vaping",
      "Cutting down before stopping",
      "Breaking the stress-smoking link",
      "Preventing weight gain after quitting",
      "Relapse prevention",
    ],
  },
  {
    id: "weight",
    label: "Weight, Food & Eating",
    items: [
      "Emotional eating",
      "Comfort eating",
      "Binge eating disorder",
      "Food addiction",
      "Sugar cravings",
      "Overeating & portion control",
      "Weight loss motivation",
      "Anorexia support (adjunct therapy)",
      "Bulimia support (adjunct therapy)",
      "Body dysmorphia",
      "Poor body image",
      "Fear of certain foods",
      "Exercise motivation",
    ],
  },
  {
    id: "confidence",
    label: "Confidence & Self-Worth",
    items: [
      "Low self-esteem",
      "Imposter syndrome",
      "Self-doubt & negative self-talk",
      "People pleasing",
      "Inability to say no",
      "Fear of conflict",
      "Interview nerves",
      "Social confidence",
      "Assertiveness",
      "Confidence after illness or redundancy",
    ],
  },
  {
    id: "trauma",
    label: "Trauma & PTSD",
    items: [
      "Post-traumatic stress disorder (PTSD)",
      "Complex PTSD (C-PTSD)",
      "Critical incident debriefing",
      "Childhood trauma",
      "Accident & medical trauma",
      "Birth trauma",
      "Emotional & physical abuse recovery",
      "Sexual trauma recovery",
      "Bereavement & grief",
      "Emotional flashbacks",
      "Dissociation",
      "Bullying recovery",
      "Workplace trauma",
    ],
  },
  {
    id: "sleep",
    label: "Sleep & Insomnia",
    items: [
      "Insomnia",
      "Difficulty falling or staying asleep",
      "Sleep anxiety",
      "Nightmares & night terrors",
      "Broken sleep patterns",
      "Shift work sleep disruption",
    ],
  },
  {
    id: "health",
    label: "Health & Medical",
    items: [
      "Irritable bowel syndrome (IBS) — registered expert",
      "Chronic pain management",
      "Fibromyalgia support",
      "Preparation for surgery",
      "Recovery after surgery",
      "Cancer care support",
      "Fertility & IVF stress",
      "Chronic fatigue syndrome",
      "Migraines (tension-based)",
      "Tinnitus relief",
      "Skin conditions (psychosomatic)",
      "High blood pressure (stress-related)",
    ],
  },
  {
    id: "hypnobirthing",
    label: "HypnoBirthing® & Pregnancy",
    items: [
      "HypnoBirthing® (registered practitioner)",
      "Fear of childbirth (tokophobia)",
      "Anxiety in pregnancy",
      "Postpartum anxiety",
      "Birth trauma recovery",
      "Fertility & IVF stress",
      "New parent anxiety",
    ],
  },
  {
    id: "business",
    label: "Business & Performance",
    items: [
      "Business owner burnout",
      "Leadership presence",
      "Sales confidence",
      "Procrastination & creative blocks",
      "Perfectionism",
      "Fear of failure or success",
      "Sports performance hypnosis / NLP",
      "Golf mental game",
      "Driving test anxiety",
      "Exam nerves (adults)",
      "Stage fright",
      "Writer's block",
    ],
  },
  {
    id: "relationships",
    label: "Relationships & Intimacy",
    items: [
      "Fear of intimacy",
      "Attachment issues (anxious / avoidant)",
      "Sexual anxiety",
      "Erectile dysfunction (psychological)",
      "Vaginismus",
      "Co-dependency",
      "Recovering from a toxic relationship",
      "Trust issues",
      "Divorce recovery",
    ],
  },
  {
    id: "speech",
    label: "Speech & Communication",
    items: [
      "Stammering (stuttering)",
      "Speech anxiety",
      "Fear of public speaking",
      "Selective mutism",
      "Presentation nerves",
      "Vocal confidence",
      "Communication in relationships",
    ],
  },
  {
    id: "children",
    label: "Children & Teenagers",
    items: [
      "Anxiety in children",
      "School refusal",
      "Exam nerves & test anxiety",
      "Panic attacks in teenagers",
      "Bullying & social pressure",
      "Low confidence & self-esteem",
      "Speech anxiety & stammering",
      "Bedwetting (nocturnal enuresis)",
      "Sleep issues in children",
      "Anger & emotional outbursts",
      "OCD in young people",
      "Phobias in children",
      "Teenage depression",
    ],
  },
];

const TOTAL_CONDITIONS = CATEGORIES.reduce((s, c) => s + c.items.length, 0);

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return CATEGORIES
      .filter(cat => activeTab === "all" || cat.id === activeTab)
      .map(cat => ({
        ...cat,
        items: q
          ? cat.items.filter(item => item.toLowerCase().includes(q))
          : cat.items,
      }))
      .filter(cat => cat.items.length > 0);
  }, [search, activeTab]);

  const totalShown = filtered.reduce((s, c) => s + c.items.length, 0);

  return (
    <div className="svc-wrap">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="svc-hero">
        <div className="svc-hero-inner">
          <span className="svc-eyebrow">Where I Can Help</span>
          <h1 className="svc-h1">
            Whatever is holding<br className="svc-h1-br" /> you back.
          </h1>
          <p className="svc-hero-sub">
            25+ years of clinical practice. Hypnotherapy, NLP, EMDR, EFT, and Kinetic Shift —
            whatever reaches the root fastest. If something is affecting your life, I&apos;ll tell
            you honestly whether I can help.
          </p>

          <div className="svc-stats">
            <div className="svc-stat">
              <span className="svc-stat-num">25+</span>
              <span className="svc-stat-label">years in practice</span>
            </div>
            <div className="svc-stat-div" aria-hidden="true"/>
            <div className="svc-stat">
              <span className="svc-stat-num">{TOTAL_CONDITIONS}+</span>
              <span className="svc-stat-label">conditions treated</span>
            </div>
            <div className="svc-stat-div" aria-hidden="true"/>
            <div className="svc-stat">
              <span className="svc-stat-num">Online</span>
              <span className="svc-stat-label">&amp; Suffolk clinic</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured services ────────────────────────────────────── */}
      <section className="svc-featured-section">
        <div className="svc-container">
          <p className="svc-section-label">Most common areas</p>
          <div className="svc-featured-grid">
            {FEATURED.map(f => (
              <Link key={f.href} href={f.href} className="svc-featured-card">
                <span className="svc-featured-icon">{ICONS[f.id]}</span>
                <h2 className="svc-featured-title">{f.label}</h2>
                <p className="svc-featured-desc">{f.desc}</p>
                <span className="svc-featured-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full conditions list ──────────────────────────────────── */}
      <section className="svc-list-section">
        <div className="svc-container">

          {/* Search + filter bar */}
          <div className="svc-search-bar">
            <div className="svc-search-input-wrap">
              <svg className="svc-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="search"
                className="svc-search-input"
                placeholder="Search conditions, fears, habits…"
                value={search}
                onChange={e => { setSearch(e.target.value); setActiveTab("all"); }}
                aria-label="Search conditions"
              />
              {search && (
                <button className="svc-search-clear" onClick={() => setSearch("")} aria-label="Clear search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              )}
            </div>
            {search && (
              <p className="svc-search-count">
                {totalShown} result{totalShown !== 1 ? "s" : ""} for &ldquo;{search}&rdquo;
              </p>
            )}
          </div>

          {/* Category tabs */}
          {!search && (
            <div className="svc-tabs" role="tablist">
              <button
                role="tab"
                aria-selected={activeTab === "all"}
                className={`svc-tab${activeTab === "all" ? " svc-tab--active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeTab === cat.id}
                  className={`svc-tab${activeTab === cat.id ? " svc-tab--active" : ""}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {/* Grid of category cards */}
          <div className="svc-cats-grid">
            {filtered.map(cat => (
              <div key={cat.id} className="svc-cat-card">
                <div className="svc-cat-header">
                  <span className="svc-cat-icon">{ICONS[cat.id]}</span>
                  <h3 className="svc-cat-title">{cat.label}</h3>
                </div>
                <ul className="svc-items">
                  {cat.items.map(item => (
                    <li key={item} className="svc-item">
                      <svg className="svc-tick" viewBox="0 0 24 24" fill="none" stroke="#6BAE8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="svc-no-results">
              <p>Nothing matched &ldquo;{search}&rdquo;.</p>
              <p>That doesn&apos;t mean I can&apos;t help — <Link href="/contact">get in touch</Link> and let&apos;s talk it through.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Not sure strip ───────────────────────────────────────── */}
      <section className="svc-unsure-section">
        <div className="svc-unsure-inner">
          <div className="svc-unsure-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div className="svc-unsure-text">
            <h2 className="svc-unsure-title">Not sure what to call it?</h2>
            <p className="svc-unsure-body">
              You don&apos;t need a diagnosis or a label. Sometimes it&apos;s just a weight you can&apos;t name — a
              feeling that something isn&apos;t right. That&apos;s enough. The best place to start is a
              free conversation. I&apos;ll help you find the words from there.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary svc-unsure-btn">
            Book a free chat →
          </Link>
        </div>
      </section>

      {/* ── Approach strip ──────────────────────────────────────── */}
      <section className="svc-approach-section">
        <div className="svc-container svc-approach-grid">
          <div className="svc-approach-text">
            <span className="svc-eyebrow svc-eyebrow--dark">How I work</span>
            <h2 className="svc-approach-h2">Not one size fits all.</h2>
            <p className="svc-approach-body">
              I draw on whichever combination of techniques reaches the root of your issue
              fastest. Most clients see meaningful change within two to four sessions. Some
              issues — like stopping smoking — resolve in one.
            </p>
            <p className="svc-approach-body">
              Sessions are available in person at my Suffolk clinic (near Bury St Edmunds)
              or online worldwide via Zoom.
            </p>
            <Link href="/contact" className="svc-approach-link">
              Ask about your specific situation →
            </Link>
          </div>
          <div className="svc-methods">
            {[
              ["Clinical Hypnotherapy", "The foundation of my practice — direct access to the subconscious patterns driving the issue."],
              ["NLP", "Neuro-linguistic programming to rewire thought patterns and responses at speed."],
              ["EMDR", "Eye movement desensitisation for trauma, flashbacks, and deeply stuck memories."],
              ["EFT / Tapping", "Emotional freedom technique for rapid emotional relief and stress reduction."],
              ["Kinetic Shift", "A fast-moving active technique for phobias, trauma, and stuck emotional states."],
            ].map(([name, desc]) => (
              <div key={name} className="svc-method">
                <span className="svc-method-dot" aria-hidden="true"/>
                <div>
                  <p className="svc-method-name">{name}</p>
                  <p className="svc-method-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="svc-cta-section">
        <div className="svc-cta-inner">
          <h2 className="svc-cta-h2">Ready to start?</h2>
          <p className="svc-cta-body">
            The first consultation is free. No pressure, no commitment — just an honest
            conversation about what&apos;s going on and whether I can help.
          </p>
          <div className="svc-cta-btns">
            <Link href="/contact" className="btn btn-primary">Book a Free Consultation →</Link>
            <Link href="/testimonials" className="svc-cta-secondary">Read client stories →</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
