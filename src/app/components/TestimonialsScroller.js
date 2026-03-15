"use client";

import Link from "next/link";
import { testimonials } from "../testimonials/data";
import styles from "../home.module.css";

// Pick a varied selection for the marquee
const marqueeItems = testimonials.slice(0, 10);

export default function TestimonialsScroller() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <div className={styles.scrollerOuter}>
        <div className={styles.scrollerTrack}>
          {doubled.map((t, i) => (
            <div key={i} className={styles.scrollerCard}>
              <div className={styles.scrollerStars}>★★★★★</div>
              <p className={styles.scrollerQuote}>
                &ldquo;{t.text.length > 130 ? t.text.slice(0, 130) + "\u2026" : t.text}&rdquo;
              </p>
              <div className={styles.scrollerMeta}>
                <span className={styles.scrollerName}>{t.name}</span>
                <span className={styles.scrollerIssue}>{t.issue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollerCta}>
        <Link href="/testimonials" className="btn btn-primary">
          Discover More Stories &rarr;
        </Link>
      </div>
    </>
  );
}
