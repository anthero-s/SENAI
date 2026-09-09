/*EXERCÍCIO 1 
CLASSE SIMPLES (pessoa)

Enunciado:
Crie uma classe chamada pessoa que possua:

- nome 
- idade

Crie um metodo apresentar() que exiba no console o nome e a idade da pessoa.*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade
    }
    apresentar(){
        console.log(`nome: ${this.nome}, idade: ${this.idade}`)
    }
}
const pessoa1 = new Pessoa ("Anthero", 17)
pessoa1.apresentar()





/*EXERCÍCIO 2: 
CLASSE SIMPLES (produto)*/

class Produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    mostarPreco(){
        console.log(`nome: ${this.nome}, preço: ${this.preco}`)
    }
}
const produto1 = new Produto ("Mouse Gamer", "R$499,00")
produto1.mostarPreco()





/*EXERCÍCIO 3:
HERANÇA (funcionario)*/

class Funcionario{
    constructor(nome){
        this.nome = nome 
    }
}
class Gerente extends Funcionario{
    constructor(nome, setor){
        super(nome)
        this.setor = setor 
    }
    mostrarDados(){
        console.log(`Funcionário: ${this.nome}, Setor: ${this.setor}`)
    }
}
const funcionario1 = new Gerente ("Ricardo", "TI")
funcionario1.mostrarDados()





/*EXERCÍCIO 4:
HERANÇA (carro)*/

class Veiculo{
    constructor(marca){
        this.marca = marca
    }
}
class Carro extends Veiculo{
    constructor(marca, modelo){
        super(marca)
        this.modelo = modelo
    }
    mostrarDados(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
    }
}
const veiculo1 = new Carro ("ferrari", "Spider")
veiculo1.mostrarDados()





/*EXERCÍCIO 5:
ENCAPSULAMENTO (conta)*/

class Conta{
    #saldo
    constructor(){
        this.#saldo = 0
    }
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor
        }else{
            console.log("valor incorreto")
        }
    }
    mostarSaldo(){
        console.log(`Saldo atual: R$${this.#saldo.toFixed(2)}`)
    }
}
const conta1 = new Conta()
conta1.depositar(200)
conta1.mostarSaldo()





/*EXERCÍCIO 6:
ENCAPSULAMENTO (aluno)*/

class Aluno{
    #nota
    constructor(){
        this.#nota = 0
    }
    definirNota(nota){
        if (nota > 0 && nota <= 10){
            this.#nota += nota
        }else{
            console.log("ERRO")
        }
    }
    mostrarNota(){
        console.log( `Sua nota é: ${this.#nota.toFixed(1)}`)
    }
}
const aluno1 = new Aluno()
aluno1.definirNota(10)
aluno1.mostrarNota()
