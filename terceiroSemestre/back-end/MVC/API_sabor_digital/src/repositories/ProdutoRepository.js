const pool = require('../config/DataBase')

class ProdutoRepository {
    async listarTodosProdutos() {
        const [listaTodosProdutos] = await pool.query('SELECT * FROM produto')

        return listaTodosProdutos
    }

    async buscarPorId(id) {
        const [produto] = await pool.query('SELECT * FROM produtos WHERE id = ?', [id])

        return produto[0]
    }
    async cadastrarNovoProduto(dados) {
        const { nome, descricao, preco, categoria, disponivel } = dados

        const [resultado] = await pool.query(
            `INSERT INTO produto (nome, descricao, preco, categoria, disponivel)
         VALUES (?, ?, ?, ?, ?)`,
            [nome, descricao, preco, categoria, disponivel])

        return id.insertId
    }

    async atualizarProdutoPorId(id, dados) {
        const nomeCampo = []
        const valorCampo = []

        for (const [key, value] of Object.entries(dados)) {
            nomeCampo.push(`${key} = ?`)
            valorCampo.push(value)
        }

        if (nomeCampo.length === 0) return null

        valorCampo.push(id)

        const query = `UPDATE produto SET ${nomeCampo.join(',')} WHERE id = ?`

        const produtoAtualizado = await pool.query(query, valorCampo)

        return produtoAtualizado.affectedRows
    }

    async deletarProdutosPorId(id) {
        const [resultado] = await pool.query(
            'DELETE FROM produto WHERE id = ?',
            [id]
        )

        return resultado.affectedRows
    }
}

module.exports = new ProdutoRepository()