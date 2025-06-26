import { Hono } from 'https://deno.land/x/hono@v4.3.5/mod.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello from Deno Deploy! 🎉'))

// Bạn có thể thêm route khác như:
app.get('/api/hello', (c) => c.json({ msg: "Hi! Deno Deploy! 🎉" }))

Deno.serve(app.fetch)
