import Script from "next/script";

export const metadata = {
  title: "Terms of Service | Piers Day Hypnotherapy",
  alternates: { canonical: "https://www.piersday.com/legal/terms" },
  robots: { index: false, follow: true }
};

export default function TermsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "url": "https://www.piersday.com/legal/terms",
    "isPartOf": { "@type": "WebSite", "url": "https://www.piersday.com" }
  };

  return (
    <>
      <Script id="terms-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="pt-32 pb-24 text-standard">
        <div className="container" style={{maxWidth: "800px"}}>
          <h1 className="mb-8">Terms of Service</h1>
          <div className="glass-panel p-8 content">
            <p>Last updated: March 2026</p>

            <h2>1. Agreement to Terms</h2>
            <p>By accessing our website and utilizing our online hypnotherapy services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>

            <h2>2. Medical Disclaimer</h2>
            <p>Hypnotherapy is not a substitute for medical or psychiatric treatment. While hypnotherapy has high success rates for behavioral modification and stress relief, Piers Day Hypnotherapy does not diagnose medical conditions. Always consult your GP regarding physical symptoms or severe psychological distress.</p>

            <h2>3. Appointments and Cancellations</h2>
            <p>We require a minimum of 48 hours notice for any appointment cancellations or rescheduling. Failure to provide sufficient notice may result in the forfeiture of the session fee.</p>

            <h2>4. Results Guarantee</h2>
            <p>Because hypnotherapy requires the active participation and genuine desire for change from the client, we cannot offer absolute guarantees of outcomes. Success depends entirely on your compliance with the prescribed methods and post-session audio listening.</p>

            <h2>5. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>
        </div>
        <style>{`
          .pt-32 { padding-top: 8rem; }
          .pb-24 { padding-bottom: 6rem; }
          .mb-8 { margin-bottom: 2rem; }
          .p-8 { padding: 2rem; }

          .content h2 { font-size: 1.5rem; color: var(--color-accent-gold); margin-top: var(--space-8); margin-bottom: var(--space-4); font-family: var(--font-body); font-weight: 600; }
          .content p { margin-bottom: var(--space-4); color: var(--color-text-muted); }
        `}</style>
      </main>
    </>
  );
}
