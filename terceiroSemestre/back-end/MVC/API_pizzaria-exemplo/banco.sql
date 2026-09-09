CREATE DATABASE pizzaria;

USE pizzaria;

CREATE TABLE pizzas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    preco DECIMAL(10,2)
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente VARCHAR(100),
    pizza_id INT,
    quantidade INT,
    FOREIGN KEY (pizza_id) REFERENCES pizzas(id)
);