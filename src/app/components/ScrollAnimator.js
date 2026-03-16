"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTORS = [
  ".fade-in-up",
  ".anim-fade",
  ".anim-up",
  ".anim-left",
  ".anim-right",
  ".anim-scale",
  ".anim-pop",
].join(", ");

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Elements that are already visible (hero content above the fold)
    // should still animate in — just with no delay added.
    const elements = Array.from(document.querySelectorAll(SELECTORS));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // Port animationDelay → transitionDelay so existing stagger
            // inline styles (style={{ animationDelay: "0.3s" }}) still work.
            const delay = el.style.animationDelay;
            if (delay && !el.style.transitionDelay) {
              el.style.transitionDelay = delay;
            }
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
