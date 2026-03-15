"use client";

import { useState } from 'react';
import { testimonials as allTestimonials } from './data';
import styles from './testimonials.module.css';

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Piers Day Hypnotherapy",
  "url": "https://www.piersday.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = useState(8);
  const increment = 8;

  const visibleTestimonials = allTestimonials.slice(0, visibleCount);

  return (
    <main className={styles.pageWrapper}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <div className="container">
        <div className={`${styles.heroSection} fade-in-up`}>
          <h1 className="mb-6 text-gradient-gold">Success Stories</h1>
          <p className={`${styles.heroSub} fade-in-up`} style={{animationDelay: "0.2s"}}>
            Real transformations from people who decided they were ready for change.
          </p>
        </div>

        <div className={styles.testimonialGrid}>
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.testimonialCard} glass-panel fade-in-up`}
              style={{animationDelay: `${(i % 8) * 0.1}s`}}
            >
              <div className={styles.stars}>{"★".repeat(t.rating)}</div>
              <p className={styles.cardText}>"{t.text}"</p>
              <div className={styles.clientMeta}>
                <div>
                  <span className={styles.clientName}>{t.name}</span>
                  <span className={styles.clientIssue}>{t.issue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < allTestimonials.length && (
          <div className={`${styles.loadMoreWrapper} fade-in-up`}>
            <button onClick={() => setVisibleCount(prev => prev + increment)} className="btn btn-primary">
              Discover More Stories &darr;
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
