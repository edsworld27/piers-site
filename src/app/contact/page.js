"use client";

import Script from "next/script";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      {/* ── DARK HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroEyebrow}>Piers Day Hypnotherapy</span>
            <h1 className={styles.heroTitle}>Let's Talk.</h1>
            <p className={styles.heroSub}>
              No pressure, no scripts. Just an honest conversation about what's
              going on and whether I can help. I read every message personally.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHITE SHEET ───────────────────────────────────────── */}
      <div className={styles.sheet}>
        <div className={styles.sheetInner}>

          {/* LEFT — contact info */}
          <aside className={styles.leftCol}>
            <span className={styles.leftLabel}>Reach out directly</span>
            <h2 className={styles.leftTitle}>Prefer to skip the form?</h2>
            <p className={styles.leftSub}>
              Call, text, or email — whatever feels easiest. I'll get back to
              you personally, usually the same day.
            </p>

            <div className={styles.contactMethods}>
              <a href="tel:07716008836" className={styles.methodCard}>
                <div className={styles.methodIcon}>📞</div>
                <div className={styles.methodText}>
                  <span className={styles.methodLabel}>Call or text</span>
                  <span className={styles.methodValue}>07716 008 836</span>
                </div>
              </a>

              <a href="mailto:piersday@me.com" className={styles.methodCard}>
                <div className={styles.methodIcon}>✉️</div>
                <div className={styles.methodText}>
                  <span className={styles.methodLabel}>Email</span>
                  <span className={styles.methodValue}>piersday@me.com</span>
                </div>
              </a>
            </div>

            <div className={styles.locationBlock}>
              <div className={styles.locationHeader}>
                <span className={styles.locationDot}></span>
                <span className={styles.locationTitle}>Where to find us</span>
              </div>
              <p className={styles.locationLines}>
                <strong>Bury St Edmunds</strong>, Suffolk<br />
                In-person &amp; online via Zoom<br />
                Worldwide appointments available
              </p>
              <a
                href="https://maps.app.goo.gl/jBSZKEUmrxy4QFjF8"
                target="_blank"
                rel="noreferrer"
                className={styles.mapLink}
              >
                View clinic on map
                <span className={styles.mapArrow}>→</span>
              </a>
            </div>

            <div className={styles.trustNote}>
              <span className={styles.trustIcon}>🔒</span>
              <p className={styles.trustText}>
                Everything you share is completely confidential. Zero judgement,
                always.
              </p>
            </div>
          </aside>

          {/* RIGHT — form */}
          <div className={styles.rightCol}>
            <span className={styles.formLabel}>Send a message</span>
            <h2 className={styles.formTitle}>Tell me what's going on.</h2>

            <div className={styles.formWrapper}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/4zbXsudLy7F8TIOYgMB9"
                style={{ height: "1050px" }}
                id="inline-4zbXsudLy7F8TIOYgMB9"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-form-name="main website form"
                data-height="1050"
                data-layout-iframe-id="inline-4zbXsudLy7F8TIOYgMB9"
                data-form-id="4zbXsudLy7F8TIOYgMB9"
                title="main website form"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />

              <div className={styles.formFooter}>
                <a href="/legal/privacy" className={styles.formFooterLink}>Privacy Policy</a>
                <a href="/legal/terms" className={styles.formFooterLink}>Terms of Service</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
