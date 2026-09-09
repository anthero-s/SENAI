const Pizza = require("../models/pizzaModel");

exports.getAll = (req, res) => {
    Pizza.getAll((err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.getById = (req, res) => {
    Pizza.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result[0]);
    });
};

exports.create = (req, res) => {
    Pizza.create(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Pizza criada!" });
    });
};

exports.update = (req, res) => {
    Pizza.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Pizza atualizada!" });
    });
};

exports.delete = (req, res) => {
    Pizza.delete(req.params.id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Pizza deletada!" });
    });
};