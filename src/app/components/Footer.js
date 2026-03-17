"use client";

import { useState } from "react";
import Link from "next/link";

const ADDRESS = "Bury St Edmunds, Suffolk IP33";
const GMAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const AMAPS_URL = `https://maps.apple.com/?q=${encodeURIComponent(ADDRESS)}`;

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

function DirectionsModal({ onClose }) {
  return (
    <div className="dir-backdrop" onClick={onClose}>
      <div className="dir-modal" onClick={e => e.stopPropagation()}>
        <div className="dir-header">
          <div>
            <h3 className="dir-title">Our Location</h3>
            <p className="dir-addr">{ADDRESS}</p>
          </div>
          <button className="dir-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Placeholder map — swap this iframe src for the real embed later */}
        <div className="dir-map">
          <iframe
            title="Location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77990.15!2d0.716!3d52.246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9f3f18f3b0001%3A0x0!2sBury+St+Edmunds%2C+Suffolk!5e0!3m2!1sen!2suk!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="dir-footer">
          <p className="dir-footer-addr">{ADDRESS}</p>
          <div className="dir-btns">
            <a href={GMAPS_URL} target="_blank" rel="noopener noreferrer" className="dir-btn dir-btn-google">
              Google Maps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <a href={AMAPS_URL} target="_blank" rel="noopener noreferrer" className="dir-btn dir-btn-apple">
              Apple Maps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dir-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.65);
          display: flex; align-items: center; justify-content: center;
          padding: 1.25rem;
          animation: dirFadeIn 0.18s ease;
        }
        @keyframes dirFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .dir-modal {
          background: #fff; border-radius: 18px;
          width: 100%; max-width: 440px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.45);
          animation: dirSlideUp 0.22s ease;
        }
        @keyframes dirSlideUp { from { transform: translateY(18px); opacity: 0; } to { transform: none; opacity: 1; } }
        .dir-header {
          display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;
          padding: 1.25rem 1.25rem 1rem;
        }
        .dir-title {
          font-size: 1.05rem; font-weight: 700; color: #111; margin: 0 0 0.2rem;
          font-family: var(--font-body, system-ui);
        }
        .dir-addr { font-size: 0.85rem; color: #555; margin: 0; }
        .dir-close {
          background: none; border: none; cursor: pointer;
          color: #888; padding: 0.25rem; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: color 0.15s, background 0.15s;
        }
        .dir-close:hover { background: #f0f0f0; color: #333; }
        .dir-map { width: 100%; height: 260px; background: #e8e8e8; }
        .dir-footer { padding: 1rem 1.25rem 1.25rem; background: #f6f6f6; }
        .dir-footer-addr { font-size: 0.85rem; color: #444; margin: 0 0 0.875rem; }
        .dir-btns { display: flex; gap: 0.625rem; }
        .dir-btn {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;
          padding: 0.7rem 0.75rem; border-radius: 10px;
          font-size: 0.875rem; font-weight: 700; text-decoration: none;
          transition: opacity 0.15s, transform 0.15s;
          font-family: var(--font-body, system-ui);
        }
        .dir-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .dir-btn-google { background: #6BAE8A; color: #fff; }
        .dir-btn-apple  { background: #0c1b2e; color: #fff; }
      `}</style>
    </div>
  );
}

export default function Footer() {
  const [showDir, setShowDir] = useState(false);

  return (
    <footer className="site-footer">
      {showDir && <DirectionsModal onClose={() => setShowDir(false)} />}

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

          {/* Social icons */}
          <div className="footer-socials">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} className="footer-social-icon" aria-label={s.label}
                target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>

          <div className="footer-contact">
            <a href="tel:07716008836" className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              07716 008836
            </a>
            <a href="mailto:piers@piersday.com" className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              piers@piersday.com
            </a>
            <button className="footer-contact-item footer-dir-btn" onClick={() => setShowDir(true)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Get Directions
            </button>
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
          <Link href="/login" className="footer-login-link">Login</Link>
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
          margin: 0 0 1.25rem;
          max-width: 300px;
        }

        /* Social icons */
        .footer-socials {
          display: flex; gap: 0.5rem; margin-bottom: 1.25rem;
        }
        .footer-social-icon {
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(245,240,232,0.5);
          text-decoration: none;
          transition: border-color 0.18s, color 0.18s, background 0.18s;
        }
        .footer-social-icon svg { width: 17px; height: 17px; }
        .footer-social-icon:hover {
          border-color: rgba(107,174,138,0.5);
          color: #6BAE8A;
          background: rgba(107,174,138,0.07);
        }

        /* Contact items */
        .footer-contact { display: flex; flex-direction: column; gap: 0.5rem; }
        .footer-contact-item {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.875rem; color: rgba(245,240,232,0.55);
          text-decoration: none;
          transition: color 0.18s;
        }
        .footer-contact-item:hover { color: #f5f0e8; }

        /* Get Directions button */
        .footer-dir-btn {
          background: none; border: none; cursor: pointer;
          padding: 0; text-align: left;
          color: #6BAE8A;
          font-family: var(--font-body, system-ui);
          margin-top: 0.25rem;
        }
        .footer-dir-btn:hover { color: #8ecba8; }

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
        .footer-login-link { margin-top: 0.75rem; }

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
