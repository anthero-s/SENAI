const pizzaRepository = require("../repositories/pizzaRepository");

class PizzaService {
    async listar() {
        return await pizzaRepository.findAll();
    }

    async buscarPorId(id) {
        const pizza = await pizzaRepository.findById(id);
        if (!pizza) throw new Error("Pizza não encontrada");
        return pizza;
    }

    async criar(data) {
        if (!data.nome || !data.preco) {
            throw new Error("Dados inválidos");
        }
        return await pizzaRepository.create(data);
    }

    async atualizar(id, data) {
        await this.buscarPorId(id);
        await pizzaRepository.update(id, data);
    }

    async deletar(id) {
        await this.buscarPorId(id);
        await pizzaRepository.delete(id);
    }
}

module.exports = new PizzaService();