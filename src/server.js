const express = require("express");
const { createCharge, getCharge } = require("./payments");

function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "payments" });
  });

  app.get("/ready", (_req, res) => {
    res.json({ ready: true, service: "payments" });
  });

  app.post("/charges", (req, res) => {
    try {
      res.status(201).json(createCharge(req.body));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  app.get("/charges/:id", (req, res) => {
    const charge = getCharge(req.params.id);
    if (!charge) {
      return res.status(404).json({ error: "not found" });
    }
    res.json(charge);
  });

  return app;
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createApp().listen(port, () => {
    console.log(`payments api listening on ${port}`);
  });
}

module.exports = { createApp };
