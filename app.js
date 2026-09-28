// ATENCAO: codigo vulneravel DE PROPOSITO.
// Existe para o Semgrep (SAST) encontrar falhas reais no pipeline.
// Nao use nada disso em producao.

const express = require("express");
const { exec } = require("child_process");

const app = express();

// FALHA 1 - Command Injection
// O input do usuario entra direto na linha de comando do sistema.
// Um ?host=8.8.8.8;rm -rf / executa o que vier depois do ponto e virgula.
app.get("/ping", (req, res) => {
  exec("ping -c 1 " + req.query.host, (err, stdout) => {
    res.send(stdout);
  });
});

// FALHA 2 - Code Injection via eval
// eval executa como codigo qualquer coisa que o usuario mandar.
app.get("/calc", (req, res) => {
  const resultado = eval(req.query.expr);
  res.send(String(resultado));
});

// FALHA 3 - Cross-Site Scripting (XSS) refletido
// O valor do usuario volta no HTML sem nenhuma sanitizacao.
app.get("/ola", (req, res) => {
  res.send("<h1>Ola, " + req.query.nome + "</h1>");
});

app.listen(3000);
