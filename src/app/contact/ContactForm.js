"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./contact.module.css";

const ISSUES = [
  "Anxiety / Panic attacks",
  "Stop smoking",
  "Weight management",
  "Phobia or specific fear",
  "Sleep / Insomnia",
  "Confidence / Self-esteem",
  "Trauma / PTSD",
  "Habits or addictions",
  "Depression / Low mood",
  "Stress / Burnout",
  "HypnoBirthing® / Pregnancy",
  "Children or teenagers",
  "Performance (sports / work)",
  "Relationships",
  "Health / Medical",
  "Something else",
];

const HOW = [
  "Google search",
  "Word of mouth / Recommendation",
  "Social media",
  "Psychology Today / directory",
  "Returning client",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    issue: "", preference: "", contactMethod: "", message: "", how: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(er => ({ ...er, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Please enter your first name.";
    if (!form.lastName.trim())  e.lastName  = "Please enter your last name.";
    if (!form.email.trim())     e.email     = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.issue)            e.issue     = "Please select an area.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    // UI only — submission wired up separately
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successWrap}>
        <div className={styles.successIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        </div>
        <h2 className={styles.successTitle}>Message received.</h2>
        <p className={styles.successBody}>
          Thank you, {form.firstName}. Piers will get back to you as soon as he can —
          usually within one working day, often much sooner.
        </p>
        <div className={styles.successActions}>
          <a href="tel:07716008836" className={styles.successCallBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14 16l.94-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Piers now
          </a>
          <Link href="/waiting-room" className={styles.successGameBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="6" width="20" height="12" rx="2"/>
              <path d="M12 12h.01M8 10v4M6 12h4M16 10l2 2-2 2"/>
            </svg>
            The Waiting Room
          </Link>
          <Link href="/blog" className={styles.successResourceBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Resources &amp; videos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

      {/* Row: first + last name */}
      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="firstName">First name <span className={styles.req}>*</span></label>
          <input
            id="firstName" type="text" autoComplete="given-name"
            className={`${styles.input}${errors.firstName ? " " + styles.inputError : ""}`}
            placeholder="Sarah"
            value={form.firstName} onChange={set("firstName")}
          />
          {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="lastName">Last name <span className={styles.req}>*</span></label>
          <input
            id="lastName" type="text" autoComplete="family-name"
            className={`${styles.input}${errors.lastName ? " " + styles.inputError : ""}`}
            placeholder="Thompson"
            value={form.lastName} onChange={set("lastName")}
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
        </div>
      </div>

      {/* Row: email + phone */}
      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">Email address <span className={styles.req}>*</span></label>
          <input
            id="email" type="email" autoComplete="email"
            className={`${styles.input}${errors.email ? " " + styles.inputError : ""}`}
            placeholder="sarah@example.com"
            value={form.email} onChange={set("email")}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="phone">Phone number <span className={styles.optional}>(optional)</span></label>
          <input
            id="phone" type="tel" autoComplete="tel"
            className={styles.input}
            placeholder="07700 000 000"
            value={form.phone} onChange={set("phone")}
          />
        </div>
      </div>

      {/* What to help with */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="issue">What would you like help with? <span className={styles.req}>*</span></label>
        <div className={styles.selectWrap}>
          <select
            id="issue"
            className={`${styles.select}${errors.issue ? " " + styles.inputError : ""}`}
            value={form.issue} onChange={set("issue")}
          >
            <option value="">Select an area…</option>
            {ISSUES.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
          <svg className={styles.selectChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        {errors.issue && <p className={styles.error}>{errors.issue}</p>}
      </div>

      {/* Session preference */}
      <div className={styles.fieldGroup}>
        <span className={styles.label}>Session preference</span>
        <div className={styles.radioGroup}>
          {["No preference", "Online (Zoom)", "In-person — Suffolk clinic"].map(opt => (
            <label key={opt} className={`${styles.radioCard}${form.preference === opt ? " " + styles.radioCardActive : ""}`}>
              <input
                type="radio" name="preference" value={opt}
                checked={form.preference === opt}
                onChange={set("preference")}
                className={styles.radioInput}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Preferred contact method */}
      <div className={styles.fieldGroup}>
        <span className={styles.label}>Preferred contact method <span className={styles.optional}>(optional)</span></span>
        <div className={styles.radioGroup}>
          {["No preference", "Email", "Phone call", "Text / WhatsApp"].map(opt => (
            <label key={opt} className={`${styles.radioCard}${form.contactMethod === opt ? " " + styles.radioCardActive : ""}`}>
              <input
                type="radio" name="contactMethod" value={opt}
                checked={form.contactMethod === opt}
                onChange={set("contactMethod")}
                className={styles.radioInput}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="message">
          Tell me a little more <span className={styles.optional}>(optional)</span>
        </label>
        <textarea
          id="message" rows={4}
          className={styles.textarea}
          placeholder="A brief description of what's going on — as much or as little as you'd like to share."
          value={form.message} onChange={set("message")}
        />
      </div>

      {/* How did you hear */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="how">How did you hear about Piers? <span className={styles.optional}>(optional)</span></label>
        <div className={styles.selectWrap}>
          <select id="how" className={styles.select} value={form.how} onChange={set("how")}>
            <option value="">Select…</option>
            {HOW.map(h => <option key={h} value={h}>{h}</option>)}
          </select>
          <svg className={styles.selectChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      {/* Submit */}
      <button type="submit" className={styles.submitBtn} disabled={submitting}>
        {submitting ? (
          <><span className={styles.spinner} aria-hidden="true"/> Sending…</>
        ) : "Send message →"}
      </button>

      <p className={styles.formFootnote}>
        100% confidential. By submitting you agree to our{" "}
        <Link href="/legal/privacy" className={styles.footLink}>Privacy Policy</Link>.
      </p>

    </form>
  );
}
