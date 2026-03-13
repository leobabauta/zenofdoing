import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { DayIllustration } from '../ui/Illustrations';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase || !email.trim()) return;

    setLoading(true);
    setError('');

    const { error: authError } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: window.location.origin + window.location.pathname,
      },
    });

    setLoading(false);
    if (authError) {
      setError(authError.message);
    } else {
      setSent(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center px-4 py-10">
      <div className="w-full max-w-[640px] bg-[var(--color-card)] rounded-3xl shadow-[0_4px_6px_rgba(0,0,0,0.07),0_20px_50px_rgba(0,0,0,0.12),0_0_40px_rgba(139,106,174,0.2)] overflow-hidden flex flex-col">
        <div className="px-10 pt-12 pb-4">
          <DayIllustration day={1} className="w-full mb-6 rounded-xl" />

          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight text-center">
            Zen of Doing
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)] text-center">
            A mini course in doing things with ease
          </p>
        </div>

        <div className="px-10 pb-12 pt-6">
          {sent ? (
            <div className="rounded-2xl bg-[var(--color-card-inner)] border border-[var(--color-border)] p-6 text-center">
              <p className="text-[var(--color-text-primary)] font-medium">
                Check your email
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                We sent a magic link to <strong>{email}</strong>. Click it to sign in.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
              >
                Try a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card-inner)] px-4 py-3 text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none transition-colors"
                />
              </div>
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[var(--color-accent)] px-4 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                {loading ? 'Sending...' : 'Send magic link'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
