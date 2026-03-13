import { useState } from 'react';
import { createPortal } from 'react-dom';

const HOUR_OPTIONS = [
  { value: 5, label: '5:00 AM' },
  { value: 6, label: '6:00 AM' },
  { value: 7, label: '7:00 AM' },
  { value: 8, label: '8:00 AM' },
  { value: 9, label: '9:00 AM' },
  { value: 10, label: '10:00 AM' },
];

interface ReminderModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (hour: number) => void;
  onDisable: () => void;
  currentHour: number | null;
  saving: boolean;
}

export function ReminderModal({ open, onClose, onSave, onDisable, currentHour, saving }: ReminderModalProps) {
  const [selectedHour, setSelectedHour] = useState(currentHour ?? 7);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] p-8 w-full max-w-sm shadow-xl">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
          Set Daily Reminder
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          We'll send a gentle reminder to your email each morning.
        </p>

        <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
          Reminder time
        </label>
        <select
          value={selectedHour}
          onChange={(e) => setSelectedHour(Number(e.target.value))}
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card-inner)] px-4 py-3 text-[15px] text-[var(--color-text-primary)] mb-6 outline-none focus:border-[var(--color-accent)]"
        >
          {HOUR_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <button
          onClick={() => onSave(selectedHour)}
          disabled={saving}
          className="w-full rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Reminder'}
        </button>

        {currentHour !== null && (
          <button
            onClick={onDisable}
            disabled={saving}
            className="w-full mt-2 rounded-full px-6 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors disabled:opacity-50"
          >
            Turn off reminder
          </button>
        )}

        <button
          onClick={onClose}
          className="w-full mt-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors py-2"
        >
          Cancel
        </button>
      </div>
    </div>,
    document.body
  );
}
