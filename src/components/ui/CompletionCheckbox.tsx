import { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface Particle {
  id: number;
  color: string;
  angle: number;
  speed: number;
  size: number;
}

const CONFETTI_COLORS = ['#f43f5e', '#eab308', '#22c55e', '#3b82f6', '#a855f7', '#f97316'];

interface CompletionCheckboxProps {
  completed: boolean;
  onComplete: () => void;
  continueLabel: string;
  onContinue: () => void;
  buttonLabel?: string;
  autoContinue?: boolean;
}

export function CompletionCheckbox({ completed: initialCompleted, onComplete, continueLabel, onContinue, buttonLabel, autoContinue }: CompletionCheckboxProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [pendingCheck, setPendingCheck] = useState(false);
  const [done, setDone] = useState(initialCompleted);
  const nextId = useRef(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  const spawnConfetti = useCallback(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    const newParticles: Particle[] = [];
    const count = 12 + Math.floor(Math.random() * 6);
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: nextId.current++,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        angle: (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5,
        speed: 30 + Math.random() * 20,
        size: 4 + Math.random() * 3,
      });
    }
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1200);
  }, []);

  const handleMarkComplete = () => {
    setPendingCheck(true);
    setTimeout(spawnConfetti, 80);
    onComplete();
    setTimeout(() => {
      setPendingCheck(false);
      setDone(true);
      if (autoContinue) {
        setTimeout(onContinue, 1000);
      }
    }, 1500);
  };

  if (done || pendingCheck) {
    return (
      <>
        <div className="flex items-center gap-4">
          <button
            ref={btnRef}
            className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          {done && !autoContinue && (
            <button
              onClick={onContinue}
              className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              {continueLabel}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Confetti particles */}
        {particles.length > 0 && createPortal(
          <div className="fixed inset-0 pointer-events-none z-[200]" aria-hidden>
            {particles.map((p) => {
              const burstX = Math.cos(p.angle) * p.speed;
              const burstY = Math.sin(p.angle) * p.speed;
              return (
                <span
                  key={p.id}
                  className="absolute rounded-full"
                  style={{
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    left: origin.x,
                    top: origin.y,
                    animation: 'confetti-burst 1.1s ease-out forwards',
                    '--burst-x': `${burstX}px`,
                    '--burst-y': `${burstY}px`,
                    '--fall-y': `${burstY + 120 + Math.random() * 60}px`,
                  } as React.CSSProperties}
                />
              );
            })}
          </div>,
          document.body
        )}
      </>
    );
  }

  return (
    <button
      ref={btnRef}
      onClick={handleMarkComplete}
      className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
    >
      {buttonLabel || 'Mark as complete'}
    </button>
  );
}
