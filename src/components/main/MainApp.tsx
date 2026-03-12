import { HomeScreen } from './HomeScreen';
import { ContentsScreen } from './ContentsScreen';
import { JournalScreen } from './JournalScreen';
import type { JournalEntry } from '../../App';
import type { NavTab } from './BottomNav';

interface MainAppProps {
  journal: JournalEntry[];
  completedSteps: Set<string>;
  currentDay: number;
  availableDays: number;
  currentStepId: string;
  activeTab: NavTab;
  onNavigateToStep: (stepId: string) => void;
}

export function MainApp({ journal, completedSteps, currentDay, availableDays, currentStepId, activeTab, onNavigateToStep }: MainAppProps) {
  return (
    <>
      {activeTab === 'home' && (
        <HomeScreen
          currentDay={currentDay}
          availableDays={availableDays}
          completedSteps={completedSteps}
          onNavigateToStep={onNavigateToStep}
        />
      )}
      {activeTab === 'contents' && (
        <ContentsScreen
          completedSteps={completedSteps}
          availableDays={availableDays}
          currentStepId={currentStepId}
          onSelectStep={onNavigateToStep}
        />
      )}
      {activeTab === 'journal' && (
        <JournalScreen entries={journal} />
      )}
    </>
  );
}
