async function cadastrarProduto(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const descricao = document.querySelector("#descricao").value.trim();
  const preco = Number(document.querySelector("#preco").value);
  const categoria = document.querySelector("#categoria").value.trim();
  const imagem = document.querySelector("#imagem").value.trim();

  if (!nome || !descricao || preco <= 0) {
    alert("Preencha os campos corretamente.");
    return;
  }

  const produto = { nome, descricao, preco, categoria, imagem, disponivel: true };

  try {
    const response = await fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto)
    });

    if (!response.ok) throw new Error("Erro ao cadastrar");

    alert("Produto cadastrado com sucesso!");
    document.querySelector("#form-cadastro").reset();

    setTimeout(() => { window.location.href = "index.html"; }, 1000);

  } catch (erro) {
    console.error(erro);
    alert("Erro ao cadastrar produto. Verifique o servidor.");
  }
}

// ✅ ISSO QUE ESTAVA FALTANDO
document.querySelector("#form-cadastro")
  .addEventListener("submit", cadastrarProduto);