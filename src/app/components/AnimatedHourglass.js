"use client";

import { useState } from "react";

/*
  Each grain: starts at the neck exit (cx, cy=74), falls ~28px with gravity
  acceleration, spreads sideways into a slight cone, fades in & out.
  Staggered delays keep the stream continuously visible.
*/
const GRAINS = [
  { id: 1, cx: 40.0, r: 1.5, dur: 0.50, delay: 0.00, ex:  0.0, fill: "rgba(210,152,108,0.95)" },
  { id: 2, cx: 39.5, r: 1.0, dur: 0.62, delay: 0.08, ex: -1.6, fill: "rgba(201,144,106,0.80)" },
  { id: 3, cx: 40.5, r: 1.2, dur: 0.47, delay: 0.16, ex:  1.6, fill: "rgba(218,158,112,0.85)" },
  { id: 4, cx: 39.7, r: 0.8, dur: 0.68, delay: 0.25, ex: -0.8, fill: "rgba(195,138,100,0.75)" },
  { id: 5, cx: 40.3, r: 1.4, dur: 0.53, delay: 0.33, ex:  0.8, fill: "rgba(208,150,106,0.90)" },
  { id: 6, cx: 39.9, r: 0.9, dur: 0.57, delay: 0.42, ex: -2.0, fill: "rgba(201,144,106,0.70)" },
  { id: 7, cx: 40.1, r: 1.1, dur: 0.44, delay: 0.50, ex:  2.0, fill: "rgba(215,156,110,0.82)" },
  { id: 8, cx: 40.0, r: 1.3, dur: 0.65, delay: 0.58, ex:  0.2, fill: "rgba(205,147,104,0.88)" },
];

// Per-grain keyframes: each grain has its own trajectory (start tight, spread at landing)
const grainStyles = GRAINS.map(g => `
  @keyframes hgG${g.id} {
    0%   { transform: translate(0px, 0px);            opacity: 0;    }
    7%   { opacity: 1;                                               }
    78%  { opacity: 0.9;                                             }
    100% { transform: translate(${g.ex}px, 28px);     opacity: 0;   }
  }
  .hg-g${g.id} {
    animation: hgG${g.id} ${g.dur}s cubic-bezier(0.22, 0, 0.58, 0.4) ${g.delay}s infinite;
  }
`).join("");

export default function AnimatedHourglass() {
  const [flipped, setFlipped] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const flip = () => {
    setFlipped(f => !f);
    setAnimKey(k => k + 1);
  };

  return (
    <svg
      key={animKey}
      viewBox="0 0 80 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hourglass — click to flip"
      role="button"
      tabIndex={0}
      onClick={flip}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && flip()}
      style={{
        cursor: "pointer",
        width: "84px",
        height: "auto",
        opacity: 0.9,
        transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: flipped ? "rotate(180deg)" : "rotate(0deg)",
        display: "block",
        filter: "drop-shadow(0 4px 18px rgba(201,144,106,0.22))",
      }}
    >
      <style>{`
        @keyframes hgTopDrain {
          from { transform: scaleY(1); }
          to   { transform: scaleY(0.04); }
        }
        @keyframes hgBottomFill {
          from { transform: scaleY(0.06); }
          to   { transform: scaleY(1); }
        }
        .hg-top-sand {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: hgTopDrain 40s linear forwards;
        }
        .hg-bottom-sand {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: hgBottomFill 40s linear forwards;
        }
        ${grainStyles}
      `}</style>

      {/* Top cap */}
      <rect x="5" y="4" width="70" height="10" rx="5"
        fill="rgba(201,144,106,0.22)" stroke="rgba(201,144,106,0.55)" strokeWidth="1.5"/>
      {/* Bottom cap */}
      <rect x="5" y="126" width="70" height="10" rx="5"
        fill="rgba(201,144,106,0.22)" stroke="rgba(201,144,106,0.55)" strokeWidth="1.5"/>

      {/* Top chamber outline */}
      <path d="M 8 14 L 72 14 L 42 66 L 38 66 Z"
        fill="rgba(196,144,106,0.06)" stroke="rgba(201,144,106,0.30)" strokeWidth="1"/>

      {/* Top sand — drains over 40s */}
      <path className="hg-top-sand"
        d="M 8 14 L 72 14 L 42 66 L 38 66 Z"
        fill="rgba(201,144,106,0.30)"/>

      {/* Neck */}
      <rect x="37" y="66" width="6" height="8" fill="rgba(201,144,106,0.55)"/>

      {/* Bottom chamber outline */}
      <path d="M 38 74 L 42 74 L 72 126 L 8 126 Z"
        fill="rgba(196,144,106,0.06)" stroke="rgba(201,144,106,0.30)" strokeWidth="1"/>

      {/* Bottom sand pile — grows upward over 40s */}
      <path className="hg-bottom-sand"
        d="M 15 112 Q 40 100 65 112 L 72 126 L 8 126 Z"
        fill="rgba(201,144,106,0.32)"/>

      {/* Sand grain particles — fall from neck exit (cy=74) downward */}
      {GRAINS.map(g => (
        <circle
          key={g.id}
          className={`hg-g${g.id}`}
          cx={g.cx}
          cy={74}
          r={g.r}
          fill={g.fill}
        />
      ))}

      {/* Subtle depth guide */}
      <line x1="16" y1="100" x2="64" y2="100"
        stroke="rgba(201,144,106,0.10)" strokeWidth="1"/>
    </svg>
  );
}
