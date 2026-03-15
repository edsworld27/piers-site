import React from "react";
import "./services.css";

export default function ServicesPage() {
  return (
    <>
      <div className="services-page-wrap">
        {/* 1. PAGE HEADER */}
        <section className="page-header">
          <div className="container-inner">
            <span className="eyebrow-label">Service Directory</span>
            <h1>What We Treat</h1>
            <p className="muted-text">An A–Z of the most common ways I help clients reclaim their lives.</p>
            <hr className="gold-hr" />
          </div>
        </section>

        {/* 2. HOW IT WORKS — INFOGRAPHIC STRIP */}
        <section className="how-it-works">
          <div className="container">
            <div className="section-intro">
              <span className="eyebrow-label">The Method</span>
              <h2>How Clinical Hypnotherapy Works</h2>
            </div>
            
            <div className="method-steps-container">
              <div className="method-line"></div>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="circle">I</div>
                  <h3>Identify the Script</h3>
                  <p>We locate the subconscious belief driving your behaviour.</p>
                </div>
                <div className="step-item">
                  <div className="circle">II</div>
                  <h3>Enter the State</h3>
                  <p>Guided hypnosis accesses the subconscious directly.</p>
                </div>
                <div className="step-item">
                  <div className="circle">III</div>
                  <h3>Rewrite the Code</h3>
                  <p>The limiting belief is dissolved and replaced at source.</p>
                </div>
                <div className="step-item">
                  <div className="circle">IV</div>
                  <h3>Anchor the Change</h3>
                  <p>The new response becomes your natural default.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICE CARDS GRID */}
        <section className="service-grid-section">
          <div className="container">
            <div className="cards-grid">
              {/* Card 1 */}
              <article className="service-card">
                <div className="icon">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22" cy="22" r="18" stroke="#c9a84c" strokeWidth="1.5"/>
                    <path d="M22 10V22L30 30" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="card-tag">MENTAL HEALTH</span>
                <h3>Anxiety & Panic</h3>
                <p className="description">Stop the constant fight-or-flight cycle. We go to the root of the alarm so calm becomes your default state.</p>
                <div className="pills">
                  <span>Generalised Anxiety</span>
                  <span>Panic Attacks</span>
                  <span>Social Anxiety</span>
                  <span>OCD</span>
                </div>
                <a href="/contact" className="learn-more">Learn More <span className="arrow">→</span></a>
              </article>

              {/* Card 2 */}
              <article className="service-card">
                <div className="icon">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="28" height="28" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
                    <path d="M14 22H30M22 14V30" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="card-tag">BEHAVIOUR</span>
                <h3>Addictions & Habits</h3>
                <p className="description">Break free from patterns that no longer serve you without white-knuckling it.</p>
                <div className="pills">
                  <span>Smoking</span>
                  <span>Alcohol</span>
                  <span>Gambling</span>
                  <span>Compulsive Eating</span>
                </div>
                <a href="/contact" className="learn-more">Learn More <span className="arrow">→</span></a>
              </article>

              {/* Card 3 */}
              <article className="service-card">
                <div className="icon">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 34L22 10L34 34H10Z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="card-tag">MINDSET</span>
                <h3>Confidence & Self-Esteem</h3>
                <p className="description">Erase the 'I'm not enough' script. Step into your potential with unshakeable self-belief.</p>
                <div className="pills">
                  <span>Imposter Syndrome</span>
                  <span>Body Image</span>
                  <span>Self-Worth</span>
                </div>
                <a href="/contact" className="learn-more">Learn More <span className="arrow">→</span></a>
              </article>

              {/* Card 4 */}
              <article className="service-card">
                <div className="icon">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6L40 22L22 38L4 22L22 6Z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="card-tag">PERFORMANCE</span>
                <h3>Peak Performance</h3>
                <p className="description">Remove the mental ceiling. Perform at your true potential, not the limit fear imposes.</p>
                <div className="pills">
                  <span>Sports Performance</span>
                  <span>Public Speaking</span>
                  <span>Exam Nerves</span>
                </div>
                <a href="/contact" className="learn-more">Learn More <span className="arrow">→</span></a>
              </article>

              {/* Card 5 */}
              <article className="service-card">
                <div className="icon">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 38L18 34C10 26 4 20 4 13C4 7 8 3 13 3C16 3 19 5 22 7C25 5 28 3 31 3C36 3 40 7 40 13C40 20 34 26 26 34L22 38Z" stroke="#c9a84c" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="card-tag">RELATIONSHIPS</span>
                <h3>Love & Connection</h3>
                <p className="description">Open yourself to real intimacy without fear of abandonment or rejection.</p>
                <div className="pills">
                  <span>Fear of Intimacy</span>
                  <span>Attachment Patterns</span>
                  <span>Grief & Loss</span>
                </div>
                <a href="/contact" className="learn-more">Learn More <span className="arrow">→</span></a>
              </article>

              {/* Card 6 */}
              <article className="service-card">
                <div className="icon">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 34C6 34 10 26 22 26C34 26 38 34 38 34" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="22" cy="14" r="6" stroke="#c9a84c" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="card-tag">MENTAL HEALTH</span>
                <h3>Phobias & Trauma</h3>
                <p className="description">Dissolve irrational fears and past trauma at their root. Fast, gentle, lasting results.</p>
                <div className="pills">
                  <span>PTSD</span>
                  <span>Phobias</span>
                  <span>Childhood Trauma</span>
                </div>
                <a href="/contact" className="learn-more">Learn More <span className="arrow">→</span></a>
              </article>
            </div>
          </div>
        </section>

        {/* 4. BEFORE & AFTER INFOGRAPHIC */}
        <section className="transformation-section">
          <div className="container">
            <div className="section-intro">
              <span className="eyebrow-label">The Transformation</span>
              <h2>Before & After</h2>
            </div>

            <div className="transformation-content">
              {/* Before Column */}
              <div className="trans-col before-col">
                <h3>Before</h3>
                <ul>
                  <li>Controlled by fear, not guided by choice</li>
                  <li>Using willpower to fight your own mind</li>
                  <li>Waking up anxious without knowing why</li>
                  <li>Patterns that repeat no matter what you try</li>
                  <li>Surviving — not thriving</li>
                </ul>
              </div>

              {/* Center Shift */}
              <div className="shift-indicator">
                <div className="arrow-wrap">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12H38M38 12L28 2M38 12L28 22" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="shift-label">The Shift</span>
              </div>

              {/* After Column */}
              <div className="trans-col after-col">
                <h3>After</h3>
                <ul>
                  <li>Responding from calm, not reacting from fear</li>
                  <li>Your subconscious working with you, not against</li>
                  <li>Waking up with energy and a clear mind</li>
                  <li>New defaults that feel effortless and natural</li>
                  <li>Actually living — fully and freely</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
