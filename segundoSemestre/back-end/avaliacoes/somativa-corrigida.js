//EXERCÍCIO 1: 
// const estoque = {
// teclado: true,
// monitor: false,
// mouse: true,
// servidor: false
// };
// function verificarStatusItem(item, callback) {
//     return callback (item)
// }
// function disponibilidadeItem(item){
//     if (estoque[item]){
//         return 'Item disponível para despacho.'
//     } else {
//         return 'Item em falta no estoque.'
//     }
// }
// console.log(verificarStatusItem('teclado', disponibilidadeItem))
// console.log(verificarStatusItem('monitor', disponibilidadeItem))






//EXERCÍCIO 2:
// class Tarefa {
//     constructor(descricao, prioridade, duracaoEstimada) {
//         this.descricao = descricao
//         this.prioridade = prioridade
//         this.duracaoEstimada = duracaoEstimada
//     }
//     alterarPrioridade(novaPrioridade) {
//         this.prioridade = novaPrioridade
//         return `A prioridade da tarefa foi alterada para: ${this.prioridade}.`

//     }
//     detalharTarefa() {
//         return `A tarefa ${this.descricao} é de prioridade ${this.prioridade} e tem a duração estimada de ${this.duracaoEstimada}.`
//     }
// }
// let tarefa1 = new Tarefa("matriz de rastreabilidade", "baixa", "1hora")
// console.log(tarefa1.detalharTarefa())
// console.log(tarefa1.alterarPrioridade("média"))
// console.log(tarefa1.detalharTarefa())




//EXERCÍCIO 3: 
class CustoProjeto {
    constructor(nomeProjeto, orcamentoBase, diasPlanejados,){
this.nomeProjeto = nomeProjeto
this.orcamentoBase = orcamentoBase
this.diasPlanejados = diasPlanejados
    }
    calcularCustoDiario(){
       return (this.orcamentoBase / this.diasPlanejados ) 
    }
    resumoCusto(){
        return `O projeto ${this.nomeProjeto} tem o orçamento base de: ${this.orcamentoBase}reais, os dias planejados são ${this.diasPlanejados}. O custo diário em reais ficou em: `
    }
}
let custo1 = new CustoProjeto ("Cassino DO Tigrinho", "1000", "5" )
console.log(custo1.resumoCusto())
console.log(custo1.calcularCustoDiario())




//EXERCÍCIO 4:
// class Ativo {
//     constructor(nome, valorInicial, dataAquisicao) {
//         this.nome = nome 
//         this.valorInicial = valorInicial
//         this.dataAquisicao = dataAquisicao
//     }
//     calcularDepreciacao(){
//         return `O valor inicial é de: ${this.valorInicial}.`
//     }
// }
// class Eletronico extends Ativo{
//     constructor (valorInicial, vidaUtilAnos) {
//         super (valorInicial)
//         this.vidaUtilAnos = vidaUtilAnos
//     }
//     calcularDepreciacao(){
//         return (this.valorInicial / this.vidaUtilAnos)
//     }
//     fichaTecnica(){
//         return (this.valorInicial / this.vidaUtilAnos)
//     }
// }
// class Software extends Ativo{
//     constructor(licencaMensal, ){

//     }
// }




//EXERCÍCIO 5:
// class Atividade {
//     constructor(nome, custoBase){
//         this.nome = nome 
//         this.custoBase = custoBase
//     }
//     custo
// }




//EXERCÍCIO 6: 
// class OrcamentoProjeto {
//     #verbaAlocada
//     constructor(nomeProjeto){
//         this.#verbaAlocada = this.#verbaAlocada
//         this.nomeProjeto = nomeProjeto
//     }
//     registrarVerbaInicial(){
//      return `O valor da ver é de ${this.#verbaAlocada}.`
//     }
//     registrarDespesa(valor){
//         if valor 
//     }
// }