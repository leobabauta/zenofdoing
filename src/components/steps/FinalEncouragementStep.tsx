import { BackButton } from '../../App';
import { day6FinalEncouragement } from '../../data/dayContent';
import { DayIllustration } from '../ui/Illustrations';

interface FinalEncouragementStepProps {
  onBack: () => void;
  backLabel?: string;
  onContinue: () => void;
}

export function FinalEncouragementStep({ onBack, backLabel, onContinue }: FinalEncouragementStepProps) {
  const content = day6FinalEncouragement;

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} label={backLabel} />

      <div className="flex justify-center mb-6">
        <DayIllustration day={6} className="w-48 rounded-xl" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Day 6 · Congratulations
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        {content.title}
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
        {content.message}
      </p>

      <div className="mt-10 pb-2">
        <button
          onClick={onContinue}
          className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Back to Home
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
