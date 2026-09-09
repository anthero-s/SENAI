const express = require("express");
const cors = require("cors");

const pizzaRoutes = require("./routes/pizzaRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pizzas", pizzaRoutes);
app.use("/pedidos", pedidoRoutes);

module.exports = app;