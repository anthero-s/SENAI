//EXERCÍCIO 1:

// class InstrumentoMusical {
//     tocar(){
//     console.log("Tocar um instrumento") 
//     }
// }
// class Violao extends InstrumentoMusical{
//     tocar(){
//         console.log("Tocando violão")     
//     }
// }
// class Piano extends InstrumentoMusical{
//     tocar(){
//         console.log("Tocando piano")
//     }
// }
// let v = new Violao
// v.tocar()
// let p = new Piano
// p.tocar()




//EXERCÍCIO 2: 

// class Funcionario {
//     constructor(nome, salario) {
//         this.nome = nome
//         this.salario = salario
//     }
//     sla() {
//         return `O funcionário ${this.nome} recebe ${this.salario} reais.`
//     }
// }
// class Gerente extends Funcionario {
//     constructor(nome, salario, bonus) {
//         super(nome, salario)
//         this.bonus = bonus
//     }
//     sla() {
//         return `${super.sla()} O gerente ganha um bônus de: ${this.bonus} reais.`
//     }
// }
// let func = new Funcionario("Buiu", 1300)
// let ger = new Gerente("Buiu" ,1300, 600)

// console.log(func.sla())
// console.log(ger.sla())




//EXERCÍCIO 3:

// class Veiculo {
//     constructor(marca, ano) {
//         this.marca = marca
//         this.ano = ano
//     }
//     sla() {
//         return (`o veículo da marca ${this.marca} foi lançado no ano ${this.ano}.`)
//     }
// }
// class Carro extends Veiculo{
//     constructor(portas, marca, ano){
//         super (portas, marca, ano)
//     this.portas = portas 
//     }
//     sla() {
//         return (`Um carro tem ${this.portas} portas.`)
//     }
// }
// class Moto extends Veiculo{
//     constructor(cilindradas, marca, ano){
//         super (cilindradas, marca, ano)
//         this.cilindradas = cilindradas
//     }
//     sla(){
//         return (`A moto mt-03 tem ${this.cilindradas} cilindradas.`)
//     }
// }
// let v = new Veiculo ("honda", 2001)
// let c = new Carro (4)
// let m = new Moto (321)
// console.log(v.sla())
// console.log(c.sla())
// console.log(m.sla())




//EXERCÍCIO 4:

// class Funcionario {
//     constructor(salarioB) {
//         this.salarioB = salarioB
//     }
//     calcularSalario() {
//         return this.salarioB
//     }
// }
// class Gerente extends Funcionario 
//     constructor(salarioB, bonus) {
//         super(salarioB)
//         this.bonus = bonus
//     }
//     calcularSalario() {
//         let salario = this.salarioB + (this.salarioB * 0.3) + this.bonus
//         return `O gerente recebe ${salario} reais`
//     }
// }

// class Desenvolvidor extends Funcionario {
//     constructor(salarioB, adicional) {
//         super(salarioB)
//         this.adicional = adicional
//     }
//     calcularSalario() {
//         let salario = this.salarioB + (this.adicional * 0.2)
//         return `O desenvolvidor recebe ${salario} reais`
//     }
// }

// let g = new Gerente(3000, 500)
// let d = new Desenvolvidor(2000, 400) 

// console.log(g.calcularSalario())
// console.log(d.calcularSalario())




//EXERCÍCIO 5:

class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`)
        } else {
            console.log("Valor inválido para depósito.")
        }
    }
    sacar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor
            console.log(`Saque de ${valor} reais realizado. Saldo atual: R$${this.saldo}`)
        } else {
            console.log("Saldo insuficiente ou valor inválido.")
        }
    }
}
class ContaCorrente extends ContaBancaria {
    sacar(valor) {
        const taxa = 2
        const total = valor + taxa
     if (valor > 0 && this.saldo >= total) {
         this.saldo -= total
        console.log(`Saque de ${valor} reais realizado com taxa de R$${taxa}. Saldo atual: R$${this.saldo}`)
 } else {
          console.log("Saldo insuficiente ou valor inválido.")
       }
    }
}
class ContaPoupanca extends ContaBancaria {
    atualizarSaldo() {
     const rendimento = this.saldo * 0.05
      this.saldo += rendimento
      console.log(`Rendimento de R$${rendimento.toFixed(2)} aplicado. Saldo atual: R$${this.saldo.toFixed(2)}`)
    }
}
let cc = new ContaCorrente("Ana", 1000)
cc.sacar(100)  
cc.depositar(500)

let cp = new ContaPoupanca("Carlos", 2000)
cp.atualizarSaldo() 
cp.sacar(300)




//EXERCÍCIO 6:

// class Produto {
//     #nome
//     #preco
//     constructor(nome, preco) {
//         this.#nome = nome
//         this.preco = preco 
//     }
//     get nome() {
//         return this.#nome
//     }
//     set nome(novoNome) {
//         if (novoNome.trim() !== "") {
//             this.#nome = novoNome
//         } else {
//             console.log("O nome não pode ser vazio")
//         }
//     }
//     get preco() {
//         return this.#preco
//     }
//     set preco(novoPreco) {
//         if (novoPreco >= 0) {
//             this.#preco = novoPreco
//         } else {
//             console.log("Preço não pode ser negativo!")
//         }
//     }
// }
// let p = new Produto("Celular", 1500)
// console.log(p.nome)
// console.log(p.preco)

// p.preco = -200
// console.log(p.preco)

// p.nome = "Notebook"
// p.preco = 3500
// console.log(p.nome)
// console.log(p.preco)




//EXERCÍCIO 7:

// class Carro {
//     #velocidade
//     constructor(velocidade) {
//         this.#velocidade = velocidade
//     }
//     get getvelocidade() { return this.#velocidade }
//     set setvelocidade(value) {
//         return this.#velocidade = value
//     }
//     acelerar() {
//         return this.#velocidade + 10
//     }
//     frear() {
//         if (this.#velocidade > 0) {
//             return this.#velocidade - 10
//         }
//     }
// }
// let car = new Carro(120)
// console.log(car.frear())
// console.log(car.acelerar())




//EXERCÍCIO 8:

// class Conta {
//     #saldo
//     constructor(saldo){
//         this.#saldo
//     }
//     get getsaldo () {return this. #saldo}
