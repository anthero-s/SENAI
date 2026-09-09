const ProdutoService = require('../services/ProdutoService')

class ProdutoController {
    async listar(req, res) {
        try {
            const resultado = await ProdutoService.listarProdutos()
            res.json(resultado)
        } catch (erro) {
            res.status(500).json({
                sucesso: false,
                message: erro.message || 'Erro interno do servidor.',
                erro: erro
            })
        }
    }

    async buscarPorId(req, res) {
        try {
            const resultado = await ProdutoService.buscarProdutoPorId(req.params.id)

            if (!resultado) {
                return res.status(404).json({
                    sucesso: false,
                    message: 'Produto não encontrado.'
                })
            }

            res.json(resultado)
        } catch (erro) {
            res.status(500).json({
                sucesso: false,
                message: erro.message || 'Erro interno do servidor.',
                erro: erro
            })
        }
    }

    async atualizar(req, res) {
        try {
            const resultado = await ProdutoService.atualizarProduto(req.params.id, req.body)
            res.json({
                sucesso: true,
                dados: resultado
            })

        } catch (erro) {
            res.status(500).json({
                sucesso: false,
                message: erro.message || 'Erro interno do servidor.',
                erro: erro
            })
        }
    }

    async cadastrar(req, res) {
        try {
            const resultado = await ProdutoService.cadastrarProduto(req.body)
            res.status(201).json({
                sucesso: true,
                dados: resultado
            })

        } catch (erro) {
            res.status(500).json({
                sucesso: false,
                message: erro.message || 'Erro interno do servidor.',
                erro: erro
            })
        }
    }
    async deletar(req, res) {
        try {
            const resultado = await ProdutoService.deletarProduto(req.body)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(500).json({
                sucesso: false,
                message: erro.message || 'Erro interno do servidor.',
                erro: erro
            })
        }
    }
}

module.exports = new ProdutoController()