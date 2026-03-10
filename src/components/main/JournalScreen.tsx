import type { JournalEntry } from '../../App';

interface JournalScreenProps {
  entries: JournalEntry[];
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

export function JournalScreen({ entries }: JournalScreenProps) {
  return (
    <div className="px-8 py-10 flex-1 overflow-y-auto">
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight mb-1">
        Journal
      </h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-8">
        Your reflections over time
      </p>

      {entries.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <svg className="w-10 h-10 text-[var(--color-text-muted)] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <p className="text-sm text-[var(--color-text-muted)]">
            No reflections yet. Complete a practice to add your first entry.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {[...entries].reverse().map((entry, idx) => (
            <details
              key={idx}
              className="rounded-xl bg-[var(--color-card-inner)] border border-[var(--color-border)] overflow-hidden group"
            >
              <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer list-none hover:bg-[var(--color-accent-tint)] transition-colors">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold flex items-center justify-center">
                  {entries.length - idx}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">
                    Practice Reflection
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {formatDate(entry.date)}
                  </p>
                </div>
                <svg className="w-4 h-4 text-[var(--color-text-muted)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 space-y-4">
                {entry.reflections.map((r, ri) => (
                  <div key={ri}>
                    <p className="text-xs font-medium text-[var(--color-text-muted)] mb-1">
                      {r.prompt}
                    </p>
                    {r.response.trim() ? (
                      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {r.response}
                      </p>
                    ) : (
                      <p className="text-xs italic text-[var(--color-text-muted)]">No response</p>
                    )}
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
