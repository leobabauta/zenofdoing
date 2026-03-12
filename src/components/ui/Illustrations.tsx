/** Soft zen-themed SVG illustrations */

export function HomeIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="home-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0d6f0" />
          <stop offset="50%" stopColor="#d8cce8" />
          <stop offset="100%" stopColor="#e8d6e0" />
        </linearGradient>
        <radialGradient id="orb-main" cx="40%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#c4a8e8" />
          <stop offset="40%" stopColor="#a888d0" />
          <stop offset="100%" stopColor="#8068b0" />
        </radialGradient>
        <radialGradient id="orb-small1" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#e0c8f0" />
          <stop offset="100%" stopColor="#b898d8" />
        </radialGradient>
        <radialGradient id="orb-small2" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#f0d8e8" />
          <stop offset="100%" stopColor="#d0a8c4" />
        </radialGradient>
        <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0e8fa" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#d8d0e8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4b0e0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a090c8" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="swirl" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4c0e8" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#c0a8d8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#d4c0e8" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="200" fill="url(#home-bg)" />

      {/* Background glow */}
      <circle cx="200" cy="95" r="100" fill="url(#orb-glow)" />

      {/* Flowing curves behind orbs */}
      <path d="M40 160 Q100 120 160 140 Q220 160 280 130 Q340 100 400 120" fill="none" stroke="url(#swirl)" strokeWidth="2.5" />
      <path d="M0 140 Q60 110 130 125 Q200 140 270 110 Q340 80 400 100" fill="none" stroke="url(#swirl)" strokeWidth="1.8" />
      <path d="M0 175 Q80 155 160 165 Q240 175 320 155 Q380 140 400 150" fill="none" stroke="url(#swirl)" strokeWidth="1.2" />

      {/* Orbital ring behind main sphere */}
      <ellipse cx="200" cy="95" rx="90" ry="30" fill="none" stroke="url(#ring1)" strokeWidth="1.5" transform="rotate(-15 200 95)" />

      {/* Main sphere */}
      <circle cx="200" cy="90" r="52" fill="url(#orb-main)" />
      {/* Surface bands on main sphere */}
      <path d="M155 78 Q175 72 200 74 Q225 76 245 82" fill="none" stroke="#b898d8" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <path d="M160 92 Q180 88 200 89 Q220 90 240 95" fill="none" stroke="#d0b8e8" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
      <path d="M165 105 Q185 100 200 101 Q220 103 238 108" fill="none" stroke="#c0a8d8" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
      {/* Highlight on sphere */}
      <circle cx="182" cy="72" r="12" fill="white" opacity="0.15" />
      <circle cx="178" cy="68" r="5" fill="white" opacity="0.2" />

      {/* Small sphere - top right */}
      <circle cx="310" cy="55" r="22" fill="url(#orb-small1)" />
      <circle cx="303" cy="48" r="5" fill="white" opacity="0.15" />
      <path d="M293 52 Q303 49 318 51" fill="none" stroke="#c8b0e0" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

      {/* Small sphere - bottom left */}
      <circle cx="90" cy="130" r="18" fill="url(#orb-small2)" />
      <circle cx="84" cy="124" r="4" fill="white" opacity="0.15" />
      <path d="M76 128 Q86 125 100 127" fill="none" stroke="#d8b8d0" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />

      {/* Tiny accent spheres */}
      <circle cx="340" cy="140" r="8" fill="#d8c0e8" opacity="0.5" />
      <circle cx="60" cy="60" r="6" fill="#e0d0f0" opacity="0.4" />
      <circle cx="140" cy="45" r="4" fill="#c8b0d8" opacity="0.35" />
      <circle cx="280" cy="150" r="5" fill="#e0c8e0" opacity="0.4" />

      {/* Sparkle dots */}
      <circle cx="155" cy="55" r="1.5" fill="white" opacity="0.6" />
      <circle cx="260" cy="65" r="1.5" fill="white" opacity="0.5" />
      <circle cx="330" cy="100" r="1.2" fill="white" opacity="0.4" />
      <circle cx="110" cy="95" r="1.2" fill="white" opacity="0.5" />
      <circle cx="240" cy="155" r="1" fill="white" opacity="0.4" />

      {/* Second orbital ring in front */}
      <ellipse cx="200" cy="95" rx="75" ry="25" fill="none" stroke="url(#ring1)" strokeWidth="1" transform="rotate(20 200 95)" />
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
