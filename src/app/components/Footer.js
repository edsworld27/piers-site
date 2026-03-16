import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} section`}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <h3>Piers Day Hypnotherapy</h3>
          <p>Online &amp; Bury St Edmunds clinic. 25+ years experience helping you create real, lasting subconscious change.</p>
          <p>Phone: 07716008836</p>
        </div>

        <nav aria-label="Services" className={styles.footerLinks}>
          <h4>Services</h4>
          <Link href="/services/anxiety">Anxiety Relief</Link>
          <Link href="/services/stop-smoking">Stop Smoking</Link>
          <Link href="/services/weight-loss">Weight Management</Link>
          <Link href="/services/confidence">Confidence &amp; Phobias</Link>
        </nav>

        <nav aria-label="Company" className={styles.footerLinks}>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/testimonials">Success Stories</Link>
          <Link href="/contact">Book Session</Link>
          <Link href="/blog">Resources</Link>
        </nav>

        <nav aria-label="Legal" className={styles.footerLinks}>
          <h4>Legal</h4>
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms of Service</Link>
          <Link href="/legal/cookies">Cookie Policy</Link>
          <p className={styles.copyright}>© {new Date().getFullYear()} Piers Day Hypnotherapy. All rights reserved.</p>
        </nav>
      </div>
    </footer>
  );
}
