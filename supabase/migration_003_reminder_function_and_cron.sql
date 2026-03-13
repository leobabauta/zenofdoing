-- Function to find users whose daily reminder is due right now
-- Returns user_id and email for users whose local hour matches their reminder_hour
CREATE OR REPLACE FUNCTION public.get_due_reminders()
RETURNS TABLE(user_id UUID, email TEXT) AS $$
  SELECT r.user_id, u.email
  FROM public.daily_reminders r
  JOIN auth.users u ON u.id = r.user_id
  WHERE r.enabled = TRUE
    AND EXTRACT(HOUR FROM NOW() AT TIME ZONE r.timezone)::INT = r.reminder_hour;
$$ LANGUAGE sql SECURITY DEFINER;

-- Enable the required extensions for cron and HTTP
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Schedule the Edge Function to run every hour at minute 0
-- NOTE: Replace <service_role_key> with your actual service role key
-- You can find it in Supabase Dashboard > Settings > API > service_role key
-- SELECT cron.schedule(
--   'send-daily-reminders',
--   '0 * * * *',
--   $$
--   SELECT net.http_post(
--     url := 'https://qdvvwvnvwwaoguimkgbi.supabase.co/functions/v1/send-daily-reminders',
--     headers := jsonb_build_object(
--       'Authorization', 'Bearer <service_role_key>',
--       'Content-Type', 'application/json'
--     ),
--     body := '{}'::jsonb
--   );
--   $$
-- );
