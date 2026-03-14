import Link from "next/link";

export const metadata = {
  title: "Hypnotherapy Services & Treatments | Elevate Hypnotherapy",
  description: "Explore our specialized online hypnotherapy treatments including anxiety relief, stopping smoking, weight management, and building confidence.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="mb-4 fade-in-up text-gradient-gold">One Philosophy. Endless Ways to Improve Your Life.</h1>
          <p className="hero-sub mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
            Our focus is simple: we give you back control of your mind by erasing limiting beliefs. Here are just a few of the hundreds of ways we can apply this process.
          </p>
        </div>

        <div className="bento-grid">
          <Link href="/services/anxiety" className="bento-card glass-panel wide relative group">
            <span className="eyebrow fade">Stop Surviving, Start Living</span>
            <h3>Anxiety & Trauma</h3>
            <p>Turn off the constant "fight or flight" alarms. Sleep deeply, focus clearly, and feel safe in your own body.</p>
            <div className="card-arrow">&gt;</div>
          </Link>
          
          <Link href="/services/stop-smoking" className="bento-card glass-panel relative group">
            <span className="eyebrow fade">Protect Your Health</span>
            <h3>Stop Smoking</h3>
            <p>Break the subconscious craving in one session. Add years to your life.</p>
            <div className="card-arrow">&gt;</div>
          </Link>
          
          <Link href="/services/weight-loss" className="bento-card glass-panel relative group">
            <span className="eyebrow fade">Regain Control</span>
            <h3>Weight & Eating</h3>
            <p>Stop emotional eating by fixing the root cause, not starving yourself.</p>
            <div className="card-arrow">&gt;</div>
          </Link>
          
          <Link href="/services/confidence" className="bento-card glass-panel wide relative group">
            <span className="eyebrow fade">Achieve Your Potential</span>
            <h3>Confidence & Focus</h3>
            <p>Fear of failure threatens your career and life. Remove mental blocks and perform at your best.</p>
            <div className="card-arrow">&gt;</div>
          </Link>
        </div>
      </div>
      <style>{`
        .pt-32 { padding-top: 8rem; }
        .pb-24 { padding-bottom: 6rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .text-center { text-align: center; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          max-width: 1000px;
          margin: 0 auto;
        }
        .bento-card {
          padding: var(--space-8);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .bento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          border-color: var(--color-accent-gold);
        }
        .bento-card.wide { grid-column: span 2; }
        .card-arrow { position: absolute; bottom: var(--space-8); right: var(--space-8); font-size: 1.5rem; color: var(--color-accent-gold); opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease; transform: translateX(-10px); }
        .bento-card:hover .card-arrow { opacity: 1; transform: translateX(0); }
        
        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-card.wide { grid-column: 1; }
        }
      `}</style>
    </div>
  );
}
