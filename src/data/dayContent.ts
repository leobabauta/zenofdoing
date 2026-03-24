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
  title: 'Bringing Ease into Action',
  paragraphs: [
    'Yesterday, you explored the quality of ease, as an experience. This is always available to you, no matter what you\'re doing.',
    'Today, we carry it forward, into action.',
    'Having some moments of ease is one thing … but when we sit down to do a task, especially one that brings some resistance … the ease can disappear.',
    'The trick is to approach the task differently. Instead of bracing ourselves, and tightening our bodies, and telling ourselves why a task is going to be hard, boring, uncomfortable or scary … we find a new approach.',
    'Let\'s look at how you begin.',
    'As you start a task today, try this:',
    {
      type: 'list',
      items: [
        '**Pause for just a breath.** The shortest of rituals: just one conscious breath. Let your shoulders drop and relax.',
        '**Recall the experience of ease from yesterday.** Not the visualization itself, just the feeling — open, relaxed, present.',
        '**Start small and slow.** The first action doesn\'t need to be impressive. It just needs to be easy. One sentence. One item. One small step.',
      ],
    },
    'Ease is contagious — when you start easy, the next thing is easier too.',
    '**The Secret: Ease Isn\'t the Absence of Effort**',
    'We\'re not talking about doing less (though that can happen) … or just coasting.',
    'Ease is how you move through an action — like water finding its way downhill. Movement, without the fighting.',
  ],
};

export const day3PracticeInstructions: PracticeInstructionsContent = {
  title: 'Do Something Small, with Ease',
  intro: 'Pick one task you\'ve been avoiding or approaching with dread. You\'re going to work on it just a little.',
  steps: [
    'Take one breath.',
    'Recall that feeling of ease for a moment.',
    'Start with the smallest, most frictionless version of beginning the task.',
    'Notice what happens. Not just to the task — but to your experience of doing. Get curious about that as you practice doing while connecting to your experience of ease. Just for a few minutes.',
  ],
};

export const day3Reflection: ReflectionContent = {
  prompts: [
    { text: 'How much were you able to access ease?', type: 'stars' },
    'What did you notice about ease when you started doing the task?',
    'Reflect on bringing ease into the experience of doing.',
  ],
};

export const day3Encouragement: EncouragementContent = {
  title: 'Practice During the Day',
  message: 'For the rest of the day, until you come back here tomorrow, I encourage you to try to come back to this practice of ease while doing, whenever you remember. Not all day long, but whenever you can.\n\nExplore it and see what you can notice. The more you practice, the more you\'ll have access to ease while doing.',
};

// ─── Day 4 ───────────────────────────────────────────────

export const day4Lesson: LessonContent = {
  subtitle: 'Day 4 · Lesson',
  title: 'Coming Back to Ease',
  paragraphs: [
    'Yesterday you started to practice bringing ease into action. But something happened that took you out of ease — maybe an interruption, a frustrating email, a moment of self-doubt …',
    'The ease slipped away.',
    'That\'s not failure. That\'s a part of the practice.',
    '**Ease Isn\'t a State You Maintain — It\'s One You Return To**',
    'This is the shift that changes everything about how you relate to ease.',
    'We tend to think of it as something to hold onto — and the moment we lose it, we\'ve failed somehow. So we either strain to keep it (which kills it) or we give up on it entirely once it\'s gone.',
    'But ease is less like a flame you have to protect, and more like a breath. You don\'t breathe once and hold it forever. You breathe out, and then you breathe in again.',
    'The practice isn\'t staying in ease. It\'s returning to it.',
    '**What Pulls Us Out**',
    'It helps to recognize the common culprits — the moments that reliably knock us out of ease:',
    {
      type: 'list',
      items: [
        '**Resistance to what\'s happening.** Something doesn\'t go as planned, and we brace against it.',
        '**The rushing mind.** We get pulled into what\'s next, what\'s wrong, what\'s missing — and we leave the present moment entirely.',
        '**Self-criticism.** A mistake happens, and suddenly we\'re in a small war with ourselves.',
        '**Overwhelm.** Too many things at once, and the nervous system contracts.',
      ],
    },
    'None of these are bad. They\'re just signals. They\'re telling you: I\'ve left ease. I can come back.',
    '**The Return**',
    'Coming back doesn\'t require starting over. It doesn\'t require a long meditation or a perfect moment of stillness.',
    'It just requires noticing, and one small movement toward ease.',
    'Try this whenever you notice you\'ve left:',
    {
      type: 'list',
      items: [
        '**Name it quietly.** "I\'m not at ease right now." Just naming it creates a little space.',
        '**One breath.** Let the exhale be longer than the inhale. Something in the body softens.',
        '**Drop the story, just for now.** Whatever the mind is spinning — the worry, the frustration, the to-do list — you don\'t have to solve it in this moment. Just set it down briefly.',
        '**Re-enter the present action.** What\'s the one thing in front of you right now? Just that.',
      ],
    },
    'That\'s it. Just a 10-second practice. You\'re back.',
    'You\'ll leave many times, every day, and that\'s absolutely fine. What matters is that you practice returning, over and over again. You\'ll start to build confidence that you can find your way back. And the return becomes easier as you practice.',
  ],
};

export const day4PracticeInstructions: PracticeInstructionsContent = {
  title: 'Do Something with Ease',
  intro: 'For today\'s practice, I encourage you to pick an easy task to work on again … but perhaps with just a little more challenge to it. Just a tinge.\n\nHere\'s how to practice:',
  steps: [
    'Take one breath.',
    'Recall the experience of ease for a moment.',
    'Start with the smallest step on the task you\'ve chosen.',
    'Notice when you fall out of ease, and come back to it.',
  ],
  closingNote: 'And see what that\'s like.',
};

export const day4Reflection: ReflectionContent = {
  prompts: [
    { text: 'How much were you able to access ease?', type: 'stars' },
    { text: 'How much were you able to return to ease?', type: 'stars' },
    'What did you notice about ease when you started doing the task?',
    'What did you notice about getting pulled away, and coming back to ease?',
  ],
};

export const day4Encouragement: EncouragementContent = {
  title: 'Practice During the Day',
  message: 'Set a soft intention: today, I\'ll notice when I\'ve left ease — and I\'ll come back at least once.\n\nJust once is enough. Notice the leaving. Try the return. See what you find.',
};

// ─── Day 5 ───────────────────────────────────────────────

export const day5Lesson: LessonContent = {
  subtitle: 'Day 5 · Lesson',
  title: 'Ease Meets Real Life',
  paragraphs: [
    'You\'ve spent four days practicing with ease. You\'ve felt it, brought it into action, learned to return to it.',
    'There\'s probably a part of you that\'s thinking: this is beautiful, but what about when things get really hard?',
    'That\'s exactly the right question. The challenges are real.',
    'Ease isn\'t an approach that works only in calm conditions. We have to learn to access it under pressure.',
    'So let\'s name the real challenges:',
    {
      type: 'list',
      items: [
        '**High-stakes moments.** A difficult conversation. A deadline. Something that really matters. The nervous system goes into alert, and ease feels like a luxury you can\'t afford.',
        '**Grief, frustration, or pain.** Sometimes life is just hard. Forcing ease over real emotion feels dishonest — even toxic.',
        '**Chronic overwhelm.** When the list never gets shorter, when rest never fully arrives — ease can start to feel like something for other people.',
        '**The voice that says you don\'t deserve it.** That you haven\'t earned rest yet. That ease is laziness in disguise.',
      ],
    },
    'These are real challenges to work with.',
    'Let\'s start with a framing: Ease is not the absence of challenge. Ease is a new relationship with what\'s happening — one where you\'re not adding unnecessary resistance on top of what\'s already difficult.',
    'The bracing, the self-attack, the tightening, the catastrophizing — that\'s the extra weight. That\'s what ease can actually help with.',
    'Sometimes the most honest thing is to say: this is genuinely hard, and I\'m struggling, and I\'m going to let that be true.',
    '**How Ease Becomes a Way of Being**',
    'The practices this week — the pause, the breath, the experience of ease, the return — they\'re practice for these challenging situations.',
    'What they\'re building underneath is something lasting: a basic trust that you can meet what comes without bracing for it. That you have access to something steady inside you, even when things outside are not.',
    'That\'s something you keep choosing. And every time you return to ease, you\'re proving to yourself that it\'s possible.',
  ],
};

export const day5PracticeInstructions: PracticeInstructionsContent = {
  title: 'Ease Meets Challenge',
  intro: 'For today\'s practice, you\'ll visualize a challenging situation that\'s happening in your life.',
  steps: [
    'Recall how it feels — any frustrations, anger, grief, self-doubt, feeling of stuckness, anxiety or fear. Let yourself feel the experience of challenge for a few moments.',
    'Then practice bringing some ease into the situation. A few deeper breaths. Some relaxing. A little more spaciousness.',
    'See if you can drop some of the "extra" — the thoughts about how this shouldn\'t be this way, the bracing and trying to get away from it.',
    'And just be with the experience, with ease.',
  ],
};

export const day5Reflection: ReflectionContent = {
  prompts: [
    { text: 'How challenging did the situation feel that you visualized?', type: 'stars' },
    { text: 'How much were you able to access ease?', type: 'stars' },
    'What did you notice about ease in this challenging situation?',
  ],
};

export const day5Encouragement: EncouragementContent = {
  title: 'Practice During the Day',
  message: 'Sit with this question:\n\nWhere in my life am I adding weight that doesn\'t need to be there?\n\nJust get curious.\n\nAnd then, when you\'re ready: put it down. Just for this moment. Just this once.\n\nThat\'s the whole practice.',
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
    4: day4Encouragement,
    5: day5Encouragement,
  };
  return map[day];
}
