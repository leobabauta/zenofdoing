import { useState } from 'react';
import { CompletionCheckbox } from '../ui/CompletionCheckbox';
import { BackButton } from '../../App';

interface PracticeSetupProps {
  onBack: () => void;
  onContinue: () => void;
}

export function PracticeSetup({ onBack, onContinue }: PracticeSetupProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} />
      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Lesson 2
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        Your Practice
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      {/* Teaching content */}
      <div className="space-y-5 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
        <p>
          Now that you understand ease as an experience, it's time to practice it.
          This isn't something you read about and understand intellectually — it's
          something you do, and feel, and return to.
        </p>

        <h2 className="text-lg font-bold text-[var(--color-text-primary)] pt-3">
          What you'll practice
        </h2>

        <p>
          You're going to pick one task — something you need to do today — and do it
          with the intention of ease. Not rushing through it. Not dreading it. Just
          being with it, fully, and noticing what arises.
        </p>

        <p>
          The task can be anything: replying to emails, writing, cleaning, a work
          project, exercise. It doesn't matter what it is. What matters is how
          you hold it.
        </p>

        <h2 className="text-lg font-bold text-[var(--color-text-primary)] pt-3">
          How to practice
        </h2>

        <p>
          When you start the timer on the next screen, here's what to do:
        </p>

        <ol className="space-y-4 pl-1">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold flex items-center justify-center mt-0.5">1</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Pause before you begin.</strong>{' '}
              Take one breath. Feel your body in the chair, your feet on the floor.
              Notice if there's any tension or resistance, and let it soften.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold flex items-center justify-center mt-0.5">2</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Start the task with intention.</strong>{' '}
              As you begin, silently set the intention: "I'm going to do this with
              ease." Then start.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold flex items-center justify-center mt-0.5">3</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Notice when you leave ease.</strong>{' '}
              You will. The mind will start rushing, worrying, or resisting. That's
              normal. When you notice, gently return to ease. Soften your body.
              Slow down slightly. Come back to the doing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold flex items-center justify-center mt-0.5">4</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Keep returning.</strong>{' '}
              The practice isn't about staying in ease perfectly. It's about noticing
              when you've left, and gently coming back. Every return is the practice.
            </span>
          </li>
        </ol>

        <h2 className="text-lg font-bold text-[var(--color-text-primary)] pt-3">
          When to practice
        </h2>

        <p>
          Start with one session a day. Pick a task you were already going to do — this
          isn't extra work, it's a different way of doing work you already have.
        </p>

        <p>
          Set the timer for however long feels right. Even 10 minutes is powerful.
          Over time, you can extend it or add more sessions. But start small.
          Start with ease.
        </p>

        <h2 className="text-lg font-bold text-[var(--color-text-primary)] pt-3">
          Setting up
        </h2>

        <p>
          Before you move to the timer, take a moment to get ready:
        </p>

        <ul className="space-y-3 pl-1">
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] font-bold mt-0.5">—</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Choose your task.</strong>{' '}
              What will you work on? Pick one thing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] font-bold mt-0.5">—</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Clear distractions.</strong>{' '}
              Close extra tabs. Put your phone face down. Give yourself space to be
              with just this one task.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] font-bold mt-0.5">—</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Set your duration.</strong>{' '}
              On the next screen you'll see a timer. You can drag the hand or click
              the time to set your duration. Start with 10–25 minutes.
            </span>
          </li>
        </ul>

        <p className="pt-2">
          When you're ready, continue to the practice timer.
        </p>
      </div>

      {/* Complete / Continue */}
      <div className="mt-10 pb-2">
        <CompletionCheckbox
          completed={completed}
          onComplete={() => setCompleted(true)}
          continueLabel="Start Your Practice"
          onContinue={onContinue}
        />
      </div>
    </div>
  );
}
