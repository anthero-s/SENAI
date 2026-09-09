const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizzaController");

router.get("/", pizzaController.getAll);
router.get("/:id", pizzaController.getById);
router.post("/", pizzaController.create);
router.put("/:id", pizzaController.update);
router.delete("/:id", pizzaController.delete);

module.exports = router;