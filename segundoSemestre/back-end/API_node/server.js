// Importa o Express, que serve para criar um servidor (site ou API)
import express from 'express'

// Cria o servidor e guarda ele na variável "app"
const app = express()

// Diz pro Express que o servidor vai entender requisições com dados em JSON
// Isso permite que você receba dados do cliente (como um POST) no formato JSON
app.use(express.json())


// Cria uma lista vazia chamada "users" (vai guardar os usuários)
const users = []

// Faz o servidor começar a funcionar na porta 3000
// Quando ele ligar, mostra a mensagem no console
app.listen(3000, () => console.log("Servidor Rodando!"))

// Cria uma rota GET em "/usuarios"
//  quando alguém acessar localhost:3000/usuarios, o código dentro dessa função vai rodar
app.get('/usuarios', (req, res) => {

 // Envia uma resposta para quem acessou a rota
// O status 200 significa que deu tudo certo
// Aqui estamos enviando o array "users" em formato JSON
// Se não tiver nenhum usuário ainda, vai enviar um array vazio: []
res.status(200).json(users)
})

// Cria uma rota POST em "/usuarios"
// Isso significa que quando alguém enviar dados para http://localhost:3000/usuarios, a função dentro vai rodar
app.post('/usuarios', (req, res) => {

  // Pega os dados enviados pelo cliente (no corpo da requisição) e adiciona dentro do array "users"
  users.push(req.body)

  res.status(200).json(req.body)
})



