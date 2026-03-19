"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(prev => (prev === i ? null : i));

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className={`faq-card${isOpen ? " faq-card--open" : ""}`}>
            <button
              className="faq-trigger"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="faq-question">{item.q}</span>
              <span className="faq-chevron" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}

      <style jsx>{`
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .faq-card {
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.09);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.2s, background 0.2s;
        }
        .faq-card--open {
          border-color: rgba(107,174,138,0.4);
          background: rgba(107,174,138,0.05);
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-body, system-ui);
        }

        .faq-question {
          font-size: 1rem;
          font-weight: 600;
          color: #f5f0e8;
          line-height: 1.45;
          transition: color 0.18s;
        }
        .faq-card--open .faq-question {
          color: #6BAE8A;
        }

        .faq-chevron {
          flex-shrink: 0;
          color: rgba(245,240,232,0.35);
          transition: transform 0.22s ease, color 0.18s;
          display: flex;
          align-items: center;
        }
        .faq-card--open .faq-chevron {
          transform: rotate(180deg);
          color: #6BAE8A;
        }

        .faq-answer {
          padding: 0 1.5rem 1.25rem;
          animation: faqOpen 0.18s ease;
        }
        @keyframes faqOpen {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: none; }
        }
        .faq-answer p {
          font-size: 0.95rem;
          color: rgba(245,240,232,0.6);
          line-height: 1.72;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
