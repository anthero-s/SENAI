/* ==========================================================
   API.JS — Camada de comunicação com o servidor.

   ROADMAP DESTE ARQUIVO:
   [✔] Aula 9  — Criado: buscarProdutos(), criarPedido(), buscarPedidos(),
                 deletarPedido(), atualizarStatusPedido().
                 BASE_URL centralizada — trocar uma linha muda todo o projeto.
                 Padrão: ler JSON antes do response.ok → usa dados.erro do servidor.
   [✔] Aula 10 — cadastrarProduto(dados) — POST /produtos.
                 Integração com cadastro.js: pratos salvos pelo admin
                 vão para o banco e aparecem no cardápio via buscarProdutos().
   [ ] Futuro  — editarProduto(id, dados) — PUT /produtos/:id.
                 excluirProduto(id) — DELETE /produtos/:id.
                 buscarCardapio(categoria) — GET /cardapio?categoria=X
                 para filtrar pratos por seção (Massas, Sobremesas, etc.).

   Carregado ANTES de main.js e pedidos.js em todos os HTMLs.
   ========================================================== */

const BASE_URL = "http://localhost:3000";

async function buscarProdutos() {
  const response = await fetch(`${BASE_URL}/produtos`);
  const dados = await response.json();
  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);
  return dados.dados;
}

// ─────────────────────────────────────────────────────────────────────────────
// cadastrarProduto(dados)
// POST /produtos — envia um novo prato para o banco de dados.
//
// Recebe um objeto com: nome, descricao, preco, categoria, imagem, disponivel.
// O servidor valida e salva — o front-end não precisa repetir essa lógica.
// ─────────────────────────────────────────────────────────────────────────────
async function cadastrarProduto(dados) {
  const response = await fetch(`${BASE_URL}/produtos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  const resultado = await response.json();
  if (!response.ok) throw new Error(resultado.erro || `Erro ${response.status}`);
  return resultado;
}

async function criarPedido(cliente, itens) {
  const response = await fetch(`${BASE_URL}/pedidos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cliente, itens }),
  });
  const dados = await response.json();
  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);
  return dados;
}

async function buscarPedidos() {
  const response = await fetch(`${BASE_URL}/pedidos`);
  const dados = await response.json();
  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);
  return dados;
}

async function deletarPedido(id) {
  const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
    method: "DELETE",
  });
  const dados = await response.json();
  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);
  return dados;
}

async function atualizarStatusPedido(id, novoStatus) {
  const response = await fetch(`${BASE_URL}/pedidos/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: novoStatus }),
  });
  const dados = await response.json();
  if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`);
  return dados;
}