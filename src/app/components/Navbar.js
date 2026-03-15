"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
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
  const rafId = useRef(null);

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

  useEffect(() => { setDropOpen(false); setMenuOpen(false); }, [pathname]);

  const openDrop  = useCallback(() => { clearTimeout(dropTimeout.current); setDropOpen(true);  }, []);
  const closeDrop = useCallback(() => { dropTimeout.current = setTimeout(() => setDropOpen(false), 120); }, []);
  const close     = useCallback(() => { setMenuOpen(false); setMobileServOpen(false); }, []);

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

            {/* Services dropdown trigger */}
            <div
              className="nav-drop-wrap"
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >
              <Link
                href="/services"
                className={`nav-link nav-drop-trigger${isServicesActive ? " nav-link-active" : ""}${dropOpen ? " nav-link-hover" : ""}`}
                aria-haspopup="menu"
                aria-expanded={dropOpen}
              >
                Services
                <svg className={`drop-chevron${dropOpen ? " drop-chevron-open" : ""}`} width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Dropdown panel */}
              <div
                className={`drop-panel${dropOpen ? " drop-panel-open" : ""}`}
                onMouseEnter={openDrop}
                onMouseLeave={closeDrop}
                role="menu"
                aria-label="Services submenu"
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
                          role="menuitem"
                        >
                          <span className="drop-item-accent" aria-hidden="true" />
                          <span className="drop-item-text">
                            <span className="drop-item-label">{label}</span>
                            <span className="drop-item-desc">{desc}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="drop-all" onClick={close} role="menuitem">
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

          {/* Services — expandable */}
          <div className="mob-services-wrap">
            <button
              className="nav-overlay-link mob-services-btn"
              onClick={() => setMobileServOpen(o => !o)}
              aria-expanded={mobileServOpen}
              aria-controls="mobile-services-menu"
              style={{ animationDelay: menuOpen ? "0.05s" : "0s" }}
            >
              Services
              <svg className={`mob-chevron${mobileServOpen ? " mob-chevron-open" : ""}`} width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div id="mobile-services-menu" className={`mob-sub${mobileServOpen ? " mob-sub-open" : ""}`}>
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
            Let&apos;s Talk
          </Link>
        </nav>
      </div>

      {/* styles in navbar.css — imported via layout.js */}
    </>
  );
}
