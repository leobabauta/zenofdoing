import { BackButton } from '../../App';
import { CompletionCheckbox } from '../ui/CompletionCheckbox';
import { getPracticeInstructionsContent } from '../../data/dayContent';

interface PracticeInstructionsStepProps {
  day: number;
  onBack: () => void;
  backLabel?: string;
  onComplete: () => void;
  onContinue: () => void;
}

export function PracticeInstructionsStep({ day, onBack, backLabel, onComplete, onContinue }: PracticeInstructionsStepProps) {
  const content = getPracticeInstructionsContent(day);

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} label={backLabel} />

      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Day {day} · Practice Instructions
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        {content.title}
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-6">
        {content.intro}
      </p>

      <div className="space-y-4 mb-6">
        {content.steps.map((step, i) => (
          <div key={i} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent-tint)] text-[var(--color-accent)] text-xs font-semibold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {step}
            </p>
          </div>
        ))}
      </div>

      {content.closingNote && (
        <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-6">
          {content.closingNote}
        </p>
      )}

      <div className="mt-10">
        <CompletionCheckbox completed={false} onComplete={onComplete} continueLabel="Continue" onContinue={onContinue} buttonLabel="Let's practice" autoContinue />
      </div>
    </div>
  );
}
