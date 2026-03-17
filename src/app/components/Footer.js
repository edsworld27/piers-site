"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* ── CTA band ── */}
      <div className="footer-cta">
        <div className="footer-cta-inner container">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">Start today</span>
            <p className="footer-cta-headline">Ready to change something that<br className="footer-cta-br"/> has held you back for too long?</p>
          </div>
          <Link href="/contact" className="btn btn-primary footer-cta-btn">
            Book a Free Consultation →
          </Link>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="footer-main container">
        <div className="footer-brand">
          <p className="footer-logo-text">Piers Day</p>
          <p className="footer-tagline">Clinical Hypnotherapy &amp; NLP</p>
          <p className="footer-desc">
            25+ years helping people break free from anxiety, addiction, trauma,
            and self-limiting beliefs — online and at the Suffolk clinic.
          </p>
          <div className="footer-contact">
            <a href="tel:07716008836" className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              07716 008836
            </a>
            <a href="mailto:piers@piersday.com" className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              piers@piersday.com
            </a>
            <a
              href="https://maps.google.com/?q=Bury+St+Edmunds,+Suffolk,+IP33"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item footer-directions"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Get Directions
            </a>
          </div>
        </div>

        <nav aria-label="Services" className="footer-col">
          <h4 className="footer-col-heading">Services</h4>
          <Link href="/services/anxiety">Anxiety &amp; Panic</Link>
          <Link href="/services/stop-smoking">Stop Smoking</Link>
          <Link href="/services/weight-loss">Weight Management</Link>
          <Link href="/services/confidence">Confidence &amp; Phobias</Link>
        </nav>

        <nav aria-label="Explore" className="footer-col">
          <h4 className="footer-col-heading">Explore</h4>
          <Link href="/about">About Piers</Link>
          <Link href="/testimonials">Success Stories</Link>
          <Link href="/blog">Resources &amp; Videos</Link>
          <Link href="/contact">Book a Session</Link>
        </nav>

        <nav aria-label="Legal" className="footer-col">
          <h4 className="footer-col-heading">Legal</h4>
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms of Service</Link>
          <Link href="/legal/cookies">Cookie Policy</Link>
        </nav>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom container">
        <p className="footer-copy">© {new Date().getFullYear()} Piers Day Hypnotherapy. All rights reserved. &nbsp;·&nbsp; Crafted by <a href="https://milesymedia.com" target="_blank" rel="noopener noreferrer" className="footer-crafted-link">Milesymedia</a></p>
        <p className="footer-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          Bury St Edmunds, Suffolk &amp; Online UK
        </p>
      </div>

      <style jsx>{`
        .site-footer {
          background: #0C1B2E;
          border-top: 1px solid rgba(107,174,138,0.18);
          position: relative;
          overflow: hidden;
        }
        .site-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 0%, rgba(107,174,138,0.06) 0%, transparent 55%),
                      radial-gradient(ellipse at 10% 100%, rgba(196,144,106,0.05) 0%, transparent 45%);
          pointer-events: none;
        }

        /* ── CTA band ── */
        .footer-cta {
          border-bottom: 1px solid rgba(107,174,138,0.12);
          position: relative;
        }
        .footer-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding-top: 2.75rem;
          padding-bottom: 2.75rem;
        }
        .footer-cta-eyebrow {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #6BAE8A;
          margin-bottom: 0.55rem;
        }
        .footer-cta-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.2rem, 2.5vw, 1.7rem);
          font-weight: 500;
          color: #f5f0e8;
          margin: 0;
          line-height: 1.3;
        }
        .footer-cta-btn { flex-shrink: 0; white-space: nowrap; }

        /* ── Main grid ── */
        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-top: 3.5rem;
          padding-bottom: 3rem;
          position: relative;
        }

        .footer-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: #f5f0e8;
          margin: 0 0 0.15rem;
          line-height: 1;
        }
        .footer-tagline {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #6BAE8A;
          margin: 0 0 1.25rem;
        }
        .footer-desc {
          font-size: 0.9rem;
          color: rgba(245,240,232,0.5);
          line-height: 1.72;
          margin: 0 0 1.5rem;
          max-width: 300px;
        }
        .footer-contact { display: flex; flex-direction: column; gap: 0.5rem; }
        .footer-contact-item {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.875rem; color: rgba(245,240,232,0.55);
          text-decoration: none;
          transition: color 0.18s;
        }
        .footer-contact-item:hover { color: #f5f0e8; }
        .footer-directions {
          color: #6BAE8A;
          margin-top: 0.25rem;
        }
        .footer-directions:hover { color: #8ecba8; }
        .footer-crafted-link { color: #6BAE8A; text-decoration: none; font-weight: 600; transition: opacity 0.16s; }
        .footer-crafted-link:hover { opacity: 0.75; }

        .footer-col { display: flex; flex-direction: column; gap: 0.2rem; padding-top: 0.25rem; }
        .footer-col-heading {
          font-size: 0.67rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          color: #C4906A;
          margin: 0 0 0.9rem;
        }
        .footer-col :global(a) {
          font-size: 0.925rem;
          color: rgba(245,240,232,0.55);
          text-decoration: none;
          padding: 0.25rem 0;
          transition: color 0.18s;
          display: block;
        }
        .footer-col :global(a:hover) { color: #f5f0e8; }

        /* ── Bottom bar ── */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.25rem;
          padding-bottom: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
        }
        .footer-copy {
          font-size: 0.78rem;
          color: rgba(245,240,232,0.28);
          margin: 0;
        }
        .footer-location {
          display: flex; align-items: center; gap: 0.4rem;
          font-size: 0.78rem;
          color: rgba(245,240,232,0.28);
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .footer-main { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-desc { max-width: 100%; }
        }
        @media (max-width: 600px) {
          .footer-cta-inner { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
          .footer-main { grid-template-columns: 1fr; gap: 2rem; padding-top: 2.5rem; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 0.4rem; }
          .footer-cta-br { display: none; }
        }
      `}</style>
    </footer>
  );
}
