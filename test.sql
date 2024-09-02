CREATE TABLE usuarios(
    usuario VARCHAR(35) NOT NULL,
    senha VARCHAR(25) NOT NULL

);

INSERT INTO usuarios(usuario, senha) VALUES(
    "jukers",
    "1234"
);


DELETE FROM usuario WHERE nome = "jukers";