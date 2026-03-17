"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ── Flappy Piers game ────────────────────────────────────────────────
const GW = 320, GH = 200;
const BIRD_X = 65, BIRD_R = 12;
const GRAVITY = 0.42, JUMP = -7.5;
const PIPE_W = 30, PIPE_GAP = 72, PIPE_SPEED = 2.2, PIPE_INTERVAL = 128;

function FlappyGame() {
  const canvasRef = useRef(null);
  const gs = useRef({
    phase: "idle",   // idle | playing | dead
    bird:  { y: GH / 2, vy: 0 },
    pipes: [],
    score: 0,
    frame: 0,
    raf:   null,
  });

  const act = useCallback(() => {
    const s = gs.current;
    if (s.phase === "idle" || s.phase === "dead") {
      s.phase = "playing";
      s.bird  = { y: GH / 2, vy: 0 };
      s.pipes = [];
      s.score = 0;
      s.frame = 0;
    }
    if (s.phase === "playing") s.bird.vy = JUMP;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const s      = gs.current;

    function draw() {
      // Sky
      ctx.fillStyle = "#091422";
      ctx.fillRect(0, 0, GW, GH);
      // Ground
      ctx.fillStyle = "#1e3a28";
      ctx.fillRect(0, GH - 22, GW, 22);
      ctx.fillStyle = "#2a5038";
      ctx.fillRect(0, GH - 22, GW, 3);

      if (s.phase === "idle") {
        ctx.font = "bold 16px system-ui,sans-serif";
        ctx.fillStyle = "rgba(245,240,232,0.9)";
        ctx.textAlign = "center";
        ctx.fillText("Flappy Piers 🐦", GW / 2, GH / 2 - 12);
        ctx.font = "12px system-ui,sans-serif";
        ctx.fillStyle = "rgba(245,240,232,0.5)";
        ctx.fillText("tap or click to fly!", GW / 2, GH / 2 + 10);
        return;
      }

      // Pipes
      s.pipes.forEach(p => {
        ctx.fillStyle = "#3d7a58";
        ctx.fillRect(p.x, 0, PIPE_W, p.topH - 10);
        ctx.fillStyle = "#6BAE8A";
        ctx.fillRect(p.x - 4, p.topH - 10, PIPE_W + 8, 10);
        ctx.fillStyle = "#3d7a58";
        ctx.fillRect(p.x, p.topH + PIPE_GAP + 10, PIPE_W, GH - p.topH - PIPE_GAP - 22 - 10);
        ctx.fillStyle = "#6BAE8A";
        ctx.fillRect(p.x - 4, p.topH + PIPE_GAP, PIPE_W + 8, 10);
      });

      // Bird
      ctx.save();
      ctx.translate(BIRD_X, s.bird.y);
      ctx.rotate(Math.max(-0.45, Math.min(0.55, s.bird.vy * 0.065)));
      // body
      ctx.fillStyle = "#f5f0e8";
      ctx.beginPath();
      ctx.ellipse(0, 0, BIRD_R, BIRD_R * 0.82, 0, 0, Math.PI * 2);
      ctx.fill();
      // wing
      ctx.fillStyle = "#d4c9b8";
      ctx.beginPath();
      ctx.ellipse(-2, 2, 7, 4, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // eye
      ctx.fillStyle = "#0C1B2E";
      ctx.beginPath();
      ctx.arc(5, -3, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(6, -3.8, 1.3, 0, Math.PI * 2);
      ctx.fill();
      // beak
      ctx.fillStyle = "#e89030";
      ctx.beginPath();
      ctx.moveTo(BIRD_R - 1, -1);
      ctx.lineTo(BIRD_R + 7, -2);
      ctx.lineTo(BIRD_R + 7, 3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Score
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.font = "bold 22px system-ui,sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(s.score, GW / 2, 30);

      if (s.phase === "dead") {
        ctx.fillStyle = "rgba(9,20,34,0.72)";
        ctx.fillRect(0, 0, GW, GH);
        ctx.fillStyle = "#f5f0e8";
        ctx.font = "bold 18px system-ui,sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Game Over!", GW / 2, GH / 2 - 18);
        ctx.fillStyle = "#6BAE8A";
        ctx.font = "bold 14px system-ui,sans-serif";
        ctx.fillText(`Score: ${s.score}`, GW / 2, GH / 2 + 4);
        ctx.fillStyle = "rgba(245,240,232,0.5)";
        ctx.font = "12px system-ui,sans-serif";
        ctx.fillText("tap to play again", GW / 2, GH / 2 + 26);
      }
    }

    function tick() {
      if (s.phase !== "playing") {
        draw();
        s.raf = requestAnimationFrame(tick);
        return;
      }
      s.frame++;
      s.bird.vy += GRAVITY;
      s.bird.y  += s.bird.vy;

      // Spawn pipe
      if (s.frame % PIPE_INTERVAL === 0) {
        const lo = 28, hi = GH - PIPE_GAP - 28 - 22;
        s.pipes.push({ x: GW + 10, topH: lo + Math.random() * (hi - lo), scored: false });
      }

      s.pipes = s.pipes.filter(p => p.x + PIPE_W + 4 > 0);
      s.pipes.forEach(p => {
        p.x -= PIPE_SPEED;
        if (!p.scored && p.x + PIPE_W < BIRD_X - BIRD_R) { p.scored = true; s.score++; }
      });

      // Collisions
      if (s.bird.y + BIRD_R > GH - 22 || s.bird.y - BIRD_R < 0) s.phase = "dead";
      for (const p of s.pipes) {
        if (
          BIRD_X + BIRD_R > p.x - 4 &&
          BIRD_X - BIRD_R < p.x + PIPE_W + 4 &&
          (s.bird.y - BIRD_R < p.topH || s.bird.y + BIRD_R > p.topH + PIPE_GAP)
        ) s.phase = "dead";
      }

      draw();
      s.raf = requestAnimationFrame(tick);
    }

    s.raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(s.raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={GW}
      height={GH}
      onClick={act}
      onTouchStart={e => { e.preventDefault(); act(); }}
      style={{ display: "block", width: "100%", borderRadius: "8px", cursor: "pointer", touchAction: "none" }}
    />
  );
}

// ── Main component ───────────────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen]               = useState(false);
  const [view, setView]               = useState("form"); // form | success | game
  const [name, setName]               = useState("");
  const [email, setEmail]             = useState("");
  const [message, setMessage]         = useState("");
  const [errors, setErrors]           = useState({});
  const [submitting, setSubmitting]   = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Please enter your name";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = "Please enter a valid email";
    if (!message.trim()) e.message = "Please enter a message";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 900));
    setSubmittedName(name.trim().split(" ")[0]);
    setSubmitting(false);
    setView("success");
  };

  const clearField = (field) => setErrors(x => ({ ...x, [field]: null }));

  return (
    <>
      {open && (
        <div className="cb-panel" role="dialog" aria-label="Message Piers">
          {/* Header */}
          <div className="cb-header">
            <div className="cb-header-info">
              <span className="cb-header-avatar">P</span>
              <div>
                <p className="cb-header-name">Piers Day</p>
                <p className="cb-header-sub">Clinical Hypnotherapist</p>
              </div>
            </div>
            <button className="cb-close" onClick={() => setOpen(false)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="cb-body">

            {/* ── Form view ── */}
            {view === "form" && (
              <form className="cb-form" onSubmit={handleSubmit} noValidate>
                <p className="cb-intro">Send Piers a message and he'll get back to you personally.</p>
                <div className="cb-field">
                  <label className="cb-label" htmlFor="cb-name">Your name</label>
                  <input
                    id="cb-name"
                    className={`cb-input${errors.name ? " cb-input--err" : ""}`}
                    type="text" placeholder="Jane Smith" value={name}
                    onChange={e => { setName(e.target.value); clearField("name"); }}
                  />
                  {errors.name && <span className="cb-err">{errors.name}</span>}
                </div>
                <div className="cb-field">
                  <label className="cb-label" htmlFor="cb-email">Email address</label>
                  <input
                    id="cb-email"
                    className={`cb-input${errors.email ? " cb-input--err" : ""}`}
                    type="email" placeholder="jane@example.com" value={email}
                    onChange={e => { setEmail(e.target.value); clearField("email"); }}
                  />
                  {errors.email && <span className="cb-err">{errors.email}</span>}
                </div>
                <div className="cb-field">
                  <label className="cb-label" htmlFor="cb-msg">Message</label>
                  <textarea
                    id="cb-msg"
                    className={`cb-textarea${errors.message ? " cb-input--err" : ""}`}
                    placeholder="Tell Piers a little about what you'd like help with…"
                    value={message} rows={4}
                    onChange={e => { setMessage(e.target.value); clearField("message"); }}
                  />
                  {errors.message && <span className="cb-err">{errors.message}</span>}
                </div>
                <button type="submit" className="cb-submit" disabled={submitting}>
                  {submitting
                    ? <><span className="cb-spinner" /> Sending…</>
                    : "Send message"}
                </button>
              </form>
            )}

            {/* ── Success view ── */}
            {view === "success" && (
              <div className="cb-success">
                <div className="cb-success-icon">✓</div>
                <h3 className="cb-success-title">Thanks, {submittedName}!</h3>
                <p className="cb-success-text">
                  Piers will reach out to you as soon as he can. If you'd prefer to speak right away:
                </p>
                <a href="tel:+447716008836" className="cb-call-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91A16 16 0 0 0 14 16l.94-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call Piers now
                </a>
                <button className="cb-game-btn" onClick={() => setView("game")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2"/>
                    <path d="M12 12h.01M8 10v4M6 12h4M16 10l2 2-2 2"/>
                  </svg>
                  Play Flappy Piers while you wait!
                </button>
                <a href="/blog" className="cb-resources-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  Browse resources &amp; videos
                </a>
              </div>
            )}

            {/* ── Game view ── */}
            {view === "game" && (
              <div className="cb-game-wrap">
                <FlappyGame />
                <button className="cb-back-btn" onClick={() => setView("success")}>← Back</button>
              </div>
            )}
          </div>

          {/* Branding */}
          <div className="cb-branding">
            Crafted by{" "}
            <a href="https://milesymedia.com" target="_blank" rel="noopener noreferrer" className="cb-brand-link">
              Milesymedia
            </a>
          </div>
        </div>
      )}

      {/* Trigger */}
      <button
        className={`cb-trigger${open ? " cb-trigger--open" : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close" : "Message Piers"}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        {!open && <span className="cb-trigger-label">Message Piers</span>}
      </button>

      <style jsx>{`
        /* ── Trigger ─────────────────────────────────────── */
        :global(.cb-trigger) {
          position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9100;
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.75rem 1.25rem 0.75rem 1rem;
          background: #0C1B2E; color: #fff; border: none; border-radius: 50px;
          cursor: pointer; box-shadow: 0 4px 20px rgba(12,27,46,0.35);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          font-family: var(--font-body);
        }
        :global(.cb-trigger svg) { width: 20px; height: 20px; flex-shrink: 0; }
        :global(.cb-trigger:hover) { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(12,27,46,0.4); background: #1A3448; }
        :global(.cb-trigger--open) { padding: 0.75rem; border-radius: 50%; }
        :global(.cb-trigger-label) { font-size: 0.875rem; font-weight: 600; white-space: nowrap; }

        /* ── Panel ───────────────────────────────────────── */
        :global(.cb-panel) {
          position: fixed; bottom: 5rem; right: 1.5rem; z-index: 9099;
          width: 360px; max-height: 580px;
          display: flex; flex-direction: column;
          background: #fff; border-radius: 18px;
          box-shadow: 0 12px 48px rgba(12,27,46,0.22), 0 2px 8px rgba(12,27,46,0.1);
          overflow: hidden; animation: cbSlideUp 0.25s ease;
        }
        @keyframes cbSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)     scale(1); }
        }

        /* Header */
        :global(.cb-header) {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1rem 1rem 1.125rem;
          background: #0C1B2E; flex-shrink: 0;
        }
        :global(.cb-header-info) { display: flex; align-items: center; gap: 0.75rem; }
        :global(.cb-header-avatar) {
          width: 36px; height: 36px; border-radius: 50%;
          background: #6BAE8A; display: flex; align-items: center; justify-content: center;
          font-size: 0.875rem; font-weight: 700; color: #fff;
        }
        :global(.cb-header-name) { font-size: 0.9rem; font-weight: 700; color: #f5f0e8; margin: 0; }
        :global(.cb-header-sub)  { font-size: 0.72rem; color: rgba(245,240,232,0.5); margin: 0; }
        :global(.cb-close) {
          background: none; border: none; cursor: pointer;
          color: rgba(245,240,232,0.5); padding: 4px;
          display: flex; align-items: center; transition: color 0.16s;
        }
        :global(.cb-close svg) { width: 16px; height: 16px; }
        :global(.cb-close:hover) { color: #f5f0e8; }

        /* Body */
        :global(.cb-body) { flex: 1; overflow-y: auto; background: #f8fafb; }

        /* Form */
        :global(.cb-form) { padding: 1.125rem; display: flex; flex-direction: column; gap: 0.875rem; }
        :global(.cb-intro) { font-size: 0.85rem; color: #4a6070; margin: 0; line-height: 1.5; }
        :global(.cb-field) { display: flex; flex-direction: column; gap: 0.3rem; }
        :global(.cb-label) { font-size: 0.78rem; font-weight: 600; color: #1a2b3c; }
        :global(.cb-input) {
          border: 1.5px solid #d8e5e0; border-radius: 8px;
          padding: 0.55rem 0.75rem; font-size: 0.875rem; color: #1a2b3c;
          background: #fff; outline: none; transition: border-color 0.16s;
          font-family: var(--font-body);
        }
        :global(.cb-input:focus) { border-color: #6BAE8A; }
        :global(.cb-input--err) { border-color: #e05555 !important; }
        :global(.cb-textarea) {
          border: 1.5px solid #d8e5e0; border-radius: 8px;
          padding: 0.55rem 0.75rem; font-size: 0.875rem; color: #1a2b3c;
          background: #fff; outline: none; resize: vertical; min-height: 90px;
          transition: border-color 0.16s; font-family: var(--font-body); line-height: 1.5;
        }
        :global(.cb-textarea:focus) { border-color: #6BAE8A; }
        :global(.cb-err) { font-size: 0.72rem; color: #e05555; }
        :global(.cb-submit) {
          background: #0C1B2E; color: #fff; border: none; border-radius: 8px;
          padding: 0.75rem; font-size: 0.875rem; font-weight: 600;
          cursor: pointer; transition: background 0.18s;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          font-family: var(--font-body);
        }
        :global(.cb-submit:hover:not(:disabled)) { background: #6BAE8A; }
        :global(.cb-submit:disabled) { opacity: 0.6; cursor: not-allowed; }
        :global(.cb-spinner) {
          width: 14px; height: 14px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff;
          animation: cbSpin 0.7s linear infinite; display: inline-block;
        }
        @keyframes cbSpin { to { transform: rotate(360deg); } }

        /* Success */
        :global(.cb-success) {
          padding: 1.5rem 1.25rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 0.8rem; text-align: center;
        }
        :global(.cb-success-icon) {
          width: 52px; height: 52px; border-radius: 50%;
          background: #6BAE8A; color: #fff; font-size: 1.5rem;
          display: flex; align-items: center; justify-content: center;
        }
        :global(.cb-success-title) { font-size: 1.1rem; font-weight: 700; color: #0C1B2E; margin: 0; }
        :global(.cb-success-text) { font-size: 0.875rem; color: #4a6070; margin: 0; line-height: 1.55; }
        :global(.cb-call-btn) {
          display: flex; align-items: center; gap: 0.5rem;
          background: #6BAE8A; color: #fff; text-decoration: none;
          border-radius: 8px; padding: 0.75rem 1.25rem;
          font-size: 0.875rem; font-weight: 600; width: 100%; justify-content: center;
          transition: background 0.18s;
        }
        :global(.cb-call-btn svg) { width: 16px; height: 16px; flex-shrink: 0; }
        :global(.cb-call-btn:hover) { background: #4a9070; }
        :global(.cb-game-btn) {
          display: flex; align-items: center; gap: 0.5rem;
          background: none; color: #0C1B2E;
          border: 1.5px solid #d8e5e0; border-radius: 8px;
          padding: 0.75rem 1.25rem; font-size: 0.875rem; font-weight: 500;
          width: 100%; justify-content: center; cursor: pointer;
          transition: border-color 0.18s, color 0.18s; font-family: var(--font-body);
        }
        :global(.cb-game-btn svg) { width: 16px; height: 16px; flex-shrink: 0; }
        :global(.cb-game-btn:hover) { border-color: #6BAE8A; color: #2D6A4F; }
        :global(.cb-resources-btn) {
          display: flex; align-items: center; gap: 0.5rem;
          background: none; color: #4a6070;
          border: 1.5px solid #d8e5e0; border-radius: 8px;
          padding: 0.75rem 1.25rem; font-size: 0.875rem; font-weight: 500;
          width: 100%; justify-content: center; text-decoration: none;
          transition: border-color 0.18s, color 0.18s;
        }
        :global(.cb-resources-btn svg) { width: 16px; height: 16px; flex-shrink: 0; }
        :global(.cb-resources-btn:hover) { border-color: #6BAE8A; color: #2D6A4F; }

        /* Game */
        :global(.cb-game-wrap) { padding: 0.875rem; display: flex; flex-direction: column; gap: 0.625rem; }
        :global(.cb-back-btn) {
          background: none; border: none; color: #6BAE8A;
          font-size: 0.8rem; font-weight: 600; cursor: pointer;
          text-align: left; padding: 0; font-family: var(--font-body);
        }
        :global(.cb-back-btn:hover) { color: #4a9070; }

        /* Branding */
        :global(.cb-branding) {
          text-align: center; font-size: 0.68rem; color: #aabbc6;
          padding: 0.45rem 1rem 0.55rem;
          background: #fff; border-top: 1px solid #eef4f0; flex-shrink: 0;
        }
        :global(.cb-brand-link) { color: #6BAE8A; font-weight: 600; text-decoration: none; }
        :global(.cb-brand-link:hover) { text-decoration: underline; }

        /* Mobile */
        @media (max-width: 480px) {
          :global(.cb-panel)   { right: 0.75rem; width: calc(100vw - 1.5rem); bottom: 4.5rem; }
          :global(.cb-trigger) { right: 0.75rem; bottom: 1rem; }
        }
      `}</style>
    </>
  );
}
