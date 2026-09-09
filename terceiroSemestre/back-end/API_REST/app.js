import express from "express"

const app = express()

app.use(express.json())

const filmes = [
    {
        id: 1,
        nome: "Java - Como programar, em filme",
        produtora: "anthero´s films",
        genero: "suspense",
        ano_lancamento: 2020
    },
    {


        id: 2,
        nome: "Java - Como NÃO programar, em filme",
        produtora: "jonas´s films",
        genero: "terror",
        ano_lancamento: 2018
    }
]

function buscarFilme(id) {
    return filmes.findIndex(filmes => {
        return filmes.id === Number(id)
    })
    //
}

app.get("/", (req, res) => {
    res.status(200).send("Crud de filmes estilo netflix")
})

app.get("/filmes", (req, res) => {
    res.status(200).json(filmes)
})

app.get("/filmes/:id", (req, res) => {
    const index = buscarFilme(req.params.id)
    res.status(200).json(filmes[index])
})

app.post("/filmes", (req, res) => {
    filmes.push(req.body)
    res.status(201).json(filmes)
})//

app.put("/filmes/:id", (req, res) => {
    const index = buscarFilme(req.params.id)

    filmes[index].nome = req.body.nome

    res.status(200).json(filmes[index])
})

app.delete("/delete/:id", (req, res) => {
    const index = buscarFilme(req.params.id)
    filmes.splice(index, 1)
    res.status(200).send(deletado)
})

export default app