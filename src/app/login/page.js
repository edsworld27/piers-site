"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ── Credentials (change these values to update the admin password) ──
const ADMIN_USER = "piers";
const ADMIN_PASS = "Hypno2025!";
const SESSION_KEY = "piers_admin_v1";
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

// ── Admin links ──────────────────────────────────────────────────────
const LINKS = [
  {
    label: "Waiting Room",
    desc: "Games & activities for clients waiting",
    href: "/waiting-room",
    internal: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <path d="M12 12h.01M8 10v4M6 12h4M16 10l2 2-2 2"/>
      </svg>
    ),
    color: "#6BAE8A",
  },
  {
    label: "Aqua CRM",
    desc: "Client management & appointments",
    href: "https://app.aquacrm.com",
    internal: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: "#5b9bd5",
  },
  {
    label: "Leave a Review",
    desc: "Google Business review page",
    href: "https://g.page/r/PLACEHOLDER/review",
    internal: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    color: "#e8c030",
  },
  {
    label: "Ads Funnel",
    desc: "Advertising campaigns & landing pages",
    href: "#",
    internal: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    color: "#e87070",
  },
  {
    label: "Notion Portal",
    desc: "Notes, docs & planning workspace",
    href: "https://notion.so",
    internal: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    color: "#a78bfa",
  },
];

/* ── Login Form ──────────────────────────────────────────────────── */
function LoginForm({ onSuccess }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr]   = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 500));
    if (user.trim() === ADMIN_USER && pass === ADMIN_PASS) {
      saveSession();
      onSuccess();
    } else {
      setErr("Incorrect username or password.");
    }
    setLoading(false);
  };

  return (
    <div className="lp-card">
      <div className="lp-logo">
        <span className="lp-logo-text">Piers Day</span>
        <span className="lp-logo-sub">Admin</span>
      </div>
      <h1 className="lp-heading">Welcome back</h1>
      <p className="lp-sub">Sign in to access your admin panel.</p>
      <form onSubmit={submit} className="lp-form" noValidate>
        <div className="lp-field">
          <label className="lp-label" htmlFor="lp-user">Username</label>
          <input id="lp-user" className="lp-input" type="text" value={user}
            onChange={e=>{setUser(e.target.value);setErr("");}}
            placeholder="Enter username" autoComplete="username" />
        </div>
        <div className="lp-field">
          <label className="lp-label" htmlFor="lp-pass">Password</label>
          <input id="lp-pass" className="lp-input" type="password" value={pass}
            onChange={e=>{setPass(e.target.value);setErr("");}}
            placeholder="Enter password" autoComplete="current-password" />
        </div>
        {err && <p className="lp-err">{err}</p>}
        <button type="submit" className="lp-btn" disabled={loading}>
          {loading ? <span className="lp-spinner"/> : null}
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
      <Link href="/" className="lp-home-link">← Back to website</Link>
    </div>
  );
}

/* ── Admin Panel ─────────────────────────────────────────────────── */
function AdminPanel({ onLogout }) {
  return (
    <div className="ap-wrap">
      <div className="ap-header">
        <div>
          <h1 className="ap-title">Admin Panel</h1>
          <p className="ap-sub">Welcome back, Piers.</p>
        </div>
        <button className="ap-logout" onClick={onLogout}>Log out</button>
      </div>
      <div className="ap-grid">
        {LINKS.map(link => {
          const Tag = link.internal ? Link : "a";
          const extra = link.internal ? {} : { target:"_blank", rel:"noopener noreferrer" };
          return (
            <Tag key={link.label} href={link.href} className="ap-card" {...extra}
              style={{"--card-color": link.color}}>
              <span className="ap-card-icon">{link.icon}</span>
              <div>
                <h3 className="ap-card-label">{link.label}</h3>
                <p className="ap-card-desc">{link.desc}</p>
              </div>
              <span className="ap-card-arrow">→</span>
            </Tag>
          );
        })}
      </div>
      <div className="ap-footer">
        <Link href="/" className="ap-site-link">← View website</Link>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function LoginPage() {
  const [authed, setAuthed] = useState(null); // null = loading

  useEffect(() => {
    setAuthed(checkSession());
  }, []);

  const handleLogout = () => {
    clearSession();
    setAuthed(false);
  };

  if (authed === null) {
    // Avoid hydration mismatch — show nothing until client check
    return <div style={{ minHeight:"100vh", background:"#091422" }} />;
  }

  return (
    <main className="lp-main">
      {authed
        ? <AdminPanel onLogout={handleLogout} />
        : <LoginForm onSuccess={() => setAuthed(true)} />
      }

      <style jsx>{`
        :global(*){box-sizing:border-box;}
        .lp-main {
          min-height:100vh; background:#091422;
          display:flex; align-items:center; justify-content:center;
          padding:1.5rem; font-family:var(--font-body,system-ui);
        }

        /* ── Login card ── */
        .lp-card {
          width:100%; max-width:400px;
          background:#0C1B2E; border-radius:18px;
          border:1px solid rgba(107,174,138,0.15);
          padding:2.5rem 2rem; text-align:center;
          box-shadow:0 24px 64px rgba(0,0,0,0.5);
        }
        .lp-logo { margin-bottom:1.75rem; }
        .lp-logo-text {
          display:block; font-size:1.5rem; font-weight:700;
          color:#f5f0e8; font-family:'Playfair Display',serif;
        }
        .lp-logo-sub {
          display:inline-block; margin-top:0.2rem;
          font-size:0.65rem; font-weight:700; text-transform:uppercase;
          letter-spacing:0.15em; color:#6BAE8A;
          background:rgba(107,174,138,0.15); border-radius:50px;
          padding:0.2em 0.75em;
        }
        .lp-heading { font-size:1.4rem; font-weight:700; color:#f5f0e8; margin:0 0 0.4rem; }
        .lp-sub { font-size:0.875rem; color:rgba(245,240,232,0.45); margin:0 0 1.75rem; }
        .lp-form { display:flex; flex-direction:column; gap:1rem; text-align:left; }
        .lp-field { display:flex; flex-direction:column; gap:0.3rem; }
        .lp-label { font-size:0.78rem; font-weight:600; color:rgba(245,240,232,0.7); }
        .lp-input {
          background:rgba(255,255,255,0.05); border:1.5px solid rgba(255,255,255,0.1);
          border-radius:8px; padding:0.65rem 0.875rem;
          font-size:0.925rem; color:#f5f0e8; outline:none;
          transition:border-color 0.16s; font-family:var(--font-body,system-ui);
        }
        .lp-input::placeholder { color:rgba(245,240,232,0.25); }
        .lp-input:focus { border-color:#6BAE8A; }
        .lp-err { font-size:0.8rem; color:#e87070; text-align:center; margin:0; }
        .lp-btn {
          background:#6BAE8A; color:#fff; border:none; border-radius:8px;
          padding:0.8rem; font-size:0.925rem; font-weight:700; cursor:pointer;
          transition:background 0.18s; margin-top:0.25rem;
          display:flex; align-items:center; justify-content:center; gap:0.5rem;
          font-family:var(--font-body,system-ui);
        }
        .lp-btn:hover:not(:disabled) { background:#4a9070; }
        .lp-btn:disabled { opacity:0.6; cursor:not-allowed; }
        .lp-spinner {
          width:14px; height:14px; border-radius:50%;
          border:2px solid rgba(255,255,255,0.3); border-top-color:#fff;
          animation:lpSpin 0.7s linear infinite; display:inline-block;
        }
        @keyframes lpSpin { to { transform:rotate(360deg); } }
        .lp-home-link {
          display:inline-block; margin-top:1.5rem;
          font-size:0.825rem; color:rgba(245,240,232,0.35); text-decoration:none;
          transition:color 0.16s;
        }
        .lp-home-link:hover { color:rgba(245,240,232,0.65); }

        /* ── Admin panel ── */
        .ap-wrap {
          width:100%; max-width:700px;
          font-family:var(--font-body,system-ui);
        }
        .ap-header {
          display:flex; align-items:flex-start; justify-content:space-between;
          gap:1rem; margin-bottom:2rem; flex-wrap:wrap;
        }
        .ap-title { font-size:1.75rem; font-weight:800; color:#f5f0e8; margin:0 0 0.25rem; }
        .ap-sub { font-size:0.875rem; color:rgba(245,240,232,0.45); margin:0; }
        .ap-logout {
          background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.1);
          color:rgba(245,240,232,0.55); border-radius:8px; padding:0.5rem 1rem;
          font-size:0.825rem; cursor:pointer; transition:background 0.16s,color 0.16s;
          font-family:var(--font-body,system-ui); white-space:nowrap;
        }
        .ap-logout:hover { background:rgba(255,255,255,0.12); color:#f5f0e8; }
        .ap-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.875rem; }
        .ap-card {
          display:flex; align-items:center; gap:1rem;
          background:rgba(255,255,255,0.04); border:1.5px solid rgba(255,255,255,0.08);
          border-radius:14px; padding:1.25rem 1.1rem; text-decoration:none;
          transition:border-color 0.2s,background 0.2s; cursor:pointer;
        }
        .ap-card:hover { border-color:var(--card-color); background:rgba(255,255,255,0.07); }
        .ap-card-icon {
          width:42px; height:42px; flex-shrink:0; border-radius:10px;
          background:rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center;
          color:var(--card-color);
        }
        .ap-card-icon :global(svg) { width:20px; height:20px; }
        .ap-card-label { font-size:0.975rem; font-weight:700; color:#f5f0e8; margin:0 0 0.2rem; }
        .ap-card-desc { font-size:0.78rem; color:rgba(245,240,232,0.45); margin:0; line-height:1.4; }
        .ap-card-arrow { margin-left:auto; font-size:1rem; color:rgba(245,240,232,0.25); flex-shrink:0; }
        .ap-footer { margin-top:2rem; text-align:center; }
        .ap-site-link {
          font-size:0.825rem; color:rgba(245,240,232,0.35); text-decoration:none; transition:color 0.16s;
        }
        .ap-site-link:hover { color:rgba(245,240,232,0.65); }

        @media(max-width:520px){
          .ap-grid { grid-template-columns:1fr; }
          .lp-card { padding:2rem 1.25rem; }
        }
      `}</style>
    </main>
  );
}
