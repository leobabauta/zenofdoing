import { supabase } from './supabase';
import type { JournalEntry } from '../App';

export async function loadProgress(userId: string): Promise<{
  completedSteps: string[];
  currentStep: string;
  courseStartedAt: string | null;
} | null> {
  if (!supabase) return null;

  const { data } = await supabase
    .from('user_progress')
    .select('completed_screens, current_lesson, course_started_at')
    .eq('user_id', userId)
    .single();

  if (!data) return null;

  return {
    completedSteps: (data.completed_screens || []) as string[],
    currentStep: (data.current_lesson || 'day1.overview') as string,
    courseStartedAt: data.course_started_at || null,
  };
}

export async function saveProgress(
  userId: string,
  completedSteps: Set<string>,
  currentStep: string,
  courseStartedAt: string
): Promise<void> {
  if (!supabase) return;

  await supabase.from('user_progress').upsert({
    user_id: userId,
    completed_screens: Array.from(completedSteps),
    current_lesson: currentStep,
    course_started_at: courseStartedAt,
    updated_at: new Date().toISOString(),
  });
}

export async function loadJournal(userId: string): Promise<JournalEntry[]> {
  if (!supabase) return [];

  const { data } = await supabase
    .from('journal_entries')
    .select('entry_date, reflections')
    .eq('user_id', userId)
    .order('entry_date', { ascending: true });

  if (!data) return [];

  return data.map((row) => ({
    date: row.entry_date,
    reflections: row.reflections as JournalEntry['reflections'],
  }));
}

export async function saveJournalEntry(
  userId: string,
  entry: JournalEntry
): Promise<void> {
  if (!supabase) return;

  await supabase.from('journal_entries').insert({
    user_id: userId,
    entry_date: entry.date,
    reflections: entry.reflections,
  });
}
