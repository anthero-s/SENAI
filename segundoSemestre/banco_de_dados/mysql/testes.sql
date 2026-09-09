CREATE DATABASE db_saber_e_cia

USE db_saber_e_cia;

CREATE DATABASE IF NOT EXISTS db_saber_e_cia;
USE db_saber_e_cia;

CREATE TABLE tbl_livros (
    isbn VARCHAR(16) PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    ano_publicacao YEAR NOT NULL,
    editora VARCHAR(100)
);

INSERT INTO tbl_livros (isbn, titulo, ano_publicacao, editora)
VALUES 
    ('123456', 'Java - Como Programar', 2000, 'Marsh'),
    ('1234567', 'Java - Como Programar', 2010, 'Marsh');

CREATE TABLE tbl_autor (
    id_autor INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome_autor VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(100)
);

INSERT INTO tbl_autor (nome_autor, nacionalidade)
VALUES 
    ('Anthero', 'Brasileiro'),
    ('Machado de Assis', 'Brasileiro');
    
    UPDATE tbl_autor
    SET nacionalidade = 'Brasileiro'
    WHERE id_autor = 1;
    
    UPDATE tbl_autor
    SET nome_autor = 'J.K. Rowling (joanne Rowling)',
		nacionalidade = 'Britânica (Reino Unido)'
	WHERE id_autor = 2;
    
    DELETE FROM tbl_autor 
    WHERE id_autor = 2;

CREATE TABLE tbl_autor_livro (
    isbn VARCHAR(16) NOT NULL,
    id_autor INTEGER NOT NULL,
    FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn),
    CONSTRAINT FK_id_autorESSE FOREIGN KEY (id_autor)
        REFERENCES tbl_autor(id_autor)
);

INSERT INTO tbl_autor_livro (isbn, id_autor)
VALUES 
    ('123456', 1),
    ('1234567', 2);

CREATE TABLE tbl_exemplar (
    id_exemplar INTEGER AUTO_INCREMENT PRIMARY KEY,
    status_exemplar VARCHAR(15) NOT NULL,
    isbn VARCHAR(16) NOT NULL,
    FOREIGN KEY (isbn) REFERENCES tbl_livros(isbn)
);

INSERT INTO tbl_exemplar (status_exemplar, isbn)
VALUES 
    ('Ocupado', '123456');

CREATE TABLE tbl_membro (
    id_membro INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome_membro VARCHAR(200) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(15) NOT NULL
);

INSERT INTO tbl_membro (nome_membro, endereco, telefone)
VALUES 
    ('Pietro', 'Rua Rio Branco Nº23', '(11) 9657-1092');

CREATE TABLE tbl_emprestimo (
    id_emprestimo INTEGER AUTO_INCREMENT PRIMARY KEY,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    data_devolucao_efetiva DATE,
    id_membro INTEGER NOT NULL,
    id_exemplar INTEGER NOT NULL,
    FOREIGN KEY (id_membro) REFERENCES tbl_membro(id_membro),
    CONSTRAINT FK_id_exemplarESSE FOREIGN KEY (id_exemplar)
        REFERENCES tbl_exemplar(id_exemplar)
);

INSERT INTO tbl_emprestimo (data_emprestimo, data_devolucao, data_devolucao_efetiva, id_membro, id_exemplar)
VALUES 
    ('2025-10-10', '2025-10-14', '2025-10-12', 1, 1);

CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'Mudar123';

GRANT ALTER ON db_saber_e_cia.tbl_livros TO 'estagiario'@'localhost';

ALTER TABLE tbl_livros ADD COLUMN genero VARCHAR(50);

SELECT * FROM tbl_autor_livro;

DELETE FROM tbl_autor_livro
WHERE id_autor = 2;

SELECT * FROM tbl_autor
WHERE nacionalidade = 'brasileiro';

SELECT 	nome_autor, nacionalidade FROM tbl_autor;


