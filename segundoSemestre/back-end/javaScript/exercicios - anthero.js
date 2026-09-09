//🔹Variáveis e Operações

// Exercício 1:Somar dois números e mostrar o resultado.
//let num = 7
//let num2 = 3
//if (num + num2) 
   // console.log("A soma é: " + (num + num2))


//Exercício 2: Calcular a área de um retângulo recebendo base e altura.
//let base = 5;
//let altura = 10;
//if (base > 0 && altura > 0){
   // console.log (base * altura)
//}



//Exercício 3:Converter Celsius para Fahrenheit usando fórmula (C × 9/5) + 32.
//let c = 18
//let fa = (c * 9/5) + 32 
//console.log(fa)



//Exercício 4:Calcular a média de três números e mostrar no console.
//let num = 2
//let num2 = 3
//let num3 = 4
//if (num + num2 + num3) 
    //console.log(num + num2 + num3)



//Exercício 5:Multiplicar dois números e exibir o resultado com mensagem personalizada.
//let num = 5
//let num2 = 5
//if (num * num2)
    //console.log(`O resultado da operação é ${num * num2}`)


//🔹Condicionais (if / else)


//Exercício 1:Verificar se um número é positivo, negativo ou zero.
//let num = -8
//let num2 = 5   
//if num <0 
//console.log(`${num}o número é negativo`)



//Exercício 2:Determinar se uma pessoa é maior de idade.
//let idade = 18
// if (idade >= 18){
//     console.log("Maior de idade")
//  } else {
// console.log("Menor de idade")



//Exercício 3:Verificar se um número é par ou ímpar
//let num = 9
//if (num%2==0)
//console.log(`seu número é par`)
//else
   // console.log(`seu número é ímpar`)


//Exercício 4: Calcular a média de duas notas e verificar se o aluno está aprovado (média ≥ 7).
//let nota = 9
//if (nota <7)
   // console.log(`o aluno está reprovado`)
//else
   // console.log(`o aluno está aprovado`)


//Exercício 5:Receber três números e mostrar o maior deles.
//let num = 1
//let num2 = 88888
//let num3 = 32
//if (num > num2 )
   // console.log(`1 é o maior`)
//else if (num2 > num3)
    //console.log(`88888 é o maior`)
//else
    //console.log(`32 é o maior`)



//🔹 Múltiplas Condições e switch

//Exercício 1: Classificar idade: criança (<12), adolescente (12-17), adulto (18-59), idoso (≥60).
//let idade = 15
//let classificacao 
//switch (true) {
  //case (idade < 12)
    //classificacao = "Criança"
   // break
  //case (idade >= 12 && idade <= 17):
   // classificacao = "Adolescente"
    //break
  //case (idade >= 18 && idade <= 59):
   // classificacao = "Adulto"
   // break
 // case (idade >= 60):
   // classificacao = "Idoso"
   // break
  //default:
    //classificacao = "Idade inválida"
//console.log(classificacao)



// Exercício 2: Verificar se um ano é bissexto (divisível por 4 e não por 100, ou divisível por 400).
// let ano = 2010
// switch (true){
//    case (ano%4 == 0 && ano % 100 !=0):
//      console.log(`bissexto`)
//      break
//   default:
//      console.log(`não é bissexto`)
// }



//Exercício 3: Menu de operações matemáticas (+, -, *, /) usando switch.




//Exercício 4: Receber um número de 1 a 7 e mostrar o dia da semana usando switch.
// let dia = 5
// switch (dia){
//    case 1:
//       console.log('segunda')
//       break
//    case 2:
//       console.log('terça')
//       break
//    case 3:
//       console.log('quarta')
//       break
//    case 4:
//       console.log('quinta')
//       break
//    case 5:
//       console.log('sexta')
//       break
//    case 6:
//       console.log('sabado')
//       break
//    case 7:
//       console.log('domingo')
//       break
//    default:
//       console.log('ERRO')
// }



//Exercício 6: Converter nota numérica (0-10) para conceito: A, B, C, D ou F.
// let notanumerica = 9
// if (notanumerica > 8) {
//    console.log('A')
// } else if (notanumerica > 6) {
//    console.log('B')
// } else if (notanumerica > 4) {
//    console.log('C')
// } else if (notanumerica > 2) {
//    console.log('D')
// } else {
//    console.log('F')
// }



//🔹 Laços de Repetição (for, while, do while)

//Exercício 1:Exibir todos os números de 1 a 10 usando for.
// for (let i = 1; i <=10; i++){
//    console.log(i)
// }



//Exercício 2: Calcular a soma dos números de 1 a 100 com for.
// let soma = 0
// for (let i = 1; i <=100; i++){
//   soma = soma + i
// }
// console.log(soma)



//Exercício 3: Mostrar a tabuada de um número digitado pelo usuário (for).
// let numero = 7
// for (let i = 1; i <= 10; i++) {
//   console.log(numero + " x " + i + " = " + (numero * i))
//}



// Exercicio 4: Contar de 10 a 1 usando while.
// while(i <= 10){
//     console.log(i)
// }



// Exercicio 5: Exibir todos os números pares de 1 a 50 (for).
// let num = 50
// for(num = 50; num >= 0; num--){
//     if(num % 2 == 0){
//         console.log(num)
//     }
// }



// Exercicio 6: Calcular o fatorial de um número (for).
// let num = 10
// let fat = 1
// for(num = 10; num >= 0; num--){
//     fat = fat * num
//     console.log(fat)
// }



//🔹 Arrays (básico e loops)

// Exercicio 1:Criar um array com 5 nomes e exibir todos com for.
// let array = ["Ricardo", "Guedin", "Jonas", "Thiago", "Fernando"]
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }


// Exercicio 2: Criar um array de números e mostrar apenas os pares.
// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// for(let i = 0; i < array.length; i++){
//     if (array[i] % 2 == 0){
//         console.log(array[i])
//     }



// Exercicio 3: Somar todos os valores de um array de números.
// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// for(let i = 0; i < array.length; i++){
//    cont = cont + array[i]
//    console.log(cont)
// }



// Exercicio 4: Encontrar o maior número em um array.
// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// for (let i = 0; i < array.length; i++){
//     if (array[i] < i){
//         console.log(array[i])
//     }
// }



// Exercicio 5: Verificar se um elemento existe no array.
// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// num = 900
// for (let i = 0; i < array.length; i++){
//     if(num == array[i]){
//         console.log(array[i])
// }



// Exercicio 6: Adicionar um elemento no final do array usando .push() e exibir.
// num = 900
// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// array.push(num)
// console.log(array)
// }



// Exercicio 7: Remover o último elemento do array usando .pop() e exibir.
// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// array.pop()
// console.log(array)
// }



