/** Soft zen-themed SVG illustrations */

export function LotusIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lotus-bg" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#f0d4e0" />
          <stop offset="100%" stopColor="#dbbfcf" />
        </radialGradient>
        <radialGradient id="lotus-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5e0ea" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e8c8d8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="petal-pink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8a4b8" />
          <stop offset="100%" stopColor="#d68ea5" />
        </linearGradient>
        <linearGradient id="petal-light" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f2c8d6" />
          <stop offset="100%" stopColor="#e8b4c6" />
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

      {/* Background glow */}
      <circle cx="200" cy="120" r="100" fill="url(#lotus-glow)" />

      {/* Water ripples */}
      <ellipse cx="200" cy="175" rx="140" ry="8" fill="none" stroke="#c9adc4" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="200" cy="182" rx="100" ry="5" fill="none" stroke="#c9adc4" strokeWidth="0.6" opacity="0.3" />

      {/* Stem */}
      <path d="M200 170 Q198 145 200 110" stroke="url(#stem)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Leaves */}
      <ellipse cx="160" cy="165" rx="40" ry="10" fill="url(#leaf-green)" opacity="0.6" transform="rotate(-8 160 165)" />
      <ellipse cx="245" cy="163" rx="35" ry="9" fill="url(#leaf-green)" opacity="0.5" transform="rotate(5 245 163)" />

      {/* Back petals */}
      <path d="M200 110 Q175 75 155 90 Q165 105 200 110Z" fill="url(#petal-light)" opacity="0.7" />
      <path d="M200 110 Q225 75 245 90 Q235 105 200 110Z" fill="url(#petal-light)" opacity="0.7" />

      {/* Side petals */}
      <path d="M200 110 Q165 85 150 100 Q160 115 200 115Z" fill="url(#petal-pink)" opacity="0.8" />
      <path d="M200 110 Q235 85 250 100 Q240 115 200 115Z" fill="url(#petal-pink)" opacity="0.8" />

      {/* Front petals */}
      <path d="M200 110 Q180 90 170 105 Q178 118 200 118Z" fill="#e8a4b8" />
      <path d="M200 110 Q220 90 230 105 Q222 118 200 118Z" fill="#e8a4b8" />

      {/* Center */}
      <circle cx="200" cy="108" r="6" fill="#d68ea5" />
      <circle cx="200" cy="108" r="3" fill="#c47a8e" />

      {/* Floating petals */}
      <path d="M100 60 Q95 50 105 48 Q110 55 105 62Z" fill="#f2c8d6" opacity="0.5" transform="rotate(20 100 55)" />
      <path d="M310 45 Q305 35 315 33 Q320 40 315 47Z" fill="#f2c8d6" opacity="0.4" transform="rotate(-15 310 40)" />
      <path d="M80 100 Q75 92 83 90 Q87 95 83 102Z" fill="#e8b4c6" opacity="0.3" transform="rotate(30 80 96)" />
    </svg>
  );
}

export function MountainIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 180" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e0cdd8" />
          <stop offset="100%" stopColor="#d4b8cb" />
        </linearGradient>
        <linearGradient id="mtn-far" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c9adc4" />
          <stop offset="100%" stopColor="#b89ab4" />
        </linearGradient>
        <linearGradient id="mtn-mid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b89ab4" />
          <stop offset="100%" stopColor="#a88da6" />
        </linearGradient>
        <linearGradient id="mtn-near" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a88da6" />
          <stop offset="100%" stopColor="#967e96" />
        </linearGradient>
      </defs>

      {/* Sun/moon */}
      <circle cx="310" cy="50" r="28" fill="#f5e0ea" opacity="0.8" />
      <circle cx="310" cy="50" r="22" fill="#fdf5f8" opacity="0.6" />

      {/* Far mountains */}
      <path d="M0 140 L60 70 L120 120 L180 55 L240 100 L300 65 L360 90 L400 75 L400 180 L0 180Z" fill="url(#mtn-far)" opacity="0.6" />

      {/* Mid mountains */}
      <path d="M0 160 L80 95 L150 130 L220 80 L280 120 L340 100 L400 110 L400 180 L0 180Z" fill="url(#mtn-mid)" opacity="0.7" />

      {/* Near hills */}
      <path d="M0 170 L50 140 L130 155 L200 125 L270 150 L350 135 L400 145 L400 180 L0 180Z" fill="url(#mtn-near)" opacity="0.8" />

      {/* Birds */}
      <path d="M120 40 Q125 35 130 40" fill="none" stroke="#b89ab4" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M140 50 Q144 46 148 50" fill="none" stroke="#b89ab4" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M100 55 Q103 52 106 55" fill="none" stroke="#b89ab4" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function TimerIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="timer-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5e0ea" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e8c8d8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9adc4" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#d4b8cb" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c9adc4" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Glow */}
      <circle cx="200" cy="80" r="70" fill="url(#timer-glow)" />

      {/* Flowing waves */}
      <path d="M0 130 Q50 115 100 125 Q150 135 200 120 Q250 105 300 118 Q350 130 400 115" fill="none" stroke="url(#wave1)" strokeWidth="2" />
      <path d="M0 140 Q50 128 100 135 Q150 142 200 130 Q250 118 300 128 Q350 138 400 125" fill="none" stroke="url(#wave1)" strokeWidth="1.5" />
      <path d="M0 148 Q50 138 100 143 Q150 148 200 138 Q250 128 300 136 Q350 144 400 134" fill="none" stroke="url(#wave1)" strokeWidth="1" />

      {/* Zen circle (enso) */}
      <path
        d="M200 35 A45 45 0 1 1 195 35"
        fill="none"
        stroke="#c47a8e"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Small stones */}
      <ellipse cx="150" cy="118" rx="8" ry="5" fill="#c9adc4" opacity="0.5" />
      <ellipse cx="250" cy="122" rx="6" ry="4" fill="#b89ab4" opacity="0.4" />
      <ellipse cx="200" cy="115" rx="5" ry="3" fill="#d4b8cb" opacity="0.5" />
    </svg>
  );
}
