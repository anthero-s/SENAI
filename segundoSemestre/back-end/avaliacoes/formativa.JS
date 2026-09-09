//EXERCÍCIO 1: Função com Callback – Rastreamento de Carga
const statusCargas = {
   "BR12345": "Em trânsito para o centro de distribuição",
   "BR67890": "Entregue ao destinatário",
   "BR54321": "Aguardando retirada na agência" 
}
function rastrearCarga(codigoRastreio, callback){
    return callback(codigoRastreio)
}
function buscarStatus(codigo){
    if (statusCargas[codigo]){
        return statusCargas[codigo]  
    } else {
        return "Código de rastreio não encontrado" 
    }
}
// Chama a função rastrearCarga passando:
// - o código "BR12345"
// - e a função buscarStatus como callback
console.log(rastrearCarga("BR12345", buscarStatus))





//EXERCÍCIO 2: Classe Simples – ItemEstoque
//Classe que representa um item dentro do estoque
// class ItemEstoque {
//     // O construtor é chamado quando criamos um novo item
//     constructor(codigo, descricao, localizacao) {
//         this.codigo = codigo          // Código de identificação do item
//         this.descricao = descricao    // Descrição do item (ex: "Caixa de Parafusos")
//         this.localizacao = localizacao // Local onde o item está armazenado no estoque
//     }
//     // Método que retorna a localização atual do item
//     obterLocalizacao() {
//         return this.localizacao
//     }
//     // Método que atualiza a localização do item
//     atualizarLocalizacao(novaLocalizacao) {
//         this.localizacao = novaLocalizacao
//     }
// }
// // Criando um novo item de estoque com código, descrição e localização inicial
// const item1 = new ItemEstoque("001", "Caixa de Parafusos", "Corredor A, Prateleira 3")
// // Mostra no console a localização atual do item
// console.log("Localização atual:", item1.obterLocalizacao())
// // Atualiza a localização do item para um novo local
// item1.atualizarLocalizacao("Corredor B, Prateleira 1")
// // Mostra no console a nova localização do item após a atualização
// console.log("Nova localização:", item1.obterLocalizacao())

// "=" atribuição, "==" comparação (verdadeiro ou falso), "===" comparação conteúdo e tipo de dado.




//EXERCÍCIO 3: Classe Simples – Rota de Entrega
class RotaDeEntrega {
    constructor(codigo, veiculo, destino) {
        this.codigo = codigo
        this.veiculo = veiculo
        this.destino = destino
    }
    alterarDestino(novoDestino) {
        this.destino = novoDestino
        return `Destino alterado para: ${this.destino}`
    }
    exibirResumo() {
        return ` Rota: ${this.codigo} | Veículo: ${this.veiculo} | Destino: ${this.destino}`
    }
}
let rota1 = new RotaDeEntrega("R001", "Caminhão Baú", "recanto do guaraú, 198 - Salto")
console.log(rota1.exibirResumo())
console.log(rota1.alterarDestino("rua estado do acre, 00007 - Acre"))
console.log(rota1.exibirResumo())





//EXERCÍCIO 4: Herança – Tipos de Embalagem
class Embalagem {
    constructor(id, pesoMaximo) {
        this.id = id
        this.pesoMaximo = pesoMaximo
    }
    podeConter(pesoItem) {
        // Esse método será sobrescrito pelas subclasses
        return pesoItem <= this.pesoMaximo
    }
}
// Subclasse: Caixa
class Caixa extends Embalagem {
    constructor(id, largura, altura, profundidade) {
        super(id, 25) // Caixa suporta até 25 kg
        this.largura = largura
        this.altura = altura
        this.profundidade = profundidade
    }

    podeConter(pesoItem) {
        return pesoItem <= this.pesoMaximo
    }
}
// Subclasse: Palete
class Palete extends Embalagem {
    constructor(id, material) {
        super(id, 1000) // Palete suporta até 1000 kg
        this.material = material
    }
    podeConter(pesoItem) {
        return pesoItem <= this.pesoMaximo
    }
}
// Exemplos de uso
const caixa1 = new Caixa(1, 30, 20, 40)
console.log(caixa1.podeConter(20))   // true
console.log(caixa1.podeConter(30))   // false
const palete1 = new Palete(2, "Madeira")
console.log(palete1.podeConter(500))  // true
console.log(palete1.podeConter(1500)) // false




//EXERCÍCIO 5: Herança + Polimorfismo – Tarefas do Almoxarifado
class Tarefa {
    constructor(descricao, responsavel) {
        this.descricao = descricao     // Descrição da tarefa
        this.responsavel = responsavel // Pessoa responsável pela tarefa
    }
    // Método genérico que será sobrescrito nas subclasses
    calcularTempoEstimado() {
        return 0
    }
}
// Subclasse que representa uma tarefa de separação de pedido
class SepararPedido extends Tarefa {
    constructor(descricao, responsavel, quantidadeItens) {
        super(descricao, responsavel)  // Chama o construtor da classe pai (Tarefa)
        this.quantidadeItens = quantidadeItens // Quantidade de itens no pedido
    }
    // Sobrescreve o método da classe base
    // Cada item leva 5 minutos para ser separado
    calcularTempoEstimado() {
        return this.quantidadeItens * 5
    }
}
// Subclasse que representa uma tarefa de conferência de carga
class ConferirCarga extends Tarefa {
    constructor(descricao, responsavel) {
        super(descricao, responsavel) // Chama o construtor da classe pai (Tarefa)
    }
    // Sobrescreve o método da classe base
    // O tempo é fixo em 60 minutos
    calcularTempoEstimado() {
        return 60 
    }
}
// Cria uma lista (array) com diferentes tarefas
const tarefas = [
    new SepararPedido("Separar pedido", "Anthero", 8),
    new ConferirCarga("Conferir carga caminhão", "Maria"),
    new SepararPedido("Separar pedido", "Thiago", 12),
    new ConferirCarga("Conferir carga depósito", "Naju")
]
// Percorre todas as tarefas e exibe suas informações no console
for (let tarefa of tarefas) {
    console.log(
        `Tarefa: ${tarefa.descricao} | Responsável: ${tarefa.responsavel} | Tempo Estimado: ${tarefa.calcularTempoEstimado()} min`
    )
}




//EXERCÍCIO 6: Encapsulamento – Controle de Almoxarifado
class Almoxarifado {
    // Atributo privado: só pode ser acessado dentro da classe
    #quantidade
    constructor(nomeProduto, quantidadeInicial = 0) {
        this.nomeProduto = nomeProduto   // Nome do produto
        this.#quantidade = quantidadeInicial // Quantidade inicial (protegida)
    }
    // Método para adicionar produtos ao estoque
    adicionarProduto(qtd) {
        if (qtd > 0) {
            this.#quantidade += qtd
            console.log(`${qtd} unidades adicionadas ao estoque de ${this.nomeProduto}.`)
        } else {
            console.log("A quantidade para adicionar deve ser maior que zero.")
        }
    }
    // Método para retirar produtos do estoque
    retirarProduto(qtd) {
        if (qtd <= 0) {
            console.log("A quantidade para retirada deve ser maior que zero.")
        } else if (qtd > this.#quantidade) {
            console.log(`Não é possível retirar ${qtd} unidades. Estoque disponível: ${this.#quantidade}.`)
        } else {
            this.#quantidade -= qtd
            console.log(`${qtd} unidades retiradas do estoque de ${this.nomeProduto}.`)
        }
    }
    // Método para consultar o estoque atual do produto
    consultarEstoque() {
        return `Produto: ${this.nomeProduto} | Quantidade em estoque: ${this.#quantidade}`
    }
}
// Criando instâncias de produtos do almoxarifado
const produto1 = new Almoxarifado("Parafuso", 100)
const produto2 = new Almoxarifado("Porca", 50)
// Adicionando e retirando produtos
produto1.adicionarProduto(20)      // Adiciona 20 parafusos
produto1.retirarProduto(50)        // Retira 50 parafusos
produto2.retirarProduto(60)        // Tenta retirar mais do que tem
// Consultando os estoques
console.log(produto1.consultarEstoque())
console.log(produto2.consultarEstoque())





