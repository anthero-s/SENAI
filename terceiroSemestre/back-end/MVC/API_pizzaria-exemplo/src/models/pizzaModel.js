const db = require("../config/db");

const Pizza = {
    getAll: (callback) => {
        db.query("SELECT * FROM pizzas", callback);
    },

    getById: (id, callback) => {
        db.query("SELECT * FROM pizzas WHERE id = ?", [id], callback);
    },

    create: (data, callback) => {
        db.query("INSERT INTO pizzas SET ?", data, callback);
    },

    update: (id, data, callback) => {
        db.query("UPDATE pizzas SET ? WHERE id = ?", [data, id], callback);
    },

    delete: (id, callback) => {
        db.query("DELETE FROM pizzas WHERE id = ?", [id], callback);
    }
};

module.exports = Pizza;