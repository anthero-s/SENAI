const Pedido = require("../models/pedidoModel");

exports.getAll = (req, res) => {
    Pedido.getAll((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.create = (req, res) => {
    Pedido.create(req.body, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Pedido realizado!" });
    });
};