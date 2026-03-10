import { LotusIllustration, MountainIllustration } from '../ui/Illustrations';

interface HomeScreenProps {
  currentLesson: { label: string; subtitle: string };
  currentPractice: { label: string; subtitle: string };
  onGoToLesson: () => void;
  onGoToPractice: () => void;
}

export function HomeScreen({ currentLesson, currentPractice, onGoToLesson, onGoToPractice }: HomeScreenProps) {
  return (
    <div className="px-8 py-10 flex-1 overflow-y-auto">
      {/* Welcome */}
      <p className="text-sm text-[var(--color-text-muted)] mb-1">Welcome back</p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
        Zen of Doing
      </h1>

      <div className="mt-8 space-y-4">
        {/* Current Lesson Card */}
        <button
          onClick={onGoToLesson}
          className="w-full text-left rounded-2xl overflow-hidden bg-[var(--color-card-inner)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group"
        >
          <div className="overflow-hidden">
            <LotusIllustration className="w-full" />
          </div>
          <div className="px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
              Current Lesson
            </p>
            <p className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {currentLesson.label}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
              {currentLesson.subtitle}
            </p>
          </div>
        </button>

        {/* Current Practice Card */}
        <button
          onClick={onGoToPractice}
          className="w-full text-left rounded-2xl overflow-hidden bg-[var(--color-card-inner)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group"
        >
          <div className="overflow-hidden">
            <MountainIllustration className="w-full" />
          </div>
          <div className="px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
              Current Practice
            </p>
            <p className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {currentPractice.label}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
              {currentPractice.subtitle}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
