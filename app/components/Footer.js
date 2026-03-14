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
          margin-top: var(--space-24);
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: none;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-8);
        }
        h3, h4 { margin-bottom: var(--space-4); }
        .footer-brand p { margin-bottom: var(--space-2); }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .footer-links a {
          color: var(--color-text-muted);
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
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
