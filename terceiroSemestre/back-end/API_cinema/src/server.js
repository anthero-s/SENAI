const pool = require('./config/database')

require('dotenv').config()

const app = require("./app")

const PORT = 3000;

pool.getConnection((err, connection) => {
    if(err){
        console.error('Erro ao conectar ao banco de dados:', err)
        process.exit(1)
    }

    console.log('Conectado ao Mysql!')
    connection.release()
})

app.listen(PORT, () =>{
    console.log("Servidor Rodando!")
})