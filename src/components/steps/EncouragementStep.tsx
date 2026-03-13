import { useState, useEffect } from 'react';
import { BackButton } from '../../App';
import { getEncouragementContent } from '../../data/dayContent';
import { DayIllustration } from '../ui/Illustrations';
import { ReminderModal } from '../ui/ReminderModal';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../lib/supabase';
import { loadReminder, saveReminder } from '../../lib/sync';

const HOUR_LABELS: Record<number, string> = {
  5: '5:00 AM', 6: '6:00 AM', 7: '7:00 AM',
  8: '8:00 AM', 9: '9:00 AM', 10: '10:00 AM',
};

interface EncouragementStepProps {
  day: number;
  onBack: () => void;
  backLabel?: string;
  onContinue: () => void;
}

export function EncouragementStep({ day, onBack, backLabel, onContinue }: EncouragementStepProps) {
  const content = getEncouragementContent(day);
  const { user } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [reminderHour, setReminderHour] = useState<number | null>(null);
  const [reminderLoaded, setReminderLoaded] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (day !== 1 || !supabase || !user) return;
    loadReminder(user.id).then((data) => {
      if (data?.enabled) setReminderHour(data.reminderHour);
      setReminderLoaded(true);
    });
  }, [day, user]);

  const handleSave = async (hour: number) => {
    if (!user) return;
    setSaving(true);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    await saveReminder(user.id, hour, tz, true);
    setReminderHour(hour);
    setSaving(false);
    setShowModal(false);
  };

  const handleDisable = async () => {
    if (!user) return;
    setSaving(true);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    await saveReminder(user.id, reminderHour ?? 7, tz, false);
    setReminderHour(null);
    setSaving(false);
    setShowModal(false);
  };

  return (
    <div className="px-10 py-10">
      <BackButton onClick={onBack} label={backLabel} />

      <div className="flex justify-center mb-6">
        <DayIllustration day={day} className="w-48 rounded-xl" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
        Day {day} · Encouragement
      </p>
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
        {content.title}
      </h1>
      <div className="h-px bg-[var(--color-border)] my-7" />

      {content.message.split('\n\n').map((para, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-4">
          {para}
        </p>
      ))}

      {/* Daily reminder — Day 1 only */}
      {day === 1 && supabase && user && reminderLoaded && (
        <div className="mt-8 rounded-xl bg-[var(--color-card-inner)] border border-[var(--color-border)] px-5 py-4">
          {reminderHour !== null ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  Daily reminder set
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  {HOUR_LABELS[reminderHour] || `${reminderHour}:00`} each morning
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80 transition-opacity"
              >
                Edit
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center gap-3 text-left"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent-tint)] flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  Set a daily reminder
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  Get a morning email to continue your practice
                </p>
              </div>
            </button>
          )}
        </div>
      )}

      <div className="mt-10 pb-2">
        <button
          onClick={onContinue}
          className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Done for Today
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>

      <ReminderModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        onDisable={handleDisable}
        currentHour={reminderHour}
        saving={saving}
      />
    </div>
  );
}
