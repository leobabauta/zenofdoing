import { useState } from 'react';
import { CompletionCheckbox } from '../ui/CompletionCheckbox';
import { BackButton } from '../../App';

interface IntroTeachingProps {
  onBack: () => void;
  onContinue: () => void;
}

export function IntroTeaching({ onBack, onContinue }: IntroTeachingProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} />
      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Lesson 1
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        The Art of Ease
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      {/* Teaching content */}
      <div className="space-y-5 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
        <p>
          Think about the last time you did something and it felt effortless. Maybe you were
          cooking a meal, walking in nature, or deep in a conversation with someone you love.
          There was no strain. No inner battle. Just you, doing the thing.
        </p>

        <p>
          That feeling of ease isn't reserved for special moments. It's available in
          everything you do — writing an email, working on a difficult project, even
          tackling something you've been avoiding. Ease isn't about the task being
          easy. It's about how you relate to the doing of it.
        </p>

        <h2 className="text-lg font-bold text-[var(--color-text-primary)] pt-3">
          Ease as an experience
        </h2>

        <p>
          Ease is a felt quality. When you're doing something with ease, your body is
          relaxed. Your breath is natural. Your mind isn't fighting with the moment —
          it's participating in it. There's a sense of flow, of being with the
          activity rather than pushing against it.
        </p>

        <p>
          You can notice this right now. Whatever posture you're in, whatever you're
          feeling — can you soften into it, just a little? Not forcing anything. Just
          allowing yourself to be here, reading these words, with a bit more ease.
        </p>

        <h2 className="text-lg font-bold text-[var(--color-text-primary)] pt-3">
          What gets in the way
        </h2>

        <p>
          If ease is always available, why don't we experience it more often? Because
          our minds create friction. Here's what that looks like:
        </p>

        <ul className="space-y-3 pl-1">
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] font-bold mt-0.5">—</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Resistance.</strong>{' '}
              "I don't want to do this." The task hasn't even started, and you're
              already fighting it. This tension lives in your body and makes
              everything harder.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] font-bold mt-0.5">—</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Overthinking.</strong>{' '}
              The mind races ahead — planning, worrying about outcomes, replaying the
              past. You're everywhere except in the doing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] font-bold mt-0.5">—</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">The story of difficulty.</strong>{' '}
              "This is too hard. I'm not good enough. There's too much to do." These
              narratives pile weight onto something that might actually be simple, if
              you let it be.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] font-bold mt-0.5">—</span>
            <span>
              <strong className="text-[var(--color-text-primary)]">Rushing.</strong>{' '}
              Trying to get through the task so you can get to the next thing. This
              urgency disconnects you from the present and creates a constant low-grade
              stress.
            </span>
          </li>
        </ul>

        <h2 className="text-lg font-bold text-[var(--color-text-primary)] pt-3">
          Ease as a practice
        </h2>

        <p>
          The good news: ease is something you can practice. Not as a concept to
          understand, but as an experience to return to, again and again.
        </p>

        <p>
          The practice is deceptively simple: as you do something, notice what's
          happening in your body and mind. If you find tension, rushing, or resistance —
          see if you can soften. Not by forcing relaxation, but by simply noticing
          the friction and choosing not to add to it.
        </p>

        <p>
          Over time, this becomes a way of being. You start to notice that most of
          the difficulty in your day isn't coming from the tasks themselves — it's
          coming from how you're holding them. And when you let go of that grip,
          something opens up.
        </p>

        <p>
          That's what this course is about. We'll practice doing things with ease —
          not as a theory, but as a lived experience.
        </p>
      </div>

      {/* Complete / Continue */}
      <div className="mt-10 pb-2">
        <CompletionCheckbox
          completed={completed}
          onComplete={() => setCompleted(true)}
          continueLabel="Continue to Your Practice"
          onContinue={onContinue}
        />
      </div>
    </div>
  );
}
