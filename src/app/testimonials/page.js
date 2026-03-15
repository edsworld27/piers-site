"use client";

import { useState, useEffect } from 'react';
import { testimonials as allTestimonials } from './data';

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = useState(8);
  const increment = 8;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + increment);
  };

  const visibleTestimonials = allTestimonials.slice(0, visibleCount);

  return (
    <main className="pt-32 pb-24">
      <div className="container max-w-6xl">
        <div className="text-center mb-16 px-4">
          <h1 className="mb-6 fade-in-up text-gradient-gold">Success Stories</h1>
          <p className="hero-sub mx-auto fade-in-up md:text-xl" style={{animationDelay: "0.2s"}}>Real transformations from people who decided they were ready for change.</p>
        </div>

        <div className="testimonial-grid">
          {visibleTestimonials.map((t, i) => (
            <div key={i} className="testimonial-card glass-panel fade-in-up" style={{animationDelay: `${(i % 8) * 0.1}s`}}>
              <div className="stars">{"★".repeat(t.rating)}</div>
              <p className="text">"{t.text}"</p>
              <div className="client-meta mt-auto">
                <div className="flex flex-col">
                  <span className="name">{t.name}</span>
                  <span className="issue">{t.issue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < allTestimonials.length && (
          <div className="load-more-container flex justify-center mt-16 fade-in-up">
            <button
              onClick={handleLoadMore}
              className="btn btn-secondary"
            >
              Discover More Stories ↓
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .pt-32 { padding-top: 8rem; }
        .pb-24 { padding-bottom: 6rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-auto { margin-top: auto; }
        .mt-16 { margin-top: 4rem; }
        .text-center { text-align: center; }
        .hero-sub { font-size: 1.25rem; color: var(--color-text-muted); max-width: 800px; line-height: 1.6; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-6xl { max-width: 72rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .justify-center { justify-content: center; }
        .items-center { align-items: center; }
        .gap-3 { gap: 0.75rem; }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
          padding: 0 1rem;
        }

        .testimonial-card {
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(244,162,97,0.3);
        }

        .stars { color: var(--color-accent-gold); font-size: 1.25rem; margin-bottom: var(--space-4); letter-spacing: 2px; }
        .text { font-size: 1.125rem; font-style: italic; margin-bottom: var(--space-8); flex-grow: 1; line-height: 1.8; color: var(--color-text-main); font-weight: 300; }
        
        .client-meta {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: var(--space-4);
          font-size: 0.875rem;
        }
        
        .name { font-weight: 600; color: white; display: block; margin-bottom: 0.25rem; font-size: 1.1rem; }
        .issue { color: var(--color-accent-gold); text-transform: uppercase; letter-spacing: 1.5px; font-size: 0.7rem; font-weight: 700; }

        @media (max-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr; }
          .pt-32 { padding-top: 6rem; }
          .text { font-size: 1rem; }
        }
      `}</style>
    </main>
  );
}
