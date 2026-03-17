import Script from "next/script";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm";

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
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Piers Day Hypnotherapy",
    "url": "https://www.piersday.com/contact",
    "telephone": "+447716008836",
    "email": "piers@piersday.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bury St Edmunds",
      "addressRegion": "Suffolk",
      "addressCountry": "GB"
    },
    "contactPoint": [
      { "@type": "ContactPoint", "contactType": "customer support", "telephone": "+447716008836", "availableLanguage": "English" }
    ]
  };

  return (
    <>
      <Script id="contact-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.heroEyebrow}>Piers Day Hypnotherapy</span>
            <h1 className={styles.heroTitle}>Let&apos;s Talk.</h1>
            <p className={styles.heroSub}>
              No pressure, no scripts. Just an honest conversation about what&apos;s
              going on and whether I can help. I read every message personally.
            </p>

            <div className={styles.contactRow}>
              <a href="tel:07716008836" className={styles.methodCard}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className={styles.methodText}>
                  <span className={styles.methodLabel}>Call or text</span>
                  <span className={styles.methodValue}>07716 008 836</span>
                </div>
              </a>
              <a href="mailto:piersday@me.com" className={styles.methodCard}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className={styles.methodText}>
                  <span className={styles.methodLabel}>Email</span>
                  <span className={styles.methodValue}>piersday@me.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ────────────────────────────────────── */}
      <div className={styles.sheet}>
        <div className={styles.sheetInner}>
          <span className={styles.formLabel}>Send a message</span>
          <h2 className={styles.formTitle}>Tell me what&apos;s going on.</h2>

          <ContactForm />

          <div className={styles.bottomRow}>
            <a
              href="https://maps.app.goo.gl/jBSZKEUmrxy4QFjF8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoChip}
            >
              <span className={styles.chipDot}/>
              Bury St Edmunds clinic — view on map →
            </a>
            <span className={styles.infoChip}>
              <span className={styles.chipDot}/>
              Online sessions available worldwide
            </span>
            <span className={styles.infoChip}>
              <span className={styles.chipDot}/>
              100% confidential
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
