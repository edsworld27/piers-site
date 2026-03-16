"use client";

import { useState, useEffect } from "react";
import { CATEGORIES, DEFAULT_PREFS, STORAGE_KEY } from "../../components/CookieBanner";
import styles from "./CookiePreferencePanel.module.css";

export default function CookiePreferencePanel() {
  const [prefs, setPrefs]     = useState(DEFAULT_PREFS);
  const [loaded, setLoaded]   = useState(false);
  const [saved, setSaved]     = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setPrefs({ ...DEFAULT_PREFS, ...JSON.parse(stored) });
    } catch {}
    setLoaded(true);
  }, []);

  const toggle = (key) => {
    setPrefs(p => ({ ...p, [key]: !p[key] }));
    setSaved(false);
  };

  const save = (overrides = {}) => {
    const data = { ...DEFAULT_PREFS, ...prefs, ...overrides, essential: true, savedAt: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
    setPrefs(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const acceptAll = () => save({ functional: true, analytics: true, marketing: true });
  const rejectAll = () => {
    const data = { ...DEFAULT_PREFS, essential: true, savedAt: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
    setPrefs(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!loaded) return null;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Cookie Preferences</h2>
        <p className={styles.subtitle}>
          Update your choices at any time. Changes take effect immediately.
        </p>
      </div>

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
                  checked={always ? true : !!prefs[key]}
                  disabled={always}
                  onChange={() => toggle(key)}
                  aria-label={`${label} cookies`}
                />
                <span className={styles.slider} />
              </label>
            </div>
            <p className={styles.categoryDesc}>{desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.btnReject} onClick={rejectAll}>Reject All</button>
        <div className={styles.actionsRight}>
          {saved && <span className={styles.savedMsg}>Preferences saved ✓</span>}
          <button className={styles.btnSave} onClick={() => save()}>Save Preferences</button>
          <button className={styles.btnAccept} onClick={acceptAll}>Accept All</button>
        </div>
      </div>
    </div>
  );
}
