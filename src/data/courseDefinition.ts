export type StepType =
  | 'overview'
  | 'lesson'
  | 'practice-instructions'
  | 'practice'
  | 'reflection'
  | 'encouragement'
  | 'evaluate'
  | 'final-encouragement';

export interface StepDef {
  id: string;
  type: StepType;
  label: string;
  hasAudio?: boolean;
}

export interface DayDef {
  day: number;
  title: string;
  steps: StepDef[];
}

export const COURSE: DayDef[] = [
  {
    day: 1,
    title: 'The Zen of Doing',
    steps: [
      { id: 'day1.overview', type: 'overview', label: 'Overview: The Zen of Doing' },
      { id: 'day1.lesson', type: 'lesson', label: 'What Gets in the Way' },
      { id: 'day1.practice', type: 'reflection', label: 'Practice 1: Reflect on Your Blockers' },
      { id: 'day1.encouragement', type: 'encouragement', label: 'Encouragement: Practice Daily' },
    ],
  },
  {
    day: 2,
    title: 'The Experience of Ease',
    steps: [
      { id: 'day2.lesson', type: 'lesson', label: 'Lesson 2: The Experience of Ease' },
      { id: 'day2.practice-instructions', type: 'practice-instructions', label: 'Practice 2: Visualize Ease' },
      { id: 'day2.practice', type: 'practice', label: 'Guided Visualization', hasAudio: true },
      { id: 'day2.reflection', type: 'reflection', label: 'Reflection 2' },
      { id: 'day2.encouragement', type: 'encouragement', label: 'Encouragement: Practice During the Day' },
    ],
  },
  {
    day: 3,
    title: 'Doing with Ease',
    steps: [
      { id: 'day3.lesson', type: 'lesson', label: 'Doing with Ease' },
      { id: 'day3.practice-instructions', type: 'practice-instructions', label: 'Practice Instructions' },
      { id: 'day3.practice', type: 'practice', label: 'Do Something Small, with Ease', hasAudio: true },
      { id: 'day3.reflection', type: 'reflection', label: 'Reflection' },
      { id: 'day3.encouragement', type: 'encouragement', label: 'Practice During the Day' },
    ],
  },
  {
    day: 4,
    title: 'Doing with Ease',
    steps: [
      { id: 'day4.lesson', type: 'lesson', label: 'Doing with Ease' },
      { id: 'day4.practice-instructions', type: 'practice-instructions', label: 'Practice Instructions' },
      { id: 'day4.practice', type: 'practice', label: 'Do Something Harder, with Ease', hasAudio: true },
      { id: 'day4.reflection', type: 'reflection', label: 'Reflection' },
    ],
  },
  {
    day: 5,
    title: 'Challenges with Ease',
    steps: [
      { id: 'day5.lesson', type: 'lesson', label: 'Challenges with Ease' },
      { id: 'day5.practice-instructions', type: 'practice-instructions', label: 'Practice Instructions' },
      { id: 'day5.practice', type: 'practice', label: 'More Practice Doing with Ease', hasAudio: true },
      { id: 'day5.reflection', type: 'reflection', label: 'Reflection' },
    ],
  },
  {
    day: 6,
    title: 'Evaluate & Adjust',
    steps: [
      { id: 'day6.lesson', type: 'lesson', label: 'Evaluate & Adjust' },
      { id: 'day6.evaluate', type: 'evaluate', label: 'Evaluate Your Practice' },
      { id: 'day6.final-encouragement', type: 'final-encouragement', label: 'Keep Practicing & Reflecting' },
    ],
  },
];

export function parseStepId(stepId: string): { day: number; stepType: string } {
  const [dayPart, ...rest] = stepId.split('.');
  return {
    day: parseInt(dayPart.replace('day', ''), 10),
    stepType: rest.join('.'),
  };
}

export function getDayDef(dayNum: number): DayDef | undefined {
  return COURSE.find((d) => d.day === dayNum);
}

export function getStepDef(stepId: string): StepDef | undefined {
  for (const day of COURSE) {
    const step = day.steps.find((s) => s.id === stepId);
    if (step) return step;
  }
  return undefined;
}

export function getNextStep(stepId: string): StepDef | null {
  const { day } = parseStepId(stepId);
  const dayDef = getDayDef(day);
  if (!dayDef) return null;
  const idx = dayDef.steps.findIndex((s) => s.id === stepId);
  if (idx < dayDef.steps.length - 1) {
    return dayDef.steps[idx + 1];
  }
  return null;
}

export function getPreviousStep(stepId: string): StepDef | null {
  const { day } = parseStepId(stepId);
  const dayDef = getDayDef(day);
  if (!dayDef) return null;
  const idx = dayDef.steps.findIndex((s) => s.id === stepId);
  if (idx > 0) {
    return dayDef.steps[idx - 1];
  }
  return null;
}

export function getAllStepIds(): string[] {
  return COURSE.flatMap((d) => d.steps.map((s) => s.id));
}
