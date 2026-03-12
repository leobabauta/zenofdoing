import { BackButton } from '../../App';
import { day1Overview } from '../../data/dayContent';
import { LotusIllustration } from '../ui/Illustrations';

/** Renders a string with **bold** markers into React nodes. */
function renderBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-semibold text-[var(--color-text-primary)]">{part.slice(2, -2)}</strong>
      : part
  );
}

interface OverviewStepProps {
  onBack: () => void;
  onContinue: () => void;
}

export function OverviewStep({ onBack, onContinue }: OverviewStepProps) {
  const content = day1Overview;

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} />

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
        {content.paragraphs.map((item, i) =>
          typeof item === 'string' ? (
            <p key={i} className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {renderBold(item)}
            </p>
          ) : (
            <ul key={i} className="space-y-3 pl-1">
              {item.items.map((li, j) => (
                <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0">•</span>
                  <span>{renderBold(li)}</span>
                </li>
              ))}
            </ul>
          )
        )}
      </div>

      <p className="mt-8 text-lg font-semibold text-[var(--color-text-primary)]">
        {content.closing}
      </p>

      <div className="mt-8 pb-2">
        <button
          onClick={onContinue}
          className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Continue
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
