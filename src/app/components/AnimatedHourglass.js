"use client";

import { useState } from "react";

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
        @keyframes hgStream {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -16px; }
        }
        @keyframes hgTopDrain {
          from { transform: scaleY(1); }
          to   { transform: scaleY(0.04); }
        }
        @keyframes hgBottomFill {
          from { transform: scaleY(0.06); }
          to   { transform: scaleY(1); }
        }
        .hg-stream {
          animation: hgStream 0.32s linear infinite;
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

      {/* Top sand — drains away over 40s */}
      <path className="hg-top-sand"
        d="M 8 14 L 72 14 L 42 66 L 38 66 Z"
        fill="rgba(201,144,106,0.30)"/>

      {/* Neck */}
      <rect x="37" y="66" width="6" height="8" fill="rgba(201,144,106,0.55)"/>

      {/* Bottom chamber outline */}
      <path d="M 38 74 L 42 74 L 72 126 L 8 126 Z"
        fill="rgba(196,144,106,0.06)" stroke="rgba(201,144,106,0.30)" strokeWidth="1"/>

      {/* Bottom sand — grows upward over 40s */}
      <path className="hg-bottom-sand"
        d="M 15 112 Q 40 100 65 112 L 72 126 L 8 126 Z"
        fill="rgba(201,144,106,0.32)"/>

      {/* Falling stream — always animating */}
      <line className="hg-stream"
        x1="40" y1="74" x2="40" y2="90"
        stroke="rgba(201,144,106,0.88)"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        strokeLinecap="round"/>

      {/* Subtle depth guide */}
      <line x1="16" y1="100" x2="64" y2="100"
        stroke="rgba(201,144,106,0.10)" strokeWidth="1"/>
    </svg>
  );
}
