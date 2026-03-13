// Content for each day's lessons, instructions, reflections, and encouragements.
// Structure is kept as simple strings/arrays so content can be updated independently of components.

export type ContentBlock = string | { type: 'list'; items: string[] };

export interface LessonContent {
  subtitle: string;
  title: string;
  paragraphs: ContentBlock[];
}

export interface PracticeInstructionsContent {
  title: string;
  intro: string;
  steps: string[];
  closingNote?: string;
}

export interface ReflectionPrompt {
  text: string;
  type?: 'text' | 'stars';
}

export interface ReflectionContent {
  intro?: string;
  blockersList?: string[];
  blockersNote?: string;
  prompts: (string | ReflectionPrompt)[];
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
    "We're going to practice **Doing with Ease** for the next 5 days. Doing with ease isn't about doing less or doing it slowly (necessarily). It's about bringing a quality of openness, presence and flow to whatever you're already doing — washing dishes, sending emails, having hard conversations. Doing with ease is a way of being … but it's also a skill, and like any skill, it can be trained.",
    "Over the next 5 days, you'll practice one simple thing: gently shifting toward ease. On day 6, you'll step back and reflect on what you noticed and learned.",
    'Each day has three parts:',
    {
      type: 'list',
      items: [
        "**A Lesson:** We'll look at a key way of looking at the practice you'll be doing that day.",
        "**A Practice:** I'll give you instructions and ask you to do a small, simple practice for a few minutes.",
        "**A Reflection:** After you practice for a few minutes, you'll do a short reflection to share what you noticed. This is a key part of practicing — learning from the practice.",
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
    'Before we can practice ease, we need to understand why it feels so tough.',
    "Here's the thing: ease is actually a natural state for humans, if we're not in danger or upset. It's not something you have to manufacture.",
    "It's helpful to think of it like water moving through a hose — the flow is already there. But when something kinks the hose, the flow stops. The water doesn't disappear; it just can't get through.",
    'The same is true for you. When ease feels absent, something is blocking its flow.',
    'So what kinks the hose? A few of the most common culprits:',
    {
      type: 'list',
      items: [
        '**Resistance** — a subtle (or not so subtle) refusal to be doing what you\'ve set yourself to doing, usually with a deeper layer of some fear.',
        '**Rushing** — moving quickly through the day out of anxiety of not getting it all done. Feeling overwhelmed and overloaded, not enough time for it all, feeling behind.',
        '**Expectation** — an ideal of how things *should* go, that we put on ourselves most of the time.',
        '**Self-judgment or guilt** — an inner critic, evaluating your every move, stemming from those expectations of what you "should" be doing, and then judgment and guilt if you don\'t live up to those expectations.',
        '**Distraction** — a tendency to feel scattered, shifting attention constantly, when it feels uncomfortable to stay in one place.',
        '**Tension** — anxiety that leads to physical tightening in the body that we carry without noticing: a clenched jaw, tightened chest, hunched shoulders.',
      ],
    },
    "None of these are bad. They're just learned patterns that are meant to protect us … but that get in the way of our ease and flow. We're just noticing what's there for us.",
    'Awareness is what makes everything else possible.',
    "So let's start Day 1 with a practice of reflecting on our blockers.",
  ],
};

export const day1Reflection: ReflectionContent = {
  intro: "Please choose which of the following are your main blockers:",
  blockersList: [
    'Resistance', 'Rushing', 'Expectation', 'Self-judgment', 'Distraction',
    'Tension', 'Overthinking', 'Fear of failure', 'People-pleasing',
    'Perfectionism', 'Comparison', 'Resentment/blame', 'Overwhelm', 'Need for control',
  ],
  blockersNote: "By the way, many of these overlap each other, so it's OK to choose more than one if you're not sure which fit best.",
  prompts: [
    "Do you have any other blockers you can see that aren't on the list above?",
    'What activities do you notice them coming up, blocking a sense of ease and flow as you act?',
    'What do they protect you from?',
    'What do they make impossible?',
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
    "We've looked at what blocks ease. Now let's turn towards ease itself — not as an idea, but as something you can actually feel.",
    "Ease isn't abstract — it's an experience. It's something we have all experienced … if you've ever been swaying peacefully in a hammock, floating in the water feeling blissfully relaxed, soaking in a tub, that's the experience of ease. We've had it while doing tasks as well, lost in flow.",
    "Let's describe ease, as an experience. You might feel:",
    {
      type: 'list',
      items: [
        "**Relaxed** — not limp or dull, but free of excess tension",
        "**Open** — like your mind is open to the present moment experience, and you feel spaciousness",
        "**Flow** — you can just get lost in what you're doing, without forcing yourself",
        "**Present** — fully here in the moment, rather than thinking about the past or future",
        "**Pleasant** — there can often be a feeling of enjoying what you're doing, even savoring",
        "**In your body** — fully in the sensations of what you're experiencing, rather than in your head",
      ],
    },
    "That's the experience we're training ourselves in.",
    "One thing we can do is remember a time when we felt ease. Let ourselves feel what it felt like in that memory. And think of that as an \"anchor experience\" — a reference you can return back to, whenever you want, no matter what you're doing.",
    "In this way, we're not forcing ease, but remembering it. And coming back to it.",
    "Let's create an anchor experience, in today's practice.",
  ],
};

export const day2PracticeInstructions: PracticeInstructionsContent = {
  title: 'Visualize Ease',
  intro: "For this practice, you'll get 3 minutes to visualize an experience of ease that felt really good to you.",
  steps: [
    "Try to remember a time when you were able to feel at ease — you felt at peace with the world, you felt open and present, you felt relaxed and pleasant.",
    "It could be a time when you felt at home, or maybe you were relaxed on the beach, or floating in the water.",
    "As you visualize, try to also feel the feeling in your body. Notice what that feels like.",
    "This experience, of feeling it in your body and visualizing ease, will be your anchor experience to come back to in future practices.",
  ],
  closingNote: "OK, let's give it a shot!",
};

export const day2Reflection: ReflectionContent = {
  prompts: [
    { text: 'Were you able to visualize an experience of ease?', type: 'stars' },
    { text: 'Were you able to feel the ease in your body?', type: 'stars' },
    'What did you notice about the practice?',
    'What did your scene look like?',
    'Do you have any questions or difficulties around this practice?',
  ],
};

export const day2Encouragement: EncouragementContent = {
  title: 'Practice During the Day',
  message: "For the rest of the day, until you come back here tomorrow, I encourage you to try to come back to this visualization and bodily experience of ease, whenever you remember. Not all day long, but from time to time.\n\nExplore it and see what you can notice. The more you practice, the more this can feel like a home to return to.",
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
