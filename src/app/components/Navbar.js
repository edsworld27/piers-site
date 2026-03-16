"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

const SERVICES = [
  { href: "/services/anxiety",      label: "Anxiety & Trauma",       desc: "Silence the fight-or-flight spiral"  },
  { href: "/services/stop-smoking", label: "Stop Smoking",           desc: "Break the habit at its root"         },
  { href: "/services/weight-loss",  label: "Weight Management",      desc: "Rewire your relationship with food"  },
  { href: "/services/confidence",   label: "Confidence & Phobias",   desc: "Remove the invisible mental blocks"  },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();
  const rafId = useRef(null);
  const { totalCount } = useCart();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        rafId.current = window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const close = useCallback(() => { setMenuOpen(false); }, []);

  const isServicesActive = pathname.startsWith("/services");

  const links = [
    { href: "/about",        label: "About"        },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog",         label: "Resources"    },
    { href: "/shop",         label: "Tapes"        },
  ];

  return (
    <>
      <div className="nav-rule" aria-hidden="true" />

      <header className={`nav-root${scrolled ? " nav-scrolled" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="nav-logo" onClick={close}>
            Piers Day Hypnotherapy
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Main navigation">

            <Link
              href="/services"
              className={`nav-link${isServicesActive ? " nav-link-active" : ""}`}
            >
              How I Can Help
            </Link>

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

            {/* Cart icon — next to Tapes, links to /cart */}
            <Link
              href="/cart"
              className="nav-cart-link"
              aria-label={totalCount > 0 ? `Basket — ${totalCount} item${totalCount !== 1 ? "s" : ""}` : "Basket"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {totalCount > 0 && <span className="nav-cart-badge">{totalCount}</span>}
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link href="/contact" className="nav-cta">
            Let&apos;s Talk
          </Link>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-overlay"
          >
            <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
          </button>

        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-nav-overlay"
        className={`nav-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="nav-overlay-links" aria-label="Mobile navigation">

          <Link
            href="/services"
            className="nav-overlay-link"
            style={{ animationDelay: menuOpen ? "0.05s" : "0s" }}
            onClick={close}
          >
            How I Can Help
          </Link>

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
            Let&apos;s Talk
          </Link>
        </nav>
      </div>

      {/* styles in navbar.css — imported via layout.js */}
    </>
  );
}
