"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar-bespoke ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="container nav-container">
        <Link href="/" className="logo-bespoke" onClick={closeMenu}>
          Piers Day Hypnotherapy
        </Link>
        
        {/* Desktop Links */}
        <nav className="nav-links-bespoke">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/blog">Resources</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-cta-bespoke">
          <Link href="/contact" className="btn-nav-bespoke">Get Support</Link>
        </div>

        {/* Hamburger Button */}
        <button className={`hamburger-bespoke ${menuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay-bespoke ${menuOpen ? "active" : ""}`}>
        <nav className="mobile-links-bespoke">
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/testimonials" onClick={closeMenu}>Testimonials</Link>
          <Link href="/blog" onClick={closeMenu}>Resources</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link href="/contact" className="btn-nav-bespoke mt-12" onClick={closeMenu}>Get Support</Link>
        </nav>
      </div>

      <style>{`
        .navbar-bespoke {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          background: #0d1526;
          border-bottom: 1px solid rgba(201,168,76,0.12);
          transition: background 0.4s ease, backdrop-filter 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease;
        }

        .navbar-bespoke.scrolled {
          background: rgba(13,21,38,0.92);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
          box-shadow: 0 1px 40px rgba(0,0,0,0.4);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Logo Animation */
        .logo-bespoke {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 1.1rem;
          color: #c9a84c;
          text-decoration: none;
          opacity: 0;
          animation: logoFadeUp 0.6s ease-out forwards;
        }

        @keyframes logoFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Nav Links */
        .nav-links-bespoke {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links-bespoke a {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 14px;
          letter-spacing: 0.04em;
          color: rgba(245,240,232,0.7);
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          opacity: 0;
          animation: linkFadeUp 0.5s ease-out forwards;
        }

        @keyframes linkFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Staggered Delay for Links */
        .nav-links-bespoke a:nth-child(1) { animation-delay: 0.3s; }
        .nav-links-bespoke a:nth-child(2) { animation-delay: 0.4s; }
        .nav-links-bespoke a:nth-child(3) { animation-delay: 0.5s; }
        .nav-links-bespoke a:nth-child(4) { animation-delay: 0.6s; }
        .nav-links-bespoke a:nth-child(5) { animation-delay: 0.7s; }

        .nav-links-bespoke a:hover {
          color: #f5f0e8;
          transition: color 0.2s ease;
        }

        .nav-links-bespoke a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #c9a84c;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav-links-bespoke a:hover::after {
          transform: scaleX(1);
        }

        /* CTA Button */
        .btn-nav-bespoke {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c9a84c;
          text-decoration: none;
          padding: 0.6rem 1.4rem;
          border: 1px solid #c9a84c;
          border-radius: 2px;
          position: relative;
          display: inline-block;
          overflow: hidden;
          background: transparent;
          transition: color 0.3s ease;
          opacity: 0;
          animation: ctaFadeIn 0.5s ease-out forwards;
          animation-delay: 0.7s;
        }

        @keyframes ctaFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .btn-nav-bespoke::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #c9a84c;
          transition: left 0.3s ease;
          z-index: -1;
        }

        .btn-nav-bespoke:hover::before {
          left: 0;
        }

        .btn-nav-bespoke:hover {
          color: #0d1526;
        }

        /* Hamburger */
        .hamburger-bespoke {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 2000;
        }

        .hamburger-bespoke span {
          width: 20px;
          height: 1.5px;
          background: #c9a84c;
          transition: 0.3s ease;
        }

        .hamburger-bespoke.active span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        .hamburger-bespoke.active span:nth-child(2) { opacity: 0; }
        .hamburger-bespoke.active span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

        /* Mobile Menu */
        .mobile-overlay-bespoke {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #0d1526;
          z-index: 1500;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .mobile-overlay-bespoke.active {
          transform: translateY(0);
        }

        .mobile-links-bespoke {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-links-bespoke a {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 2.5rem;
          color: #c9a84c;
          text-decoration: none;
        }

        .mt-12 { margin-top: 3rem; }

        @media (max-width: 900px) {
          .nav-links-bespoke, .nav-cta-bespoke { display: none; }
          .hamburger-bespoke { display: flex; }
        }
      `}</style>
    </header>
  );
}
