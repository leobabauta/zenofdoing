import { parseStepId, getStepDef } from '../../data/courseDefinition';
import { OverviewStep } from './OverviewStep';
import { LessonStep } from './LessonStep';
import { PracticeInstructionsStep } from './PracticeInstructionsStep';
import { PracticeStep } from './PracticeStep';
import { ReflectionStep } from './ReflectionStep';
import { EncouragementStep } from './EncouragementStep';
import { EvaluateStep } from './EvaluateStep';
import { FinalEncouragementStep } from './FinalEncouragementStep';
import type { JournalEntry } from '../../App';

interface StepRendererProps {
  stepId: string;
  onBack: () => void;
  onComplete: () => void;
  onContinue: () => void;
  onSaveJournal: (entry: JournalEntry) => void;
}

export function StepRenderer({ stepId, onBack, onComplete, onContinue, onSaveJournal }: StepRendererProps) {
  const { day } = parseStepId(stepId);
  const stepDef = getStepDef(stepId);

  if (!stepDef) {
    return (
      <div className="px-10 py-10">
        <p className="text-[var(--color-text-secondary)]">Step not found.</p>
      </div>
    );
  }

  switch (stepDef.type) {
    case 'overview':
      return (
        <OverviewStep
          onBack={onBack}
          onContinue={() => { onComplete(); onContinue(); }}
        />
      );

    case 'lesson':
      return (
        <LessonStep
          day={day}
          onBack={onBack}
          onComplete={onComplete}
          onContinue={onContinue}
        />
      );

    case 'practice-instructions':
      return (
        <PracticeInstructionsStep
          day={day}
          onBack={onBack}
          onComplete={onComplete}
          onContinue={onContinue}
        />
      );

    case 'practice':
      return (
        <PracticeStep
          day={day}
          title={stepDef.label}
          hasAudio={stepDef.hasAudio}
          onBack={onBack}
          onContinue={() => { onComplete(); onContinue(); }}
        />
      );

    case 'reflection':
      return (
        <ReflectionStep
          day={day}
          onBack={onBack}
          onSave={(entry) => { onComplete(); onSaveJournal(entry); }}
          onContinue={onContinue}
        />
      );

    case 'encouragement':
      return (
        <EncouragementStep
          day={day}
          onBack={onBack}
          onContinue={() => { onComplete(); onContinue(); }}
        />
      );

    case 'evaluate':
      return (
        <EvaluateStep
          onBack={onBack}
          onSave={(entry) => { onComplete(); onSaveJournal(entry); }}
          onContinue={onContinue}
        />
      );

    case 'final-encouragement':
      return (
        <FinalEncouragementStep
          onBack={onBack}
          onContinue={() => { onComplete(); onContinue(); }}
        />
      );

    default:
      return null;
  }
}
