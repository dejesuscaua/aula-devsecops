# devsecops-fiap

Laboratório da Aula 17 — DevSecOps Parte 1: Shift Left na prática.
FIAP | Engenharia de Software.

## Objetivo

Colocar dois "guardas" automáticos no pipeline do GitHub Actions:

| Guarda | Categoria | O que faz |
|---|---|---|
| **Gitleaks** | Secret scanning | Varre o histórico do Git atrás de senhas, tokens e chaves |
| **Semgrep** | SAST | Lê o código-fonte atrás de padrões vulneráveis |

Os dois rodam em `push` e em `pull_request`, definidos em
[`.github/workflows/security.yml`](.github/workflows/security.yml).

## Roteiro dos labs

1. **Lab 1** — repositório novo, pipeline limpo
2. **Lab 2** — job do Gitleaks no `security.yml`
3. **Lab 3** — clone local do repositório
4. **Lab 4** — vazamento proposital: commitar uma chave AWS **falsa** e ver o pipeline falhar
5. **Lab 5 e 6** — adicionar o job do Semgrep e conferir a aba Actions

## Aviso

O arquivo `config.js` contém uma chave AWS **falsa**, criada de propósito
para o Gitleaks encontrar. Ela não dá acesso a nada.

Lição do lab: apagar o arquivo **não** resolve — o Git guarda todo o
histórico. A única solução real para uma credencial vazada é **revogar**.
