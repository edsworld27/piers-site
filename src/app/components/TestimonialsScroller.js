"use client";

import Link from "next/link";
import { testimonials } from "../testimonials/data";
import styles from "../home.module.css";

const row1Items = testimonials.slice(0,  10);
const row2Items = testimonials.slice(10, 20);

export default function TestimonialsScroller() {
  const row1 = [...row1Items, ...row1Items];
  const row2 = [...row2Items, ...row2Items];

  return (
    <>
      {/* Row 1 — scrolls left */}
      <div className={styles.scrollerOuter}>
        <div className={styles.scrollerTrack}>
          {row1.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className={`${styles.scrollerOuter} ${styles.scrollerOuterReverse}`}>
        <div className={`${styles.scrollerTrack} ${styles.scrollerTrackReverse}`}>
          {row2.map((t, i) => (
            <TestimonialCard key={i} t={t} />
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

function TestimonialCard({ t }) {
  return (
    <div className={styles.scrollerCard}>
      <div className={styles.scrollerStars}>★★★★★</div>
      <p className={styles.scrollerQuote}>
        &ldquo;{t.text.length > 130 ? t.text.slice(0, 130) + "\u2026" : t.text}&rdquo;
      </p>
      <div className={styles.scrollerMeta}>
        <span className={styles.scrollerName}>{t.name}</span>
        <span className={styles.scrollerIssue}>{t.issue}</span>
      </div>
    </div>
  );
}
