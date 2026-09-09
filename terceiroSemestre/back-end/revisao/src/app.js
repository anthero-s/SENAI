import express from 'express'

const app = express()

app.use(express.json())

const musicas = [
    {
        id:223,
        titulo: "Ppoulas",
        artista: "Yago Oproprio",
        genero: "Hip Hop",
        ano_publicacao: 2024
    }
]

function buscarMusica(id){
    return musicas.findIndex(m=> {
        return m.id === Number(id)
    })
}

app.get("/musicas", (req, res) => {
    res.status(200).json(musicas)
})

export default app



