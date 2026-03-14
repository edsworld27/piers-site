"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          Piers Day Hypnotherapy
        </Link>
        <nav className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/blog">Resources</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-primary">Get Support</Link>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: var(--space-4) 0;
          transition: var(--transition-smooth);
        }
        .scrolled {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--glass-border);
          padding: var(--space-2) 0;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .nav-links {
          display: flex;
          gap: var(--space-8);
          align-items: center;
        }
        .nav-links a {
          font-weight: 500;
          opacity: 0.8;
          transition: var(--transition-smooth);
        }
        .nav-links a:hover {
          opacity: 1;
          color: var(--color-accent-gold);
        }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          /* Mobile menu would go here */
        }
      `}</style>
    </header>
  );
}
