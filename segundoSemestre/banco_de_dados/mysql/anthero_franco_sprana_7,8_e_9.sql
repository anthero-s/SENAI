/* EXERCICIOS 7, 8 e 9 */
/AULA 7/
/EXERCICIO 1/
USE db_saber_e_cia;
INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone) 
    VALUES (101, 'Ana Silva', 'Rua A, 123', '11-98765-4321'), 
        (102, 'Bruno Costa', 'Av. B, 456', '11-91234-5678'),
        ( 103, 'Carla Dias', 'Praça C, 789', '11-95555-4444');
        
SELECT * FROM tbl_membro;

INSERT INTO tbl_livros (isbn, titulo,ano_publicacao, editora)
    VALUES ( '978-85-325-3078-3', 'Harry Potter e a Pedra Filosofal', 1997, 'Rocco'),
            ('978-85-7126-061-0', 'Dom Casmurro', 1899, 'Editora Clássica');

SELECT * FROM tbl_livros;

/EXERCICIO 2/
ALTER TABLE tbl_autor_livro DROP FOREIGN KEY fk_isbn_tbl_autor_livro;
ALTER TABLE tbl_exemplar DROP FOREIGN KEY fk_isbn_tbl_exemplar;

ALTER TABLE tbl_livros MODIFY isbn VARCHAR(17);
ALTER TABLE tbl_autor_livro MODIFY isbn VARCHAR(17);
ALTER TABLE tbl_exemplar MODIFY isbn VARCHAR(17);

ALTER TABLE tbl_autor_livro
ADD CONSTRAINT fk_isbn_tbl_autor_livro
FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn);

ALTER TABLE tbl_exemplar
ADD CONSTRAINT fk_isbn_tbl_exemplar
FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn);

UPDATE tbl_livros
SET ano_publicacao =2019
WHERE isbn = '978-85-7126-061-0';

SELECT * FROM tbl_livros
WHERE ano_publicacao < 2000;

DELETE FROM tbl_membro
WHERE id_membro = 102;

SELECT * FROM tbl_membro;

/EXERCICIO 3/
INSERT INTO tbl_autor (nome_autor, nacionalidade)
VALUES ('Clarice Lispector', 'Brasileira'),
('George Orwell', 'Britânico'),
('Isaac Asimov', 'Russo-Americano');

INSERT INTO tbl_livros (isbn, titulo, ano_publicacao, editora)
VALUES ('978-85-325-2306-8', 'A Revolução dos Bichos', 1945, 'Companhia das Letras'),
('978-0-00-711711-0', '1984', 1949, 'Penguin Books'),
('978-85-325-1997-9', 'Eu, Robô', 1950, 'Aleph');

SELECT * FROM tbl_membro
WHERE nome_membro LIKE '%Silva';

SELECT * FROM tbl_livros
WHERE ano_publicacao BETWEEN 1939 AND 1945;

SELECT * FROM  tbl_livros
WHERE editora IN ('Rocco', 'Aleph');

SELECT * FROM tbl_livros
WHERE editora NOT IN ('Rocco', 'Aleph');

/EXERCICIO 4/
SELECT CONCAT(UPPER(nome_membro), ' _ ', telefone)
AS contato FROM tbl_membro;

SELECT COUNT(*) AS autores_brasileiros FROM tbl_autor
WHERE nacionalidade LIKE 'Brasileir_';  /O _ substitui aquele caracter/

SELECT MIN(ani_publicacao) AS Livro_mais_antigo_editora_Aleph FROM tbl_livros
WHERE editora = ('Aleph');

INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
VALUES (102, CURDATE(), CURDATE() + INTERVAL 14 DAY, NULL, 1, 101);

/AULA 8/
/* 1. Cadastre um autor que ainda não tem livro */
INSERT INTO tbl_autor (nome_autor, nacionalidade)
VALUES ('Frank Herbert', 'Americano');

/* 2. Cadastre exemplares para nossos livros */
/* (IDs 101 e 102 para o livro '978-85-325-3078-3') */
INSERT INTO tbl_exemplar (id_exemplar, status_exemplar, isbn)
VALUES (108, 'Disponível', '978-85-325-3078-3'),
(109, 'Emprestado', '978-85-325-3078-3'),
(110, 'Disponível', '978-85-7126-061-0');

INSERT INTO tbl_membro(id_membro,nome_membro, endereco, telefone)
     VALUE ('108','Ana silva','Rua A,123','11-98765-4321'),
           ('109','Bruno Costa','AV.B 456','11-91234-5678'),
           ('110','Carla Dias','Praça C,789','11-95555-4444');

SELECT * FROM tbl_exemplar;
SELECT * FROM tbl_emprestimo;



/* Exercício 3 – Cadastrar um empréstimo para o exemplar 102
para o membro 101 (Ana Silva) */
INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_exemplar, id_membro)
VALUES ( 501,'2024-10-01', '2024-10-15', NULL,102, 101);
    
    
-- Exercicio 2: Contar quantos exemplares há de cada livro
SELECT isbn, COUNT(*) AS numero_de_copias 
FROM tbl_exemplar
GROUP BY isbn;


-- Exercicio 3: Relatório de empréstimos com INNER JOIN
SELECT M.nome_membro, L.titulo, E.data_devolucao
FROM tbl_membro M
inner JOIN tbl_emprestimo E ON
      M.id_membro = E.id_membro
inner JOIN tbl_exemplar EX ON
      M.id_exemplar = E.id_exemplar
INNER JOIN tbl_livros L ON
      EX.isbn = L.isbn;
    
    
-- Exercicio 4: LEFT JOIN (Relatório de "Faltantes")
SELECT A.nome_autor, COUNT(AL.isbn) AS quantidade
FROM tbl_autor A
LEFT JOIN tbl_autor_livro AL ON
      A.id_autor = AL.id_autor
    GROUP BY A.nome_autor;

-- Exercício 5: Subquery com IN
SELECT nome_membro FROM tbl_membro
WHERE id_membro IN(
SELECT id_membro FROM tbl_emprestimo
WHERE data_devolucao_efetiva IS NULL
);

/AULA 9/
/* EXERCÍCIO 1 - TCL */


START TRANSACTION;

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (999, 'Membro Ficticio', 'Endereço Teste', '00-00000-0000');

SELECT * FROM tbl_membro WHERE id_membro = 999;

ROLLBACK;

SELECT * FROM tbl_membro WHERE id_membro = 999;



/* -------------- DESAFIO: USANDO COMMIT -------------- */

/*  Inicia nova transação */
START TRANSACTION;

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (999, 'Membro Persistente', 'Rua Final', '11-11111-1111');

SELECT * FROM tbl_membro WHERE id_membro = 999;

COMMIT;

SELECT * FROM tbl_membro WHERE id_membro = 999;

DELETE FROM tbl_membro WHERE id_membro = 999;

SELECT * FROM tbl_membro WHERE id_membro = 999;


/* EXERCÍCIO 2 - VIEW= */

/* 1. Criar a VIEW */
CREATE VIEW V_Livros_Autores AS
SELECT 
    L.titulo_livro,
    L.ano_publicacao,
    A.nome_autor
FROM tbl_livro L
JOIN tbl_autor A ON L.id_autor = A.id_autor;

SELECT * FROM V_Livros_Autores
WHERE nome_autor LIKE 'Machado%';

/*EXERCÍCIO 3 - STORED PROCEDURE */

DELIMITER $$

CREATE PROCEDURE sp_cadastrar_livro (
    IN p_isbn VARCHAR(20),
    IN p_titulo VARCHAR(200),
    IN p_ano INT,
    IN p_editora VARCHAR(100)
)
BEGIN
    INSERT INTO tbl_livro (isbn, titulo_livro, ano_publicacao, editora)
    VALUES (p_isbn, p_titulo, p_ano, p_editora);
END $$

DELIMITER ;

CALL sp_cadastrar_livro(
    '978-85-390-0064-8',
    'Duna',
    1965,
    'Aleph'
);
/EXERCICIO 4 - CRIANDO UMA FUNCTION/

/*EXERCÍCIO 5 - TRIGGER (AUDITORIA) */

/* 1. Criar tabela de LOG */
CREATE TABLE tbl_emprestimo_log (
    id_log INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(10),
    id_emprestimo_afetado INT,
    data_hora DATETIME
);

/* 2. Criar o TRIGGER de auditoria */
DELIMITER $$

CREATE TRIGGER trg_log_novo_emprestimo
AFTER INSERT ON tbl_emprestimo
FOR EACH ROW
BEGIN
    INSERT INTO tbl_emprestimo_log (acao, id_emprestimo_afetado, data_hora)
    VALUES ('NOVO', NEW.id_emprestimo, NOW());
END $$

DELIMITER ;

/* 3. Testando o trigger */

/* INSERT manual no empréstimo (caso não tenha a procedure sp_novo_emprestimo) */
INSERT INTO tbl_emprestimo (id_membro, id_exemplar, data_emprestimo, data_devolucao)
VALUES (1, 1, NOW(), NULL);

/* 4. Verificando o log */
SELECT * FROM tbl_emprestimo_log;