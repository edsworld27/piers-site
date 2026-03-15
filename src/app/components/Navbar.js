"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const links = [
    { href: "/services",     label: "Services" },
    { href: "/about",        label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog",         label: "Resources" },
  ];

  return (
    <>
      {/* Gold top rule */}
      <div className="nav-rule" aria-hidden="true" />

      <header className={`nav-root${scrolled ? " nav-scrolled" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="nav-logo" onClick={close}>
            Piers Day
          </Link>

          {/* Desktop links */}
          <nav className="nav-links" aria-label="Main navigation">
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
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className="nav-overlay-link"
              style={{ animationDelay: menuOpen ? `${0.05 + i * 0.07}s` : "0s" }}
              onClick={close}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="nav-overlay-cta"
            style={{ animationDelay: menuOpen ? "0.33s" : "0s" }}
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
          padding: 0;
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

        /* ── Inner layout ────────────────────────────── */
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

        .nav-logo:hover {
          color: #ffffff;
        }

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
        }

        .nav-link:hover,
        .nav-link-active {
          color: rgba(240, 235, 224, 0.95);
        }

        /* Active dot */
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
          border: 1px solid rgba(201, 168, 76, 0.45);
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
          background: rgba(240, 235, 224, 0.7);
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }

        .nav-hamburger.is-open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
          width: 22px;
          background: rgba(240, 235, 224, 0.9);
        }
        .nav-hamburger.is-open span:nth-child(2) {
          opacity: 0;
        }
        .nav-hamburger.is-open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
          width: 22px;
          background: rgba(240, 235, 224, 0.9);
        }

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

        .nav-overlay.is-open {
          opacity: 1;
          pointer-events: all;
        }

        .nav-overlay-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .nav-overlay-link {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(2.25rem, 8vw, 3.25rem);
          color: rgba(240, 235, 224, 0.4);
          text-decoration: none;
          line-height: 1.4;
          letter-spacing: -0.01em;
          transition: color 0.2s ease;
          opacity: 0;
          transform: translateY(12px);
          animation: none;
        }

        .nav-overlay.is-open .nav-overlay-link {
          animation: overlayLinkIn 0.45s ease forwards;
        }

        .nav-overlay-link:hover {
          color: #f0ebe0;
        }

        .nav-overlay-cta {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          text-decoration: none;
          padding: 0.7rem 2rem;
          border: 1px solid rgba(201, 168, 76, 0.4);
          border-radius: 2px;
          margin-top: 2rem;
          opacity: 0;
          transform: translateY(10px);
          animation: none;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .nav-overlay.is-open .nav-overlay-cta {
          animation: overlayLinkIn 0.45s ease forwards;
        }

        .nav-overlay-cta:hover {
          color: #0a1120;
          background: #c9a84c;
        }

        @keyframes overlayLinkIn {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ──────────────────────────────── */
        @media (max-width: 860px) {
          .nav-links,
          .nav-cta {
            display: none;
          }
          .nav-hamburger {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .nav-inner {
            padding: 0 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
