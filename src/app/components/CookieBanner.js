"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";

export const STORAGE_KEY = "pd_cookie_consent";

export const CATEGORIES = [
  {
    key: "essential",
    label: "Essential",
    always: true,
    desc: "Session cookies, security, and cart functionality. The site cannot work without these — they cannot be disabled.",
  },
  {
    key: "functional",
    label: "Functional",
    always: false,
    desc: "Contact forms, live chat, and booking widgets (LeadConnector / HighLevel). Lets you reach Piers and book sessions.",
  },
  {
    key: "analytics",
    label: "Analytics",
    always: false,
    desc: "Anonymous data on which pages are visited and how long people spend on them. Helps improve the site experience.",
  },
  {
    key: "marketing",
    label: "Marketing",
    always: false,
    desc: "Ad tracking and remarketing pixels. Used to show relevant ads to people who have visited the site.",
  },
];

export const DEFAULT_PREFS = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export function useCookiePrefs() {
  const [prefs, setPrefs] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setPrefs(stored ? JSON.parse(stored) : null);
    } catch {
      setPrefs(null);
    }
    setLoaded(true);
  }, []);

  const save = useCallback((newPrefs) => {
    const data = { ...DEFAULT_PREFS, ...newPrefs, essential: true, savedAt: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
    setPrefs(data);
    return data;
  }, []);

  return { prefs, save, loaded };
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [draft, setDraft] = useState(DEFAULT_PREFS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (prefs) => {
    const data = { ...DEFAULT_PREFS, ...prefs, essential: true, savedAt: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
    setVisible(false);
    setManaging(false);
  };

  const acceptAll  = () => persist({ essential: true, functional: true, analytics: true, marketing: true });
  const rejectAll  = () => persist(DEFAULT_PREFS);
  const saveCustom = () => persist(draft);

  const openManage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setDraft(JSON.parse(stored));
    } catch {}
    setManaging(true);
  };

  if (!visible) return null;

  return (
    <>
      {managing && (
        <div
          className={styles.backdrop}
          onClick={() => setManaging(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`${styles.banner} ${managing ? styles.bannerExpanded : ""}`}
        role="dialog"
        aria-label="Cookie consent"
        aria-modal="true"
      >
        {!managing ? (
          /* ── Simple bar ── */
          <div className={styles.barInner}>
            <p className={styles.barText}>
              We use cookies to keep the site working, remember your preferences, and understand how people find us.{" "}
              <Link href="/legal/cookies" className={styles.barLink}>Cookie Policy</Link>
            </p>
            <div className={styles.barActions}>
              <button className={styles.btnReject} onClick={rejectAll}>Reject All</button>
              <button className={styles.btnManage} onClick={openManage}>Manage</button>
              <button className={styles.btnAccept} onClick={acceptAll}>Accept All</button>
            </div>
          </div>
        ) : (
          /* ── Manage panel ── */
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Cookie Preferences</h2>
              <button
                className={styles.closeBtn}
                onClick={() => setManaging(false)}
                aria-label="Close preferences"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <p className={styles.panelIntro}>
              Choose which cookies you&apos;re happy with. Essential cookies are always on — the site can&apos;t run without them.
            </p>

            <div className={styles.categories}>
              {CATEGORIES.map(({ key, label, always, desc }) => (
                <div key={key} className={styles.category}>
                  <div className={styles.categoryRow}>
                    <div className={styles.categoryInfo}>
                      <span className={styles.categoryLabel}>{label}</span>
                      {always && <span className={styles.alwaysBadge}>Always on</span>}
                    </div>
                    <label className={`${styles.toggle} ${always ? styles.toggleLocked : ""}`}>
                      <input
                        type="checkbox"
                        checked={always ? true : !!draft[key]}
                        disabled={always}
                        onChange={e => setDraft(p => ({ ...p, [key]: e.target.checked }))}
                        aria-label={`${label} cookies`}
                      />
                      <span className={styles.slider} />
                    </label>
                  </div>
                  <p className={styles.categoryDesc}>{desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.panelActions}>
              <button className={styles.btnReject} onClick={rejectAll}>Reject All</button>
              <div className={styles.panelActionsRight}>
                <button className={styles.btnManage} onClick={saveCustom}>Save Preferences</button>
                <button className={styles.btnAccept} onClick={acceptAll}>Accept All</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
