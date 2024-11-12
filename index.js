// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080; // Usa a porta 8080 explicitamente


// Middleware para processar JSON
app.use(express.json());

let ultimaMensagem = "Nenhuma mensagem recebida ainda.";

// Rota para receber a mensagem enviada pelo SIM800L
app.post('/mensagem', (req, res) => {
  const { mensagem } = req.body;
  
  if (mensagem) {
    ultimaMensagem = mensagem; // Armazena a mensagem recebida
    res.status(200).json({ status: "Mensagem recebida com sucesso!" });
  } else {
    res.status(400).json({ status: "Erro: Nenhuma mensagem foi enviada." });
  }
});

// Rota para obter a última mensagem recebida
app.get('/mensagem', (req, res) => {
  res.json({ mensagem: ultimaMensagem });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
