import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const APP_URL = "https://zenofdoing.love";

Deno.serve(async (req) => {
  // Verify this is called from cron or with proper auth
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  // Find users whose local hour matches their reminder_hour
  const { data: reminders, error } = await supabase.rpc("get_due_reminders");

  if (error) {
    console.error("Error fetching reminders:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!reminders || reminders.length === 0) {
    return new Response(JSON.stringify({ sent: 0 }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  let sent = 0;
  const errors: string[] = [];

  for (const reminder of reminders) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Zen of Doing <reminders@zenofdoing.love>",
          to: [reminder.email],
          subject: "Your daily practice awaits",
          html: buildEmailHtml(),
        }),
      });

      if (res.ok) {
        sent++;
      } else {
        const body = await res.text();
        errors.push(`${reminder.email}: ${res.status} ${body}`);
      }
    } catch (err) {
      errors.push(`${reminder.email}: ${err}`);
    }
  }

  console.log(`Sent ${sent} reminders, ${errors.length} errors`);
  if (errors.length > 0) console.error("Errors:", errors);

  return new Response(JSON.stringify({ sent, errors: errors.length }), {
    headers: { "Content-Type": "application/json" },
  });
});

function buildEmailHtml(): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#ede6f5; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#c4b8d4,#d8d0e8); padding:32px 32px 24px; text-align:center;">
              <p style="font-size:32px; margin:0;">🪷</p>
              <h1 style="color:#24223a; font-size:20px; font-weight:700; margin:12px 0 0;">Zen of Doing</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="color:#24223a; font-size:16px; line-height:1.6; margin:0 0 8px;">
                Good morning!
              </p>
              <p style="color:#5e567a; font-size:15px; line-height:1.6; margin:0 0 24px;">
                This is your gentle reminder to continue your practice today. Even a few mindful minutes can make a difference. Show up with ease and see what unfolds.
              </p>
              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background:#8b6aae; border-radius:50px; padding:12px 28px;">
                    <a href="${APP_URL}" style="color:#ffffff; text-decoration:none; font-size:14px; font-weight:600;">
                      Continue Your Practice
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px; text-align:center;">
              <p style="color:#a89bbe; font-size:12px; margin:0;">
                You're receiving this because you set a daily reminder on Zen of Doing.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
