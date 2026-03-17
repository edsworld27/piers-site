"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ── Credentials — change these values to update the portal password ──
const PORTAL_USER = "piers";
const PORTAL_PASS = "Hypno2025!";
const SESSION_KEY = "piers_portal_v1";
const SESSION_TTL = 8 * 60 * 60 * 1000; // 8 hours

function checkSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    return Date.now() < JSON.parse(raw).expires;
  } catch { return false; }
}
function saveSession() {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ expires: Date.now() + SESSION_TTL }));
}
function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

// ── Portal links ─────────────────────────────────────────────────────
const LINKS = [
  {
    label: "Games Room",
    desc: "Games & activities for clients waiting for their session",
    href: "/waiting-room",
    internal: true,
    color: "#6BAE8A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <path d="M12 12h.01M8 10v4M6 12h4M16 10l2 2-2 2"/>
      </svg>
    ),
  },
  {
    label: "Aqua CRM",
    desc: "Client management, appointments & session notes",
    href: "https://app.aquacrm.com",
    internal: false,
    color: "#5b9bd5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    label: "Leave a Review",
    desc: "Share your experience on Google to help more clients",
    href: "https://g.page/r/PLACEHOLDER/review",
    internal: false,
    color: "#e8c030",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    label: "Ads Funnel",
    desc: "Advertising campaigns, landing pages & lead tracking",
    href: "#",
    internal: false,
    color: "#e87070",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    label: "Notion Portal",
    desc: "Notes, planning docs & content workspace",
    href: "https://notion.so",
    internal: false,
    color: "#a78bfa",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
];

/* ── Login Form ──────────────────────────────────────────────────── */
function LoginForm({ onSuccess, onDevMode }) {
  const [user, setUser]   = useState("");
  const [pass, setPass]   = useState("");
  const [err, setErr]     = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    if (user.trim() === PORTAL_USER && pass === PORTAL_PASS) {
      saveSession();
      onSuccess();
    } else {
      setErr("Incorrect username or password.");
    }
    setLoading(false);
  };

  return (
    <div className="lp-outer">
      {/* Decorative orbs */}
      <div className="lp-orb lp-orb-1" />
      <div className="lp-orb lp-orb-2" />

      <div className="lp-card">
        {/* Logo */}
        <div className="lp-logo-wrap">
          <div className="lp-logo-ring">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        </div>

        <p className="lp-eyebrow">Client Portal</p>
        <h1 className="lp-heading">Welcome back</h1>
        <p className="lp-sub">Sign in to access your portal.</p>

        <form onSubmit={submit} className="lp-form" noValidate>
          <div className="lp-field">
            <label className="lp-label" htmlFor="lp-user">Username</label>
            <input
              id="lp-user" className="lp-input" type="text"
              value={user} onChange={e => { setUser(e.target.value); setErr(""); }}
              placeholder="Enter your username" autoComplete="username"
            />
          </div>
          <div className="lp-field">
            <label className="lp-label" htmlFor="lp-pass">Password</label>
            <input
              id="lp-pass" className="lp-input" type="password"
              value={pass} onChange={e => { setPass(e.target.value); setErr(""); }}
              placeholder="••••••••••" autoComplete="current-password"
            />
          </div>
          {err && <p className="lp-err">{err}</p>}
          <button type="submit" className="lp-btn" disabled={loading}>
            {loading && <span className="lp-spinner" />}
            {loading ? "Signing in…" : "Sign in →"}
          </button>
        </form>

        <div className="lp-footer-links">
          <Link href="/" className="lp-back-link">← Back to website</Link>
          <button className="lp-dev-btn" onClick={onDevMode}>Dev mode</button>
        </div>
      </div>
    </div>
  );
}

/* ── Portal Dashboard ────────────────────────────────────────────── */
function PortalDashboard({ onLogout }) {
  return (
    <div className="pd-outer">
      <div className="lp-orb lp-orb-1" />
      <div className="lp-orb lp-orb-2" />

      <div className="pd-wrap">
        {/* Header */}
        <div className="pd-header">
          <div className="pd-header-brand">
            <div className="pd-brand-dot" />
            <span className="pd-brand-name">Client Portal</span>
          </div>
          <button className="pd-logout" onClick={onLogout}>Sign out</button>
        </div>

        {/* Hero text */}
        <div className="pd-hero">
          <h1 className="pd-title">Welcome back, Piers.</h1>
          <p className="pd-subtitle">Everything you need, in one place.</p>
        </div>

        {/* Cards grid */}
        <div className="pd-grid">
          {LINKS.map(link => {
            const Tag = link.internal ? Link : "a";
            const extra = link.internal ? {} : { target: "_blank", rel: "noopener noreferrer" };
            return (
              <Tag key={link.label} href={link.href} className="pd-card" {...extra}
                style={{ "--c": link.color }}>
                <div className="pd-card-top">
                  <span className="pd-card-icon">{link.icon}</span>
                  <span className="pd-card-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
                <h3 className="pd-card-label">{link.label}</h3>
                <p className="pd-card-desc">{link.desc}</p>
              </Tag>
            );
          })}
        </div>

        <div className="pd-bottom">
          <Link href="/" className="pd-site-link">← View website</Link>
        </div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function LoginPage() {
  const [authed, setAuthed] = useState(null);

  useEffect(() => {
    setAuthed(checkSession());
  }, []);

  const handleLogin  = () => setAuthed(true);
  const handleLogout = () => { clearSession(); setAuthed(false); };
  const handleDev    = () => { saveSession(); setAuthed(true); };

  if (authed === null) {
    return <div style={{ minHeight: "100vh", background: "#091422" }} />;
  }

  return (
    <>
      {authed
        ? <PortalDashboard onLogout={handleLogout} />
        : <LoginForm onSuccess={handleLogin} onDevMode={handleDev} />
      }

      <style jsx global>{`
        * { box-sizing: border-box; }

        /* ── Shared bg ── */
        .lp-outer, .pd-outer {
          min-height: 100vh;
          background: #091422;
          display: flex; align-items: center; justify-content: center;
          padding: 2rem 1.25rem;
          font-family: var(--font-body, system-ui);
          position: relative; overflow: hidden;
        }
        .lp-orb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(80px);
        }
        .lp-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(107,174,138,0.12) 0%, transparent 70%);
          top: -150px; right: -100px;
        }
        .lp-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(196,144,106,0.08) 0%, transparent 70%);
          bottom: -120px; left: -80px;
        }

        /* ── Login card ── */
        .lp-card {
          position: relative; z-index: 1;
          width: 100%; max-width: 420px;
          background: rgba(12,27,46,0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(107,174,138,0.18);
          border-radius: 20px;
          padding: 2.75rem 2.25rem 2rem;
          text-align: center;
          box-shadow: 0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset;
        }
        .lp-logo-wrap { margin-bottom: 1.5rem; display: flex; justify-content: center; }
        .lp-logo-ring {
          width: 56px; height: 56px; border-radius: 50%;
          background: rgba(107,174,138,0.12);
          border: 1.5px solid rgba(107,174,138,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #6BAE8A;
        }
        .lp-logo-ring svg { width: 26px; height: 26px; }
        .lp-eyebrow {
          font-size: 0.67rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.15em; color: #6BAE8A; margin: 0 0 0.5rem;
        }
        .lp-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem; font-weight: 500; color: #f5f0e8;
          margin: 0 0 0.4rem; line-height: 1.15;
        }
        .lp-sub { font-size: 0.875rem; color: rgba(245,240,232,0.4); margin: 0 0 2rem; }

        .lp-form { display: flex; flex-direction: column; gap: 1rem; text-align: left; }
        .lp-field { display: flex; flex-direction: column; gap: 0.35rem; }
        .lp-label { font-size: 0.75rem; font-weight: 600; color: rgba(245,240,232,0.6); letter-spacing: 0.03em; }
        .lp-input {
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 10px; padding: 0.7rem 1rem;
          font-size: 0.925rem; color: #f5f0e8;
          outline: none; transition: border-color 0.16s, background 0.16s;
          font-family: var(--font-body, system-ui);
        }
        .lp-input::placeholder { color: rgba(245,240,232,0.2); }
        .lp-input:focus { border-color: rgba(107,174,138,0.6); background: rgba(107,174,138,0.06); }
        .lp-err {
          font-size: 0.78rem; color: #e87070; text-align: center; margin: 0.25rem 0 0;
        }
        .lp-btn {
          background: #6BAE8A; color: #fff;
          border: none; border-radius: 10px;
          padding: 0.85rem 1rem; margin-top: 0.25rem;
          font-size: 0.95rem; font-weight: 700; cursor: pointer;
          transition: background 0.18s, transform 0.15s;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          font-family: var(--font-body, system-ui);
          letter-spacing: 0.01em;
        }
        .lp-btn:hover:not(:disabled) { background: #4a9070; transform: translateY(-1px); }
        .lp-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .lp-spinner {
          width: 15px; height: 15px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff;
          animation: lpSpin 0.7s linear infinite; display: inline-block; flex-shrink: 0;
        }
        @keyframes lpSpin { to { transform: rotate(360deg); } }

        .lp-footer-links {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 1.75rem;
        }
        .lp-back-link {
          font-size: 0.78rem; color: rgba(245,240,232,0.28);
          text-decoration: none; transition: color 0.16s;
        }
        .lp-back-link:hover { color: rgba(245,240,232,0.55); }
        .lp-dev-btn {
          background: none; border: none; cursor: pointer;
          font-size: 0.72rem; color: rgba(245,240,232,0.15);
          font-family: var(--font-body, system-ui);
          transition: color 0.16s; padding: 0;
        }
        .lp-dev-btn:hover { color: rgba(245,240,232,0.38); }

        /* ── Portal dashboard ── */
        .pd-outer { align-items: flex-start; padding-top: 3rem; padding-bottom: 3rem; }
        .pd-wrap {
          position: relative; z-index: 1;
          width: 100%; max-width: 760px;
        }

        .pd-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 2.5rem;
        }
        .pd-header-brand { display: flex; align-items: center; gap: 0.6rem; }
        .pd-brand-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #6BAE8A;
          box-shadow: 0 0 0 3px rgba(107,174,138,0.2);
        }
        .pd-brand-name {
          font-size: 0.78rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(245,240,232,0.45);
        }
        .pd-logout {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(245,240,232,0.4); border-radius: 8px;
          padding: 0.45rem 0.875rem; font-size: 0.78rem; cursor: pointer;
          transition: all 0.16s; font-family: var(--font-body, system-ui);
        }
        .pd-logout:hover { background: rgba(255,255,255,0.1); color: rgba(245,240,232,0.75); border-color: rgba(255,255,255,0.18); }

        .pd-hero { margin-bottom: 2.25rem; }
        .pd-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 500; color: #f5f0e8; margin: 0 0 0.4rem; line-height: 1.15;
        }
        .pd-subtitle { font-size: 0.975rem; color: rgba(245,240,232,0.4); margin: 0; }

        /* Cards */
        .pd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .pd-card {
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 1.5rem 1.25rem;
          text-decoration: none; cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .pd-card:hover {
          border-color: var(--c);
          background: rgba(255,255,255,0.07);
          transform: translateY(-3px);
        }
        .pd-card-top {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .pd-card-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: var(--c); flex-shrink: 0;
        }
        .pd-card-icon svg { width: 22px; height: 22px; }
        .pd-card-arrow {
          color: rgba(245,240,232,0.18);
          transition: color 0.18s, transform 0.18s;
        }
        .pd-card-arrow svg { width: 16px; height: 16px; }
        .pd-card:hover .pd-card-arrow { color: var(--c); transform: translate(2px, -2px); }
        .pd-card-label {
          font-size: 0.975rem; font-weight: 700; color: #f5f0e8; margin: 0;
          line-height: 1.3;
        }
        .pd-card-desc {
          font-size: 0.78rem; color: rgba(245,240,232,0.4); margin: 0; line-height: 1.5;
        }

        .pd-bottom { margin-top: 2rem; }
        .pd-site-link {
          font-size: 0.8rem; color: rgba(245,240,232,0.28);
          text-decoration: none; transition: color 0.16s;
        }
        .pd-site-link:hover { color: rgba(245,240,232,0.55); }

        @media (max-width: 640px) {
          .pd-grid { grid-template-columns: 1fr 1fr; }
          .pd-outer { padding-top: 2rem; }
        }
        @media (max-width: 420px) {
          .pd-grid { grid-template-columns: 1fr; }
          .lp-card { padding: 2rem 1.25rem 1.5rem; }
        }
      `}</style>
    </>
  );
}
