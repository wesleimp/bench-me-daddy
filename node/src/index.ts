import express from "express"
import run from "./runner"

const app = express()

app.use(function(req, _res, next) {
  console.log(`[${req.method}] ${req.path}`)
  next()
})

app.get("/number", function(_req, res) {
  const mult = run()
  res.json({ ok: true, mult: mult })
})

app.listen(3001, function() {
  console.log("server running")
})
