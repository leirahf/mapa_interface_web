// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Defina a mensagem que será enviada
const mensagem = " mensagem teste contida no servidor!!!  ";

app.get('/mensagem', (req, res) => {
  // Rota que retorna a mensagem
  res.json({ mensagem });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
