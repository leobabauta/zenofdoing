-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor > New Query)

-- Table: user_progress
create table public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  completed_screens text[] not null default '{}',
  current_lesson text not null default 'intro',
  updated_at timestamptz not null default now()
);

alter table public.user_progress enable row level security;

create policy "Users can read own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- Table: journal_entries
create table public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  entry_date timestamptz not null default now(),
  reflections jsonb not null default '[]',
  created_at timestamptz not null default now()
);

alter table public.journal_entries enable row level security;

create policy "Users can read own journal entries"
  on public.journal_entries for select
  using (auth.uid() = user_id);

create policy "Users can insert own journal entries"
  on public.journal_entries for insert
  with check (auth.uid() = user_id);

create index idx_journal_entries_user_date
  on public.journal_entries (user_id, entry_date desc);
