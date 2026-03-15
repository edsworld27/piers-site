"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SERVICES = [
  { href: "/services/anxiety",      label: "Anxiety & Trauma",       desc: "Silence the fight-or-flight spiral"  },
  { href: "/services/stop-smoking", label: "Stop Smoking",           desc: "Break the habit at its root"         },
  { href: "/services/weight-loss",  label: "Weight Management",      desc: "Rewire your relationship with food"  },
  { href: "/services/confidence",   label: "Confidence & Phobias",   desc: "Remove the invisible mental blocks"  },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]        = useState(false);
  const [dropOpen,       setDropOpen]        = useState(false);
  const [mobileServOpen, setMobileServOpen]  = useState(false);
  const pathname = usePathname();
  const dropTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdown on route change
  useEffect(() => { setDropOpen(false); setMenuOpen(false); }, [pathname]);

  const openDrop  = () => { clearTimeout(dropTimeout.current); setDropOpen(true);  };
  const closeDrop = () => { dropTimeout.current = setTimeout(() => setDropOpen(false), 120); };
  const close     = () => { setMenuOpen(false); setMobileServOpen(false); };

  const isServicesActive = pathname.startsWith("/services");

  const links = [
    { href: "/about",        label: "About"        },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog",         label: "Resources"    },
  ];

  return (
    <>
      <div className="nav-rule" aria-hidden="true" />

      <header className={`nav-root${scrolled ? " nav-scrolled" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="nav-logo" onClick={close}>
            Piers Day
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Main navigation">

            {/* Services dropdown trigger */}
            <div
              className="nav-drop-wrap"
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >
              <Link
                href="/services"
                className={`nav-link nav-drop-trigger${isServicesActive ? " nav-link-active" : ""}${dropOpen ? " nav-link-hover" : ""}`}
              >
                Services
                <svg className={`drop-chevron${dropOpen ? " drop-chevron-open" : ""}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Dropdown panel */}
              <div
                className={`drop-panel${dropOpen ? " drop-panel-open" : ""}`}
                onMouseEnter={openDrop}
                onMouseLeave={closeDrop}
              >
                <div className="drop-panel-inner">
                  <p className="drop-eyebrow">What we treat</p>
                  <ul className="drop-list">
                    {SERVICES.map(({ href, label, desc }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className={`drop-item${pathname === href ? " drop-item-active" : ""}`}
                          onClick={close}
                        >
                          <span className="drop-item-accent" />
                          <span className="drop-item-text">
                            <span className="drop-item-label">{label}</span>
                            <span className="drop-item-desc">{desc}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="drop-all" onClick={close}>
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular links */}
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${pathname === href ? " nav-link-active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href="/contact" className="nav-cta">
            Get Support
          </Link>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`nav-overlay${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="nav-overlay-links">

          {/* Services — expandable */}
          <div className="mob-services-wrap">
            <button
              className="nav-overlay-link mob-services-btn"
              onClick={() => setMobileServOpen(o => !o)}
              style={{ animationDelay: menuOpen ? "0.05s" : "0s" }}
            >
              Services
              <svg className={`mob-chevron${mobileServOpen ? " mob-chevron-open" : ""}`} width="14" height="14" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`mob-sub${mobileServOpen ? " mob-sub-open" : ""}`}>
              {SERVICES.map(({ href, label }) => (
                <Link key={href} href={href} className="mob-sub-link" onClick={close}>
                  {label}
                </Link>
              ))}
              <Link href="/services" className="mob-sub-link mob-sub-all" onClick={close}>
                All Services
              </Link>
            </div>
          </div>

          {/* Other links */}
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className="nav-overlay-link"
              style={{ animationDelay: menuOpen ? `${0.12 + i * 0.07}s` : "0s" }}
              onClick={close}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="nav-overlay-cta"
            style={{ animationDelay: menuOpen ? "0.38s" : "0s" }}
            onClick={close}
          >
            Get Support
          </Link>
        </nav>
      </div>

      <style>{`
        /* ── Gold rule ───────────────────────────────── */
        .nav-rule {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 40%, rgba(201,168,76,0.5) 60%, transparent 100%);
          z-index: 1001;
          pointer-events: none;
        }

        /* ── Root ────────────────────────────────────── */
        .nav-root {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 1000;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .nav-scrolled {
          background: rgba(9, 15, 34, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom-color: rgba(201, 168, 76, 0.1);
          box-shadow: 0 1px 40px rgba(0, 0, 0, 0.4);
        }

        /* ── Inner ───────────────────────────────────── */
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ── Logo ────────────────────────────────────── */
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 1.2rem;
          letter-spacing: 0.01em;
          color: #f0ebe0;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        .nav-logo:hover { color: #ffffff; }

        /* ── Desktop links ───────────────────────────── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(240, 235, 224, 0.5);
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .nav-link:hover,
        .nav-link-hover,
        .nav-link-active { color: rgba(240, 235, 224, 0.95); }

        .nav-link-active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(201, 168, 76, 0.8);
        }

        /* ── Dropdown wrapper ────────────────────────── */
        .nav-drop-wrap {
          position: relative;
        }

        .drop-chevron {
          transition: transform 0.25s ease;
          flex-shrink: 0;
          opacity: 0.6;
        }
        .drop-chevron-open { transform: rotate(180deg); opacity: 1; }

        /* ── Dropdown panel ──────────────────────────── */
        .drop-panel {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          width: 280px;
          background: rgba(9, 15, 34, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(201, 168, 76, 0.14);
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s ease;
          z-index: 200;
        }

        .drop-panel-open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        /* Invisible bridge so mouse can move from trigger to panel */
        .drop-panel::before {
          content: '';
          position: absolute;
          top: -18px;
          left: 0;
          width: 100%;
          height: 18px;
        }

        .drop-panel-inner {
          padding: 1.25rem;
        }

        .drop-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.7);
          margin: 0 0 0.85rem 0.5rem;
        }

        .drop-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .drop-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.75rem;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.18s ease;
          position: relative;
          overflow: hidden;
        }

        .drop-item:hover,
        .drop-item-active {
          background: rgba(255,255,255,0.04);
        }

        .drop-item-accent {
          width: 2px;
          height: 28px;
          border-radius: 2px;
          background: rgba(201,168,76,0.2);
          flex-shrink: 0;
          transition: background 0.18s ease;
        }

        .drop-item:hover .drop-item-accent,
        .drop-item-active .drop-item-accent {
          background: rgba(201,168,76,0.8);
        }

        .drop-item-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .drop-item-label {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(240,235,224,0.85);
          letter-spacing: 0.01em;
          transition: color 0.18s ease;
        }

        .drop-item:hover .drop-item-label,
        .drop-item-active .drop-item-label {
          color: #ffffff;
        }

        .drop-item-desc {
          font-size: 11px;
          color: rgba(240,235,224,0.35);
          letter-spacing: 0.01em;
        }

        .drop-all {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.6);
          text-decoration: none;
          padding: 0.75rem 0.75rem 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          transition: color 0.18s ease;
        }
        .drop-all:hover { color: #c9a84c; }

        /* ── CTA ─────────────────────────────────────── */
        .nav-cta {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a84c;
          text-decoration: none;
          padding: 0.55rem 1.3rem;
          border: 1px solid rgba(201,168,76,0.45);
          border-radius: 2px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .nav-cta:hover {
          color: #0a1120;
          background: #c9a84c;
          border-color: #c9a84c;
        }

        /* ── Hamburger ───────────────────────────────── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 28px;
          height: 28px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1100;
          flex-shrink: 0;
        }
        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 1px;
          background: rgba(240,235,224,0.7);
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .nav-hamburger.is-open span:nth-child(1) { transform: translateY(6px) rotate(45deg); background: rgba(240,235,224,0.9); }
        .nav-hamburger.is-open span:nth-child(2) { opacity: 0; }
        .nav-hamburger.is-open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); background: rgba(240,235,224,0.9); }

        /* ── Mobile overlay ──────────────────────────── */
        .nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: #090f22;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .nav-overlay.is-open { opacity: 1; pointer-events: all; }

        .nav-overlay-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          width: 100%;
          padding: 0 2rem;
        }

        .nav-overlay-link {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(2rem, 7vw, 3rem);
          color: rgba(240,235,224,0.4);
          text-decoration: none;
          line-height: 1.4;
          letter-spacing: -0.01em;
          transition: color 0.2s ease;
          opacity: 0;
          transform: translateY(12px);
          animation: none;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-overlay.is-open .nav-overlay-link { animation: overlayLinkIn 0.45s ease forwards; }
        .nav-overlay-link:hover { color: #f0ebe0; }

        /* Mobile services expand button */
        .mob-services-wrap { width: 100%; display: flex; flex-direction: column; align-items: center; }
        .mob-services-btn { font-family: 'Playfair Display', serif; font-style: italic; }

        .mob-chevron {
          transition: transform 0.3s ease;
          opacity: 0.5;
          flex-shrink: 0;
        }
        .mob-chevron-open { transform: rotate(180deg); opacity: 1; }

        /* Mobile sub-links */
        .mob-sub {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
          width: 100%;
        }
        .mob-sub-open { max-height: 320px; }

        .mob-sub-link {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(240,235,224,0.4);
          text-decoration: none;
          padding: 0.55rem 0;
          transition: color 0.2s ease;
        }
        .mob-sub-link:hover { color: rgba(240,235,224,0.9); }
        .mob-sub-all { color: rgba(201,168,76,0.6); }
        .mob-sub-all:hover { color: #c9a84c; }

        .nav-overlay-cta {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          text-decoration: none;
          padding: 0.7rem 2rem;
          border: 1px solid rgba(201,168,76,0.4);
          border-radius: 2px;
          margin-top: 1.5rem;
          opacity: 0;
          transform: translateY(10px);
          animation: none;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-overlay.is-open .nav-overlay-cta { animation: overlayLinkIn 0.45s ease forwards; }
        .nav-overlay-cta:hover { color: #0a1120; background: #c9a84c; }

        @keyframes overlayLinkIn {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ──────────────────────────────── */
        @media (max-width: 860px) {
          .nav-links, .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
        }
        @media (max-width: 480px) {
          .nav-inner { padding: 0 1.25rem; }
        }
      `}</style>
    </>
  );
}
