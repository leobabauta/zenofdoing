import { DayIllustration } from '../ui/Illustrations';
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
  const isNewUser = completedSteps.size === 0;

  const nextLockedDay = availableDays < 6 ? availableDays + 1 : null;

  return (
    <div className="px-8 py-10 flex-1 overflow-y-auto">
      <p className="text-sm text-[var(--color-text-muted)] mb-1">{isNewUser ? 'Welcome!' : 'Welcome back'}</p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
        Zen of Doing practice app
      </h1>

      {/* Intro text */}
      <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
        Zen of Doing is a 6-day training in <strong className="font-semibold text-[var(--color-text-primary)]">Doing with Ease</strong>.
        Each day, you'll get a short lesson, and do a practice, do a reflection in your journal,
        and then be asked to practice during the day. Enjoy the training!
      </p>
      <p className="mt-2 text-[13px] text-[var(--color-text-muted)] italic">
        —Leo Babauta
      </p>

      <div className="mt-6 space-y-4">
        {/* Current Day Card */}
        <button
          onClick={() => {
            if (nextStep) onNavigateToStep(nextStep);
            else if (dayDef) onNavigateToStep(dayDef.steps[0].id);
          }}
          className="w-full text-left rounded-2xl overflow-hidden bg-[var(--color-card-inner)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group"
        >
          <div className="overflow-hidden rounded-t-2xl">
            <DayIllustration day={currentDay} className="w-full" />
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
              {dayComplete ? 'Completed' : isNewUser ? 'Get started' : nextStep ? 'Continue where you left off' : 'Start today\'s practice'}
            </p>
          </div>
        </button>

        {/* Day progress circles */}
        <div className="flex justify-center gap-3 py-3">
          {COURSE.map((d) => {
            const available = d.day <= availableDays;
            const complete = isDayComplete(d.day, completedSteps);
            const isCurrent = d.day === currentDay;
            return (
              <button
                key={d.day}
                onClick={() => {
                  if (available) {
                    const step = getFirstIncompleteStep(d.day, completedSteps);
                    const dayDef = getDayDef(d.day);
                    if (step) onNavigateToStep(step);
                    else if (dayDef) onNavigateToStep(dayDef.steps[0].id);
                  }
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                  available ? 'cursor-pointer' : 'cursor-default'
                } ${
                  complete
                    ? 'bg-amber-100 border-2 border-amber-400'
                    : isCurrent
                      ? 'bg-[var(--color-accent-tint)] border-2 border-[var(--color-accent)] text-[var(--color-accent)]'
                      : available
                        ? 'bg-[var(--color-card-inner)] border border-[var(--color-border)] text-[var(--color-text-muted)]'
                        : 'bg-[var(--color-card-inner)] border border-[var(--color-border)] text-[var(--color-text-muted)] opacity-40'
                }`}
                title={`Day ${d.day}: ${d.title}${!available ? ' (locked)' : complete ? ' (complete)' : ''}`}
              >
                {complete ? (
                  <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                ) : (
                  d.day
                )}
              </button>
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
