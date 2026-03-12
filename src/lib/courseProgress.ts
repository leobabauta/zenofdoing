import { COURSE, parseStepId, getNextStep } from '../data/courseDefinition';

/**
 * Calculate how many days are available based on when the user started the course.
 * Day 1 is available immediately. Day N unlocks at local midnight (N-1) calendar days after start.
 */
export function getAvailableDays(courseStartedAt: string): number {
  const start = new Date(courseStartedAt);
  const now = new Date();

  // Get calendar dates in local timezone
  const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const msPerDay = 24 * 60 * 60 * 1000;
  const daysElapsed = Math.floor((todayDate.getTime() - startDate.getTime()) / msPerDay);

  return Math.min(6, Math.max(1, daysElapsed + 1));
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
  // All available days complete
  return availableDays;
}

/**
 * Get the next step to navigate to after completing a step.
 * Returns the next step in the day, or null if the day is done.
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
