const db = require("../config/db");

class PedidoRepository {
    async findAll() {
        const [rows] = await db.query("SELECT * FROM pedidos");
        return rows;
    }

    async create(pedido) {
        const { cliente, pizza_id, quantidade } = pedido;
        const [result] = await db.query(
            "INSERT INTO pedidos (cliente, pizza_id, quantidade) VALUES (?, ?, ?)",
            [cliente, pizza_id, quantidade]
        );
        return result.insertId;
    }
}

module.exports = new PedidoRepository();