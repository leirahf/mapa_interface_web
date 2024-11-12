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

// Endpoint alternativo para armazenar a mensagem via GET
app.get('/api/armazenar_mensagem_get', (req, res) => {
  const mensagem = req.query.mensagem; // Recupera o parâmetro "mensagem" da query string
  if (mensagem) {
    mensagemArmazenada = mensagem;
    res.json({ status: "Mensagem armazenada com sucesso (via GET)" });
  } else {
    res.status(400).json({ status: "Erro: Mensagem não fornecida!" });
  }
});

// Endpoint para recuperar a mensagem (GET)
app.get('/api/obter_mensagem', (req, res) => {
  res.json({ conteudo: mensagemArmazenada });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
