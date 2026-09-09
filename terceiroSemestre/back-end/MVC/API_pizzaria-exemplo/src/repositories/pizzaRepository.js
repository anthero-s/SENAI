const db = require("../config/db");

class PizzaRepository {
    async findAll() {
        const [rows] = await db.query("SELECT * FROM pizzas");
        return rows;
    }

    async findById(id) {
        const [rows] = await db.query("SELECT * FROM pizzas WHERE id = ?", [id]);
        return rows[0];
    }

    async create(pizza) {
        const { nome, preco } = pizza;
        const [result] = await db.query(
            "INSERT INTO pizzas (nome, preco) VALUES (?, ?)",
            [nome, preco]
        );
        return result.insertId;
    }

    async update(id, pizza) {
        const { nome, preco } = pizza;
        await db.query(
            "UPDATE pizzas SET nome = ?, preco = ? WHERE id = ?",
            [nome, preco, id]
        );
    }

    async delete(id) {
        await db.query("DELETE FROM pizzas WHERE id = ?", [id]);
    }
}

module.exports = new PizzaRepository();