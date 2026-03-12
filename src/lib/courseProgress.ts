import { COURSE, parseStepId, getNextStep } from '../data/courseDefinition';

/**
 * Calculate how many days are available.
 * Day 1 is always available.
 * Day N (N>1) requires:
 *   1. Day N-1 is fully complete
 *   2. At least N-1 calendar days have passed since course start (i.e. midnight boundary)
 */
export function getAvailableDays(courseStartedAt: string, completedSteps: Set<string>): number {
  const start = new Date(courseStartedAt);
  const now = new Date();

  const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const msPerDay = 24 * 60 * 60 * 1000;
  const daysElapsed = Math.floor((todayDate.getTime() - startDate.getTime()) / msPerDay);

  let available = 1;
  for (let d = 2; d <= 6; d++) {
    const prevComplete = isDayComplete(d - 1, completedSteps);
    const timeUnlocked = daysElapsed >= d - 1;
    if (prevComplete && timeUnlocked) {
      available = d;
    } else {
      break;
    }
  }

  return available;
}

/**
 * Find the first incomplete step for a given day.
 */
export function getFirstIncompleteStep(dayNum: number, completedSteps: Set<string>): string | null {
  const dayDef = COURSE.find((d) => d.day === dayNum);
  if (!dayDef) return null;
  for (const step of dayDef.steps) {
    if (!completedSteps.has(step.id)) return step.id;
  }
  return null;
}

/**
 * Check if all steps in a day are complete.
 */
export function isDayComplete(dayNum: number, completedSteps: Set<string>): boolean {
  const dayDef = COURSE.find((d) => d.day === dayNum);
  if (!dayDef) return false;
  return dayDef.steps.every((s) => completedSteps.has(s.id));
}

/**
 * Get the current day number (the first day that has incomplete steps, within available days).
 */
export function getCurrentDay(completedSteps: Set<string>, availableDays: number): number {
  for (let d = 1; d <= availableDays; d++) {
    if (!isDayComplete(d, completedSteps)) return d;
  }
  return availableDays;
}

/**
 * Get the next step to navigate to after completing a step.
 */
export function getNextStepId(currentStepId: string): string | null {
  const next = getNextStep(currentStepId);
  return next ? next.id : null;
}

/**
 * Calculate progress for a day as a fraction.
 */
export function getDayProgress(dayNum: number, completedSteps: Set<string>): { completed: number; total: number } {
  const dayDef = COURSE.find((d) => d.day === dayNum);
  if (!dayDef) return { completed: 0, total: 0 };
  const completed = dayDef.steps.filter((s) => completedSteps.has(s.id)).length;
  return { completed, total: dayDef.steps.length };
}

/**
 * Get step index within a day (0-based).
 */
export function getStepIndex(stepId: string): number {
  const { day } = parseStepId(stepId);
  const dayDef = COURSE.find((d) => d.day === day);
  if (!dayDef) return 0;
  return dayDef.steps.findIndex((s) => s.id === stepId);
}
