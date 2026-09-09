// ==========================
// EXERCÍCIO 1 - USUÁRIOS
// ==========================

// GET - listar todos
app.get('/usuario', async (req, res) => {
    try {
        const usuarios = await queryAsync("SELECT * FROM usuario");

        return res.status(200).json({
            success: true,
            message: "Usuários encontrados",
            data: usuarios
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro ao buscar usuários"
        });
    }
});

// GET - listar por ID
app.get('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await queryAsync(
            "SELECT * FROM usuario WHERE id = ?",
            [id]
        );

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Usuário encontrado",
            data: result[0]
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro ao buscar usuário"
        });
    }
});


// ==========================
// EXERCÍCIO 2 - PEDIDOS
// ==========================

const validarPedido = (cliente, valor) => {
    if (!cliente || valor === undefined) {
        return "cliente e valor são obrigatórios";
    }
    if (typeof valor !== "number" || valor <= 0) {
        return "valor inválido";
    }
    return null;
};

app.post('/pedidos', async (req, res) => {
    try {
        const { cliente, valor } = req.body;

        const erro = validarPedido(cliente, valor);
        if (erro) {
            return res.status(400).json({
                success: false,
                message: erro
            });
        }

        await queryAsync(
            "INSERT INTO pedidos (cliente, valor) VALUES (?, ?)",
            [cliente, valor]
        );

        return res.status(201).json({
            success: true,
            message: "Pedido criado"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro no servidor"
        });
    }
});


// ==========================
// EXERCÍCIO 3 - SALAS
// ==========================

const buscarSalaPorId = async (id) => {
    return await queryAsync(
        "SELECT * FROM salas WHERE id = ?",
        [id]
    );
};

// PUT - atualizar
app.put('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const dados = req.body;

        const sala = await buscarSalaPorId(id);

        if (sala.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Sala não encontrada"
            });
        }

        await queryAsync(
            "UPDATE salas SET ? WHERE id = ?",
            [dados, id]
        );

        return res.status(200).json({
            success: true,
            message: "Sala atualizada"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro ao atualizar sala."
        });
    }
});

// DELETE - deletar
app.delete('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const sala = await buscarSalaPorId(id);

        if (sala.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Sala não encontrada"
            });
        }

        await queryAsync(
            "DELETE FROM salas WHERE id = ?",
            [id]
        );

        return res.status(200).json({
            success: true,
            message: "Sala deletada"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro ao remover sala"
        });
    }
});