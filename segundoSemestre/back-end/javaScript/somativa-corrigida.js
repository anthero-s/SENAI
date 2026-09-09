//QUESTÃO 1: 
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




//QUESTÃO 2:
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




//QUESTÃO 3: 
// class CustoProjeto {
//     constructor(nomeProjeto, orcamentoBase, diasPlanejados,){
// this.nomeProjeto = nomeProjeto
// this.orcamentoBase = orcamentoBase
// this.diasPlanejados = diasPlanejados
//     }
//     calcularCustoDiario(){
//        return (this.orcamentoBase / this.diasPlanejados ) 
//     }
//     resumoCusto(){
//         return `O projeto ${this.nomeProjeto} tem o orçamento base de: ${this.orcamentoBase}reais, os dias planejados são ${this.diasPlanejados}. O custo diário em reais ficou em: `
//     }
// }
// let custo1 = new CustoProjeto ("Cassino DO Tigrinho", "1000", "5" )
// console.log(custo1.resumoCusto())
// console.log(custo1.calcularCustoDiario())




//QUESTÃO 4:
// class Ativo {
//     constructor(nome, valorInicial, dataAquisicao) {
//         this.nome = nome
//         this.valorInicial = valorInicial
//         this.dataAquisicao = dataAquisicao
//     }
//     calcularDepreciacao() {
//         return `${this.valorInicial}`
//     }
// }
// class Eletronico extends Ativo {
//     constructor(nome, valorInicial, dataAquisicao, vidaUtilAnos) {
//         super(nome, valorInicial, dataAquisicao)
//         this.vidaUtilAnos = vidaUtilAnos
//     }
//     calcularDepreciacao() {
//         const depreciacao = this.valorInicial / this.vidaUtilAnos
//         if (depreciacao < 0) {
//             return 0
//         } else {
//             return depreciacao
//         }
//     }
//     fichaTecnica() {
//         return `Ativo: ${this.nome} | valor inicial: ${this.valorInicial} reais | data aquisição: ${this.dataAquisicao} | vida util: ${this.vidaUtilAnos} | depreciação anual: ${this.calcularDepreciacao()}`
//     }
// }
// class Software extends Ativo {
//     constructor(nome, valorInicial, dataAquisicao, licensaMensal) {
//         super(nome, valorInicial, dataAquisicao)
//         this.licensaMensal = licensaMensal
//     }

//     calcularDepreciacao() {
//         return this.licensaMensal
//     }
//     fichaTecnica() {
//         return `Ativo: ${this.nome} | valor inicial: ${this.valorInicial} reais | data aquisição: ${this.dataAquisicao} | licensa mensal: ${this.licensaMensal} | depreciação mensal: ${this.calcularDepreciacao()} reais`
//     }
// }
// let ativo1 = new Eletronico('computador', 5000, "20/01/2020", 5)
// console.log(ativo1.fichaTecnica())
// let ativo2 = new Software('Windows 11', 2000, "03/03/2024", 50)
// console.log(ativo2.fichaTecnica())




//QUESTÃO 5:
// class Atividade {
//     constructor(nome, custoBase) {
//         this.nome = nome
//         this.custoBase = custoBase
//     }
//     calcularCustoTotal() {
//         return this.custoBase
//     }
// }
// class BaixoRisco extends Atividade {
//     calcularCustoTotal() {
//         return this.custoBase - (this.custoBase * 0.1)
//     }
// }
// class MedioRisco extends Atividade {
//     calcularCustoTotal() {
//         return this.custoBase
//     }
// }
// class AltoRisto extends Atividade {
//     calcularCustoTotal() {
//         return this.custoBase + 500
//     }
// }
// const atividades = [
//     new BaixoRisco("Comprar tintas", 1000),
//     new MedioRisco("plantar flores", 2000),
//     new AltoRisto("cortar madeiras", 200),
//     new BaixoRisco("limpar o lixo", 10000),
//     new AltoRisto("professor SENAI", 200)
// ]
// for (let i = 0; i < atividades.length; i++) {
//     console.log(`Atividade: ${atividades[i].nome} Custo total: R$ ${atividades[i].calcularCustoTotal()}`)
// }




//QUESTÃO 6:
// class OrcamentoProjeto {
//     #verbaAlocada = 0
//     nomeProjeto
//     constructor(nomeProjeto) {
//         this.nomeProjeto = nomeProjeto
//     }
//     registrarVerbaInicial(valor) {
//         this.#verbaAlocada = valor
//         return `Valor R$ ${this.#verbaAlocada} definido.`
//     }
//     registrarDespesa(valor) {
//         if (valor > this.#verbaAlocada) {
//             return "Saldo insuficiente"
//         } else {
//             this.#verbaAlocada -= valor
//             return "Despesa registrada com sucesso."
//         }
//     }
//     consultarSaldo() {
//         return `O saldo que resta para o projeto é de: R$ ${this.#verbaAlocada}.`
//     }
// }
// let orcamento1 = new OrcamentoProjeto("Ideias On")
// console.log(orcamento1.registrarVerbaInicial(1000))
// console.log(orcamento1.consultarSaldo())
// console.log(orcamento1.registrarDespesa(600))
// console.log(orcamento1.consultarSaldo())
// console.log(orcamento1.registrarDespesa(500))
// console.log(orcamento1.consultarSaldo())