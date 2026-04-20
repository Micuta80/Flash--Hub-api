const express = require("express");
const app = express();

// Permitir JSON
app.use(express.json());

// 🔍 TESTE (para ver se o servidor está vivo)
app.get("/api/status", (req, res) => {
  res.send("online");
});

// 📩 WEBHOOK DA WISE (a “porta”)
app.post("/api/webhook/wise", (req, res) => {
  console.log("📩 Mensagem da Wise:", req.body);

  // responder sempre OK
  res.sendStatus(200);
});

// Porta obrigatória
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Servidor rodando");
});
