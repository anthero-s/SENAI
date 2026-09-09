const express = require('express')
const produtoRoutes = require('./routes/produtoRoutes')

const app = express()

app.use(express.json())

// rotas
app.use('/produtos', produtoRoutes)

// middleware de erro
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        sucesso: false,
        mensagem: err.mensagem || 'Erro interno do servidor'
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})