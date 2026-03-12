import { COURSE } from '../../data/courseDefinition';
import { isDayComplete, getDayProgress } from '../../lib/courseProgress';

interface ContentsScreenProps {
  completedSteps: Set<string>;
  availableDays: number;
  currentStepId: string;
  onSelectStep: (stepId: string) => void;
}

export function ContentsScreen({ completedSteps, availableDays, currentStepId, onSelectStep }: ContentsScreenProps) {
  return (
    <div className="px-8 py-10 flex-1 overflow-y-auto">
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight mb-1">
        Contents
      </h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-8">
        Your 6-day journey
      </p>

      <div className="space-y-4">
        {COURSE.map((day) => {
          const available = day.day <= availableDays;
          const complete = isDayComplete(day.day, completedSteps);
          const progress = getDayProgress(day.day, completedSteps);

          return (
            <div key={day.day} className="rounded-xl border border-[var(--color-border)] overflow-hidden">
              {/* Day header */}
              <div className={`px-4 py-3 flex items-center gap-3 ${
                available ? 'bg-[var(--color-card-inner)]' : 'bg-[var(--color-card-inner)] opacity-50'
              }`}>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                  complete
                    ? 'bg-emerald-500 text-white'
                    : available
                      ? 'bg-[var(--color-accent)] text-white'
                      : 'bg-[var(--color-border)] text-[var(--color-text-muted)]'
                }`}>
                  {complete ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : available ? (
                    day.day
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    Day {day.day}: {day.title}
                  </p>
                  {available && (
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {complete ? 'Complete' : `${progress.completed}/${progress.total} steps`}
                    </p>
                  )}
                  {!available && (
                    <p className="text-xs text-[var(--color-text-muted)]">Unlocks later</p>
                  )}
                </div>
              </div>

              {/* Steps list (only for available days) */}
              {available && (
                <div className="divide-y divide-[var(--color-border)]">
                  {day.steps.map((step) => {
                    const isCompleted = completedSteps.has(step.id);
                    const isCurrent = step.id === currentStepId;

                    return (
                      <button
                        key={step.id}
                        onClick={() => onSelectStep(step.id)}
                        className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${
                          isCurrent
                            ? 'bg-[var(--color-accent-tint)]'
                            : 'hover:bg-[var(--color-card-inner)]'
                        }`}
                      >
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          isCompleted
                            ? 'bg-emerald-500'
                            : isCurrent
                              ? 'border-2 border-[var(--color-accent)]'
                              : 'border border-[var(--color-border)]'
                        }`}>
                          {isCompleted && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>

                        <span className={`text-sm ${
                          isCurrent
                            ? 'font-medium text-[var(--color-accent)]'
                            : isCompleted
                              ? 'text-[var(--color-text-secondary)]'
                              : 'text-[var(--color-text-primary)]'
                        }`}>
                          {step.label}
                        </span>

                        {isCurrent && (
                          <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                            Current
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
