"use client";

import { useState } from "react";

/*
  Interactive therapy chair illustration.
  Dark state  → the "before": tangled thoughts, chains, heavy weight, storm.
  Light state → the "after":  botanicals growing, radiant warmth, rising particles.
  Click anywhere to toggle between states.
*/

export default function TherapyChairHero() {
  const [isLight, setIsLight] = useState(false);

  const toggle = () => setIsLight(s => !s);

  const darkFade  = { opacity: isLight ? 0 : 1, transition: "opacity 0.75s ease" };
  const lightFade = { opacity: isLight ? 1 : 0, transition: "opacity 0.75s ease 0.18s" };

  /* chair palette */
  const c = "#6BAE8A";
  const cFill  = "rgba(107,174,138,0.10)";
  const cFaint = "rgba(107,174,138,0.45)";

  return (
    <div style={{ position: "relative", userSelect: "none" }}>
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggle}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && toggle()}
        role="button"
        tabIndex={0}
        aria-label="Click to see your transformation"
        style={{ width: "100%", maxWidth: "540px", display: "block", cursor: "pointer" }}
      >

        {/* ════════════════════════════════════════
            DARK STATE — tangled mind
        ════════════════════════════════════════ */}
        <g style={darkFade} aria-hidden="true">

          {/* Thought spiral — upper left */}
          <path d="M 78 88 C 84 82 92 82 94 88 C 98 98 92 108 82 110
                   C 70 112 58 104 56 92 C 54 78 62 64 78 60
                   C 96 56 112 64 116 82 C 122 102 110 122 88 126"
            stroke="rgba(15,25,45,0.42)" strokeWidth="1.8" strokeLinecap="round"/>

          {/* Second spiral layer */}
          <path d="M 72 92 C 75 85 84 83 88 90 C 92 98 86 107 77 106"
            stroke="rgba(15,25,45,0.28)" strokeWidth="1.4" strokeLinecap="round"/>

          {/* Chain links — upper right */}
          <ellipse cx="354" cy="68" rx="19" ry="11"
            stroke="rgba(25,40,65,0.52)" strokeWidth="2" />
          <ellipse cx="384" cy="68" rx="19" ry="11"
            stroke="rgba(25,40,65,0.52)" strokeWidth="2" />
          <ellipse cx="414" cy="68" rx="19" ry="11"
            stroke="rgba(25,40,65,0.40)" strokeWidth="1.6" />
          {/* Chain cross-bar */}
          <line x1="373" y1="68" x2="365" y2="68"
            stroke="rgba(25,40,65,0.52)" strokeWidth="2"/>
          <line x1="403" y1="68" x2="395" y2="68"
            stroke="rgba(25,40,65,0.52)" strokeWidth="2"/>

          {/* Tangled scribble above chair */}
          <path d="M 208 66 Q 220 52 234 62 Q 248 72 256 56 Q 264 40 278 56 Q 286 68 274 78"
            stroke="rgba(20,32,55,0.38)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 220 72 Q 234 58 248 68 Q 262 78 272 64"
            stroke="rgba(20,32,55,0.28)" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M 218 58 Q 232 46 248 54"
            stroke="rgba(20,32,55,0.22)" strokeWidth="1.0" strokeLinecap="round"/>

          {/* Heavy weighted orbs — lower left */}
          <circle cx="76" cy="312" r="34"
            stroke="rgba(18,30,52,0.32)" strokeWidth="2"/>
          <circle cx="76" cy="312" r="24"
            stroke="rgba(18,30,52,0.26)" strokeWidth="1.8"/>
          <circle cx="76" cy="312" r="14"
            fill="rgba(18,30,52,0.10)" stroke="rgba(18,30,52,0.22)" strokeWidth="1.5"/>
          <circle cx="76" cy="312" r="5"
            fill="rgba(18,30,52,0.18)"/>

          {/* Downward pressure lines — above orb */}
          <line x1="76" y1="274" x2="76" y2="278"
            stroke="rgba(18,30,52,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="62" y1="272" x2="60" y2="276"
            stroke="rgba(18,30,52,0.2)" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="90" y1="272" x2="92" y2="276"
            stroke="rgba(18,30,52,0.2)" strokeWidth="1.2" strokeLinecap="round"/>

          {/* Jagged stress / lightning — lower right */}
          <polyline points="388,288 400,314 386,314 404,344 392,344 416,376"
            stroke="rgba(25,40,65,0.42)" strokeWidth="2"
            strokeLinejoin="round" strokeLinecap="round"/>
          <polyline points="408,295 416,314 406,314 418,336"
            stroke="rgba(25,40,65,0.28)" strokeWidth="1.5"
            strokeLinejoin="round" strokeLinecap="round"/>

          {/* Dark cloud wisps — flanking chair */}
          <path d="M 138 230 Q 148 222 158 230 Q 168 238 178 228"
            stroke="rgba(20,32,55,0.22)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 302 230 Q 312 222 322 230 Q 332 238 342 228"
            stroke="rgba(20,32,55,0.22)" strokeWidth="1.5" strokeLinecap="round"/>

        </g>


        {/* ════════════════════════════════════════
            LIGHT STATE — transformed mind
        ════════════════════════════════════════ */}
        <g style={lightFade} aria-hidden="true">

          {/* Radiating warmth from chair center */}
          <circle cx="240" cy="218" r="80"
            fill="rgba(107,174,138,0.04)" stroke="rgba(107,174,138,0.08)" strokeWidth="2.5"/>
          <circle cx="240" cy="218" r="110"
            fill="none" stroke="rgba(107,174,138,0.055)" strokeWidth="2"/>
          <circle cx="240" cy="218" r="142"
            fill="none" stroke="rgba(107,174,138,0.035)" strokeWidth="1.5"/>
          <circle cx="240" cy="218" r="172"
            fill="none" stroke="rgba(107,174,138,0.02)" strokeWidth="1"/>

          {/* Sun / light source above */}
          <circle cx="240" cy="36" r="9"
            fill="rgba(201,144,106,0.22)" stroke="rgba(201,144,106,0.45)" strokeWidth="1"/>
          <circle cx="240" cy="36" r="4" fill="rgba(201,144,106,0.55)"/>
          {/* Light rays */}
          <line x1="240" y1="48" x2="240" y2="96"
            stroke="rgba(201,144,106,0.14)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="228" y1="44" x2="196" y2="88"
            stroke="rgba(201,144,106,0.10)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="252" y1="44" x2="284" y2="88"
            stroke="rgba(201,144,106,0.10)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="218" y1="43" x2="170" y2="82"
            stroke="rgba(201,144,106,0.08)" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="262" y1="43" x2="310" y2="82"
            stroke="rgba(201,144,106,0.08)" strokeWidth="1.2" strokeLinecap="round"/>

          {/* Botanical branch — growing left from chair back */}
          <path d="M 202 164 Q 180 146 158 126 Q 138 108 122 88"
            stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
          {/* Leaves left branch */}
          <path d="M 158 126 Q 144 116 140 102 Q 152 110 158 126"
            fill="rgba(107,174,138,0.28)" stroke={cFaint} strokeWidth="1"/>
          <path d="M 180 146 Q 164 136 160 122 Q 172 128 180 146"
            fill="rgba(107,174,138,0.26)" stroke={cFaint} strokeWidth="1"/>
          <path d="M 122 88 Q 108 78 106 64 Q 118 72 122 88"
            fill="rgba(107,174,138,0.24)" stroke="rgba(107,174,138,0.6)" strokeWidth="1"/>
          {/* Side twig */}
          <path d="M 158 126 Q 148 112 148 96"
            stroke="rgba(107,174,138,0.55)" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M 148 96 Q 140 88 138 78 Q 148 84 148 96"
            fill="rgba(107,174,138,0.2)" stroke="rgba(107,174,138,0.5)" strokeWidth="0.9"/>

          {/* Botanical branch — growing right from chair back */}
          <path d="M 278 164 Q 300 146 320 126 Q 340 108 358 88"
            stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
          {/* Leaves right branch */}
          <path d="M 320 126 Q 334 116 338 102 Q 326 110 320 126"
            fill="rgba(107,174,138,0.28)" stroke={cFaint} strokeWidth="1"/>
          <path d="M 300 146 Q 314 136 318 122 Q 306 128 300 146"
            fill="rgba(107,174,138,0.26)" stroke={cFaint} strokeWidth="1"/>
          <path d="M 358 88 Q 370 78 372 64 Q 360 72 358 88"
            fill="rgba(107,174,138,0.24)" stroke="rgba(107,174,138,0.6)" strokeWidth="1"/>
          {/* Side twig right */}
          <path d="M 320 126 Q 332 112 332 96"
            stroke="rgba(107,174,138,0.55)" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M 332 96 Q 340 86 342 76 Q 330 84 332 96"
            fill="rgba(107,174,138,0.2)" stroke="rgba(107,174,138,0.5)" strokeWidth="0.9"/>

          {/* Small floor plants */}
          <path d="M 120 277 Q 112 260 102 248"
            stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M 102 248 Q 94 238 92 226 Q 102 234 102 248"
            fill="rgba(107,174,138,0.22)" stroke="rgba(107,174,138,0.55)" strokeWidth="0.9"/>
          <path d="M 112 262 Q 104 254 100 242 Q 109 248 112 262"
            fill="rgba(107,174,138,0.18)" stroke="rgba(107,174,138,0.5)" strokeWidth="0.9"/>

          <path d="M 362 277 Q 370 260 380 248"
            stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M 380 248 Q 388 238 390 226 Q 380 234 380 248"
            fill="rgba(107,174,138,0.22)" stroke="rgba(107,174,138,0.55)" strokeWidth="0.9"/>
          <path d="M 370 262 Q 378 254 382 242 Q 373 248 370 262"
            fill="rgba(107,174,138,0.18)" stroke="rgba(107,174,138,0.5)" strokeWidth="0.9"/>

          {/* Rising particles — left side */}
          <circle cx="132" cy="262" r="2.6" fill="rgba(107,174,138,0.62)"/>
          <circle cx="146" cy="236" r="1.9" fill="rgba(107,174,138,0.52)"/>
          <circle cx="120" cy="208" r="1.6" fill="rgba(107,174,138,0.45)"/>
          <circle cx="158" cy="186" r="2.2" fill="rgba(107,174,138,0.42)"/>
          <circle cx="136" cy="162" r="1.4" fill="rgba(107,174,138,0.35)"/>

          {/* Rising particles — right side */}
          <circle cx="348" cy="258" r="2.4" fill="rgba(107,174,138,0.58)"/>
          <circle cx="364" cy="230" r="1.8" fill="rgba(107,174,138,0.50)"/>
          <circle cx="344" cy="202" r="1.5" fill="rgba(107,174,138,0.43)"/>
          <circle cx="370" cy="178" r="2.0" fill="rgba(107,174,138,0.38)"/>
          <circle cx="352" cy="152" r="1.3" fill="rgba(107,174,138,0.32)"/>

          {/* Gold warmth particles — scattered */}
          <circle cx="92"  cy="148" r="2.2" fill="rgba(201,144,106,0.62)"/>
          <circle cx="108" cy="120" r="1.6" fill="rgba(201,144,106,0.50)"/>
          <circle cx="82"  cy="96"  r="1.2" fill="rgba(201,144,106,0.42)"/>
          <circle cx="388" cy="152" r="2.0" fill="rgba(201,144,106,0.58)"/>
          <circle cx="402" cy="124" r="1.5" fill="rgba(201,144,106,0.48)"/>
          <circle cx="416" cy="102" r="1.1" fill="rgba(201,144,106,0.40)"/>
          <circle cx="240" cy="106" r="1.8" fill="rgba(201,144,106,0.45)"/>
          <circle cx="224" cy="82"  r="1.3" fill="rgba(201,144,106,0.38)"/>
          <circle cx="258" cy="80"  r="1.4" fill="rgba(201,144,106,0.40)"/>

          {/* Sparkle crosses */}
          <path d="M 72 190 L 72 196 M 69 193 L 75 193"
            stroke="rgba(201,144,106,0.55)" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M 406 190 L 406 196 M 403 193 L 409 193"
            stroke="rgba(201,144,106,0.55)" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M 192 66 L 192 70 M 190 68 L 194 68"
            stroke="rgba(107,174,138,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M 288 66 L 288 70 M 286 68 L 290 68"
            stroke="rgba(107,174,138,0.6)" strokeWidth="1.2" strokeLinecap="round"/>

        </g>


        {/* ════════════════════════════════════════
            THE CHAIR — always visible, always constant
            The therapeutic space stays steady
        ════════════════════════════════════════ */}

        {/* Chair back — outer shell */}
        <path d="M 202 200 L 202 122 C 202 112 218 106 240 106
                 C 262 106 278 112 278 122 L 278 200 Z"
          fill={cFill} stroke={c} strokeWidth="2" strokeLinejoin="round"/>

        {/* Back cushion — inner shape (plush detail) */}
        <path d="M 212 194 L 212 128 C 212 120 222 116 240 116
                 C 258 116 268 120 268 128 L 268 194 Z"
          fill="rgba(107,174,138,0.06)" stroke={cFaint} strokeWidth="1"/>

        {/* Seat — plush cushion with concave top */}
        <path d="M 184 200 Q 240 190 296 200 L 296 244 Q 240 254 184 244 Z"
          fill={cFill} stroke={c} strokeWidth="2" strokeLinejoin="round"/>

        {/* Seat cushion crease */}
        <path d="M 192 202 Q 240 193 288 202"
          fill="none" stroke={cFaint} strokeWidth="1" strokeLinecap="round"/>

        {/* Left arm */}
        <path d="M 158 170 L 184 170 L 184 244 L 158 244
                 C 149 244 146 234 146 224 L 146 182 C 146 172 151 170 158 170 Z"
          fill={cFill} stroke={c} strokeWidth="2" strokeLinejoin="round"/>

        {/* Left armrest top surface */}
        <path d="M 146 183 C 148 175 155 171 184 170"
          fill="none" stroke={cFaint} strokeWidth="1.2" strokeLinecap="round"/>

        {/* Right arm */}
        <path d="M 322 170 L 296 170 L 296 244 L 322 244
                 C 331 244 334 234 334 224 L 334 182 C 334 172 329 170 322 170 Z"
          fill={cFill} stroke={c} strokeWidth="2" strokeLinejoin="round"/>

        {/* Right armrest top surface */}
        <path d="M 334 183 C 332 175 325 171 296 170"
          fill="none" stroke={cFaint} strokeWidth="1.2" strokeLinecap="round"/>

        {/* Front left leg */}
        <line x1="198" y1="244" x2="193" y2="278"
          stroke={c} strokeWidth="2" strokeLinecap="round"/>
        {/* Front right leg */}
        <line x1="282" y1="244" x2="287" y2="278"
          stroke={c} strokeWidth="2" strokeLinecap="round"/>
        {/* Back legs (shorter, partially hidden) */}
        <line x1="212" y1="200" x2="208" y2="226"
          stroke={cFaint} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="268" y1="200" x2="272" y2="226"
          stroke={cFaint} strokeWidth="1.5" strokeLinecap="round"/>

        {/* Seat button / tuft detail */}
        <circle cx="240" cy="222" r="2.5"
          fill="none" stroke={cFaint} strokeWidth="1"/>

        {/* Floor / ground line */}
        <path d="M 106 280 Q 240 274 374 280"
          stroke="rgba(107,174,138,0.14)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Floor shadow under chair */}
        <ellipse cx="240" cy="282" rx="68" ry="5"
          fill="rgba(107,174,138,0.07)"/>

      </svg>

      {/* Toggle hint */}
      <p style={{
        fontSize: "11px",
        fontFamily: "var(--font-body)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "10px",
        color: isLight ? "rgba(107,174,138,0.75)" : "rgba(90,110,130,0.6)",
        transition: "color 0.6s ease",
      }}>
        {isLight ? "← and where you were" : "click to see what's possible →"}
      </p>
    </div>
  );
}
