import { BackButton } from '../../App';
import { day1Overview } from '../../data/dayContent';
import { LotusIllustration } from '../ui/Illustrations';
import { renderRichText } from '../../lib/renderRichText';
import { CompletionCheckbox } from '../ui/CompletionCheckbox';

interface OverviewStepProps {
  onBack: () => void;
  backLabel?: string;
  onComplete: () => void;
  onContinue: () => void;
}

export function OverviewStep({ onBack, backLabel, onComplete, onContinue }: OverviewStepProps) {
  const content = day1Overview;

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} label={backLabel} />

      <div className="flex justify-center mb-6">
        <LotusIllustration className="w-48" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Overview
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        {content.title}
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      <div className="space-y-5">
        {renderRichText(content.paragraphs)}
      </div>

      <p className="mt-8 text-lg font-semibold text-[var(--color-text-primary)]">
        {content.closing}
      </p>

      <div className="mt-8 pb-2">
        <CompletionCheckbox completed={false} onComplete={onComplete} continueLabel="Continue" onContinue={onContinue} />
      </div>
    </div>
  );
}
