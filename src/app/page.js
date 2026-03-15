import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <section className="hero full-viewport flex flex-col items-center justify-center text-center">
        <div className="container hero-content">
          <h1 className="fade-in-up pb-4" style={{ animationDelay: "0.1s" }}>
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
      <section className={`${styles.statsBanner}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={`${styles.statItem} fade-in-up`} style={{ animationDelay: "0.6s" }}>
              <div className={styles.statIconWrap}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Years Experience</div>
              <div className={styles.statSub}>Trusted clinical expertise</div>
            </div>
            <div className={`${styles.statItem} ${styles.statItemCenter} fade-in-up`} style={{ animationDelay: "0.7s" }}>
              <div className={styles.statIconWrap}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className={styles.statNumber}>100s</div>
              <div className={styles.statLabel}>Lives Changed</div>
              <div className={styles.statSub}>Real people, real results</div>
            </div>
            <div className={`${styles.statItem} fade-in-up`} style={{ animationDelay: "0.8s" }}>
              <div className={styles.statIconWrap}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div className={styles.statNumber}>1</div>
              <div className={styles.statLabel}>Proven Method</div>
              <div className={styles.statSub}>Clinical hypnotherapy</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EMPATHY & COMPETENCY (The Guide)
          "We feel your pain" + "We have solved this hundreds of times" */}
      <section className={`section ${styles.bgDarker}`}>
        <div className={`container ${styles.maxWidth4xl} text-center`}>
          <h2 className="mb-6 fade-in-up text-gradient-light">You shouldn't have to fight your own mind every day.</h2>
          <p className={`${styles.textXl} mb-6 text-gray fade-in-up`} style={{ animationDelay: "0.2s" }}>
            If you are struggling with anxiety, addiction, or self-doubt, we know exactly how exhausting it feels to try and use willpower to fix it. Your brain is stuck in survival mode, and it feels impossible to turn off.
          </p>
          <p className={`${styles.textXl} ${styles.textWhite} fade-in-up`} style={{ animationDelay: "0.4s" }}>
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
            <p className={`${styles.maxWidth2xl} mx-auto text-gray mt-4`}>We do one thing: we give you back control of your mind. Here are the most common ways we apply this to help you win.</p>
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
      <section className={`section ${styles.bgDarker} ${styles.pb0}`}>
        <div className={`container ${styles.maxWidth4xl} text-center`}>
          <h2 className={`mb-6 fade-in-up ${styles.textRed400}`}>What happens if you do nothing?</h2>
          <p className={`${styles.textXl} mb-6 text-gray fade-in-up`} style={{ animationDelay: "0.2s" }}>
            I have seen far too many people stop their lives and fail to reach their potential because they let their primal fears dictate their future. They lose time, they damage their health, and they accept a life of just 'surviving'.
          </p>
          <p className={`${styles.textXl} ${styles.textWhite} fade-in-up`} style={{ animationDelay: "0.4s" }}>
            <strong>We cannot let this happen anymore. Let's get serious about your mental health and take back control right now.</strong>
          </p>
          <div className="fade-in-up" style={{ animationDelay: "0.6s", marginTop: "var(--space-8)" }}>
            <Link href="/contact" className="btn btn-primary pulse text-lg px-8 py-4">I Don't Want to Wait Any Longer</Link>
          </div>
        </div>
      </section>

      {/* 5. DUE DILIGENCE / PROOF
          Social proof to lower risk before the plan. */}
      <section className="section">
        <div className={`container ${styles.maxWidth5xl}`}>
          <div className="section-header text-center mb-12 fade-in-up">
            <h2 className="text-gradient-light">Proof That This Works</h2>
            <p className={`${styles.maxWidth2xl} mx-auto text-gray mt-4`}>Don't just take our word for it. Here is what happens when you decide to take control.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-panel p-8 italic">
              "I had struggled with crippling anxiety for 15 years. I thought my brain was just broken. In just a few sessions, the constant 'fight or flight' noise completely stopped. I finally have my life back."
              <br/><br/><span className={`${styles.textWhite} not-italic font-bold`}>— Sarah T., Suffolk</span>
            </div>
            <div className="glass-panel p-8 italic">
              "I tried willpower, patches, and gums to quit smoking. Nothing worked because I was fighting my own mind. Piers rewired the habit at the root. I haven't craved a cigarette since."
              <br/><br/><span className={`${styles.textWhite} not-italic font-bold`}>— James R., Online Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE 3-STEP PLAN (Intake -> Start Date -> Equipment)
          Show them exactly how easy it is to do business with you. */}
      <section className={`section plan-section ${styles.bgDarker}`}>
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="text-gradient-light">Three Steps to Reclaim Your Life</h2>
            <p className={`${styles.maxWidth2xl} mx-auto text-gray`}>Taking back control is incredibly simple.</p>
          </div>
          
          <div className={styles.planGrid}>
            <div className={`plan-step glass-panel fade-in-up ${styles.planStep}`}>
              <div className={styles.stepNumber}>1</div>
              <h3>Reach Out Your Way</h3>
              <p>Fill out a quick form, call, or email. Choose the method that feels easiest for you. Zero pressure.</p>
            </div>
            <div className={`plan-step glass-panel fade-in-up ${styles.planStep}`} style={{ animationDelay: "0.2s" }}>
              <div className={styles.stepNumber}>2</div>
              <h3>Free Intake Review</h3>
              <p>We figure out exactly what your problem is, why you are stuck, and how we can solve it for you.</p>
            </div>
            <div className={`plan-step glass-panel fade-in-up ${styles.planStep}`} style={{ animationDelay: "0.4s" }}>
              <div className={styles.stepNumber}>3</div>
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
        <div className={`container ${styles.maxWidth3xl}`}>
          <h2 className="mb-6 text-gradient-light">Stop letting your mind hold you back.</h2>
          <p className={`${styles.textXl} mb-8 text-gray`}>
            If you are struggling with anxiety, addiction, or limiting beliefs, we want to be absolutely clear: <strong>reaching out is the right decision</strong>. Don't waste another year trying to survive on your own. Let us help you win.
          </p>
          <div>
            <Link href="/contact" className="btn btn-primary pulse text-lg px-8 py-4">Yes, I Want to Take Control</Link>
          </div>
        </div>
      </section>
    </>
  );
}
