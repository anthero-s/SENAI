/* PASSO 0 — Criação do Banco e Tabelas */
CREATE DATABASE db_eletronicos;
USE db_eletronicos;

CREATE TABLE Clientes ( 
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(50),
    data_cadastro DATE
);

CREATE TABLE Produtos (
    id_produto INT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    preco_unitario DECIMAL(10, 2),
    estoque INT
);

CREATE TABLE Vendas (
    id_venda INT PRIMARY KEY,
    id_cliente INT,
    data_venda DATE,
    valor_total DECIMAL(10, 2),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

CREATE TABLE ItensVenda (
    id_item INT PRIMARY KEY,
    id_venda INT,
    id_produto INT,
    quantidade INT,
    preco_item DECIMAL(10, 2),
    FOREIGN KEY (id_venda) REFERENCES Vendas(id_venda),
    FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto)
);

CREATE TABLE Log_Estoque (
    id_log INT PRIMARY KEY AUTO_INCREMENT,
    id_produto_afetado INT,
    acao VARCHAR(50),
    data_hora DATETIME
);

/* PASSO 1 — Inserção de Dados */
INSERT INTO Clientes (id_cliente, nome, cidade, data_cadastro) VALUES
(1, 'Alice Pereira', 'Sao Paulo', '2023-01-10'),
(2, 'Bruno Mendes', 'Rio de Janeiro', '2023-03-15'),
(3, 'Carla Souza', 'Sao Paulo', '2023-05-20'),
(4, 'Daniel Lima', 'Belo Horizonte', '2023-11-01');

INSERT INTO Produtos (id_produto, nome_produto, categoria, preco_unitario, estoque) VALUES
(101, 'Smartphone X', 'Telefonia', 1500.00, 50),
(102, 'Notebook Gamer', 'Computadores', 5500.00, 15),
(103, 'Fone Bluetooth Z', 'Acessórios', 250.00, 120),
(104, 'Smartwatch W', 'Vestíveis', 900.00, 30),
(105, 'Mouse Gamer', 'Acessórios', 150.00, 0),
(106, 'Tablet Pro', 'Computadores', 3200.00, 45);

INSERT INTO Vendas (id_venda, id_cliente, data_venda, valor_total) VALUES
(1001, 1, '2024-06-01', 1750.00),
(1002, 3, '2024-06-05', 5500.00),
(1003, 1, '2024-06-10', 900.00),
(1004, 2, '2024-06-12', 3000.00),
(1005, 4, '2024-06-15', 0.00);

INSERT INTO ItensVenda (id_item, id_venda, id_produto, quantidade, preco_item) VALUES
(5001, 1001, 101, 1, 1500.00),
(5002, 1001, 103, 1, 250.00),
(5003, 1002, 102, 1, 5500.00),
(5004, 1003, 104, 1, 900.00),
(5005, 1004, 106, 1, 3200.00),
(5006, 1004, 103, 4, 1000.00);

/* PASSO 2 — Atualização Corrigida */
UPDATE Vendas
SET valor_total = 4200.00
WHERE id_venda = 1004;

SELECT * FROM Vendas;

/* PASSO 3 — Exclusão de Produto */
DELETE FROM Produtos
WHERE id_produto = 105;

SELECT * FROM Produtos;

/* PASSO 4 — INNER JOIN entre 4 tabelas */
SELECT C.nome, P.nome_produto
FROM Clientes C
INNER JOIN Vendas V ON C.id_cliente = V.id_cliente
INNER JOIN ItensVenda IV ON V.id_venda = IV.id_venda
INNER JOIN Produtos P ON IV.id_produto = P.id_produto;

/* PASSO 5 — Subconsulta com IN */
SELECT nome, cidade 
FROM Clientes
WHERE id_cliente IN (
    SELECT id_cliente FROM Vendas
    WHERE id_venda IN (
        SELECT id_venda
        FROM ItensVenda
        WHERE id_produto IN (
            SELECT id_produto
            FROM Produtos
            WHERE categoria = 'Computadores'
        )
    )
);

/* PASSO 6 — LEFT JOIN de potenciais clientes */
SELECT C.nome,  V.id_venda FROM Clientes C 
LEFT JOIN Vendas V ON C.id_cliente = V.id_cliente;

/* PASSO 7 — Funções de Agregação */
SELECT AVG(preco_unitario) FROM Produtos;
SELECT SUM(quantidade) FROM ItensVenda;

/* PASSO 8 — Funções de Texto/Data */
SELECT 
    CONCAT(UPPER(nome), ' - ', YEAR(data_cadastro)) AS PERFIL_REGISTRO
FROM Clientes;

/* PASSO 9 — GROUP BY por categoria */
SELECT categoria, COUNT(*) AS quantidade_produtos
FROM Produtos
GROUP BY categoria;

/* PASSO 10 — HAVING categorias com mais de 1 produto */
SELECT categoria,  COUNT(*) AS quantidade_produtos FROM Produtos
GROUP BY categoria
HAVING COUNT(*) >= 2;

/* PASSO 11 — Transação com ROLLBACK */
START TRANSACTION;

INSERT INTO Produtos (id_produto, nome_produto, categoria, preco_unitario, estoque)
VALUES (999, 'Produto Ficticio', 'Teste', 0.00, 0);

ROLLBACK;

SELECT * FROM Produtos WHERE id_produto = 999;

/* PASSO 12 — Stored Procedure */
DELIMITER $$

CREATE PROCEDURE sp_buscar_cliente_por_cidade(IN p_cidade VARCHAR(50))
BEGIN
    SELECT * FROM Clientes
    WHERE cidade = p_cidade;
END $$

DELIMITER ;

CALL sp_buscar_cliente_por_cidade('Sao Paulo');

/* PASSO 13 — Trigger de Auditoria */
DELIMITER $$

CREATE TRIGGER trg_log_estoque
AFTER UPDATE ON Produtos
FOR EACH ROW
BEGIN
    IF NEW.estoque != OLD.estoque THEN
        INSERT INTO Log_Estoque (id_produto_afetado, acao, data_hora)
        VALUES (NEW.id_produto, 'Estoque Atualizado', NOW());
    END IF;
END $$

DELIMITER ;

UPDATE Produtos
SET estoque = 40
WHERE id_produto = 101;

SELECT * FROM Log_Estoque;

/* PASSO 14 — VIEW de Produtos sem estoque */
CREATE VIEW V_Produtos_Sem_Estoque AS
SELECT * FROM Produtos
WHERE estoque = 0;

SELECT * FROM V_Produtos_Sem_Estoque;