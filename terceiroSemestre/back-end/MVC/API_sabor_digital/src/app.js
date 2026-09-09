const express = require('express')
const app = express()

const produtoRoutes = require('./routes/produto.routes')

app.use(express.json())


app.use('/produtos', produtoRoutes)

module.exports = app