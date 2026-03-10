import { useState } from 'react';
import { BottomNav, type NavTab } from './BottomNav';
import { HomeScreen } from './HomeScreen';
import { ContentsScreen } from './ContentsScreen';
import { JournalScreen } from './JournalScreen';
import type { JournalEntry, Screen } from '../../App';

interface MainAppProps {
  journal: JournalEntry[];
  completedScreens: Set<Screen>;
  currentScreen: Screen;
  onNavigateToScreen: (screen: Screen) => void;
}

const ALL_LESSONS = [
  { id: 'intro' as Screen, label: 'The Art of Ease', type: 'lesson' as const },
  { id: 'practice-setup' as Screen, label: 'Your Practice', type: 'lesson' as const },
  { id: 'practice-timer' as Screen, label: 'Doing with Ease', type: 'practice' as const },
  { id: 'reflection' as Screen, label: 'Reflection', type: 'reflection' as const },
  { id: 'practice-2' as Screen, label: 'Practice 2', type: 'lesson' as const },
];

export function MainApp({ journal, completedScreens, currentScreen, onNavigateToScreen }: MainAppProps) {
  const [tab, setTab] = useState<NavTab>('home');

  const lessons = ALL_LESSONS.map((l) => ({
    ...l,
    completed: completedScreens.has(l.id),
    current: l.id === currentScreen,
  }));

  // Determine current lesson and practice for the home screen
  const currentLessonItem = ALL_LESSONS.find((l) => l.id === currentScreen && l.type === 'lesson');
  const currentPracticeItem = ALL_LESSONS.find((l) => l.id === currentScreen && l.type === 'practice');

  // If current screen is a practice/reflection, find the associated lesson
  const lastLesson = [...ALL_LESSONS].reverse().find(
    (l) => l.type === 'lesson' && (completedScreens.has(l.id) || l.id === currentScreen)
  );
  const lastPractice = [...ALL_LESSONS].reverse().find(
    (l) => l.type === 'practice' && (completedScreens.has(l.id) || l.id === currentScreen)
  );

  const homeLesson = currentLessonItem || lastLesson || ALL_LESSONS[0];
  const homePractice = currentPracticeItem || lastPractice || ALL_LESSONS[2];

  return (
    <div className="flex flex-col" style={{ minHeight: 'calc(100vh - 80px)' }}>
      {tab === 'home' && (
        <HomeScreen
          currentLesson={{
            label: homeLesson.label,
            subtitle: completedScreens.has(homeLesson.id) ? 'Completed' : 'In progress',
          }}
          currentPractice={{
            label: homePractice.label,
            subtitle: completedScreens.has(homePractice.id) ? 'Completed' : 'Start a session',
          }}
          onGoToLesson={() => onNavigateToScreen(homeLesson.id)}
          onGoToPractice={() => onNavigateToScreen(homePractice.id)}
        />
      )}
      {tab === 'contents' && (
        <ContentsScreen
          lessons={lessons}
          onSelectLesson={(id) => onNavigateToScreen(id as Screen)}
        />
      )}
      {tab === 'journal' && (
        <JournalScreen entries={journal} />
      )}
      <BottomNav active={tab} onNavigate={setTab} />
    </div>
  );
}
