import { useState } from 'react';
import { BottomNav, type NavTab } from './BottomNav';
import { HomeScreen } from './HomeScreen';
import { ContentsScreen } from './ContentsScreen';
import { JournalScreen } from './JournalScreen';
import type { JournalEntry } from '../../App';

interface MainAppProps {
  journal: JournalEntry[];
  completedSteps: Set<string>;
  currentDay: number;
  availableDays: number;
  currentStepId: string;
  onNavigateToStep: (stepId: string) => void;
}

export function MainApp({ journal, completedSteps, currentDay, availableDays, currentStepId, onNavigateToStep }: MainAppProps) {
  const [tab, setTab] = useState<NavTab>('home');

  return (
    <div className="flex flex-col" style={{ minHeight: 'calc(100vh - 80px)' }}>
      {tab === 'home' && (
        <HomeScreen
          currentDay={currentDay}
          availableDays={availableDays}
          completedSteps={completedSteps}
          onNavigateToStep={onNavigateToStep}
        />
      )}
      {tab === 'contents' && (
        <ContentsScreen
          completedSteps={completedSteps}
          availableDays={availableDays}
          currentStepId={currentStepId}
          onSelectStep={onNavigateToStep}
        />
      )}
      {tab === 'journal' && (
        <JournalScreen entries={journal} />
      )}
      <BottomNav active={tab} onNavigate={setTab} />
    </div>
  );
}
