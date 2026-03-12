-- Migration: Add course_started_at to user_progress for day-based unlocking
ALTER TABLE public.user_progress
  ADD COLUMN IF NOT EXISTS course_started_at timestamptz;
