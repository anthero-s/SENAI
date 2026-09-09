CREATE DATABASE db_saber_e_cia;

USE db_saber_e_cia;

CREATE TABLE tbl_livros(
    isbn VARCHAR(16) PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    ano_publicacao YEAR NOT NULL,
    editora VARCHAR(100)
    );
    
INSERT INTO tbl_livros(isbn, titulo, ano_publicacao, editora)
    VALUE ('12345','Java - como programar.','2000','Marsh'),
          ('123456','Java - como programar.','2010','Marsh');
   
CREATE TABLE tbl_autor(
    id_autor INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome_autor VARCHAR(200),
    nacionalidade VARCHAR(100)
    );
   
INSERT INTO tbl_autor(nome_autor, nacionalidade)
    VALUES ('Pietro','Brasileiro'),
           ('Macahdo de assis','Brasileiro');
    
 UPDATE tbl_autor
    SET nacionalidade = 'Brasileiro'
    WHERE id_autor = 1;
    
UPDATE tbl_autor
SET nome_autor = 'J.K. Rowling (joanne Rowling)',
nacionalidade = 'Britânica (Reino Unido)'
WHERE id_autor = 2;
   
CREATE TABLE tbl_autor_livro(
    isbn VARCHAR(16) NOT NULL,
    id_autor INTEGER NOT NULL,
   
    FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn),
   
    CONSTRAINT FK_id_autorESSE FOREIGN KEY (id_autor)
    REFERENCES tbl_autor(id_autor)
    );
    
INSERT INTO tbl_autor_livro(isbn, id_autor)
    VALUE ('12345','1');
   
INSERT INTO tbl_autor_livro(isbn, id_autor)
    VALUE ('123456','2');
   
CREATE TABLE tbl_exemplar(
    id_exemplar INTEGER PRIMARY KEY,
    status_exemplar VARCHAR(15) NOT NULL,
    isbn VARCHAR(16) NOT NULL,
      FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn)
    );
    
INSERT INTO tbl_exemplar(status_exemplar, isbn)
    VALUE ('Ocupado','1234');
   
CREATE TABLE tbl_membro(
    id_membro INTEGER PRIMARY KEY,
    nome_membro VARCHAR(200) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(15) NOT NULL
    );
    
INSERT INTO tbl_membro(id_membro,nome_membro, endereco, telefone)
    VALUE ('1''Pietro','Rua Rio Branco N°23','(11) 9657-1092'),
          ('Enzo','Rua 9 de julho N23','(11) 3546-1234'),
          ('Anthero','Rua Stefanny alves','(23) 2334-3423');
          
INSERT INTO tbl_membro(nome_membro, endereco, telefone)
     VALUE ('2''Enzo','Rua 9 de julho N23','(11) 3546-1234'),
           ('3''Anthero','Rua Stefanny alves','(23) 2334-3423');
CREATE TABLE tbl_emprestimo(
    id_emprestimo INTEGER PRIMARY KEY,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    data_devolucao_efetiva DATE,
    id_membro INTEGER NOT NULL,
    id_exemplar INTEGER NOT NULL,
    FOREIGN KEY (id_membro) REFERENCES tbl_membro(id_membro),
   
    CONSTRAINT FK_id_exemplarESSE FOREIGN KEY (id_exemplar)
    REFERENCES tbl_exemplar(id_exemplar)
    );
    
INSERT INTO tbl_emprestimo(data_emprestimo, data_devolucao, data_devolucao_efetiva)
    VALUE ('10/10/2025','14/10/2025','12/10/2025');
   
CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'Mudar123';

GRANT ALTER ON db_saber_e_cia.tbl_livros TO 'estagiario'@'localhost';

ALTER TABLE tbl_livros ADD COLUMN genero VARCHAR(50);

SELECT * FROM tbl_autor_livro;

DELETE FROM tbl_autor_livro
WHERE id_autor = 2;

DELETE FROM tbl_autor
WHERE id_autor = 7;

SELECT * FROM tbl_autor
WHERE nacionalidade = 'Brasileiro';

INSERT INTO tbl_membro(id_membro,nome_membro, endereco, telefone)
     VALUE ('101','Ana silva','Rua A,123','11-98765-4321'),
           ('102','Bruno Costa','AV.B 456','11-91234-5678'),
           ('103','Carla Dias','Praça C,789','11-95555-4444');
           
SELECT * FROM tbl_membro;

INSERT INTO tbl_livros(isbn, titulo, ano_publicacao, editora)
    VALUE ('978-85-3258-307-3', 'Harry Potter e a Pedra Filosofal', '1997', 'Rocco'),
          ('978-85-712-061-0', 'Dom Casmurro','1899', 'Editora Clássica');
          
SELECT * FROM tbl_livros;

ALTER TABLE tbl_autor_livro DROP FOREIGN KEY FK_id_autorESSE;
ALTER TABLE tbl_exemplar DROP FOREIGN KEY fk_isbn_tbl_exemplar;

ALTER TABLE tbl_livro MODIFY isbn VARCHAR(17);
ALTER TABLE tbl_autor_livro MODIFY isbn VARCHAR(17);
ALTER TABLE tbl_exemplar MODIFY isbn VARCHAR(17);

ALTER TABLE tbl_autor_livro
ADD CONSTRAINT fk_isbn_tbl_autor_livro
FOREIGN KEY (isbn) REFERENCES tbl_livro(isbn);

ALTER TABLE tbl_exemplar
ADD CONSTRAINT fk_isbn_tbl_exemplar
FOREIGN KEY (isbn) REFERENCES tbl_livro(isbn);

 UPDATE tbl_livros
 SET ano_publicacao = 2019
 WHERE isbn = '978-85-712-061-0'
 
DELETE FROM tbl_membro
WHERE id_membro =102;

SELECT titulo, ano_publicacao, ano_publicacao + 10 AS ano_revisao
FROM tbl_livros;

SELECT * FROM tbl_livros
WHERE ano_publicacao < 2000;

SELECT * FROM tbl_livros
WHERE editora = 'Rocco'
 AND ano_publicacao < 2010;
 
SELECT * FROM tbl_membro
WHERE nome_membro = 'Ana Silva'
OR endereco = 'Rua A, 123'

SELECT * FROM tbl_autor 
WHERE NOT nacionalidade = 'Brasileiro';

SELECT * FROM tbl_livros
WHERE ano_publicacao BETWEEN 1990 AND 2000;

SELECT * FROM tbl_livros
WHERE  editora IN ('Rocco', 'Editora classica');

SELECT * FROM tbl_membro
WHERE nome_membro LIKE 'Ana%';

SELECT * FROM tbl_livros
WHERE titulo LIKE '%Potter%';

SELECT * FROM tbl_emprestimo
WHERE data_devolucao_efetiva IS NULL
 
 INSERT INTO tbl_exemplar (id_exemplar, status_exemplar, isbn)
 VALUES 
 (01, 'emprestado', '978-85-7126-061-0');
 
 INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, id_exemplar, id_endereco)
 VALUES
 
 (1, '2025-10-10', '2025-10-20', '2025-11-01',1,101);
 
 INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, data_devolcao_efetiva, id_exemplar, id_membro)
 VALUES
 (2, '2025-10-10', '2015-10-20', '2025-11-01', 1, 101);
 
 INSERT INTO tbl_emprestimo(id_emprestimo, data_emprestimo, data_devolucao, devolucao_efetiva, id_exemplar, id_membro)
     VALUES (3,CURDATE(),CURDATE(), + INTERVAL 7 DAY,1,101);
     
SELECT ROUND (19.99 * 1.05, 2);

SELECT COUNT(*) AS total_membros 
FROM tbl_membro;

SELECT COUNT(data_devolucao_efetiva) AS total_devolvidos
FROM tbl_emprestimo;

SELECT MIN(ano_publicacao) AS livro_mais_antigo 
FROM tbl_livros;

SELECT MAX(ano_publicacao) AS livro_mais_novo 
FROM tbl_livros;

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

SELECT * FROM tbl_livros
WHERE editora NOT IN ('Rocco','Aleph');

SELECT CONCAT(UPPER(nome_membro),'- ',telefone, '')
AS etiqueta FROM tbl_membro;
       
SELECT COUNT(*) AS total_autores_brasileiros
FROM tbl_autor
WHERE nacionalidade LIKE 'brasileir_';

SELECT MIN(ano_publicacao) AS livro_mais_antigo_aleph
FROM tbl_livros
WHERE editora = 'Aleph';

INSERT INTO tbl_emprestimo (id_emprestimo, data_emprestimo, data_devolucao, data_devolucao_efetiva, id_membro, id_exemplar)
VALUES (101, CURDATE(), CURDATE() + INTERVAL 14 DAY, NULL, 1, 101);

SELECT nacionalidade, COUNT(*) AS nacionalidade_autores
FROM tbl_autor
GROUP BY nacionalidade;

SELECT editora, COUNT(isbn) AS quantidades_livros
FROM tbl_livros
GROUP BY editora;

INSERT INTO tbl_livros (isbn, titulo, ano_publicacao, editora)
VALUES
    ('999-99978-000', 'puff daddy', 2002, 'Rocco'),
    ('777-228882-000', 'justin', 2088, 'Rocco'),
    ('777-88888-111', 'makauli', 2008, 'Rocco');

SELECT titulo, MAX(ano_publicacao) AS ano_publicacao, editora
FROM tbl_livros
GROUP BY editora;

SELECT editora, COUNT(isbn) AS quantidade_livros
FROM tbl_livros
GROUP BY editora
HAVING COUNT(isbn) >= 2;

SELECT nome_autor AS nome, 'Autor' AS tipo
FROM tbl_autor
UNION
SELECT nome_membro AS nome, 'Membro' AS tipo 
FROM tbl_membro;

SELECT L.titulo, A.nome_autor
FROM tbl_livros L 
CROSS JOIN tbl_autor A;

SELECT L.titulo, AL.id_autor
FROM tbl_livros L 
INNER JOIN tbl_autor_livro AL
	ON L.isbn = AL.isbn;

SELECT L.titulo, A.nome_autor
FROM tbl_livros L
INNER JOIN tbl_autor_livro AL
    ON L.isbn = AL.isbn
INNER JOIN tbl_autor A 
    ON AL.id_autor = A.id_autor ;
    
INSERT INTO tbl_autor_livro(isbn, id_autor)
VALUES ('736473547537',1),
       ('834728748278',2);

START TRANSACTION;
UPDATE tbl_membro SET telefone = '11-99999-0000' WHERE id_membro = 101;
COMMIT; 

START TRANSACTION;

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone) VALUES (909, 'Membro Teste', 'Rua Janeiro, n° 300', '11-73857-9876');

SELECT * FROM tbl_membro;
ROLLBACK;

SELECT * FROM tbl_membro;

START TRANSACTION;

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (909, 'Membro Teste', 'Rua Teste', '11-11111-1111');

SAVEPOINT ponto_A;

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (997, 'Membro Teste', 'Rua Teste', '11-11111-1111');

SAVEPOINT ponto_B;

INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (900, 'Membro Teste', 'Rua Teste', '11-11111-1111');

SELECT * FROM tbl_membro;

ROLLBACK TO SAVEPOINT ponto_A;

SELECT * FROM tbl_membro;

COMMIT;

CREATE VIEW V_Relatorio_Emprestimos AS
SELECT
	M.nome_membro,
    L.titulo,
    E.data_emprestimo,
    E.data_devolucao
FROM tbl_membro M
JOIN tbl_emprestimo E ON M.id_membro = E.id_membro
JOIN tbl_exemplar EX ON E.id_exemplar = EX.id_exemplar
JOIN tbl_livros L ON EX.isbn = L.isbn;

SELECT * FROM V_Relatorio_Emprestimos
WHERE nome_membro = 'Ana Silva'
AND nome_membro = 'Dom Casmurro';

DELIMITER $$

CREATE PROCEDURE sp_novo_emprestimo (
	IN p_id_exemplar INT,
    IN p_id_membro INT,
    IN p_id_emprestimo INT
)
BEGIN
	INSERT INTO tbl_emprestimo (
		data_emprestimo,
        data_devolucao,
        data_devolucao_efetiva,
        id_exemplar,
        id_membro
)
VALUES (
	p_id_emprestimo,
	CURDATE(),
    CURDATE() + INTERVAL 14 DAY,
    NULL,
    p_id_exemplar,
    p_id_membro
);
END$$

DELIMITER ;

CALL sp_novo_emprestimo(101, 101, 9999);

DELIMITER $$

CREATE FUNCTION fn_status_membro (p_id_membro INT)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
	DECLARE v_atrasos INT;
    
	SELECT COUNT(*) INTO v_atrasos
    FROM tbl_emprestimo
    WHERE id_membro = p_id_membro
		AND data_devolucao < CURDATE()
        AND data_devolucao_efetiva IS NULL;
        
	IF v_atrasos > 0 THEN
		RETURN 'Com Atraso';
	ELSE
		RETURN 'Regular';
	END If;
END$$

DELIMITER ;

SELECT nome_membro, fn_status_membro(id_membro) FROM tbl_membro;

CREATE TABLE tbl_livro_log (
	id_log INT AUTO_INCREMENT PRIMARY KEY,
    isbn_livros VARCHAR(20),
    titulo_antigo VARCHAR(200),
    titulo_novo VARCHAR(200),
    data_mudanca DATETIME
);

DELIMITER $$

CREATE TRIGGER trg_log_mudanca_livro
AFTER UPDATE ON tbl_livro
FOR EACH ROW
BEGIN
	IF OLD.titulo != NEW.titulo THEN
		INSERT INTO tbl_livro_log (isbn_livro, titulo_antigo, titulo_novo, data_mudanca)
        VALUES (OLD.isbn, OLD.titulo, NEW.titulo, NOW());
	END IF;
END$$

DELIMITER ; 

UPDATE tbl_livros
SET titulo = 'Duna (Edição Especial)'
WHERE isbn = '777-228882-000';

SELECT * FROM tbl_livro_log;

INSERT INTO tbl_livros (isbn, titulo, ano_publicacao, editora) VALUES ('999-987654-987', 'Esse é o meu livro', '2020', 'Rocco');

DELIMITER $$

CREATE EVENT evt_verifica_atrasados
ON SCHEDULE EVERY 1 DAY
STARTS '2025-01-01 02:00:00'
DO
BEGIN
	UPDATE tbl_exemplar EX
    JOIN tbl_emprestimo E ON EX.id_exemplar = E.id_exemplar
    SET EX.status_exemplar = 'Atrasado'
    WHERE E.data_devolucao < CURDATE()
		AND E.data_devolcao_efetiva IS NULL;
END$$
DELIMITER ;

SELECT * FROM tbl_exemplar;

SET GLOBAL event_scheduler = ON;

START TRANSACTION;
INSERT INTO tbl_membro (id_membro, nome_membro, endereco, telefone)
VALUES (909, 'Membro Teste', 'Rua Teste', '999');