import Script from "next/script";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Piers Day | Book Your Free Consultation",
  description: "Get in touch with Piers Day for hypnotherapy sessions. Call, WhatsApp, or fill out the form. Online & in-person clinic in Bury St Edmunds, Suffolk.",
  alternates: { canonical: "https://www.piersday.com/contact" },
  openGraph: {
    title: "Contact Piers Day | Book Your Free Consultation",
    description: "Get in touch for hypnotherapy sessions. Online & in-person clinic in Bury St Edmunds.",
    url: "https://www.piersday.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Piers Day | Book Your Free Consultation",
    description: "Get in touch for hypnotherapy sessions. Online & in-person clinic in Bury St Edmunds.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── DARK HERO ─────────────────────────────────────── */}
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

      {/* ── WHITE SHEET ───────────────────────────────────── */}
      <div className={styles.sheet}>
        <div className={styles.sheetInner}>

          {/* Quick-contact pills */}
          <div className={styles.contactRow}>
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

          {/* Form heading */}
          <span className={styles.formLabel}>Send a message</span>
          <h2 className={styles.formTitle}>Tell me what's going on.</h2>

          {/* Glass form card */}
          <div className={styles.glassCard}>
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
              title="Contact form — book a hypnotherapy session"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />

            <div className={styles.glassFooter}>
              <a href="/legal/privacy" className={styles.glassFooterLink}>Privacy Policy</a>
              <a href="/legal/terms" className={styles.glassFooterLink}>Terms of Service</a>
            </div>
          </div>

          {/* Location / trust chips */}
          <div className={styles.bottomRow}>
            <a
              href="https://maps.app.goo.gl/jBSZKEUmrxy4QFjF8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoChip}
            >
              <span className={styles.chipDot}></span>
              Bury St Edmunds clinic — view on map →
            </a>
            <span className={styles.infoChip}>
              <span className={styles.chipDot}></span>
              Online sessions available worldwide
            </span>
            <span className={styles.infoChip}>
              <span className={styles.chipDot}></span>
              100% confidential
            </span>
          </div>

        </div>
      </div>
    </>
  );
}
