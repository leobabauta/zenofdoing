import { useState } from 'react';
import type { JournalEntry } from '../../App';
import { BackButton } from '../../App';

const PROMPTS = [
  'What did you notice about ease during your practice? Were there moments where it came naturally?',
  'What got in the way? What kinds of tension, resistance, or rushing did you notice arising?',
  'What did you learn about yourself or your relationship with doing? What would you like to carry forward?',
];

interface ReflectionProps {
  onBack: () => void;
  onSave: (entry: JournalEntry) => void;
  onContinue: () => void;
}

export function Reflection({ onBack, onSave, onContinue }: ReflectionProps) {
  const [responses, setResponses] = useState(['', '', '']);
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
      reflections: PROMPTS.map((prompt, i) => ({
        prompt,
        response: responses[i],
      })),
    };
    onSave(entry);
    setSaved(true);
  };

  if (saved) {
    return (
      <div className="px-10 py-10">
        <BackButton onClick={onBack} />
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
          Reflection Saved
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
          Your Reflections
        </h1>
        <div className="h-px bg-[var(--color-border)] my-7" />

        <div className="space-y-6">
          {PROMPTS.map((prompt, i) => (
            <div key={i}>
              <p className="text-sm font-medium text-[var(--color-text-primary)] mb-2">
                {prompt}
              </p>
              {responses[i].trim() ? (
                <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] bg-[var(--color-card-inner)] rounded-xl px-4 py-3">
                  {responses[i]}
                </p>
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
            Continue to Practice 2
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
      <BackButton onClick={onBack} />
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Reflect
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        How Was Your Practice?
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-8">
        Take a few minutes to reflect on what you just experienced. There are no right
        answers — just notice what's true for you.
      </p>

      <div className="space-y-6">
        {PROMPTS.map((prompt, i) => (
          <div key={i}>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
              {prompt}
            </label>
            <textarea
              value={responses[i]}
              onChange={(e) => updateResponse(i, e.target.value)}
              rows={4}
              placeholder="Write your thoughts here..."
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card-inner)] px-4 py-3 text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none resize-y transition-colors"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 pb-2">
        <button
          onClick={handleSave}
          disabled={!canSave}
          className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Save Reflection
        </button>
      </div>
    </div>
  );
}
