const pedidoRepository = require("../repositories/pedidoRepository");

class PedidoService {
    async listar() {
        return await pedidoRepository.findAll();
    }

    async criar(data) {
        if (!data.cliente || !data.pizza_id || !data.quantidade) {
            throw new Error("Dados inválidos");
        }
        return await pedidoRepository.create(data);
    }
}

module.exports = new PedidoService();