import { BackButton } from '../../App';
import { CompletionCheckbox } from '../ui/CompletionCheckbox';
import { getLessonContent } from '../../data/dayContent';

interface LessonStepProps {
  day: number;
  onBack: () => void;
  onComplete: () => void;
  onContinue: () => void;
}

export function LessonStep({ day, onBack, onComplete, onContinue }: LessonStepProps) {
  const content = getLessonContent(day);

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} />

      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        {content.subtitle}
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        {content.title}
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      <div className="space-y-5">
        {content.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <CompletionCheckbox completed={false} onComplete={onComplete} continueLabel="Continue" onContinue={onContinue} />
      </div>
    </div>
  );
}
