import { useState, useCallback, useEffect, useRef } from 'react';
import { IntroTeaching } from './components/teachings/IntroTeaching';
import { PracticeSetup } from './components/teachings/PracticeSetup';
import { PracticeTimer } from './components/teachings/PracticeTimer';
import { Reflection } from './components/teachings/Reflection';
import { MainApp } from './components/main/MainApp';
import { LoginPage } from './components/auth/LoginPage';
import { useAuth } from './hooks/useAuth';
import { supabase } from './lib/supabase';
import { loadProgress, saveProgress, loadJournal, saveJournalEntry } from './lib/sync';

export type Screen = 'intro' | 'practice-setup' | 'practice-timer' | 'reflection' | 'practice-2' | 'main';

export interface JournalEntry {
  date: string;
  reflections: { prompt: string; response: string }[];
}

export default function App() {
  const { user, loading: authLoading } = useAuth();

  const [screen, setScreen] = useState<Screen>('main');
  const [completedScreens, setCompletedScreens] = useState<Set<Screen>>(new Set());
  const [currentLesson, setCurrentLesson] = useState<Screen>('intro');
  const [journal, setJournal] = useState<JournalEntry[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const hasSynced = useRef(false);

  // Load user data from Supabase on login
  useEffect(() => {
    if (!user || hasSynced.current) return;
    hasSynced.current = true;

    async function load() {
      const progress = await loadProgress(user!.id);
      if (progress) {
        setCompletedScreens(new Set(progress.completedScreens));
        setCurrentLesson(progress.currentLesson);
      }

      const entries = await loadJournal(user!.id);
      if (entries.length > 0) {
        setJournal(entries);
      }

      setDataLoaded(true);
    }

    load();
  }, [user]);

  // If no Supabase, mark as loaded immediately
  useEffect(() => {
    if (!supabase) setDataLoaded(true);
  }, []);

  const navigate = useCallback((to: Screen) => {
    setScreen(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const markComplete = useCallback((s: Screen) => {
    setCompletedScreens((prev) => {
      const next = new Set(prev).add(s);
      if (user) saveProgress(user.id, next, currentLesson);
      return next;
    });
  }, [user, currentLesson]);

  const updateCurrentLesson = useCallback((lesson: Screen) => {
    setCurrentLesson(lesson);
    if (user) saveProgress(user.id, completedScreens, lesson);
  }, [user, completedScreens]);

  const addJournalEntry = useCallback((entry: JournalEntry) => {
    setJournal((prev) => [...prev, entry]);
    if (user) saveJournalEntry(user.id, entry);
  }, [user]);

  const handleNavigateToScreen = useCallback((target: Screen) => {
    updateCurrentLesson(target);
    navigate(target);
  }, [navigate, updateCurrentLesson]);

  const goHome = useCallback(() => navigate('main'), [navigate]);

  // If Supabase is configured, require auth
  if (supabase && authLoading) return null;
  if (supabase && !user) return <LoginPage />;

  // Wait for data to load
  if (!dataLoaded) return null;

  return (
    <div className="min-h-screen flex justify-center px-4 py-10">
      <div className="w-full max-w-[640px] bg-[var(--color-card)] rounded-3xl shadow-xl shadow-black/8 overflow-hidden flex flex-col">
        {screen === 'main' && (
          <MainApp
            journal={journal}
            completedScreens={completedScreens}
            currentScreen={currentLesson}
            onNavigateToScreen={handleNavigateToScreen}
          />
        )}
        {screen === 'intro' && (
          <IntroTeaching
            onBack={goHome}
            onContinue={() => {
              markComplete('intro');
              updateCurrentLesson('practice-setup');
              navigate('practice-setup');
            }}
          />
        )}
        {screen === 'practice-setup' && (
          <PracticeSetup
            onBack={goHome}
            onContinue={() => {
              markComplete('practice-setup');
              updateCurrentLesson('practice-timer');
              navigate('practice-timer');
            }}
          />
        )}
        {screen === 'practice-timer' && (
          <PracticeTimer
            onBack={goHome}
            onContinue={() => {
              markComplete('practice-timer');
              updateCurrentLesson('reflection');
              navigate('reflection');
            }}
          />
        )}
        {screen === 'reflection' && (
          <Reflection
            onBack={goHome}
            onSave={addJournalEntry}
            onContinue={() => {
              markComplete('reflection');
              updateCurrentLesson('practice-2');
              navigate('main');
            }}
          />
        )}
        {screen === 'practice-2' && (
          <div className="px-10 py-10">
            <BackButton onClick={goHome} />
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
              Coming Soon
            </p>
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
              Practice 2
            </h1>
            <div className="h-px bg-[var(--color-border)] my-7" />
            <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              The next practice is on its way. For now, keep practicing doing with ease —
              one task at a time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mb-5 flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Home
    </button>
  );
}
