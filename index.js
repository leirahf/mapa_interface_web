// Importa o Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Variável para armazenar a mensagem
let mensagemArmazenada = "";

// Endpoint para armazenar a mensagem (POST)
app.post('/api/armazenar_mensagem', (req, res) => {
  mensagemArmazenada = req.body.conteudo;
  res.json({ status: "Mensagem armazenada com sucesso" });
});

// Endpoint para recuperar a mensagem (GET)
app.get('/api/obter_mensagem', (req, res) => {
  res.json({ conteudo: mensagemArmazenada });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
