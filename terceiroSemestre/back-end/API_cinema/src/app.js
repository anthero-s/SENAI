const express = require("express");
const pool = require("./config/database");

const app = express();

app.use(express.json());

const queryAsync = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

app.get("/", (req, res) => {
  res.send("API CINEMA");
});

app.get("/filmes", async (req, res) => {
  try {
    const filmes = await queryAsync("SELECT * FROM filme");

    res.json({
      sucesso: true,
      dados: filmes,
      total: filmes.length,
    });
  } catch (erro) {
    console.error("Erro ao listar filmes:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar filmes",
      erro: erro.message,
    });
  }
});

app.get("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de filme inválido",
      });
    }

    const filme = await queryAsync("SELECT * FROM filme WHERE id = ?", [id]);

    if (filme.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado",
      });
    }

    res.json({
      sucesso: true,
      dados: filme[0],
    });
  } catch (erro) {
    console.error("Erro ao buscar filme:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao buscar filme",
      erro: erro.message,
    });
  }
});

app.post("/filmes", async (req, res) => {
  try {
    const { titulo, genero, duracao, classificacao, data_lancamento } =
      req.body;

    if (!titulo || !genero || !duracao) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Titulo, genero e duracao são obrigatórios",
      });
    }

    if (typeof duracao !== "number" || duracao <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Duração deve ser um número positivo",
      });
    }

    const novoFilme = {
      titulo: titulo.trim(),
      genero: genero.trim(),
      duracao: duracao,
      classificacao: classificacao ? classificacao.trim() : null,
      data_lancamento: data_lancamento || null,
    };

    const resultado = await queryAsync("INSERT INTO filme SET ?", [novoFilme]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Filme criado com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar filme:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar filme",
      erro: erro.message,
    });
  }
});

app.put("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, genero, duracao, classificacao, data_lancamento } =
      req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de filme inválido",
      });
    }

    const filmeExiste = await queryAsync("SELECT * FROM filme WHERE id = ?", [
      id,
    ]);

    if (filmeExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado",
      });
    }

    const filmeAtualizado = {};

    if (titulo !== undefined) filmeAtualizado.titulo = titulo.trim();
    if (genero !== undefined) filmeAtualizado.genero = genero.trim();

    if (duracao !== undefined) {
      if (typeof duracao !== "number" || duracao <= 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "Duração deve ser um número positivo",
        });
      }
      filmeAtualizado.duracao = duracao;
    }

    if (classificacao !== undefined)
      filmeAtualizado.classificacao = classificacao.trim();

    if (data_lancamento !== undefined)
      filmeAtualizado.data_lancamento = data_lancamento;

    if (Object.keys(filmeAtualizado).length === 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nenhum campo para atualizar",
      });
    }

    await queryAsync("UPDATE filme SET ? WHERE id = ?", [filmeAtualizado, id]);

    res.json({
      sucesso: true,
      mensagem: "Filme atualizado",
    });
  } catch (erro) {
    console.error("Erro ao atualizar filme:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar filme",
      erro: erro.message,
    });
  }
});

app.delete("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de filme inválido",
      });
    }

    const filmeExiste = await queryAsync(
      "SELECT * FROM filme WHERE id = ?",
      [id]
    );

    if (filmeExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado",
      });
    }

    await queryAsync("DELETE FROM filme WHERE id = ?", [id]);

    res.json({
      sucesso: true,
      mensagem: "Filme apagado com sucesso",
    });
  } catch (erro) {
    console.error("Erro ao apagar filme", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao deletar filme",
      erro: erro.message,
    });
  }
});

app.get("/salas", async (req, res) => {
  try {
    const salas = await queryAsync("SELECT * FROM sala");

    res.json({
      sucesso: true,
      dados: salas,
      total: salas.length,
    });
  } catch (erro) {
    console.error("Erro ao listar salas:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar salas",
      erro: erro.message,
    });
  }
});

app.get("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sala inválido",
      });
    }

    const sala = await queryAsync("SELECT * FROM sala WHERE id = ?", [id]);

    if (sala.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sala não encontrada",
      });
    }

    res.json({
      sucesso: true,
      dados: sala[0],
    });
  } catch (erro) {
    console.error("Erro ao buscar sala:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao buscar sala",
      erro: erro.message,
    });
  }
});

app.post("/salas", async (req, res) => {
  try {
    const { nome, capacidade, tipo } = req.body;

    if (!nome || !capacidade) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nome e capacidade são obrigatórios",
      });
    }

    if (typeof capacidade !== "number" || capacidade <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Capacidade deve ser um número positivo",
      });
    }

    const novaSala = {
      nome: nome.trim(),
      capacidade,
      tipo: tipo ? tipo.trim() : null,
    };

    const resultado = await queryAsync("INSERT INTO sala SET ?", [novaSala]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Sala criada com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar sala:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar sala",
      erro: erro.message,
    });
  }
});

app.put("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, capacidade, tipo } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sala inválido",
      });
    }

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [id]);

    if (salaExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sala não encontrada",
      });
    }

    const salaAtualizada = {};

    if (nome !== undefined) salaAtualizada.nome = nome.trim();

    if (capacidade !== undefined) {
      if (typeof capacidade !== "number" || capacidade <= 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "Capacidade deve ser um número positivo",
        });
      }
      salaAtualizada.capacidade = capacidade;
    }

    if (tipo !== undefined) salaAtualizada.tipo = tipo.trim();

    if (Object.keys(salaAtualizada).length === 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nenhum campo para atualizar",
      });
    }

    await queryAsync("UPDATE sala SET ? WHERE id = ?", [
      salaAtualizada,
      id,
    ]);

    res.json({
      sucesso: true,
      mensagem: "Sala atualizada",
    });
  } catch (erro) {
    console.error("Erro ao atualizar sala:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar sala",
      erro: erro.message,
    });
  }
});

app.delete("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sala inválido",
      });
    }

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [id]);

    if (salaExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sala não encontrada",
      });
    }

    await queryAsync("DELETE FROM sala WHERE id = ?", [id]);

    res.json({
      sucesso: true,
      mensagem: "Sala apagada com sucesso",
    });
  } catch (erro) {
    console.error("Erro ao apagar sala", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao deletar sala",
      erro: erro.message,
    });
  }
});

app.get("/sessoes", async (req, res) => {
  try {
    const sessoes = await queryAsync("SELECT * FROM sessao");

    res.json({
      sucesso: true,
      dados: sessoes,
      total: sessoes.length,
    });
  } catch (erro) {
    console.error("Erro ao listar sessoes", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar sessoes",
      erro: erro.message,
    });
  }
});

app.get("/sessoes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sessão inválido",
      });
    }

    const sessao = await queryAsync(
      "SELECT * FROM sessao WHERE id = ?",
      [id]
    );

    if (sessao.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sessão não encontrada",
      });
    }

    res.json({
      sucesso: true,
      dados: sessao[0],
    });
  } catch (erro) {
    console.error("Erro ao buscar sessao", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao buscar sessao",
      erro: erro.message,
    });
  }
});

app.post("/sessoes", async (req, res) => {
  try {
    const { filme_id, sala_id, horario } = req.body;

    if (!filme_id || !sala_id || !horario) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "filme_id, sala_id e horario são obrigatórios",
      });
    }

    const novaSessao = {
      filme_id,
      sala_id,
      horario,
    };

    const resultado = await queryAsync(
      "INSERT INTO sessao SET ?",
      [novaSessao]
    );

    res.status(201).json({
      sucesso: true,
      mensagem: "Sessão criada com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar sessao:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar sessao",
      erro: erro.message,
    });
  }
});

app.put("/sessoes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { filme_id, sala_id, horario } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sessão inválido",
      });
    }

    const sessaoExiste = await queryAsync(
      "SELECT * FROM sessao WHERE id = ?",
      [id]
    );

    if (sessaoExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sessão não encontrada",
      });
    }

    const sessaoAtualizada = {};

    if (filme_id !== undefined) sessaoAtualizada.filme_id = filme_id;
    if (sala_id !== undefined) sessaoAtualizada.sala_id = sala_id;
    if (horario !== undefined) sessaoAtualizada.horario = horario;

    if (Object.keys(sessaoAtualizada).length === 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nenhum campo para atualizar",
      });
    }

    await queryAsync("UPDATE sessao SET ? WHERE id = ?", [
      sessaoAtualizada,
      id,
    ]);

    res.json({
      sucesso: true,
      mensagem: "Sessão atualizada",
    });
  } catch (erro) {
    console.error("Erro ao atualizar sessao:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar sessao",
      erro: erro.message,
    });
  }
});

app.delete("/sessoes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sessão inválido",
      });
    }

    const sessaoExiste = await queryAsync(
      "SELECT * FROM sessao WHERE id = ?",
      [id]
    );

    if (sessaoExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sessão não encontrada",
      });
    }

    await queryAsync("DELETE FROM sessao WHERE id = ?", [id]);

    res.json({
      sucesso: true,
      mensagem: "Sessão apagada com sucesso",
    });
  } catch (erro) {
    console.error("Erro ao apagar sessao", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao deletar sessao",
      erro: erro.message,
    });
  }
});

app.get("/ingressos", async (req, res) => {
  try {
    const ingressos = await queryAsync("SELECT * FROM ingresso");

    res.json({
      sucesso: true,
      dados: ingressos,
      total: ingressos.length,
    });
  } catch (erro) {
    console.error("Erro ao listar ingressos:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar ingressos",
      erro: erro.message,
    });
  }
});

app.get("/ingressos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de ingresso inválido",
      });
    }

    const ingresso = await queryAsync(
      "SELECT * FROM ingresso WHERE id = ?",
      [id]
    );

    if (ingresso.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Ingresso não encontrado",
      });
    }

    res.json({
      sucesso: true,
      dados: ingresso[0],
    });
  } catch (erro) {
    console.error("Erro ao buscar ingresso:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao buscar ingresso",
      erro: erro.message,
    });
  }
});

app.post("/ingressos", async (req, res) => {
  try {
    const { sessao_id, assento, preco } = req.body;

    if (!sessao_id || !assento || preco === undefined) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "sessao_id, assento e preco são obrigatórios",
      });
    }

    if (typeof preco !== "number" || preco < 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Preço deve ser um número válido",
      });
    }

    const novoIngresso = {
      sessao_id,
      assento: assento.trim(),
      preco,
    };

    const resultado = await queryAsync(
      "INSERT INTO ingresso SET ?",
      [novoIngresso]
    );

    res.status(201).json({
      sucesso: true,
      mensagem: "Ingresso criado com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar ingresso:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar ingresso",
      erro: erro.message,
    });
  }
});

app.put("/ingressos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { sessao_id, assento, preco } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de ingresso inválido",
      });
    }

    const ingressoExiste = await queryAsync(
      "SELECT * FROM ingresso WHERE id = ?",
      [id]
    );

    if (ingressoExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Ingresso não encontrado",
      });
    }

    const ingressoAtualizado = {};

    if (sessao_id !== undefined) ingressoAtualizado.sessao_id = sessao_id;

    if (assento !== undefined)
      ingressoAtualizado.assento = assento.trim();

    if (preco !== undefined) {
      if (typeof preco !== "number" || preco < 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "Preço inválido",
        });
      }
      ingressoAtualizado.preco = preco;
    }

    if (Object.keys(ingressoAtualizado).length === 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nenhum campo para atualizar",
      });
    }

    await queryAsync("UPDATE ingresso SET ? WHERE id = ?", [
      ingressoAtualizado,
      id,
    ]);

    res.json({
      sucesso: true,
      mensagem: "Ingresso atualizado",
    });
  } catch (erro) {
    console.error("Erro ao atualizar ingresso:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar ingresso",
      erro: erro.message,
    });
  }
});

app.delete("/ingressos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de ingresso inválido",
      });
    }

    const ingressoExiste = await queryAsync(
      "SELECT * FROM ingresso WHERE id = ?",
      [id]
    );

    if (ingressoExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Ingresso não encontrado",
      });
    }

    await queryAsync("DELETE FROM ingresso WHERE id = ?", [id]);

    res.json({
      sucesso: true,
      mensagem: "Ingresso apagado com sucesso",
    });
  } catch (erro) {
    console.error("Erro ao apagar ingresso:", erro);

    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao deletar ingresso",
      erro: erro.message,
    });
  }
});

module.exports = app;
