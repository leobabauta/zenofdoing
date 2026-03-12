import { supabase } from './supabase';
import type { JournalEntry, Screen } from '../App';

export async function loadProgress(userId: string): Promise<{
  completedScreens: Screen[];
  currentLesson: Screen;
} | null> {
  if (!supabase) return null;

  const { data } = await supabase
    .from('user_progress')
    .select('completed_screens, current_lesson')
    .eq('user_id', userId)
    .single();

  if (!data) return null;

  return {
    completedScreens: (data.completed_screens || []) as Screen[],
    currentLesson: (data.current_lesson || 'intro') as Screen,
  };
}

export async function saveProgress(
  userId: string,
  completedScreens: Set<Screen>,
  currentLesson: Screen
): Promise<void> {
  if (!supabase) return;

  await supabase.from('user_progress').upsert({
    user_id: userId,
    completed_screens: Array.from(completedScreens),
    current_lesson: currentLesson,
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
