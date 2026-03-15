"use client";

import { useState } from "react";

/*
  TherapyHeroIllustration
  ─────────────────────────────────────────────────────────────────
  Transparent-background interactive SVG illustration.
  Default state  = "Before": hunched figure, storm cloud, rain, lightning.
  Clicked state  = "After":  upright figure, golden cloud, sun, butterflies, flowers.
  Click toggles with a 0.3 s white flash transition.
  No text. No labels. Pure visual storytelling.
*/

const css = `
  /* ── Breathing (before) ────────────────────────────────────── */
  #tta .tta-breathe {
    animation: ttaBreathe 3.5s ease-in-out infinite alternate;
    transform-origin: 490px 310px;
  }
  @keyframes ttaBreathe {
    from { transform: scaleY(1)     translateY(0);    }
    to   { transform: scaleY(1.016) translateY(-2px); }
  }

  /* ── Storm cloud pulse ──────────────────────────────────────── */
  #tta .tta-storm {
    animation: ttaStormPulse 4s ease-in-out infinite alternate;
    transform-origin: 365px 132px;
  }
  @keyframes ttaStormPulse {
    from { opacity: 0.88; transform: scale(1); }
    to   { opacity: 1;    transform: scale(1.025); }
  }

  /* ── Rain streaks ───────────────────────────────────────────── */
  #tta .tta-rain {
    animation: ttaRain 1.25s linear infinite;
  }
  @keyframes ttaRain {
    0%   { transform: translateY(-42px); opacity: 0;   }
    18%  { opacity: 0.6; }
    82%  { opacity: 0.6; }
    100% { transform: translateY(48px);  opacity: 0;   }
  }
  #tta .tta-r2  { animation-delay: 0.15s; }
  #tta .tta-r3  { animation-delay: 0.30s; }
  #tta .tta-r4  { animation-delay: 0.08s; }
  #tta .tta-r5  { animation-delay: 0.22s; }
  #tta .tta-r6  { animation-delay: 0.36s; }
  #tta .tta-r7  { animation-delay: 0.12s; }
  #tta .tta-r8  { animation-delay: 0.28s; }

  /* ── Arm sway (after) ───────────────────────────────────────── */
  #tta .tta-arm-up {
    animation: ttaArmSway 2s ease-in-out infinite alternate;
    transform-origin: 534px 264px;
  }
  @keyframes ttaArmSway {
    from { transform: rotate(-6deg); }
    to   { transform: rotate(6deg);  }
  }

  /* ── Sun rays pulse ─────────────────────────────────────────── */
  #tta .tta-sun {
    animation: ttaRays 2s ease-in-out infinite alternate;
    transform-origin: 878px 66px;
  }
  @keyframes ttaRays {
    from { opacity: 0.70; transform: scale(0.94); }
    to   { opacity: 1;    transform: scale(1.06); }
  }

  /* ── Golden cloud float ─────────────────────────────────────── */
  #tta .tta-gold {
    animation: ttaGoldFloat 3s ease-in-out infinite alternate;
  }
  @keyframes ttaGoldFloat {
    from { transform: translateY(0);   }
    to   { transform: translateY(-9px); }
  }

  /* ── Star spin ──────────────────────────────────────────────── */
  #tta .tta-star {
    animation: ttaStarSpin 8s linear infinite;
    transform-origin: 714px 115px;
  }
  @keyframes ttaStarSpin {
    from { transform: rotate(0deg);   }
    to   { transform: rotate(360deg); }
  }

  /* ── Butterfly 1 ────────────────────────────────────────────── */
  #tta .tta-b1 {
    animation: ttaFly1 4.5s ease-in-out infinite;
    transform-origin: 312px 195px;
  }
  @keyframes ttaFly1 {
    0%   { transform: translate(0, 0);       }
    25%  { transform: translate(22px, -20px); }
    50%  { transform: translate(38px, 4px);   }
    75%  { transform: translate(16px, 22px);  }
    100% { transform: translate(0, 0);       }
  }

  /* ── Butterfly 2 ────────────────────────────────────────────── */
  #tta .tta-b2 {
    animation: ttaFly2 5.5s ease-in-out infinite;
    transform-origin: 682px 180px;
  }
  @keyframes ttaFly2 {
    0%   { transform: translate(0, 0);        }
    30%  { transform: translate(-20px, -24px); }
    60%  { transform: translate(-32px, 7px);  }
    80%  { transform: translate(-10px, 20px); }
    100% { transform: translate(0, 0);        }
  }

  /* ── Butterfly wing flap ────────────────────────────────────── */
  #tta .tta-bw {
    animation: ttaWingFlap 0.4s ease-in-out infinite alternate;
    transform-origin: center;
  }
  @keyframes ttaWingFlap {
    from { transform: scaleY(0.45); }
    to   { transform: scaleY(1);    }
  }

  /* ── Flower sway ────────────────────────────────────────────── */
  #tta .tta-fl {
    animation: ttaFlSway 2.5s ease-in-out infinite alternate;
    transform-origin: 0px 18px;
  }
  #tta .tta-fr {
    animation: ttaFrSway 2.5s ease-in-out 0.5s infinite alternate;
    transform-origin: 0px 18px;
  }
  @keyframes ttaFlSway { from { transform: rotate(-6deg); } to { transform: rotate(6deg); } }
  @keyframes ttaFrSway { from { transform: rotate(6deg);  } to { transform: rotate(-6deg); } }

  /* ── Reduced motion ─────────────────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    #tta * { animation: none !important; }
  }
`;

/* ── 6-pointed star path (outer r=20, inner r=10, cx=714, cy=115) ── */
const STAR =
  "M 714 95 L 719 106 L 731 105 L 724 115 L 731 125 L 719 124 " +
  "L 714 135 L 709 124 L 697 125 L 704 115 L 697 105 L 709 106 Z";

/* ── Rain streak data ─────────────────────────────────────────── */
const RAIN = [
  { x1: 226, y1: 212, x2: 219, y2: 250 },
  { x1: 272, y1: 218, x2: 265, y2: 256 },
  { x1: 320, y1: 222, x2: 313, y2: 260 },
  { x1: 368, y1: 224, x2: 361, y2: 262 },
  { x1: 415, y1: 224, x2: 408, y2: 262 },
  { x1: 460, y1: 222, x2: 453, y2: 260 },
  { x1: 505, y1: 218, x2: 498, y2: 256 },
  { x1: 544, y1: 212, x2: 537, y2: 250 },
];

/* ── Small flower component ───────────────────────────────────── */
function Flower({ x, y, color, cls }) {
  // 5 petal circles around center
  const petals = [
    [0, -10], [9.5, -3.1], [5.9, 8.1], [-5.9, 8.1], [-9.5, -3.1],
  ];
  return (
    <g transform={`translate(${x}, ${y})`} className={cls}>
      <line x1="0" y1="6" x2="0" y2="22" stroke="#52B788" strokeWidth="3" strokeLinecap="round"/>
      {petals.map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r="6.5" fill={color}/>
      ))}
      <circle cx="0" cy="0" r="5.5" fill="#FFD54F"/>
    </g>
  );
}

/* ── Simple butterfly component ───────────────────────────────── */
function Butterfly({ x, y, color, cls }) {
  return (
    <g transform={`translate(${x}, ${y})`} className={cls}>
      {/* Upper wings */}
      <ellipse cx="-18" cy="-10" rx="24" ry="14" fill={color} opacity="0.88" className="tta-bw"/>
      <ellipse cx=" 18" cy="-10" rx="24" ry="14" fill={color} opacity="0.88" className="tta-bw"/>
      {/* Lower wings */}
      <ellipse cx="-15" cy="  8" rx="16" ry="10" fill={color} opacity="0.72" className="tta-bw"/>
      <ellipse cx=" 15" cy="  8" rx="16" ry="10" fill={color} opacity="0.72" className="tta-bw"/>
      {/* Body */}
      <ellipse cx="0" cy="0" rx="4" ry="13" fill="#2A1810"/>
    </g>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
export default function TherapyHeroIllustration() {
  const [isAfter, setIsAfter] = useState(false);
  const [flashing, setFlashing] = useState(false);

  const handleToggle = () => {
    if (flashing) return;
    setFlashing(true);
    setTimeout(() => setIsAfter(v => !v), 150);
    setTimeout(() => setFlashing(false), 300);
  };

  const beforeStyle = { opacity: isAfter ? 0 : 1, transition: "opacity 0.6s ease" };
  const afterStyle  = { opacity: isAfter ? 1 : 0, transition: "opacity 0.6s ease" };
  const flashStyle  = { opacity: flashing ? 1 : 0, transition: "opacity 0.15s ease", pointerEvents: "none" };

  return (
    <div
      onClick={handleToggle}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleToggle()}
      role="button"
      tabIndex={0}
      style={{ cursor: "pointer", userSelect: "none" }}
      aria-label={isAfter ? "Click to see where you were" : "Click to see your transformation"}
    >
      <svg
        id="tta"
        viewBox="0 0 1000 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", display: "block" }}
        aria-hidden="true"
      >
        <defs>
          <style>{css}</style>

          {/* Storm cloud mask */}
          <mask id="tta-smask">
            <ellipse cx="278" cy="152" rx="92" ry="75" fill="white"/>
            <ellipse cx="360" cy="128" rx="108" ry="95" fill="white"/>
            <ellipse cx="458" cy="133" rx="115" ry="100" fill="white"/>
            <ellipse cx="542" cy="152" rx="88" ry="74" fill="white"/>
            <rect x="182" y="164" width="404" height="50" fill="white" rx="10"/>
          </mask>

          {/* Golden cloud mask */}
          <mask id="tta-gmask">
            <ellipse cx="618" cy="138" rx="64" ry="54" fill="white"/>
            <ellipse cx="688" cy="112" rx="84" ry="72" fill="white"/>
            <ellipse cx="768" cy="115" rx="88" ry="76" fill="white"/>
            <ellipse cx="838" cy="136" rx="66" ry="55" fill="white"/>
            <rect x="552" y="150" width="308" height="42" fill="white" rx="8"/>
          </mask>

          {/* Storm gradient */}
          <radialGradient id="tta-sg" cx="50%" cy="28%" r="62%">
            <stop offset="0%"   stopColor="#4E3A68" stopOpacity="0.94"/>
            <stop offset="100%" stopColor="#1E1230" stopOpacity="0.96"/>
          </radialGradient>

          {/* Golden cloud gradient */}
          <radialGradient id="tta-gg" cx="50%" cy="30%" r="62%">
            <stop offset="0%"   stopColor="#FFE868" stopOpacity="0.94"/>
            <stop offset="100%" stopColor="#ECA818" stopOpacity="0.90"/>
          </radialGradient>

          {/* Sun glow filter */}
          <filter id="tta-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>


        {/* ══════════════════════════════════════════════
            ALWAYS VISIBLE — chair + legs
        ══════════════════════════════════════════════ */}

        {/* Chair back panel */}
        <rect x="434" y="240" width="128" height="128" rx="8"
              fill="#C49444" stroke="#906820" strokeWidth="2.5"/>
        {/* Highlight on chair back */}
        <rect x="442" y="248" width="14" height="90" rx="6"
              fill="rgba(255,255,255,0.18)"/>

        {/* Chair seat */}
        <path d="M 392 365 Q 492 352 592 365 L 592 390 Q 492 378 392 390 Z"
              fill="#C49444" stroke="#906820" strokeWidth="2.5"/>
        {/* Seat highlight */}
        <path d="M 400 368 Q 492 356 584 368" fill="none"
              stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round"/>

        {/* Front legs */}
        <line x1="408" y1="390" x2="400" y2="490"
              stroke="#A07030" strokeWidth="10" strokeLinecap="round"/>
        <line x1="576" y1="390" x2="584" y2="490"
              stroke="#A07030" strokeWidth="10" strokeLinecap="round"/>

        {/* Figure legs — dark trousers (shared both states) */}
        {/* Left leg */}
        <path d="M 464 368 Q 452 435 440 490" fill="none"
              stroke="#3A3558" strokeWidth="28" strokeLinecap="round"/>
        {/* Right leg */}
        <path d="M 516 368 Q 528 435 542 490" fill="none"
              stroke="#3A3558" strokeWidth="28" strokeLinecap="round"/>

        {/* Shoes */}
        <ellipse cx="436" cy="490" rx="28" ry="12" fill="#2A1E3E"/>
        <ellipse cx="546" cy="490" rx="28" ry="12" fill="#2A1E3E"/>


        {/* ══════════════════════════════════════════════
            STATE 1 — BEFORE (hunched, troubled)
        ══════════════════════════════════════════════ */}
        <g style={beforeStyle}>

          {/* Storm cloud */}
          <g className="tta-storm">
            <rect x="178" y="68" width="412" height="160"
                  fill="url(#tta-sg)" mask="url(#tta-smask)"/>

            {/* Lightning bolt inside cloud */}
            <polyline
              points="395,128 382,155 398,152 382,185"
              stroke="#F0E040" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round"
              opacity="0.9"/>

            {/* Rain streaks */}
            {RAIN.map(({ x1, y1, x2, y2 }, i) => (
              <line key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(160,180,220,0.60)" strokeWidth="2" strokeLinecap="round"
                className={`tta-rain tta-r${i + 1}`}/>
            ))}
          </g>

          {/* Hunched torso */}
          <g className="tta-breathe">
            {/* Shirt */}
            <path d="M 458 282 C 440 322 443 352 448 388 L 532 388
                     C 537 352 540 322 522 282
                     C 510 256 490 250 490 250
                     C 490 250 470 256 458 282 Z"
                  fill="#5A8B7A"/>
            {/* Shirt shadow under shoulders */}
            <path d="M 462 295 C 456 310 454 330 456 360" fill="none"
                  stroke="rgba(0,0,0,0.08)" strokeWidth="10" strokeLinecap="round"/>

            {/* Left arm (hanging) */}
            <path d="M 452 288 C 438 328 434 378 440 420" fill="none"
                  stroke="#C8956A" strokeWidth="24" strokeLinecap="round"/>
            <circle cx="440" cy="420" r="14" fill="#C8956A"/>

            {/* Right arm (hanging) */}
            <path d="M 528 288 C 542 328 546 378 540 420" fill="none"
                  stroke="#C8956A" strokeWidth="24" strokeLinecap="round"/>
            <circle cx="540" cy="420" r="14" fill="#C8956A"/>
          </g>

          {/* Head — tilted down, hair falling over face */}
          <g transform="rotate(-22, 476, 306)">
            {/* Neck */}
            <rect x="462" y="262" width="28" height="30" rx="10" fill="#C8956A"/>
            {/* Head */}
            <ellipse cx="476" cy="300" rx="42" ry="44" fill="#C8956A" stroke="#B0804A" strokeWidth="1.5"/>
            {/* Hair draped forward */}
            <path d="M 436 280 C 434 255 450 235 476 232
                     C 502 235 518 255 516 280
                     C 510 268 502 264 495 276
                     C 488 288 481 300 476 310
                     C 468 302 458 292 450 285
                     C 442 290 436 285 436 280 Z"
                  fill="#2A1810"/>
            {/* Downcast eyes (closed/lowered) */}
            <path d="M 460 295 Q 468 300 476 296"
                  stroke="#4A2A18" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M 484 294 Q 492 298 500 294"
                  stroke="#4A2A18" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Frown */}
            <path d="M 464 314 Q 476 310 488 314"
                  stroke="#8A5030" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Tear */}
            <path d="M 461 298 Q 458 306 462 312 Q 465 314 464 308 Q 463 302 465 298"
                  fill="#7EB8D4" opacity="0.9"/>
          </g>

        </g>


        {/* ══════════════════════════════════════════════
            STATE 2 — AFTER (upright, joyful)
        ══════════════════════════════════════════════ */}
        <g style={afterStyle}>

          {/* Sun — upper right */}
          <g className="tta-sun" filter="url(#tta-glow)">
            <circle cx="878" cy="66" r="40" fill="#FFD54F" opacity="0.95"/>
            {/* Rays */}
            {[0,45,90,135,180,225,270,315].map((deg, i) => {
              const a = (deg - 90) * Math.PI / 180;
              return (
                <line key={i}
                  x1={878 + Math.cos(a) * 50} y1={66 + Math.sin(a) * 50}
                  x2={878 + Math.cos(a) * 70} y2={66 + Math.sin(a) * 70}
                  stroke="#FFD54F" strokeWidth="5" strokeLinecap="round"/>
              );
            })}
          </g>

          {/* Golden cloud */}
          <g className="tta-gold">
            <rect x="548" y="64" width="316" height="140"
                  fill="url(#tta-gg)" mask="url(#tta-gmask)"/>
            {/* 6-pointed star inside cloud */}
            <g className="tta-star">
              <path d={STAR} fill="#FFF4A0" stroke="#E8C040" strokeWidth="1.5" opacity="0.96"/>
            </g>
          </g>

          {/* Butterflies */}
          <Butterfly x={312} y={195} color="#F4A460" cls="tta-b1"/>
          <Butterfly x={682} y={178} color="#96CEB4" cls="tta-b2"/>

          {/* Flowers at chair base */}
          <Flower x={374} y={468} color="#FF9AA2" cls="tta-fl"/>
          <Flower x={606} y={468} color="#FFB7D3" cls="tta-fr"/>

          {/* Upright torso */}
          {/* Shirt */}
          <path d="M 450 265 C 444 310 448 352 452 388 L 528 388
                   C 532 352 536 310 530 265
                   C 518 250 490 246 490 246
                   C 490 246 462 250 450 265 Z"
                fill="#5A8B7A"/>
          {/* Shirt collar detail */}
          <path d="M 474 256 L 490 266 L 506 256" fill="none"
                stroke="#4A7A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

          {/* Left arm (relaxed at side) */}
          <path d="M 450 268 C 436 305 432 355 436 390" fill="none"
                stroke="#C8956A" strokeWidth="24" strokeLinecap="round"/>
          <circle cx="436" cy="390" r="14" fill="#C8956A"/>

          {/* Right arm (raised — animated) */}
          <g className="tta-arm-up">
            <path d="M 530 268 C 548 245 560 212 564 182" fill="none"
                  stroke="#C8956A" strokeWidth="24" strokeLinecap="round"/>
            <circle cx="564" cy="178" r="14" fill="#C8956A"/>
          </g>

          {/* Neck */}
          <rect x="476" y="244" width="28" height="26" rx="10" fill="#C8956A"/>

          {/* Head — upright */}
          <ellipse cx="490" cy="208" rx="45" ry="48" fill="#C8956A" stroke="#B0804A" strokeWidth="1.5"/>

          {/* Hair */}
          <path d="M 448 208 C 446 180 460 162 490 158
                   C 520 162 534 180 532 208
                   C 526 195 510 188 490 187
                   C 470 188 454 195 448 208 Z"
                fill="#2A1810"/>
          {/* Hair falling at sides */}
          <path d="M 448 208 C 444 218 446 230 450 238" fill="none"
                stroke="#2A1810" strokeWidth="8" strokeLinecap="round"/>
          <path d="M 532 208 C 536 218 534 230 530 238" fill="none"
                stroke="#2A1810" strokeWidth="8" strokeLinecap="round"/>

          {/* Face — bright eyes with catchlights */}
          {/* Left eye */}
          <ellipse cx="474" cy="203" rx="9" ry="10" fill="white"/>
          <ellipse cx="475" cy="205" rx="6" ry="7" fill="#2A1810"/>
          <circle  cx="477" cy="202" r="2.5" fill="white"/>
          {/* Right eye */}
          <ellipse cx="506" cy="203" rx="9" ry="10" fill="white"/>
          <ellipse cx="507" cy="205" rx="6" ry="7" fill="#2A1810"/>
          <circle  cx="509" cy="202" r="2.5" fill="white"/>

          {/* Eyebrows (lifted, happy) */}
          <path d="M 463 192 Q 474 186 485 191"
                stroke="#2A1810" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
          <path d="M 495 191 Q 506 186 517 192"
                stroke="#2A1810" strokeWidth="2.8" fill="none" strokeLinecap="round"/>

          {/* Smile */}
          <path d="M 475 224 Q 490 238 505 224"
                stroke="#8A4830" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Cheek flush */}
          <ellipse cx="462" cy="220" rx="10" ry="7" fill="#E88070" opacity="0.28"/>
          <ellipse cx="518" cy="220" rx="10" ry="7" fill="#E88070" opacity="0.28"/>

        </g>


        {/* ══════════════════════════════════════════════
            FLASH TRANSITION OVERLAY
        ══════════════════════════════════════════════ */}
        <rect width="1000" height="560" rx="20" fill="white" style={flashStyle}/>

      </svg>
    </div>
  );
}
