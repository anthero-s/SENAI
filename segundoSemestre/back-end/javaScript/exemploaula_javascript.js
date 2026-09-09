// let idade = 18;

// if (idade >= 18){
//     console.log("Maior de idade");
//  } else {
// console.log("Menor de idade");
//  }

// -------------------------------------------------------------------------------------------

// let nota = 85;
// if (nota >= 90) {
//     console.log("Aprovado com A");
// } else if (nota >= 70) {
//     console.log("Aprovado com B")
// } else {
//     console.log("Reprovado")
// }

// -------------------------------------------------------------------------------------------

// let idade = 16

//     let mensagem = idade >= 18 ? "Adulto" : "Menor" 
//         console.log(mensagem);

// let a = 10;
// let b = 100;

// if (a != b) {
//     console.log("São diferentes")
// } else {
//     console.log("São iguais")
// }

// -------------------------------------------------------------------------------------------

// let dia = 3
// switch (dia){
//     case 1:
//         console.log("Segunda")
//         break
//     case 2:
//         console.log("Terça")
//         break
//     default:
//         console.log("Outro dia")
// }

// -------------------------------------------------------------------------------------------

// for (let i = 0; i < 5; i++)
//     console.log(i)

// -------------------------------------------------------------------------------------------

//let numeros = [1, 2, 3];
//numeros.forEach(num => console.log(num))

// -------------------------------------------------------------------------------------------

// let contador = 0
// while (contador < 5) {
//     console.log(Contador: ${contador})
//     contador++
// }

// -------------------------------------------------------------------------------------------

//let num = 0
//do{
//console.log(num)
// num++
//} while (num < 3)


// let lista = ["banana", "maçã", "laranja"]; 
// console.log(lista[0]); // Acessa o primeiro elemento

// lista.push("uva"); // Adiciona um novo elemento ao final da lista
// lista.pop(); // Remove o último elemento da lista
// lista.unshift("abacaxi"); // Adiciona um novo elemento no início da lista
// lista.shift(); // Remove o primeiro elemento da lista

// console.log(lista.includes("maçã")); 
// console.log(lista.indexOf("laranja"));
// console.log(lista.length); 


// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }
//     saudacao() {
//         return `olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
//     }
// }
// const pessoa1 = new Pessoa("Anthero", 17)
// console.log(pessoa1.saudacao())




// class contaBancaria{
//     #saldo
//     numeroConta

//     constructor(saldo,numeroConta){
//         this.#saldo = saldo
//         this.numeroConta = numeroConta
//     }
// }
// exibirSaldo(){
//     return this.#Saldo
// }

// let conta1 = new contaBancaria(100,12345)
// console.log(conta1.exibirSaldo())

// console.log(conta1.numeroConta)
// conta1.numeroConta = 54321
// console.log(conta1.numeroConta)

// get getSaldo(){
//     return this.#saldo
// }
// set setSaldo(value){
//     return this.#Saldo= value
// }

// exibirSaldo(){

// }




// class ContaBancaria {
//     #saldo
//     numeroConta
//     constructor(saldo, numeroConta) {
//         this.#saldo = saldo
//         this.numeroConta = numeroConta
//     }
//     get getSaldo() {
//         return this.#saldo
//     }
//     set getSaldo(value) {
//         if (value != null && value >= 0) {
//             this.#saldo = value
//         } else {
//             console.log("Valor inválido")
//         }
//     }
//     exibirSaldo() {
//         return this.#saldo
//     }
// }

// let conta1 = new ContaBancaria(100, "12345")
// console.log(conta1.exibirSaldo())
// console.log(conta1.getSaldo)
// conta1.getSaldo = 150
// console.log(conta1.getSaldo)


// class ContaBancaria {
//     #saldo
//     numeroConta
//     constructor(saldo, numeroConta) {
//         this.#saldo = saldo
//         this.numeroConta = numeroConta
//     }
//     get getSaldo() {
//         return this.#saldo
//     }
//     set getSaldo(value) {
//         if (value != null && value >= 0) {
//             this.#saldo = value
//         } else {
//             console.log("Valor inválido")
//         }
//     }
//     exibirSaldo() {
//         return this.#saldo
//     }
// }

// let conta1 = new ContaBancaria(100, "12345")
// console.log(conta1.exibirSaldo())
// console.log(conta1.getSaldo)
// conta1.getSaldo = 150
// console.log(conta1.getSaldo)



// class Animal {
//     constructor(nome) {
//         this.nome = nome
//     }
//     fazerSom() {
//         console.log("Emite um som genérico")
//     }
// }
// class Cachorro extends Animal {
//     constructor(nome) {
//         super(nome)
//     }
//     fazerSom() {
//         return "Au Au!"
//     }
// }
// let dog = new Cachorro("Rabito")
// console.log(`Meu cachorro véio chamado ${dog.nome} faz ${dog.fazerSom()}`)


//ENCAPSULAMENTO
// class UsuarioSistema {
//     #login
//     #senha
//     constructor(login, senha) {
//         this.#login = login
//         this.#senha = senha
//     }
//     autenticar(loginAutenticar, senhaAutenticar) {
//         if (this.#login === loginAutenticar && this.#senha === senhaAutenticar) {
//             return "Usuário autenticado"
//         } else {
//             return "Login ou senha inválido"
//         }
//     }
//     alterarSenha(senhaAntiga, senhaNova) {
//         if (senhaAntiga === this.#senha) {
//             this.#senha = senhaNova
//             return "Senha alterada."
//         } else {
//             return "Senha incorreta."
//         }
//     }
// }
// let usuario1 = new UsuarioSistema("anthero", "1234")
// console.log(usuario1.autenticar("anthero", "1234")) 
// console.log(usuario1.alterarSenha("1234", "abcd"))  
// console.log(usuario1.autenticar("anthero", "abcd")) 



// POLIMORFISMO
// class Funcionario {
//     constructor(nome, salarioBase) {
//         this.nome = nome
//         this.salarioBase = salarioBase
//     }
//     calcularSalarioLiquido() {
//         return this.salarioBase
//     }
// }
// class FuncionarioCLT extends Funcionario {
//     constructor(nome, salarioBase) {
//         super(nome, salarioBase)
//     }
//     calcularSalarioLiquido() {
//         return this.salarioBase * 0.9 + this.salarioBase * 0.05
//     }
// }
// class FuncionarioPJ extends Funcionario {
//     calcularSalarioLiquido() {
//         return this.salarioBase
//     }
// }
// class Estagiario extends Funcionario {
//     calcularSalarioLiquido() {
//         return this.salarioBase * 0.95
//     }
// }
// let funcionario1 = new FuncionarioCLT("Anthero", 5000)
// let funcionario2 = new FuncionarioPJ("Marlon", 30000)
// let funcionario3 = new Estagiario("Daniel", 50000)
// console.log(`${funcionario1.nome} - Salário líquido: R$ ${funcionario1.calcularSalarioLiquido()}`)
// console.log(`${funcionario2.nome} - Salário líquido: R$ ${funcionario2.calcularSalarioLiquido()}`)
// console.log(`${funcionario3.nome} - Salário líquido: R$ ${funcionario3.calcularSalarioLiquido()}`)




//CALLBACK
// function calcular(a, b, callback) {
//     console.log("Executando cálculo...")
//     let resultado = callback(a, b)
//     console.log("Resultado:", resultado)
// }

// function soma(x, y) {
//     return x + y
// }
// function multiplicacao(x, y) {
//     return x * y
// }
// function maiorNumero(x, y) {
//     return x > y ? x : y
// }

// calcular(10, 5, soma)           
// calcular(10, 5, multiplicacao)  
// calcular(10, 5, maiorNumero)    

