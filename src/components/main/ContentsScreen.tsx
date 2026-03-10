interface LessonItem {
  id: string;
  label: string;
  type: 'lesson' | 'practice' | 'reflection';
  completed: boolean;
  current: boolean;
}

interface ContentsScreenProps {
  lessons: LessonItem[];
  onSelectLesson: (id: string) => void;
}

export function ContentsScreen({ lessons, onSelectLesson }: ContentsScreenProps) {
  return (
    <div className="px-8 py-10 flex-1 overflow-y-auto">
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight mb-1">
        Contents
      </h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-8">
        Your learning journey
      </p>

      <div className="space-y-2">
        {lessons.map((lesson, i) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson.id)}
            className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left transition-colors ${
              lesson.current
                ? 'bg-[var(--color-accent-tint)] border border-[var(--color-accent)]/30'
                : 'bg-[var(--color-card-inner)] border border-[var(--color-border)] hover:border-[var(--color-accent)]'
            }`}
          >
            {/* Status circle */}
            <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
              lesson.completed
                ? 'bg-emerald-500 text-white'
                : lesson.current
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'bg-[var(--color-border)] text-[var(--color-text-muted)]'
            }`}>
              {lesson.completed ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-0.5">
                {lesson.type === 'lesson' ? 'Lesson' : lesson.type === 'practice' ? 'Practice' : 'Reflection'}
              </p>
              <p className={`text-sm font-medium truncate ${
                lesson.current ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)]'
              }`}>
                {lesson.label}
              </p>
            </div>

            {lesson.current && (
              <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Current
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
