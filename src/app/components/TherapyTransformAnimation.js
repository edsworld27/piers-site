/*
  TherapyTransformAnimation — auto-playing before/after SVG illustration.
  Dark scene (0–4 s): slumped figure, dark thought bubble, drifting negative words.
  Flash at ~3.7 s: white breakthrough moment.
  Light scene (4 s+): upright figure, green thought bubble, hearts, sparkles, sun.
  Pure CSS animation — no React state needed.
*/

const css = `
  /* ── Scene transitions ───────────────────────────── */
  #ttx .ttx-dark-scene  { animation: ttxFadeOut 1s ease-in-out 4s forwards; }
  #ttx .ttx-light-scene { opacity: 0; animation: ttxFadeIn 1s ease-in-out 4s forwards; }

  @keyframes ttxFadeOut { 0% { opacity: 1; } 100% { opacity: 0; pointer-events: none; } }
  @keyframes ttxFadeIn  { 0% { opacity: 0; } 100% { opacity: 1; } }

  /* ── Background pulses ───────────────────────────── */
  #ttx .ttx-dark-bg  { animation: ttxDarkPulse  2s ease-in-out infinite alternate; }
  #ttx .ttx-light-bg { animation: ttxLightPulse 2s ease-in-out infinite alternate; }
  @keyframes ttxDarkPulse  { from { fill: #1a1a2e; } to { fill: #16213e; } }
  @keyframes ttxLightPulse { from { fill: #fff9f0; } to { fill: #fef3e2; } }

  /* ── Dark person ─────────────────────────────────── */
  #ttx .ttx-head-dark {
    animation: ttxHeadDroop 2.5s ease-in-out infinite alternate;
    transform-origin: 370px 195px;
  }
  @keyframes ttxHeadDroop { from { transform: rotate(-5deg); } to { transform: rotate(-15deg); } }

  #ttx .ttx-body-dark {
    animation: ttxBodySlump 2.5s ease-in-out infinite alternate;
    transform-origin: 370px 300px;
  }
  @keyframes ttxBodySlump { from { transform: scaleY(1); } to { transform: scaleY(0.97) translateY(3px); } }

  /* ── Dark bubble ─────────────────────────────────── */
  #ttx .ttx-dark-bubble {
    animation: ttxBubbleFloat 3s ease-in-out infinite alternate,
               ttxFadeOut 1s ease-in-out 4s forwards;
  }
  @keyframes ttxBubbleFloat { from { transform: translateY(0); } to { transform: translateY(-8px); } }

  /* ── Dark thought text ───────────────────────────── */
  #ttx .ttx-dark-text {
    font-family: 'Caveat', cursive;
    fill: #c8a0d0;
    font-size: 13px;
    animation: ttxFlicker 1.8s ease-in-out infinite alternate,
               ttxFadeOut 1s ease-in-out 4s forwards;
  }
  @keyframes ttxFlicker { from { opacity: 0.7; } to { opacity: 1; } }

  /* ── Floating words (shared dark & light) ────────── */
  #ttx .ttx-w1 { animation: ttxWord1 4s ease-in-out infinite;       opacity: 0; }
  #ttx .ttx-w2 { animation: ttxWord2 4s ease-in-out 1s infinite;    opacity: 0; }
  #ttx .ttx-w3 { animation: ttxWord3 4s ease-in-out 2s infinite;    opacity: 0; }
  @keyframes ttxWord1 { 0%,100%{opacity:0;transform:translateY(0)}  20%,80%{opacity:1} 100%{transform:translateY(-30px)} }
  @keyframes ttxWord2 { 0%,100%{opacity:0;transform:translateY(0)}  20%,80%{opacity:1} 100%{transform:translateY(-25px)} }
  @keyframes ttxWord3 { 0%,100%{opacity:0;transform:translateY(0)}  20%,80%{opacity:1} 100%{transform:translateY(-28px)} }

  /* ── Happy person ────────────────────────────────── */
  #ttx .ttx-head-happy {
    animation: ttxHappyBob 1.2s ease-in-out infinite alternate;
    transform-origin: 374px 215px;
  }
  @keyframes ttxHappyBob { from { transform: rotate(-2deg); } to { transform: rotate(2deg); } }

  #ttx .ttx-arm-wave {
    animation: ttxArmWave 1s ease-in-out infinite alternate;
    transform-origin: 350px 290px;
  }
  @keyframes ttxArmWave { from { transform: rotate(0deg); } to { transform: rotate(-25deg); } }

  /* ── Sun ─────────────────────────────────────────── */
  #ttx .ttx-sun {
    animation: ttxRayPulse 1.5s ease-in-out infinite alternate;
    transform-origin: 95px 80px;
  }
  @keyframes ttxRayPulse { from { opacity:0.5; transform:scale(0.9); } to { opacity:1; transform:scale(1.1); } }

  /* ── Happy bubble ────────────────────────────────── */
  #ttx .ttx-happy-bubble {
    animation: ttxHappyBounce 1s ease-in-out infinite alternate;
  }
  @keyframes ttxHappyBounce { from { transform:translateY(0) scale(1); } to { transform:translateY(-6px) scale(1.02); } }

  /* ── Happy thought text ──────────────────────────── */
  #ttx .ttx-happy-text {
    font-family: 'Caveat', cursive;
    fill: #2d6a4f;
    font-size: 13px;
    font-weight: 700;
    animation: ttxGlow 1.5s ease-in-out infinite alternate;
  }
  @keyframes ttxGlow { from { opacity: 0.85; } to { opacity: 1; } }

  /* ── Floating hearts ─────────────────────────────── */
  #ttx .ttx-h1 { animation: ttxHeart 3s ease-in-out infinite; }
  #ttx .ttx-h2 { animation: ttxHeart 3s ease-in-out 1s infinite; }
  #ttx .ttx-h3 { animation: ttxHeart 3s ease-in-out 2s infinite; }
  @keyframes ttxHeart {
    0%   { opacity:0; transform:translateY(0) scale(0.5); }
    30%  { opacity:1; transform:translateY(-15px) scale(1); }
    100% { opacity:0; transform:translateY(-50px) scale(0.8); }
  }

  /* ── Sparkles ────────────────────────────────────── */
  #ttx .ttx-sp  { animation: ttxSparkle 2s ease-in-out infinite; }
  #ttx .ttx-sp:nth-child(2) { animation-delay: 0.5s; }
  #ttx .ttx-sp:nth-child(3) { animation-delay: 1s; }
  @keyframes ttxSparkle { 0%,100%{opacity:0;transform:scale(0.5)} 50%{opacity:1;transform:scale(1)} }

  /* ── Transition flash ────────────────────────────── */
  #ttx .ttx-flash {
    animation: ttxFlash 0.5s ease-in-out 3.7s forwards;
    opacity: 0;
  }
  @keyframes ttxFlash { 0%{opacity:0} 50%{opacity:0.7} 100%{opacity:0} }

  /* ── Labels ──────────────────────────────────────── */
  #ttx .ttx-label { font-family: 'Caveat', cursive; font-size: 18px; font-weight: 700; }

  /* ── Reduced motion ──────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    #ttx * { animation: none !important; }
    #ttx .ttx-light-scene { opacity: 1; }
    #ttx .ttx-dark-scene  { opacity: 0; }
  }
`;

export default function TherapyTransformAnimation() {
  return (
    <svg
      id="ttx"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 500"
      style={{ width: "100%", maxWidth: "600px", display: "block" }}
      aria-label="Illustration showing transformation from anxiety and dark thoughts to calm and positivity through hypnotherapy"
      role="img"
    >
      <defs>
        <style>{css}</style>

        <radialGradient id="ttxDarkBubble" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#2d1b4e"/>
          <stop offset="100%" stopColor="#1a0a2e"/>
        </radialGradient>

        <radialGradient id="ttxHappyBubble" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#d8f3dc"/>
          <stop offset="100%" stopColor="#b7e4c7"/>
        </radialGradient>

        <radialGradient id="ttxVignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%"   stopColor="transparent"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0.45"/>
        </radialGradient>

        <radialGradient id="ttxWarmGlow" cx="15%" cy="20%" r="60%">
          <stop offset="0%"   stopColor="#ffe8a0" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>

        <filter id="ttxShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.28"/>
        </filter>

        <filter id="ttxGlowF">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>


      {/* ═══════════════════════════════════════
          DARK SCENE — before therapy
      ═══════════════════════════════════════ */}
      <g className="ttx-dark-scene">

        {/* Background */}
        <rect className="ttx-dark-bg" width="800" height="500" rx="16"/>
        <rect width="800" height="500" rx="16" fill="url(#ttxVignette)"/>

        {/* Floor */}
        <line x1="180" y1="420" x2="620" y2="420" stroke="#2a2a4a" strokeWidth="2"/>

        {/* ── Chair ── */}
        <rect x="290" y="340" width="160" height="18" rx="5" fill="#2e2e50" stroke="#4a4a70" strokeWidth="1.5"/>
        <rect x="400" y="240" width="18"  height="110" rx="5" fill="#2e2e50" stroke="#4a4a70" strokeWidth="1.5"/>
        <rect x="390" y="235" width="38"  height="14"  rx="5" fill="#2e2e50" stroke="#4a4a70" strokeWidth="1.5"/>
        <line x1="300" y1="358" x2="295" y2="420" stroke="#2e2e50" strokeWidth="6" strokeLinecap="round"/>
        <line x1="440" y1="358" x2="445" y2="420" stroke="#2e2e50" strokeWidth="6" strokeLinecap="round"/>

        {/* ── Slumped body ── */}
        <g className="ttx-body-dark">
          <path d="M330 340 Q340 290 370 270 Q390 265 400 270 Q420 280 425 340 Z"
                fill="#3a3a6a" stroke="#5a5a8a" strokeWidth="1.5"/>
          <path d="M335 295 Q310 320 305 360 Q303 368 308 370 Q314 372 316 364 Q322 330 345 308"
                fill="none" stroke="#5a5a8a" strokeWidth="9" strokeLinecap="round"/>
          <path d="M420 300 Q435 320 430 355 Q428 362 422 360 Q416 358 418 350 Q420 320 410 305"
                fill="none" stroke="#5a5a8a" strokeWidth="9" strokeLinecap="round"/>
          <path d="M330 340 Q325 380 300 415 Q296 422 304 424 Q311 426 315 419 Q338 385 345 340"
                fill="#3a3a6a" stroke="#5a5a8a" strokeWidth="1.5"/>
          <path d="M425 340 Q435 380 450 415 Q454 422 447 424 Q440 427 436 420 Q420 385 415 340"
                fill="#3a3a6a" stroke="#5a5a8a" strokeWidth="1.5"/>
        </g>

        {/* ── Drooping head ── */}
        <g className="ttx-head-dark">
          <rect x="363" y="245" width="22" height="28" rx="8" fill="#c8a882"/>
          <ellipse cx="374" cy="225" rx="32" ry="34" fill="#d4aa8a" stroke="#b8946e" strokeWidth="1.5"/>
          {/* Hair */}
          <path d="M342 215 Q345 185 374 182 Q403 185 406 215 Q398 196 374 193 Q350 196 342 215Z"
                fill="#2c1810"/>
          <path d="M344 218 Q340 200 348 192" stroke="#2c1810" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M404 218 Q408 200 402 192" stroke="#2c1810" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Downcast eyes */}
          <path d="M360 232 Q366 238 373 234" stroke="#5a3a2a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M376 234 Q382 238 388 232" stroke="#5a3a2a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* Frown */}
          <path d="M362 248 Q374 244 386 248" stroke="#8a6040" strokeWidth="2" fill="none" strokeLinecap="round"/>
          {/* Tear */}
          <ellipse cx="360" cy="244" rx="2.5" ry="3.5" fill="#7eb8d4" opacity="0.8"/>
        </g>

        {/* ── Dark thought bubble ── */}
        <g className="ttx-dark-bubble">
          <polygon points="290,265 270,290 300,285" fill="url(#ttxDarkBubble)" stroke="#5a3a7a" strokeWidth="1.5"/>
          <ellipse cx="185" cy="215" rx="130" ry="85"
                   fill="url(#ttxDarkBubble)" stroke="#5a3a7a" strokeWidth="2" filter="url(#ttxShadow)"/>
          <text x="118" y="178" className="ttx-dark-text">I&apos;m not enough.</text>
          <text x="105" y="200" className="ttx-dark-text">Nobody understands</text>
          <text x="125" y="222" className="ttx-dark-text">what I&apos;m feeling.</text>
          <text x="135" y="244" className="ttx-dark-text">Will it ever end?</text>
          <text x="108" y="265" style={{ fontSize: "16px", fill: "#6a4a8a", opacity: 0.7 }}>~ ~ ~</text>
        </g>

        {/* ── Drifting dark words ── */}
        <text className="ttx-w1" x="490" y="180"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "20px", fill: "#7a5a9a", fontWeight: "700" }}>
          hopeless
        </text>
        <text className="ttx-w2" x="510" y="140"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "16px", fill: "#6a4a8a" }}>
          alone
        </text>
        <text className="ttx-w3" x="478" y="210"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "14px", fill: "#8a6aaa" }}>
          worthless
        </text>

        {/* Label */}
        <text x="400" y="470" className="ttx-label" fill="#4a4a6a" textAnchor="middle">Before Therapy</text>

        {/* Rain drops */}
        <g opacity="0.4">
          <line x1="580" y1="60"  x2="575" y2="85"  stroke="#4a6080" strokeWidth="1.5"/>
          <line x1="610" y1="40"  x2="605" y2="65"  stroke="#4a6080" strokeWidth="1.5"/>
          <line x1="640" y1="70"  x2="635" y2="95"  stroke="#4a6080" strokeWidth="1.5"/>
          <line x1="660" y1="45"  x2="655" y2="70"  stroke="#4a6080" strokeWidth="1.5"/>
          <line x1="560" y1="90"  x2="555" y2="115" stroke="#4a6080" strokeWidth="1.5"/>
          <line x1="695" y1="60"  x2="690" y2="85"  stroke="#4a6080" strokeWidth="1.5"/>
        </g>
      </g>


      {/* ═══════════════════════════════════════
          TRANSITION FLASH
      ═══════════════════════════════════════ */}
      <rect className="ttx-flash" width="800" height="500" rx="16" fill="white"/>


      {/* ═══════════════════════════════════════
          LIGHT SCENE — after therapy
      ═══════════════════════════════════════ */}
      <g className="ttx-light-scene">

        {/* Background */}
        <rect className="ttx-light-bg" width="800" height="500" rx="16"/>
        <rect width="800" height="500" rx="16" fill="url(#ttxWarmGlow)"/>

        {/* Floor */}
        <line x1="180" y1="420" x2="620" y2="420" stroke="#d4c5a0" strokeWidth="2"/>

        {/* ── Sun ── */}
        <g className="ttx-sun" filter="url(#ttxGlowF)">
          <circle cx="95" cy="80" r="35" fill="#ffd166"/>
          <line x1="95"  y1="30"  x2="95"  y2="18"  stroke="#ffd166" strokeWidth="4" strokeLinecap="round"/>
          <line x1="95"  y1="130" x2="95"  y2="142" stroke="#ffd166" strokeWidth="4" strokeLinecap="round"/>
          <line x1="45"  y1="80"  x2="33"  y2="80"  stroke="#ffd166" strokeWidth="4" strokeLinecap="round"/>
          <line x1="145" y1="80"  x2="157" y2="80"  stroke="#ffd166" strokeWidth="4" strokeLinecap="round"/>
          <line x1="60"  y1="45"  x2="51"  y2="36"  stroke="#ffd166" strokeWidth="4" strokeLinecap="round"/>
          <line x1="130" y1="45"  x2="139" y2="36"  stroke="#ffd166" strokeWidth="4" strokeLinecap="round"/>
          <line x1="60"  y1="115" x2="51"  y2="124" stroke="#ffd166" strokeWidth="4" strokeLinecap="round"/>
          <line x1="130" y1="115" x2="139" y2="124" stroke="#ffd166" strokeWidth="4" strokeLinecap="round"/>
        </g>

        {/* ── Chair (warm wood tone) ── */}
        <rect x="290" y="340" width="160" height="18" rx="5" fill="#c8b89a" stroke="#a89078" strokeWidth="1.5"/>
        <rect x="400" y="240" width="18"  height="110" rx="5" fill="#c8b89a" stroke="#a89078" strokeWidth="1.5"/>
        <rect x="390" y="235" width="38"  height="14"  rx="5" fill="#c8b89a" stroke="#a89078" strokeWidth="1.5"/>
        <line x1="300" y1="358" x2="295" y2="420" stroke="#c8b89a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="440" y1="358" x2="445" y2="420" stroke="#c8b89a" strokeWidth="6" strokeLinecap="round"/>

        {/* ── Upright body ── */}
        <g>
          <path d="M330 340 Q335 285 370 268 Q390 262 405 268 Q425 278 428 340 Z"
                fill="#4a90d9" stroke="#3a78c2" strokeWidth="1.5"/>
          {/* Right arm resting */}
          <path d="M425 295 Q445 315 442 355 Q440 362 434 360 Q428 358 430 350 Q430 318 416 300"
                fill="none" stroke="#3a78c2" strokeWidth="9" strokeLinecap="round"/>
          {/* Left arm waving */}
          <g className="ttx-arm-wave">
            <path d="M335 295 Q305 265 290 235 Q287 228 293 225 Q299 222 303 229 Q318 258 345 280"
                  fill="none" stroke="#3a78c2" strokeWidth="9" strokeLinecap="round"/>
            <circle cx="292" cy="224" r="10" fill="#d4aa8a" stroke="#b8946e" strokeWidth="1.5"/>
          </g>
          {/* Legs */}
          <path d="M330 340 Q325 380 300 415 Q296 422 304 424 Q311 426 315 419 Q338 385 345 340"
                fill="#4a90d9" stroke="#3a78c2" strokeWidth="1.5"/>
          <path d="M425 340 Q435 380 450 415 Q454 422 447 424 Q440 427 436 420 Q420 385 415 340"
                fill="#4a90d9" stroke="#3a78c2" strokeWidth="1.5"/>
        </g>

        {/* ── Happy head ── */}
        <g className="ttx-head-happy">
          <rect x="363" y="240" width="22" height="30" rx="8" fill="#c8a882"/>
          <ellipse cx="374" cy="215" rx="33" ry="35" fill="#d4aa8a" stroke="#b8946e" strokeWidth="1.5"/>
          {/* Hair */}
          <path d="M342 205 Q345 172 374 170 Q403 172 406 205 Q398 184 374 181 Q350 184 342 205Z"
                fill="#2c1810"/>
          {/* Happy squint eyes */}
          <path d="M358 220 Q365 213 372 218" stroke="#3a2010" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M376 218 Q383 213 390 220" stroke="#3a2010" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* Smile */}
          <path d="M360 234 Q374 246 388 234" stroke="#8a5030" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          {/* Rosy cheeks */}
          <circle cx="356" cy="230" r="8" fill="#e88080" opacity="0.3"/>
          <circle cx="392" cy="230" r="8" fill="#e88080" opacity="0.3"/>
        </g>

        {/* ── Happy thought bubble ── */}
        <g className="ttx-happy-bubble">
          <polygon points="290,258 270,282 300,278" fill="url(#ttxHappyBubble)" stroke="#52b788" strokeWidth="1.5"/>
          <ellipse cx="183" cy="205" rx="135" ry="88"
                   fill="url(#ttxHappyBubble)" stroke="#52b788" strokeWidth="2" filter="url(#ttxShadow)"/>
          <text x="108" y="168" className="ttx-happy-text">I am enough.</text>
          <text x="97"  y="190" className="ttx-happy-text">I can grow and heal.</text>
          <text x="103" y="212" className="ttx-happy-text">I deserve good things.</text>
          <text x="115" y="234" className="ttx-happy-text">Life is beautiful. ✨</text>
          <text x="100" y="256" style={{ fontSize: "16px", fill: "#52b788", opacity: 0.8 }}>~ ~ ~</text>
        </g>

        {/* ── Floating hearts ── */}
        <text className="ttx-h1" x="490" y="200" style={{ fontSize: "22px", fill: "#e84393" }}>♥</text>
        <text className="ttx-h2" x="530" y="170" style={{ fontSize: "18px", fill: "#ff6b9d" }}>♥</text>
        <text className="ttx-h3" x="510" y="230" style={{ fontSize: "14px", fill: "#ffb3d1" }}>♥</text>

        {/* ── Sparkles ── */}
        <g>
          <text className="ttx-sp" x="545" y="120" style={{ fontSize: "20px", fill: "#ffd166" }}>✦</text>
          <text className="ttx-sp" x="480" y="150" style={{ fontSize: "16px", fill: "#ffd166" }}>✦</text>
          <text className="ttx-sp" x="570" y="160" style={{ fontSize: "12px", fill: "#ffd166" }}>✦</text>
        </g>

        {/* ── Positive drifting words ── */}
        <text className="ttx-w1" x="490" y="185"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "20px", fill: "#2d6a4f", fontWeight: "700" }}>
          hopeful
        </text>
        <text className="ttx-w2" x="510" y="145"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "16px", fill: "#40916c" }}>
          loved
        </text>
        <text className="ttx-w3" x="475" y="215"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "14px", fill: "#52b788" }}>
          worthy
        </text>

        {/* Label */}
        <text x="400" y="470" className="ttx-label" fill="#2d6a4f" textAnchor="middle">After Therapy</text>

        {/* Floor flowers */}
        <g opacity="0.7">
          <circle cx="220" cy="418" r="5"  fill="#ffd166"/>
          <circle cx="230" cy="415" r="3"  fill="#ff6b9d"/>
          <circle cx="210" cy="415" r="3"  fill="#ff6b9d"/>
          <circle cx="220" cy="410" r="3"  fill="#ff6b9d"/>
          <line x1="220" y1="423" x2="220" y2="435" stroke="#52b788" strokeWidth="2"/>

          <circle cx="600" cy="418" r="5"  fill="#ffd166"/>
          <circle cx="610" cy="415" r="3"  fill="#e84393"/>
          <circle cx="590" cy="415" r="3"  fill="#e84393"/>
          <circle cx="600" cy="410" r="3"  fill="#e84393"/>
          <line x1="600" y1="423" x2="600" y2="435" stroke="#52b788" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  );
}
