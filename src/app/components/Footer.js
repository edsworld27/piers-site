import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer section glass-panel">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Piers Day Hypnotherapy</h3>
          <p>Online & Bury St Edmunds clinic. 25+ years experience helping you create real, lasting subconscious change.</p>
          <p>Phone: 07716008836</p>
        </div>
        
        <div className="footer-links">
          <h4>Services</h4>
          <Link href="/services/anxiety">Anxiety Relief</Link>
          <Link href="/services/stop-smoking">Stop Smoking</Link>
          <Link href="/services/weight-loss">Weight Management</Link>
          <Link href="/services/confidence">Confidence & Phobias</Link>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/testimonials">Success Stories</Link>
          <Link href="/contact">Book Session</Link>
          <Link href="/blog">Resources</Link>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms of Service</Link>
          <p className="copyright">© {new Date().getFullYear()} Elevate Hypnotherapy. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer {
          margin-top: var(--space-12); /* Tightened from space-24 */
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: none;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-4); /* Tightened from space-8 */
        }
        h3, h4 { margin-bottom: var(--space-2); } /* Tightened margin */
        .footer-brand p { margin-bottom: var(--space-1); font-size: 0.9375rem; }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-1); /* Tighter vertical links */
        }
        .footer-links a {
          color: var(--color-text-muted);
          font-size: 0.9375rem;
        }
        .footer-links a:hover {
          color: var(--color-accent-gold);
        }
        .copyright {
          margin-top: var(--space-4);
          font-size: 0.875rem;
          opacity: 0.6;
        }
        @media (max-width: 768px) {
          .footer-grid { 
            grid-template-columns: 1fr; 
            text-align: center;
            gap: var(--space-8);
          }
          .footer-brand { 
            grid-column: 1 / -1; 
            max-width: 400px;
            margin: 0 auto;
          }
          .footer-links {
            align-items: center;
          }
        }
        @media (max-width: 480px) {
          .footer { padding-top: var(--space-12); }
          .footer-grid { gap: var(--space-6); }
        }
      `}</style>
    </footer>
  );
}
