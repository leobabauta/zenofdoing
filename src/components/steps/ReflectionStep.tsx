import { useState } from 'react';
import { BackButton } from '../../App';
import { getReflectionContent } from '../../data/dayContent';
import type { ReflectionPrompt } from '../../data/dayContent';
import { StarRating } from '../ui/StarRating';
import type { JournalEntry } from '../../App';

function normalizePrompt(p: string | ReflectionPrompt): ReflectionPrompt {
  return typeof p === 'string' ? { text: p, type: 'text' } : p;
}

interface ReflectionStepProps {
  day: number;
  title?: string;
  onBack: () => void;
  backLabel?: string;
  onSave: (entry: JournalEntry) => void;
  onContinue: () => void;
}

export function ReflectionStep({ day, title, onBack, backLabel, onSave, onContinue }: ReflectionStepProps) {
  const content = getReflectionContent(day);
  const prompts = content.prompts.map(normalizePrompt);
  const [responses, setResponses] = useState(() => prompts.map(() => ''));
  const [saved, setSaved] = useState(false);

  const updateResponse = (index: number, value: string) => {
    setResponses((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const canSave = responses.some((r) => r.trim().length > 0);

  const handleSave = () => {
    const entry: JournalEntry = {
      date: new Date().toISOString(),
      reflections: prompts.map((prompt, i) => ({
        prompt: prompt.text,
        response: responses[i],
      })),
    };
    onSave(entry);
    setSaved(true);
  };

  if (saved) {
    return (
      <div className="px-10 py-10">
        <BackButton onClick={onBack} label={backLabel} />
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
          Day {day} · Reflection Saved
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
          Your Reflections
        </h1>
        <div className="h-px bg-[var(--color-border)] my-7" />

        <div className="space-y-6">
          {prompts.map((prompt, i) => (
            <div key={i}>
              <p className="text-sm font-medium text-[var(--color-text-primary)] mb-2">
                {prompt.text}
              </p>
              {responses[i].trim() ? (
                prompt.type === 'stars' ? (
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill={s <= Number(responses[i]) ? '#d4a017' : 'none'}
                        stroke={s <= Number(responses[i]) ? '#d4a017' : 'var(--color-text-muted)'}
                        strokeWidth={1.5}
                      >
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                      </svg>
                    ))}
                  </div>
                ) : (
                  <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] bg-[var(--color-card-inner)] rounded-xl px-4 py-3">
                    {responses[i]}
                  </p>
                )
              ) : (
                <p className="text-sm italic text-[var(--color-text-muted)]">
                  No response
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[var(--color-text-muted)]">
          This reflection has been saved to your journal.
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

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} label={backLabel} />
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Day {day} · Practice
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        {title || 'How Was Your Practice?'}
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      {content.intro && (
        <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-6">
          {content.intro}
        </p>
      )}

      {content.blockersList && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {content.blockersList.map((blocker, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-sm bg-[var(--color-card-inner)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
              >
                {blocker}
              </span>
            ))}
          </div>
          {content.blockersNote && (
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              {content.blockersNote}
            </p>
          )}
        </div>
      )}

      {!content.intro && (
        <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-8">
          Take a few minutes to reflect on what you just experienced. There are no right
          answers — just notice what's true for you.
        </p>
      )}

      <div className="space-y-6">
        {prompts.map((prompt, i) => (
          <div key={i}>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
              {prompt.text}
            </label>
            {prompt.type === 'stars' ? (
              <StarRating
                value={Number(responses[i]) || 0}
                onChange={(val) => updateResponse(i, String(val))}
              />
            ) : (
              <textarea
                value={responses[i]}
                onChange={(e) => updateResponse(i, e.target.value)}
                rows={4}
                placeholder="Write your thoughts here..."
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card-inner)] px-4 py-3 text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none resize-y transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pb-2">
        <button
          onClick={handleSave}
          disabled={!canSave}
          className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Save reflection to journal
        </button>
      </div>
    </div>
  );
}
