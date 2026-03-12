import { LotusIllustration } from '../ui/Illustrations';
import { COURSE, getDayDef } from '../../data/courseDefinition';
import { getDayProgress, getFirstIncompleteStep, isDayComplete } from '../../lib/courseProgress';

interface HomeScreenProps {
  currentDay: number;
  availableDays: number;
  completedSteps: Set<string>;
  onNavigateToStep: (stepId: string) => void;
}

export function HomeScreen({ currentDay, availableDays, completedSteps, onNavigateToStep }: HomeScreenProps) {
  const dayDef = getDayDef(currentDay);
  const progress = getDayProgress(currentDay, completedSteps);
  const nextStep = getFirstIncompleteStep(currentDay, completedSteps);
  const dayComplete = isDayComplete(currentDay, completedSteps);

  // Find next locked day for teaser
  const nextLockedDay = availableDays < 6 ? availableDays + 1 : null;

  return (
    <div className="px-8 py-10 flex-1 overflow-y-auto">
      <p className="text-sm text-[var(--color-text-muted)] mb-1">Welcome back</p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
        Zen of Doing
      </h1>

      <div className="mt-8 space-y-4">
        {/* Current Day Card */}
        <button
          onClick={() => {
            if (nextStep) onNavigateToStep(nextStep);
            else if (dayDef) onNavigateToStep(dayDef.steps[0].id);
          }}
          className="w-full text-left rounded-2xl overflow-hidden bg-[var(--color-card-inner)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group"
        >
          <div className="overflow-hidden">
            <LotusIllustration className="w-full" />
          </div>
          <div className="px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
              Day {currentDay} of 6
            </p>
            <p className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {dayDef?.title}
            </p>

            {/* Progress bar */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-[var(--color-border)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[var(--color-accent)] transition-all"
                  style={{ width: `${progress.total > 0 ? (progress.completed / progress.total) * 100 : 0}%` }}
                />
              </div>
              <span className="text-xs text-[var(--color-text-muted)]">
                {progress.completed}/{progress.total}
              </span>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] mt-2">
              {dayComplete ? 'Completed' : nextStep ? 'Continue where you left off' : 'Start today\'s practice'}
            </p>
          </div>
        </button>

        {/* Day overview dots */}
        <div className="flex justify-center gap-2 py-2">
          {COURSE.map((d) => {
            const available = d.day <= availableDays;
            const complete = isDayComplete(d.day, completedSteps);
            const isCurrent = d.day === currentDay;
            return (
              <div
                key={d.day}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  complete
                    ? 'bg-emerald-500'
                    : isCurrent
                      ? 'bg-[var(--color-accent)]'
                      : available
                        ? 'bg-[var(--color-border)]'
                        : 'bg-[var(--color-border)] opacity-40'
                }`}
                title={`Day ${d.day}: ${d.title}${!available ? ' (locked)' : complete ? ' (complete)' : ''}`}
              />
            );
          })}
        </div>

        {/* Next day teaser */}
        {dayComplete && nextLockedDay && (
          <div className="rounded-2xl bg-[var(--color-card-inner)] border border-[var(--color-border)] px-5 py-4">
            <p className="text-sm text-[var(--color-text-muted)]">
              Day {nextLockedDay} unlocks tomorrow
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              {getDayDef(nextLockedDay)?.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
