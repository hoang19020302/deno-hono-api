import { Hono } from 'https://deno.land/x/hono@v4.3.5/mod.ts'
import { scheduled } from './cron.ts'
const app = new Hono()

app.get('/', (c) => c.text('Hello from Deno Deploy! 🎉'))

// Bạn có thể thêm route khác như:
app.get('/api/hello', (c) => c.json({ msg: "Hi! Deno Deploy! 🎉" }))

Deno.cron("send main cron", "* * * * *", scheduled);

Deno.serve(app.fetch)
