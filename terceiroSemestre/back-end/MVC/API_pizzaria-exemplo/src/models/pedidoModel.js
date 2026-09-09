const db = require("../config/db");

const Pedido = {
    getAll: (callback) => {
        db.query("SELECT * FROM pedidos", callback);
    },

    create: (data, callback) => {
        db.query("INSERT INTO pedidos SET ?", data, callback);
    }
};

module.exports = Pedido;