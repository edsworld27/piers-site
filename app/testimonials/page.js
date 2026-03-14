export const metadata = {
  title: "Client Testimonials & Success Stories | Elevate Hypnotherapy",
  description: "Read real stories from clients across the UK who have transformed their lives, overcome anxiety, and stopped smoking with Elevate Hypnotherapy.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah T.",
      issue: "Panic Attacks",
      text: "After years of debilitating panic attacks and trying every traditional therapy available, I finally feel free. The shift after just three sessions was profound. It feels like a heavy coat I didn't know I was wearing has finally been taken off.",
      rating: 5
    },
    {
      name: "James L.",
      issue: "Smoking (20 years)",
      text: "I was extremely skeptical about hypnotherapy. I had tried patches, gum, and cold turkey multiple times. I walked out of my single session and haven't touched or wanted a cigarette since. It is genuinely like magic, though I know it's just science.",
      rating: 5
    },
    {
      name: "Mark R.",
      issue: "Weight Management",
      text: "For 20 years I bounced between extreme diets. Hypnotherapy finally switched off that constant internal negotiation about food. I'm 3 stone lighter, and most importantly, I don't obsess over what I eat anymore.",
      rating: 5
    },
    {
      name: "Elena G.",
      issue: "Fear of Flying",
      text: "I hadn't been on a plane in 8 years due to sheer terror. We did two sessions before my sister's wedding in Italy. Not only did I fly, I fell asleep during takeoff. Incredible.",
      rating: 5
    },
    {
      name: "David M.",
      issue: "Public Speaking",
      text: "I turned down promotions because I was terrified of public speaking. The anxiety would start weeks before an event. Now, I just gave a presentation to 200 people and actually felt present and capable.",
      rating: 5
    },
    {
      name: "Chloe W.",
      issue: "Insomnia & Stress",
      text: "The audio recording provided after the session is a lifesaver. My sleep architecture has completely changed. I wake up feeling human again.",
      rating: 5
    }
  ];

  return (
    <main className="pt-32 pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="mb-6 fade-in-up">Success Stories</h1>
          <p className="hero-sub mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>Real transformations from people who decided they were ready for change.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card glass-panel fade-in-up" style={{animationDelay: `${0.1 * i}s`}}>
              <div className="stars">{"★".repeat(t.rating)}</div>
              <p className="text">"{t.text}"</p>
              <div className="client-meta">
                <span className="name">{t.name}</span>
                <span className="issue">{t.issue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pt-32 { padding-top: 8rem; }
        .pb-24 { padding-bottom: 6rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .text-center { text-align: center; }
        .hero-sub { font-size: 1.25rem; color: var(--color-text-muted); max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }

        .testimonial-card {
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .stars { color: var(--color-accent-gold); font-size: 1.25rem; margin-bottom: var(--space-4); letter-spacing: 2px; }
        .text { font-size: 1.125rem; font-style: italic; margin-bottom: var(--space-8); flex-grow: 1; line-height: 1.8; color: var(--color-text-main); }
        
        .client-meta {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--glass-border);
          padding-top: var(--space-4);
          font-size: 0.875rem;
        }
        
        .name { font-weight: bold; color: var(--color-accent-gold); }
        .issue { color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px; font-size: 0.75rem; }

        @media (max-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
