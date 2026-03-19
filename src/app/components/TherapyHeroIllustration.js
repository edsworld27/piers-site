export default function TherapyHeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", display: "block" }}
      aria-label="An armchair with warm sunlight"
      role="img"
    >
      {/* ── Sun rays ── */}
      <g stroke="rgba(196,148,50,0.55)" strokeWidth="1.5" strokeLinecap="round">
        <line x1="200" y1="42" x2="200" y2="20" />
        <line x1="245" y1="55" x2="258" y2="36" />
        <line x1="278" y1="88" x2="296" y2="75" />
        <line x1="290" y1="132" x2="312" y2="128" />
        <line x1="155" y1="55" x2="142" y2="36" />
        <line x1="122" y1="88" x2="104" y2="75" />
        <line x1="110" y1="132" x2="88"  y2="128" />
      </g>

      {/* ── Sun ── */}
      <circle cx="200" cy="90" r="38"
              stroke="rgba(196,148,50,0.65)" strokeWidth="1.8"
              fill="rgba(196,148,50,0.10)" />
      <circle cx="200" cy="90" r="26"
              stroke="rgba(196,148,50,0.40)" strokeWidth="1.2"
              fill="rgba(196,148,50,0.07)" />

      {/* ── Chair legs ── */}
      <line x1="128" y1="310" x2="118" y2="375" stroke="rgba(140,90,40,0.75)" strokeWidth="3" strokeLinecap="round"/>
      <line x1="272" y1="310" x2="282" y2="375" stroke="rgba(140,90,40,0.75)" strokeWidth="3" strokeLinecap="round"/>
      <line x1="158" y1="310" x2="155" y2="375" stroke="rgba(140,90,40,0.60)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="242" y1="310" x2="245" y2="375" stroke="rgba(140,90,40,0.60)" strokeWidth="2" strokeLinecap="round"/>

      {/* ── Ground line ── */}
      <line x1="90" y1="377" x2="310" y2="377" stroke="rgba(140,90,40,0.20)" strokeWidth="1.2" strokeLinecap="round"/>

      {/* ── Chair seat ── */}
      <path d="M 112 295 Q 200 282 288 295 L 284 318 Q 200 308 116 318 Z"
            stroke="rgba(140,90,40,0.70)" strokeWidth="1.8"
            fill="rgba(180,130,70,0.12)" strokeLinejoin="round"/>

      {/* ── Chair back ── */}
      <path d="M 152 200 Q 148 250 150 295 L 250 295 Q 252 250 248 200
               Q 248 192 240 192 L 160 192 Q 152 192 152 200 Z"
            stroke="rgba(140,90,40,0.70)" strokeWidth="1.8"
            fill="rgba(180,130,70,0.10)" strokeLinejoin="round"/>

      {/* Back cushion detail line */}
      <path d="M 163 210 Q 163 250 164 288"
            stroke="rgba(140,90,40,0.25)" strokeWidth="1.2"
            fill="none" strokeLinecap="round"/>

      {/* ── Armrests ── */}
      <path d="M 112 295 Q 110 270 114 240 L 152 240 L 150 295"
            stroke="rgba(140,90,40,0.65)" strokeWidth="1.8"
            fill="rgba(180,130,70,0.08)" strokeLinejoin="round"/>
      <path d="M 288 295 Q 290 270 286 240 L 248 240 L 250 295"
            stroke="rgba(140,90,40,0.65)" strokeWidth="1.8"
            fill="rgba(180,130,70,0.08)" strokeLinejoin="round"/>

      {/* Armrest top caps */}
      <path d="M 108 238 Q 130 232 154 238"
            stroke="rgba(140,90,40,0.65)" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
      <path d="M 246 238 Q 270 232 292 238"
            stroke="rgba(140,90,40,0.65)" strokeWidth="2.5"
            fill="none" strokeLinecap="round"/>
    </svg>
  );
}
