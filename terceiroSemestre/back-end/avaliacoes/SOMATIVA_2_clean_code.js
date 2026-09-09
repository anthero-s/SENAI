// =============================================================================
// MÉTODO PARA ATUALIZAR PRODUTO NO BANCO
// =============================================================================

// Essa rota recebe um ID e os dados para dar update no produto
app.put('/produtos/update/:id_produtos', async (req, res) => {
    try {
        const id = Number(req.params.id_produtos)
        const dados = req.body

        const listarProdutoPorId = await queryAsync("SELECT * FROM produtos WHERE id = ?", [id])

    // Se o tamanho da lista for zero significa que não achou
        if (listarProdutoPorId.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Produto não foi encontrado."
            });
        }else {
            if (typeof dados !== "number" || valor >= 0){
                
            if (dados.nome != "")
                await queryAsync("UPDATE produtos SET ? WHERE id = ?", [dados, id])

        return res.status(200).json({
            success: true,
            message: "produto foi atualizado."
        });

            } else{
                res.send("Produto sem nome.")
            }
        }else {
            res.send("valor do produto inválido.")
        }
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro ao atualizar produto."
        });
    }
});

