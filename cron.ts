import { type ScheduledHandler } from "https://deno.land/x/hono@v4.3.5/types.ts"

export const scheduled: ScheduledHandler = async (_controller, env, _ctx) => {
  const apiKey = env.RESEND_API_KEY
  const from = "onboarding@resend.dev" // hoặc email đã xác minh
  const to = "tranichhoang2001@gmail.com"   // 👈 sửa email nhận tại đây

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      subject: "🔔 Cron Test from Deno Deploy",
      html: `<p>This email was sent at ${new Date().toISOString()} from your Deno cron job! 🚀</p>`
    })
  })

  const result = await res.json()
  console.log("📬 Email sent result:", result)
}
