"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function Home() {
  return (
    <>
      {/* 1. THE HERO (Customer)
          Focus entirely on their problem and the outcome they want. */}
      <section className="hero" style={{ padding: "var(--space-24) 0" }}>
        <div className="container hero-content text-center">
          <h1 className="fade-in-up pb-2" style={{ animationDelay: "0.1s" }}>
            Take Back Control <br/> <span className="text-gradient-gold">Of Your Mind.</span>
          </h1>
          <p className="fade-in-up hero-sub max-w-2xl mx-auto text-xl" style={{ animationDelay: "0.3s", marginBottom: "var(--space-8)" }}>
            Stop fighting yourself. We rewire your subconscious mind so you can quickly overcome limiting beliefs and start improving your life.
          </p>
          <div className="hero-btngroup fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link href="/contact" className="btn btn-primary pulse text-lg px-8 py-4">Get Support Now</Link>
          </div>
        </div>
      </section>

      {/* 1.5 INFOGRAPHIC / STATS BAR 
          Visual proof for the primitive brain right away */}
      <section className="stats-banner glass-panel">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="stat-number">100s</div>
              <div className="stat-label">Lives Changed</div>
            </div>
            <div className="stat-item fade-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="stat-number">1</div>
              <div className="stat-label">Proven Method</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EMPATHY & COMPETENCY (The Guide)
          "We feel your pain" + "We have solved this hundreds of times" */}
      <section className="section bg-darker">
        <div className="container max-w-4xl text-center">
          <h2 className="mb-6 fade-in-up text-gradient-light">You shouldn't have to fight your own mind every day.</h2>
          <p className="text-xl mb-6 text-gray fade-in-up" style={{ animationDelay: "0.2s" }}>
            If you are struggling with anxiety, addiction, or self-doubt, we know exactly how exhausting it feels to try and use willpower to fix it. Your brain is stuck in survival mode, and it feels impossible to turn off.
          </p>
          <p className="text-xl text-white fade-in-up" style={{ animationDelay: "0.4s" }}>
            <strong>You are not alone, and you are not broken. As clinical hypnotherapists, we have helped hundreds of people solve this exact problem and take back control of their lives.</strong>
          </p>
        </div>
      </section>

      {/* 3. COMMON PROBLEMS SOLVED
          Explicitly list what we treat. 'If you struggle with X...' */}
      <section className="section bento-section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-gradient-light">Common Problems We Help Solve</h2>
            <p className="max-w-2xl mx-auto text-gray mt-4">We do one thing: we give you back control of your mind. Here are the most common ways we apply this to help you win.</p>
          </div>
          
          <div className="bento-grid">
            <Link href="/services/anxiety" className="bento-card glass-panel wide relative group">
              <span className="eyebrow fade">If you struggle with:</span>
              <h3>Anxiety & Trauma</h3>
              <p>Turn off the constant "fight or flight" alarms. Sleep deeply, focus clearly, and feel safe in your own body.</p>
              <div className="card-arrow">&gt;</div>
            </Link>
            
            <Link href="/services/stop-smoking" className="bento-card glass-panel relative group">
              <span className="eyebrow fade">If you struggle with:</span>
              <h3>Smoking & Addictions</h3>
              <p>Break the subconscious craving at the root cause, without relying on willpower.</p>
              <div className="card-arrow">&gt;</div>
            </Link>
            
            <Link href="/services/weight-loss" className="bento-card glass-panel relative group">
              <span className="eyebrow fade">If you struggle with:</span>
              <h3>Weight & Eating</h3>
              <p>Stop emotional eating. We reprogram your relationship with food so you don't have to starve.</p>
              <div className="card-arrow">&gt;</div>
            </Link>
            
            <Link href="/services/confidence" className="bento-card glass-panel wide relative group">
              <span className="eyebrow fade">If you struggle with:</span>
              <h3>Confidence & Focus</h3>
              <p>Remove the invisible mental blocks and limiting beliefs that keep you playing small.</p>
              <div className="card-arrow">&gt;</div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE STAKES (Failure)
          What happens if they don't buy? "I have seen too many people..." */}
      <section className="section bg-darker pb-0">
        <div className="container max-w-4xl text-center">
          <h2 className="mb-6 fade-in-up" style={{ color: "#f87171" }}>What happens if you do nothing?</h2>
          <p className="text-xl mb-6 text-gray fade-in-up" style={{ animationDelay: "0.2s" }}>
            I have seen far too many people stop their lives and fail to reach their potential because they let their primal fears dictate their future. They lose time, they damage their health, and they accept a life of just 'surviving'.
          </p>
          <p className="text-xl text-white fade-in-up" style={{ animationDelay: "0.4s" }}>
            <strong>We cannot let this happen anymore. Let's get serious about your mental health and take back control right now.</strong>
          </p>
        </div>
      </section>

      {/* 5. DUE DILIGENCE / PROOF
          Social proof to lower risk before the plan. */}
      <section className="section">
        <div className="container max-w-5xl">
          <div className="section-header text-center mb-12 fade-in-up">
            <h2 className="text-gradient-light">Proof That This Works</h2>
            <p className="max-w-2xl mx-auto text-gray mt-4">Don't just take our word for it. Here is what happens when you decide to take control.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-panel p-8 italic">
              "I had struggled with crippling anxiety for 15 years. I thought my brain was just broken. In just a few sessions, the constant 'fight or flight' noise completely stopped. I finally have my life back."
              <br/><br/><span className="text-white not-italic font-bold">— Sarah T., Suffolk</span>
            </div>
            <div className="glass-panel p-8 italic">
              "I tried willpower, patches, and gums to quit smoking. Nothing worked because I was fighting my own mind. Piers rewired the habit at the root. I haven't craved a cigarette since."
              <br/><br/><span className="text-white not-italic font-bold">— James R., Online Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE 3-STEP PLAN (Intake -> Start Date -> Equipment)
          Show them exactly how easy it is to do business with you. */}
      <section className="section plan-section bg-darker">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="text-gradient-light">Three Steps to Reclaim Your Life</h2>
            <p className="max-w-2xl mx-auto text-gray">Taking back control is incredibly simple.</p>
          </div>
          
          <div className="plan-grid">
            <div className="plan-step glass-panel fade-in-up">
              <div className="step-number">1</div>
              <h3>Reach Out Your Way</h3>
              <p>Fill out a quick form, call, or email. Choose the method that feels easiest for you. Zero pressure.</p>
            </div>
            <div className="plan-step glass-panel fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="step-number">2</div>
              <h3>Free Intake Review</h3>
              <p>We figure out exactly what your problem is, why you are stuck, and how we can solve it for you.</p>
            </div>
            <div className="plan-step glass-panel fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="step-number">3</div>
              <h3>Get Your Plan & Tools</h3>
              <p>You'll walk away with a clear plan and the mental equipment to support you along the way so you can finally thrive.</p>
            </div>
          </div>
          
          <div className="text-center mt-12 fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Link href="/contact" className="btn btn-primary pulse">Let's Talk Today</Link>
          </div>
        </div>
      </section>

      {/* 7. THE STAKES & DIRECT INVITATION
          Tell them this is the right decision. No vagueness. */}
      <section className="section text-center fade-in-up">
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-gradient-light">Stop letting your mind hold you back.</h2>
          <p className="text-xl mb-8 text-gray">
            If you are struggling with anxiety, addiction, or limiting beliefs, we want to be absolutely clear: <strong>reaching out is the right decision</strong>. Don't waste another year trying to survive on your own. Let us help you win.
          </p>
          <div>
            <Link href="/contact" className="btn btn-primary pulse text-lg px-8 py-4">Yes, I Want to Take Control</Link>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .bg-darker { background-color: rgba(0,0,0,0.2); }
        .text-red-400 { color: #f87171; }
        .pb-0 { padding-bottom: 0; }
        .max-w-5xl { max-width: 64rem; margin-inline: auto; }
        .max-w-4xl { max-width: 56rem; margin-inline: auto; }
        .max-w-3xl { max-width: 48rem; margin-inline: auto; }
        .max-w-2xl { max-width: 42rem; margin-inline: auto; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mt-12 { margin-top: 3rem; }
        .pb-2 { padding-bottom: 0.5rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.6; }
        .text-white { color: white; }
        
        .plan-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        
        .plan-step {
          padding: var(--space-8);
          text-align: center;
          position: relative;
        }
        
        .step-number {
          background-color: var(--color-accent-gold);
          color: var(--color-bg);
          font-family: var(--font-playfair);
          font-size: 2rem;
          font-weight: bold;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto var(--space-6);
        }
        
        .plan-step h3 {
          color: var(--color-text-main);
          font-size: 1.5rem;
          margin-bottom: var(--space-4);
        }
        
        .plan-step p {
          color: var(--color-text-muted);
        }
        
        @media (max-width: 768px) {
          .plan-grid {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: var(--space-4);
            padding: var(--space-4) 0;
          }
          .stats-banner {
            margin: 0 var(--space-2);
            border-radius: var(--radius-md);
          }
        }
        
        /* Infographic Styles */
        .stats-banner {
          margin: calc(var(--space-8) * -1) var(--space-4) var(--space-16) var(--space-4);
          position: relative;
          z-index: 10;
          background: rgba(15, 23, 42, 0.8);
          border-top: 2px solid var(--color-accent-gold);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: var(--space-8) 0;
          text-align: center;
        }
        .stat-number {
          font-family: var(--font-playfair);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-accent-gold);
          font-weight: bold;
          line-height: 1;
          margin-bottom: var(--space-1);
        }
        .stat-label {
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.875rem;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
