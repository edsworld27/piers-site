"use client";

import { testimonials } from './data';

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

// Split testimonials into 3 columns for masonry effect
function splitColumns(items, n) {
  const cols = Array.from({ length: n }, () => []);
  items.forEach((item, i) => cols[i % n].push(item));
  return cols;
}

export default function TestimonialsPage() {
  const cols = splitColumns(testimonials, 3);

  return (
    <div className="t-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />

      {/* Hero */}
      <section className="t-hero">
        <div className="container">
          <div className="t-hero-inner fade-in-up">
            <span className="eyebrow">Client Stories</span>
            <h1 className="t-hero-h1">Real People.<br/>Real Change.</h1>
            <p className="t-hero-sub">
              {testimonials.length}+ testimonials from people who decided they were ready
              to stop managing symptoms and start erasing the cause.
            </p>
          </div>
          <div className="t-stats fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="t-stat">
              <span className="t-stat-n">5.0</span>
              <span className="t-stat-stars">★★★★★</span>
              <span className="t-stat-label">Average rating</span>
            </div>
            <div className="t-stat-divider" aria-hidden="true"/>
            <div className="t-stat">
              <span className="t-stat-n">25+</span>
              <span className="t-stat-label">Years of practice</span>
            </div>
            <div className="t-stat-divider" aria-hidden="true"/>
            <div className="t-stat">
              <span className="t-stat-n">1,000s</span>
              <span className="t-stat-label">Lives transformed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="t-body">
        <div className="container">
          <div className="t-masonry">
            {cols.map((col, ci) => (
              <div key={ci} className="t-col">
                {col.map((t, i) => (
                  <article
                    key={i}
                    className="t-card fade-in-up"
                    style={{ animationDelay: `${(ci * col.length + i) * 0.04}s` }}
                  >
                    <div className="t-card-top">
                      <div className="t-card-stars" aria-label={`${t.rating} stars`}>
                        {'★'.repeat(t.rating)}
                      </div>
                      <span className="t-card-issue">{t.issue}</span>
                    </div>
                    <blockquote className="t-card-quote">
                      <p>{t.text}</p>
                    </blockquote>
                    <footer className="t-card-footer">
                      <span className="t-card-name">{t.name}</span>
                    </footer>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="t-cta">
        <div className="container">
          <div className="t-cta-inner fade-in-up">
            <span className="eyebrow">Your story starts here</span>
            <h2 className="t-cta-h2">Ready to write your own transformation?</h2>
            <p className="t-cta-sub">A free, no-obligation conversation is the first step.</p>
            <a href="/contact" className="btn btn-primary">Book a Free Consultation →</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .t-page { background: #fafaf9; }

        /* Hero */
        .t-hero {
          background: #0C1B2E;
          padding: 8rem 1rem 4rem;
          position: relative;
          overflow: hidden;
        }
        .t-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 70% 40%, rgba(107,174,138,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .t-hero-inner {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
        }
        .t-hero-inner .eyebrow { color: #C4906A; }
        .t-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          font-weight: 500;
          color: #f5f0e8;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin: 0.5rem 0 1.1rem;
        }
        .t-hero-sub {
          color: rgba(245,240,232,0.6);
          font-size: 1.1rem;
          line-height: 1.72;
          margin: 0;
          max-width: 560px;
          margin-inline: auto;
        }

        /* Stats row */
        .t-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          max-width: 580px;
          margin: 0 auto;
          overflow: hidden;
        }
        .t-stat {
          flex: 1;
          display: flex; flex-direction: column; align-items: center;
          padding: 1.4rem 1rem;
          gap: 0.2rem;
        }
        .t-stat-n {
          font-family: 'Playfair Display', serif;
          font-size: 2rem; font-weight: 500;
          color: #f5f0e8;
          line-height: 1;
        }
        .t-stat-stars {
          font-size: 0.7rem; letter-spacing: 2px;
          color: #C4906A;
        }
        .t-stat-label {
          font-size: 0.72rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: rgba(245,240,232,0.38);
        }
        .t-stat-divider {
          width: 1px; height: 50px;
          background: rgba(255,255,255,0.1);
          flex-shrink: 0;
        }

        /* Body */
        .t-body { padding: 4rem 1rem 5rem; }

        /* Masonry */
        .t-masonry {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          align-items: start;
        }
        .t-col { display: flex; flex-direction: column; gap: 1.25rem; }

        /* Card */
        .t-card {
          background: #fff;
          border: 1px solid rgba(107,174,138,0.14);
          border-radius: 16px;
          padding: 1.75rem;
          transition: border-color 0.22s, box-shadow 0.22s;
        }
        .t-card:hover {
          border-color: rgba(107,174,138,0.35);
          box-shadow: 0 6px 28px rgba(107,174,138,0.09);
        }
        .t-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .t-card-stars {
          color: #C4906A;
          font-size: 0.85rem;
          letter-spacing: 2px;
        }
        .t-card-issue {
          font-size: 0.67rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6BAE8A;
          background: rgba(107,174,138,0.08);
          border: 1px solid rgba(107,174,138,0.22);
          padding: 0.18rem 0.6rem;
          border-radius: 9999px;
        }
        .t-card-quote {
          margin: 0 0 1.25rem;
          padding: 0;
        }
        .t-card-quote p {
          font-size: 0.975rem;
          line-height: 1.78;
          color: #4a6275;
          margin: 0;
          font-style: italic;
        }
        .t-card-footer {
          padding-top: 1rem;
          border-top: 1px solid rgba(107,174,138,0.1);
        }
        .t-card-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1a2b3c;
        }

        /* Bottom CTA */
        .t-cta {
          background: #0C1B2E;
          padding: 5rem 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .t-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 50%, rgba(107,174,138,0.09) 0%, transparent 60%);
          pointer-events: none;
        }
        .t-cta-inner { max-width: 600px; margin: 0 auto; position: relative; }
        .t-cta-inner .eyebrow { color: #C4906A; }
        .t-cta-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 500;
          color: #f5f0e8;
          margin: 0.5rem 0 0.9rem;
          line-height: 1.2;
        }
        .t-cta-sub {
          color: rgba(245,240,232,0.55);
          font-size: 1.05rem;
          margin: 0 0 2rem;
        }

        /* Responsive */
        @media (max-width: 860px) {
          .t-masonry { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .t-hero { padding: 7rem 1rem 3rem; }
          .t-masonry { grid-template-columns: 1fr; }
          .t-stats { flex-direction: column; gap: 0; }
          .t-stat-divider { width: 60px; height: 1px; }
        }
      `}</style>
    </div>
  );
}
