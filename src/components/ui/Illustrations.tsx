/** Soft zen-themed SVG illustrations */

export function HomeIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="home-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8dff5" />
          <stop offset="100%" stopColor="#d5c8eb" />
        </linearGradient>
        <radialGradient id="home-glow" cx="50%" cy="45%" r="45%">
          <stop offset="0%" stopColor="#f0e8fa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ddd0ef" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="figure-skin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5c4a1" />
          <stop offset="100%" stopColor="#e8b08a" />
        </linearGradient>
        <linearGradient id="figure-hair" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a3560" />
          <stop offset="100%" stopColor="#3a2850" />
        </linearGradient>
        <linearGradient id="figure-shirt" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7b5ea7" />
          <stop offset="100%" stopColor="#6a4f96" />
        </linearGradient>
        <linearGradient id="figure-wrap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8a840" />
          <stop offset="100%" stopColor="#d49530" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="220" rx="0" fill="url(#home-bg)" />
      <circle cx="200" cy="100" r="90" fill="url(#home-glow)" />

      {/* Decorative circle behind figure */}
      <circle cx="200" cy="95" r="72" fill="none" stroke="#c4b0e0" strokeWidth="1.5" opacity="0.4" />
      <circle cx="200" cy="95" r="80" fill="none" stroke="#c4b0e0" strokeWidth="0.8" opacity="0.25" />

      {/* Floating particles */}
      <circle cx="120" cy="55" r="2" fill="#e8a840" opacity="0.6" />
      <circle cx="280" cy="45" r="1.5" fill="#e8a840" opacity="0.5" />
      <circle cx="140" cy="150" r="1.8" fill="#c4b0e0" opacity="0.4" />
      <circle cx="260" cy="140" r="2.2" fill="#e8a840" opacity="0.4" />
      <circle cx="310" cy="80" r="1.5" fill="#c4b0e0" opacity="0.5" />
      <circle cx="95" cy="100" r="1.2" fill="#e8a840" opacity="0.3" />

      {/* Seated figure - cross-legged meditation pose */}
      {/* Body/torso */}
      <path d="M200 78 Q192 95 185 115 Q178 130 170 140 L230 140 Q222 130 215 115 Q208 95 200 78Z" fill="url(#figure-shirt)" />

      {/* Wrap/shawl flowing from shoulder */}
      <path d="M192 85 Q175 92 165 105 Q158 115 155 128 Q160 130 168 125 Q175 115 185 100 Q190 90 192 85Z" fill="url(#figure-wrap)" opacity="0.9" />
      <path d="M208 85 Q220 90 228 95 Q238 105 245 120 Q248 128 244 130 Q240 125 235 115 Q225 100 215 92 Q210 88 208 85Z" fill="url(#figure-wrap)" opacity="0.7" />

      {/* Neck */}
      <rect x="195" y="70" width="10" height="12" rx="4" fill="url(#figure-skin)" />

      {/* Head */}
      <ellipse cx="200" cy="60" rx="16" ry="18" fill="url(#figure-skin)" />

      {/* Hair */}
      <path d="M184 55 Q184 38 200 36 Q216 38 216 55 Q214 48 208 44 Q200 42 192 44 Q186 48 184 55Z" fill="url(#figure-hair)" />
      {/* Hair bun */}
      <ellipse cx="200" cy="37" rx="8" ry="7" fill="url(#figure-hair)" />

      {/* Closed eyes */}
      <path d="M192 58 Q194 60 196 58" fill="none" stroke="#5a4060" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M204 58 Q206 60 208 58" fill="none" stroke="#5a4060" strokeWidth="1.2" strokeLinecap="round" />

      {/* Gentle smile */}
      <path d="M196 65 Q200 67 204 65" fill="none" stroke="#c48a70" strokeWidth="0.8" strokeLinecap="round" />

      {/* Hands in lap (meditation mudra) */}
      <ellipse cx="193" cy="130" rx="8" ry="5" fill="url(#figure-skin)" transform="rotate(-10 193 130)" />
      <ellipse cx="207" cy="130" rx="8" ry="5" fill="url(#figure-skin)" transform="rotate(10 207 130)" />

      {/* Crossed legs */}
      <path d="M170 140 Q175 150 185 155 Q195 158 200 155 Q205 158 215 155 Q225 150 230 140" fill="url(#figure-shirt)" opacity="0.85" />

      {/* Small glow orb in hands */}
      <circle cx="200" cy="128" r="6" fill="#f0e8fa" opacity="0.6" />
      <circle cx="200" cy="128" r="3" fill="#e8dff5" opacity="0.8" />

      {/* Flowing lines around figure */}
      <path d="M130 170 Q165 160 200 165 Q235 170 270 162" fill="none" stroke="#c4b0e0" strokeWidth="1" opacity="0.3" />
      <path d="M140 180 Q170 173 200 176 Q230 179 260 174" fill="none" stroke="#c4b0e0" strokeWidth="0.8" opacity="0.2" />
    </svg>
  );
}

export function LotusIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lotus-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ede6f5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d8d0e8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="petal-main" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a88cc4" />
          <stop offset="100%" stopColor="#9478b4" />
        </linearGradient>
        <linearGradient id="petal-light" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c4b0e0" />
          <stop offset="100%" stopColor="#b8a0d4" />
        </linearGradient>
        <linearGradient id="leaf-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8c8a0" />
          <stop offset="100%" stopColor="#8cb888" />
        </linearGradient>
        <linearGradient id="stem" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8cb888" />
          <stop offset="100%" stopColor="#6da068" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="120" r="100" fill="url(#lotus-glow)" />
      <ellipse cx="200" cy="175" rx="140" ry="8" fill="none" stroke="#c4b0e0" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="200" cy="182" rx="100" ry="5" fill="none" stroke="#c4b0e0" strokeWidth="0.6" opacity="0.3" />
      <path d="M200 170 Q198 145 200 110" stroke="url(#stem)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="160" cy="165" rx="40" ry="10" fill="url(#leaf-green)" opacity="0.6" transform="rotate(-8 160 165)" />
      <ellipse cx="245" cy="163" rx="35" ry="9" fill="url(#leaf-green)" opacity="0.5" transform="rotate(5 245 163)" />
      <path d="M200 110 Q175 75 155 90 Q165 105 200 110Z" fill="url(#petal-light)" opacity="0.7" />
      <path d="M200 110 Q225 75 245 90 Q235 105 200 110Z" fill="url(#petal-light)" opacity="0.7" />
      <path d="M200 110 Q165 85 150 100 Q160 115 200 115Z" fill="url(#petal-main)" opacity="0.8" />
      <path d="M200 110 Q235 85 250 100 Q240 115 200 115Z" fill="url(#petal-main)" opacity="0.8" />
      <path d="M200 110 Q180 90 170 105 Q178 118 200 118Z" fill="#a88cc4" />
      <path d="M200 110 Q220 90 230 105 Q222 118 200 118Z" fill="#a88cc4" />
      <circle cx="200" cy="108" r="6" fill="#9478b4" />
      <circle cx="200" cy="108" r="3" fill="#8b6aae" />
      <path d="M100 60 Q95 50 105 48 Q110 55 105 62Z" fill="#c4b0e0" opacity="0.5" transform="rotate(20 100 55)" />
      <path d="M310 45 Q305 35 315 33 Q320 40 315 47Z" fill="#c4b0e0" opacity="0.4" transform="rotate(-15 310 40)" />
    </svg>
  );
}

export function MountainIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 180" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mtn-far" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c4b0e0" />
          <stop offset="100%" stopColor="#b8a0d4" />
        </linearGradient>
        <linearGradient id="mtn-mid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b8a0d4" />
          <stop offset="100%" stopColor="#a890c4" />
        </linearGradient>
        <linearGradient id="mtn-near" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a890c4" />
          <stop offset="100%" stopColor="#9880b4" />
        </linearGradient>
      </defs>
      <circle cx="310" cy="50" r="28" fill="#ede6f5" opacity="0.8" />
      <circle cx="310" cy="50" r="22" fill="#f7f5fd" opacity="0.6" />
      <path d="M0 140 L60 70 L120 120 L180 55 L240 100 L300 65 L360 90 L400 75 L400 180 L0 180Z" fill="url(#mtn-far)" opacity="0.6" />
      <path d="M0 160 L80 95 L150 130 L220 80 L280 120 L340 100 L400 110 L400 180 L0 180Z" fill="url(#mtn-mid)" opacity="0.7" />
      <path d="M0 170 L50 140 L130 155 L200 125 L270 150 L350 135 L400 145 L400 180 L0 180Z" fill="url(#mtn-near)" opacity="0.8" />
      <path d="M120 40 Q125 35 130 40" fill="none" stroke="#b8a0d4" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M140 50 Q144 46 148 50" fill="none" stroke="#b8a0d4" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M100 55 Q103 52 106 55" fill="none" stroke="#b8a0d4" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
