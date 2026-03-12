// Content for each day's lessons, instructions, reflections, and encouragements.
// Structure is kept as simple strings/arrays so content can be updated independently of components.

export interface LessonContent {
  subtitle: string;
  title: string;
  paragraphs: string[];
}

export interface PracticeInstructionsContent {
  title: string;
  intro: string;
  steps: string[];
  closingNote?: string;
}

export interface ReflectionContent {
  prompts: string[];
}

export interface EncouragementContent {
  title: string;
  message: string;
}

export interface OverviewContent {
  title: string;
  paragraphs: (string | { type: 'list'; items: string[] })[];
  closing: string;
}

export interface EvaluateContent {
  title: string;
  prompts: string[];
}

// ─── Day 1 ───────────────────────────────────────────────

export const day1Overview: OverviewContent = {
  title: 'The Zen of Doing',
  paragraphs: [
    'Most of us move through our days rushing, stressed, overwhelmed, avoiding, grinding — treating everything as something to get through. This challenge invites a different way.',
    "We're going to practice Doing with Ease for the next 5 days. Doing with ease isn't about doing less or doing it slowly (necessarily). It's about bringing a quality of openness, presence and flow to whatever you're already doing — washing dishes, sending emails, having hard conversations. Doing with ease is a way of being … but it's also a skill, and like any skill, it can be trained.",
    "Over the next 5 days, you'll practice one simple thing: gently shifting toward ease. On day 6, you'll step back and reflect on what you noticed and learned.",
    'Each day has three parts:',
    {
      type: 'list',
      items: [
        "A Lesson: We'll look at a key way of looking at the practice you'll be doing that day.",
        "A Practice: I'll give you instructions and ask you to do a small, simple practice for a few minutes.",
        "A Reflection: After you practice for a few minutes, you'll do a short reflection to share what you noticed. This is a key part of practicing — learning from the practice.",
      ],
    },
    "Then you'll be given an encouragement to keep practicing during the day, and to share how that went the next day.",
    "That's it. Just small practices, to bring an ease into whatever you do.",
  ],
  closing: "Let's begin.",
};

export const day1Lesson: LessonContent = {
  subtitle: 'Day 1 · Lesson',
  title: 'What Gets in the Way',
  paragraphs: [
    'Placeholder: This lesson will explore the common patterns that get in the way of doing things with ease — resistance, overthinking, narratives of difficulty, and rushing.',
    'Content coming soon.',
  ],
};

export const day1PracticeInstructions: PracticeInstructionsContent = {
  title: 'Reflect on Your Blockers',
  intro: 'For today\'s practice, you\'ll spend a few minutes reflecting on what typically gets in the way when you sit down to do something.',
  steps: [
    'Find a quiet place where you can think without distraction.',
    'Think of a recent task that felt hard, stressful, or that you avoided.',
    'Notice what feelings, thoughts, or patterns came up around that task.',
    'Write down what you notice — we\'ll use this in the reflection.',
  ],
  closingNote: 'When you\'re ready, start the practice timer below.',
};

export const day1Reflection: ReflectionContent = {
  prompts: [
    'What blockers did you notice? What patterns come up when you sit down to do something?',
    'Were there any surprises in what you noticed? Anything you hadn\'t been aware of before?',
    'What would it look like to approach those blockers with a little more ease?',
  ],
};

export const day1Encouragement: EncouragementContent = {
  title: 'Practice Every Day',
  message: 'Today you started noticing what gets in the way. Tomorrow, we\'ll explore what ease actually feels like. For now, just notice throughout your day — when do you feel rushed, stressed, or resistant? You don\'t have to change anything yet. Just notice.',
};

// ─── Day 2 ───────────────────────────────────────────────

export const day2Lesson: LessonContent = {
  subtitle: 'Day 2 · Lesson',
  title: 'The Experience of Ease',
  paragraphs: [
    'Placeholder: This lesson will explore what ease actually feels like as a lived experience — relaxation in the body, natural breath, a sense of flow and openness.',
    'Content coming soon.',
  ],
};

export const day2PracticeInstructions: PracticeInstructionsContent = {
  title: 'Visualize Ease',
  intro: 'Today\'s practice is a guided visualization. You\'ll close your eyes and imagine yourself doing a familiar task with complete ease.',
  steps: [
    'Find a comfortable position and close your eyes.',
    'Press play on the audio guide below.',
    'Follow along with the guided visualization.',
    'When the practice ends, move on to the reflection.',
  ],
};

export const day2Reflection: ReflectionContent = {
  prompts: [
    'What did ease feel like in your visualization? What did you notice in your body?',
    'Was it easy or hard to imagine yourself doing things with ease? What came up?',
    'What\'s one thing you could do today with a little more ease?',
  ],
};

export const day2Encouragement: EncouragementContent = {
  title: 'Practice During the Day',
  message: 'You\'ve started to feel what ease is like. Now try bringing that feeling into one small thing today — making coffee, walking, or replying to a message. See if you can do it with the same quality of ease you just visualized.',
};

// ─── Day 3 ───────────────────────────────────────────────

export const day3Lesson: LessonContent = {
  subtitle: 'Day 3 · Lesson',
  title: 'Doing with Ease',
  paragraphs: [
    'Placeholder: This lesson bridges visualization into action — actually doing a small task with ease, bringing the quality you practiced yesterday into real activity.',
    'Content coming soon.',
  ],
};

export const day3PracticeInstructions: PracticeInstructionsContent = {
  title: 'Do Something Small, with Ease',
  intro: 'Today you\'ll pick a small, simple task and do it with ease. This is where the practice becomes real.',
  steps: [
    'Choose a small task — something that takes 5-15 minutes.',
    'Before you begin, take a breath and set an intention for ease.',
    'Press play on the audio guide, then begin your task.',
    'When you notice tension, pause, soften, and return to ease.',
  ],
};

export const day3Reflection: ReflectionContent = {
  prompts: [
    'What task did you choose? How did it feel to do it with ease?',
    'When did you notice yourself leaving ease? What brought you back?',
    'How was this different from how you normally do things?',
  ],
};

export const day3Encouragement: EncouragementContent = {
  title: 'Practice During the Day',
  message: 'You just did something with ease. Try it again today with another task — anything at all. The more you practice, the more natural it becomes. Tomorrow, we\'ll raise the bar a little.',
};

// ─── Day 4 ───────────────────────────────────────────────

export const day4Lesson: LessonContent = {
  subtitle: 'Day 4 · Lesson',
  title: 'Doing with Ease',
  paragraphs: [
    'Placeholder: This lesson explores bringing ease to harder tasks — the ones where resistance is stronger and the pull to rush or avoid is greater.',
    'Content coming soon.',
  ],
};

export const day4PracticeInstructions: PracticeInstructionsContent = {
  title: 'Do Something Harder, with Ease',
  intro: 'Today you\'ll choose something a little more challenging and bring ease to it.',
  steps: [
    'Choose a task you\'ve been putting off or one that feels a bit harder.',
    'Take a moment to notice any resistance before you begin.',
    'Press play on the audio guide, then start the task.',
    'When difficulty arises, meet it with softness rather than force.',
  ],
};

export const day4Reflection: ReflectionContent = {
  prompts: [
    'What harder task did you choose? What was it like to approach it with ease?',
    'What resistance came up? How did you work with it?',
    'What did you learn about the relationship between difficulty and ease?',
  ],
};

// ─── Day 5 ───────────────────────────────────────────────

export const day5Lesson: LessonContent = {
  subtitle: 'Day 5 · Lesson',
  title: 'Challenges with Ease',
  paragraphs: [
    'Placeholder: This lesson explores how to bring ease to challenges, frustrations, and the unexpected — the hardest test of this practice.',
    'Content coming soon.',
  ],
};

export const day5PracticeInstructions: PracticeInstructionsContent = {
  title: 'More Practice Doing with Ease',
  intro: 'Today is about deepening your practice. You\'ll do another task with ease, this time with more awareness of the subtle moments where ease slips away.',
  steps: [
    'Choose any task — easy or hard, it doesn\'t matter.',
    'Set your intention: ease, presence, openness.',
    'Press play on the audio guide and begin.',
    'Pay special attention to the transitions — starting, getting stuck, finishing.',
  ],
};

export const day5Reflection: ReflectionContent = {
  prompts: [
    'What did you practice with today? How has your experience of ease changed since Day 1?',
    'What subtle moments of tension did you catch that you might have missed before?',
    'What does "doing with ease" mean to you now, after 5 days of practice?',
  ],
};

// ─── Day 6 ───────────────────────────────────────────────

export const day6Lesson: LessonContent = {
  subtitle: 'Day 6 · Lesson',
  title: 'Evaluate & Adjust',
  paragraphs: [
    'Placeholder: This final lesson is about stepping back to see the bigger picture — what you\'ve learned, what\'s changed, and how to carry this practice forward.',
    'Content coming soon.',
  ],
};

export const day6Evaluate: EvaluateContent = {
  title: 'Evaluate Your Practice',
  prompts: [
    'Looking back at the past 5 days, what has shifted in how you approach doing things?',
    'Which day\'s practice was most impactful for you? Why?',
    'What patterns or blockers are you now more aware of?',
    'How will you continue practicing doing with ease going forward?',
  ],
};

export const day6FinalEncouragement: EncouragementContent = {
  title: 'Keep Practicing & Reflecting',
  message: 'You\'ve completed the 6-day Zen of Doing challenge. But this is really just the beginning. The practice of doing with ease is something you can bring to everything you do, for the rest of your life. Keep noticing. Keep softening. Keep returning to ease. And whenever you need a refresher, come back and do the challenge again.',
};

// ─── Lookup helpers ──────────────────────────────────────

export function getLessonContent(day: number): LessonContent {
  const map: Record<number, LessonContent> = {
    1: day1Lesson,
    2: day2Lesson,
    3: day3Lesson,
    4: day4Lesson,
    5: day5Lesson,
    6: day6Lesson,
  };
  return map[day];
}

export function getPracticeInstructionsContent(day: number): PracticeInstructionsContent {
  const map: Record<number, PracticeInstructionsContent> = {
    1: day1PracticeInstructions,
    2: day2PracticeInstructions,
    3: day3PracticeInstructions,
    4: day4PracticeInstructions,
    5: day5PracticeInstructions,
  };
  return map[day];
}

export function getReflectionContent(day: number): ReflectionContent {
  const map: Record<number, ReflectionContent> = {
    1: day1Reflection,
    2: day2Reflection,
    3: day3Reflection,
    4: day4Reflection,
    5: day5Reflection,
  };
  return map[day];
}

export function getEncouragementContent(day: number): EncouragementContent {
  const map: Record<number, EncouragementContent> = {
    1: day1Encouragement,
    2: day2Encouragement,
    3: day3Encouragement,
  };
  return map[day];
}
