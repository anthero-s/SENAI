

// function somar(a, b) { //a e b são parametros  
//      return a + b 
// } 
// let resultado = somar (5, 3) //5 e 3 são argumentos 

// console.log(resultado) //8 




// //EXEMPLO FUNCOES DEFINIDAS
// console.log(O resultado da soma é: ${soma(5, 5)}) 

// function soma (a, b) {
//     return a + b 
// }

// //EXEMPLO FUNCOES EXPRESSAS
// const soma = function (a,b){
//     return a + b
// }
// let result = soma (4,4)
// console.log(O resultado da soma é ${soma(5,5)})



// EXEMPLO ARROW FUNCTIONS
// let soma = (a, b) => {return a + b}
// console.log(`O resultado é: ${soma(7,7)}`)



//EXEMPLO ARROW IMEDIATAS IIFE
// (function()){
//     return console.log('Hello Word')
// })()



//EXEMPLO FUNÇÃO DE CALLBACKS
// function executarOperacao(a,b, callback) {
//     return callback(a,b)
// }
// function soma(x,y){
//     return x + y 
// }
// function multiplica (x, y) {
//     return x * y
// }



//EXEMPLO FUNÇÃO RECUSRSIVA
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1 
    } else {
        return n * fatorial (n - 1)
    }
}
console.log(fatorial(1))