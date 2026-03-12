import { useState, useEffect, useRef, useCallback } from 'react';
import { BackButton } from '../../App';

type TimerStatus = 'idle' | 'running' | 'paused' | 'done';

function playBeep() {
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = 660;
  gain.gain.value = 0.3;
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
  osc.stop(ctx.currentTime + 0.8);
  setTimeout(() => {
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.frequency.value = 880;
    gain2.gain.value = 0.3;
    osc2.start();
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc2.stop(ctx.currentTime + 0.8);
  }, 300);
}

const confettiColors = [
  '#FF6B6B', '#FFE66D', '#4ECDC4', '#45B7D1', '#96CEB4',
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE',
];

interface ConfettiParticle {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  shape: 'square' | 'circle';
}

function generateConfetti(count: number): ConfettiParticle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    size: 4 + Math.random() * 6,
    delay: Math.random() * 1.5,
    duration: 2 + Math.random() * 2,
    shape: Math.random() > 0.5 ? 'square' : 'circle',
  }));
}

interface PracticeStepProps {
  day: number;
  title: string;
  hasAudio?: boolean;
  onBack: () => void;
  onContinue: () => void;
}

export function PracticeStep({ day, title, hasAudio, onBack, onContinue }: PracticeStepProps) {
  const [totalSeconds, setTotalSeconds] = useState(1500);
  const [remainingSeconds, setRemainingSeconds] = useState(1500);
  const [status, setStatus] = useState<TimerStatus>('idle');
  const [editingTime, setEditingTime] = useState(false);
  const [editValue, setEditValue] = useState('25');
  const [showCelebration, setShowCelebration] = useState(false);
  const [confettiParticles] = useState(() => generateConfetti(40));
  const editInputRef = useRef<HTMLInputElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const draggingRef = useRef(false);

  const triggerCelebration = useCallback(() => {
    playBeep();
    setShowCelebration(true);
  }, []);

  useEffect(() => {
    if (status !== 'running') return;
    const id = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setStatus('done');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [status]);

  useEffect(() => {
    if (status === 'done' && !showCelebration) triggerCelebration();
  }, [status, showCelebration, triggerCelebration]);

  useEffect(() => {
    if (editingTime && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingTime]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const commitEdit = useCallback(() => {
    const mins = parseInt(editValue, 10);
    if (!isNaN(mins) && mins > 0 && mins <= 120) {
      const newTotal = mins * 60;
      setTotalSeconds(newTotal);
      setRemainingSeconds(newTotal);
      setStatus('idle');
    }
    setEditingTime(false);
  }, [editValue]);

  const handleStartPauseResume = () => {
    if (status === 'idle' || status === 'done') {
      if (status === 'done') {
        setRemainingSeconds(totalSeconds);
        setShowCelebration(false);
      }
      setStatus('running');
    } else if (status === 'running') {
      setStatus('paused');
    } else if (status === 'paused') {
      setStatus('running');
    }
  };

  const handleComplete = () => {
    setStatus('done');
    triggerCelebration();
  };

  const handleReset = () => {
    setRemainingSeconds(totalSeconds);
    setStatus('idle');
    setShowCelebration(false);
  };

  const angleToMinutes = (angle: number): number => {
    let degrees = angle + 90;
    if (degrees < 0) degrees += 360;
    const mins = Math.round(degrees / 6);
    return Math.max(1, Math.min(60, mins === 0 ? 60 : mins));
  };

  const handlePointerDown = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    if (status !== 'idle') return;
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  }, [status]);

  const handlePointerMove = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    if (!draggingRef.current || status !== 'idle' || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const mins = angleToMinutes(angle);
    const newTotal = mins * 60;
    setTotalSeconds(newTotal);
    setRemainingSeconds(newTotal);
  }, [status]);

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  const buttonLabel = status === 'running' ? 'Pause' : status === 'paused' ? 'Resume' : status === 'done' ? 'Restart' : 'Start Session';

  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const innerRadius = 64;
  const tickRadius = 84;
  const tickOuter = tickRadius + 10;
  const tickInnerMajor = tickRadius - 5;
  const tickInnerMinor = tickRadius;
  const needleLength = innerRadius + 14;

  const accentDark = '#c47a8e';
  const accentLight = '#f0c4d0';

  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const inner = isMajor ? tickInnerMajor : tickInnerMinor;
    ticks.push(
      <line
        key={i}
        x1={cx + inner * Math.cos(rad)}
        y1={cy + inner * Math.sin(rad)}
        x2={cx + tickOuter * Math.cos(rad)}
        y2={cy + tickOuter * Math.sin(rad)}
        stroke="var(--color-text-muted)"
        strokeWidth={isMajor ? 2 : 1}
        opacity={isMajor ? 0.5 : 0.25}
      />
    );
  }

  const remainingMinutes = remainingSeconds / 60;
  const handAngleDeg = -90 + remainingMinutes * 6;
  const handRad = (handAngleDeg * Math.PI) / 180;

  const pieWedge = (endAngleDeg: number, r: number) => {
    if (endAngleDeg <= -90) return '';
    const sweepDeg = endAngleDeg - (-90);
    if (sweepDeg <= 0) return '';
    const largeArc = sweepDeg > 180 ? 1 : 0;
    const endR = (endAngleDeg * Math.PI) / 180;
    return `M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 ${largeArc} 1 ${cx + r * Math.cos(endR)} ${cy + r * Math.sin(endR)} Z`;
  };

  const darkPiePath = pieWedge(handAngleDeg, innerRadius);
  const svgCursor = status === 'idle' ? (draggingRef.current ? 'grabbing' : 'grab') : 'default';

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} />
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Day {day} · Practice
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        {title}
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      {hasAudio && (
        <div className="mb-6 p-4 rounded-xl bg-[var(--color-card-inner)] border border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)] mb-2">Audio guide</p>
          <p className="text-sm text-[var(--color-text-secondary)] italic">Coming soon — audio will be available here.</p>
        </div>
      )}

      {showCelebration ? (
        <div className="flex flex-col items-center py-10 gap-5">
          <div className="relative overflow-hidden" style={{ width: size, height: size }}>
            <style>{`
              @keyframes confetti-fall {
                0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(${size + 20}px) rotate(720deg); opacity: 0; }
              }
            `}</style>
            {confettiParticles.map((p) => (
              <div
                key={p.id}
                style={{
                  position: 'absolute',
                  left: `${p.x}%`,
                  top: 0,
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  borderRadius: p.shape === 'circle' ? '50%' : '2px',
                  animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
                }}
              />
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold text-[var(--color-text-primary)]">
                Well done.
              </span>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] text-center max-w-xs">
                You just practiced doing with ease. Notice how you feel right now.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={onContinue}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: accentDark }}
            >
              Continue to Reflect
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-[var(--color-text-muted)] border border-[var(--color-border)] hover:bg-[var(--color-accent-tint)] transition-colors"
            >
              Practice Again
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center py-6 gap-5">
          {status === 'idle' && (
            <p className="text-sm text-[var(--color-text-secondary)] text-center max-w-sm">
              Choose a task, set your duration, and practice doing it with ease.
              Drag the hand or click the time to adjust.
            </p>
          )}
          {status === 'running' && (
            <p className="text-sm text-[var(--color-text-secondary)] text-center max-w-sm">
              Be with the task. When you notice tension or rushing, soften and return to ease.
            </p>
          )}
          {status === 'paused' && (
            <p className="text-sm text-[var(--color-text-secondary)] text-center max-w-sm">
              Paused. Take a breath. When you're ready, continue.
            </p>
          )}

          <svg
            ref={svgRef}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            style={{ cursor: svgCursor, touchAction: 'none' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <circle cx={cx} cy={cy} r={innerRadius} fill={accentLight} opacity={0.4} />
            {darkPiePath && <path d={darkPiePath} fill={accentDark} opacity={0.45} />}
            {ticks}
            <line
              x1={cx} y1={cy}
              x2={cx + needleLength * Math.cos(handRad)}
              y2={cy + needleLength * Math.sin(handRad)}
              stroke={accentDark} strokeWidth={7} strokeLinecap="round"
            />
            <circle cx={cx} cy={cy} r={8} fill="var(--color-card)" stroke={accentLight} strokeWidth={1} />
          </svg>

          {editingTime ? (
            <div className="flex items-center gap-1">
              <input
                ref={editInputRef}
                type="number"
                min={1} max={120}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={commitEdit}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') commitEdit();
                  if (e.key === 'Escape') setEditingTime(false);
                }}
                className="w-14 text-center text-lg font-mono bg-transparent border-b-2 border-[var(--color-border)] text-[var(--color-text-muted)] outline-none"
              />
              <span className="text-xs text-[var(--color-text-muted)]">min</span>
            </div>
          ) : (
            <button
              onClick={() => {
                if (status === 'idle') {
                  setEditValue(String(Math.floor(totalSeconds / 60)));
                  setEditingTime(true);
                }
              }}
              className={`text-xl font-light tracking-widest text-[var(--color-text-muted)] ${
                status === 'idle' ? 'cursor-pointer hover:opacity-70' : 'cursor-default'
              }`}
              title={status === 'idle' ? 'Click to edit duration' : undefined}
            >
              {formatTime(remainingSeconds)}
            </button>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={handleStartPauseResume}
              className="px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: accentDark }}
            >
              {buttonLabel}
            </button>
            {(status === 'running' || status === 'paused') && (
              <button
                onClick={handleComplete}
                className="px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white transition-colors bg-emerald-500 hover:bg-emerald-600"
              >
                Complete
              </button>
            )}
            {status === 'paused' && (
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-[var(--color-text-muted)] border border-[var(--color-border)] hover:bg-[var(--color-accent-tint)] transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
