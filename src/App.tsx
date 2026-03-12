import { useState, useCallback, useEffect, useRef } from 'react';
import { MainApp } from './components/main/MainApp';
import { StepRenderer } from './components/steps/StepRenderer';
import { BottomNav, type NavTab } from './components/main/BottomNav';
import { LoginPage } from './components/auth/LoginPage';
import { useAuth } from './hooks/useAuth';
import { supabase } from './lib/supabase';
import { loadProgress, saveProgress, loadJournal, saveJournalEntry } from './lib/sync';
import { getAvailableDays, getCurrentDay, getNextStepId } from './lib/courseProgress';
import { parseStepId, getPreviousStep } from './data/courseDefinition';

export interface JournalEntry {
  date: string;
  reflections: { prompt: string; response: string }[];
}

type AppView = 'main' | 'step';

export default function App() {
  const { user, loading: authLoading } = useAuth();

  const [view, setView] = useState<AppView>('main');
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [currentStepId, setCurrentStepId] = useState('day1.overview');
  const [courseStartedAt, setCourseStartedAt] = useState<string | null>(null);
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
        setCompletedSteps(new Set(progress.completedSteps));
        setCurrentStepId(progress.currentStep);
        if (progress.courseStartedAt) {
          setCourseStartedAt(progress.courseStartedAt);
        }
      }

      const entries = await loadJournal(user!.id);
      if (entries.length > 0) {
        setJournal(entries);
      }

      setDataLoaded(true);
    }

    load();
  }, [user]);

  // If no Supabase, mark as loaded immediately and set start date
  useEffect(() => {
    if (!supabase) {
      setDataLoaded(true);
      if (!courseStartedAt) {
        setCourseStartedAt(new Date().toISOString());
      }
    }
  }, [courseStartedAt]);

  // Set course start date on first load if not already set
  useEffect(() => {
    if (dataLoaded && !courseStartedAt) {
      const now = new Date().toISOString();
      setCourseStartedAt(now);
      if (user) {
        saveProgress(user.id, completedSteps, currentStepId, now);
      }
    }
  }, [dataLoaded, courseStartedAt, user, completedSteps, currentStepId]);

  const availableDays = courseStartedAt ? getAvailableDays(courseStartedAt, completedSteps) : 1;
  const currentDay = getCurrentDay(completedSteps, availableDays);

  const navigate = useCallback((to: AppView, stepId?: string) => {
    setView(to);
    if (stepId) setCurrentStepId(stepId);
    if (to === 'main') setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const markStepComplete = useCallback((stepId: string) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev).add(stepId);
      if (user && courseStartedAt) {
        saveProgress(user.id, next, currentStepId, courseStartedAt);
      }
      return next;
    });
  }, [user, currentStepId, courseStartedAt]);

  const handleStepContinue = useCallback(() => {
    const nextId = getNextStepId(currentStepId);
    if (nextId) {
      const { day } = parseStepId(nextId);
      if (day <= availableDays) {
        setCurrentStepId(nextId);
        if (user && courseStartedAt) {
          saveProgress(user.id, completedSteps, nextId, courseStartedAt);
        }
        navigate('step', nextId);
        return;
      }
    }
    navigate('main');
  }, [currentStepId, availableDays, user, courseStartedAt, completedSteps, navigate]);

  const handleNavigateToStep = useCallback((stepId: string) => {
    setCurrentStepId(stepId);
    if (user && courseStartedAt) {
      saveProgress(user.id, completedSteps, stepId, courseStartedAt);
    }
    navigate('step', stepId);
  }, [user, courseStartedAt, completedSteps, navigate]);

  const addJournalEntry = useCallback((entry: JournalEntry) => {
    setJournal((prev) => [...prev, entry]);
    if (user) saveJournalEntry(user.id, entry);
  }, [user]);

  const goHome = useCallback(() => navigate('main'), [navigate]);

  const goBack = useCallback(() => {
    const prev = getPreviousStep(currentStepId);
    if (prev) {
      navigate('step', prev.id);
    } else {
      navigate('main');
    }
  }, [currentStepId, navigate]);

  const handleNavTab = useCallback((tab: NavTab) => {
    setActiveTab(tab);
    if (view === 'step') {
      setView('main');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Auth gating
  if (supabase && authLoading) return null;
  if (supabase && !user) return <LoginPage />;
  if (!dataLoaded) return null;

  return (
    <div className="min-h-screen flex justify-center px-4 py-10">
      <div className="w-full max-w-[640px] bg-[var(--color-card)] rounded-3xl shadow-xl shadow-black/8 overflow-hidden flex flex-col">
        <div className="flex-1 flex flex-col" style={{ minHeight: 'calc(100vh - 80px)' }}>
          {view === 'main' && (
            <MainApp
              journal={journal}
              completedSteps={completedSteps}
              currentDay={currentDay}
              availableDays={availableDays}
              currentStepId={currentStepId}
              activeTab={activeTab}
              onNavigateToStep={handleNavigateToStep}
            />
          )}
          {view === 'step' && (
            <StepRenderer
              stepId={currentStepId}
              onBack={goBack}
              onHome={goHome}
              onComplete={() => markStepComplete(currentStepId)}
              onContinue={handleStepContinue}
              onSaveJournal={addJournalEntry}
            />
          )}
        </div>
        <BottomNav active={view === 'step' ? 'home' : activeTab} onNavigate={handleNavTab} />
      </div>
    </div>
  );
}

export function BackButton({ onClick, label = 'Back' }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="mb-5 flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {label}
    </button>
  );
}
