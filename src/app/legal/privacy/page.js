import Script from "next/script";

export const metadata = {
  title: "Privacy Policy | Piers Day Hypnotherapy",
  alternates: { canonical: "https://www.piersday.com/legal/privacy" },
  robots: { index: false, follow: true }
};

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://www.piersday.com/legal/privacy",
    "isPartOf": { "@type": "WebSite", "url": "https://www.piersday.com" }
  };

  return (
    <>
      <Script id="privacy-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="pt-32 pb-24 text-standard">
        <div className="container" style={{maxWidth: "800px"}}>
          <h1 className="mb-8">Privacy Policy</h1>
          <div className="glass-panel p-8 content">
            <p>Last updated: March 2026</p>

            <h2>1. Introduction</h2>
            <p>Piers Day Hypnotherapy ("we", "our", or "us") is committed to protecting your privacy in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy explains how we collect, use, and protect your personal data.</p>

            <h2>2. Data We Collect</h2>
            <p>We only collect information necessary to provide you with effective hypnotherapy services. This may include:</p>
            <ul>
              <li>Identity Data: Name, date of birth.</li>
              <li>Contact Data: Email address, phone number.</li>
              <li>Special Category Data: Brief health history or specific psychological issues you disclose in relation to your treatment (collected strictly with explicit consent).</li>
              <li>Technical Data: IP address, browser type (collected via anonymized analytics).</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We process your data strictly to:</p>
            <ul>
              <li>Provide clinical hypnotherapy consultations and ongoing support.</li>
              <li>Manage appointments and scheduling.</li>
              <li>Comply with legal and professional record-keeping obligations.</li>
            </ul>

            <h2>4. Data Retention and Security</h2>
            <p>Session notes and sensitive data are stored securely on encrypted drives and are never stored on public-facing internet servers. We retain records in accordance with the Complementary and Natural Healthcare Council (CNHC) guidelines (typically 8 years post-treatment).</p>

            <h2>5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at <code>piersday@me.com</code>.</p>
          </div>
        </div>
        <style>{`
          .pt-32 { padding-top: 8rem; }
          .pb-24 { padding-bottom: 6rem; }
          .mb-8 { margin-bottom: 2rem; }
          .p-8 { padding: 2rem; }

          .content h2 { font-size: 1.5rem; color: var(--color-accent-gold); margin-top: var(--space-8); margin-bottom: var(--space-4); font-family: var(--font-body); font-weight: 600; }
          .content p { margin-bottom: var(--space-4); color: var(--color-text-muted); }
          .content ul { margin-bottom: var(--space-6); padding-left: var(--space-8); color: var(--color-text-muted); }
          .content li { margin-bottom: var(--space-2); }
          .content code { background: var(--color-white-10); padding: 0.2rem 0.4rem; border-radius: 4px; color: var(--color-white); }
        `}</style>
      </main>
    </>
  );
}
