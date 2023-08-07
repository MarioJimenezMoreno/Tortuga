DROP DATABASE IF EXISTS db_tortuga;
CREATE DATABASE IF NOT EXISTS db_tortuga;
USE db_tortuga;
SHOW TABLES;
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL CHECK (LENGTH(password) >= 6),
    email VARCHAR(45) NOT NULL UNIQUE,
    phone INT UNIQUE
);

select * from users;


CREATE TABLE IF NOT EXISTS tareas(
tarea_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
tarea VARCHAR(45),
urgencia BOOLEAN,
nota VARCHAR(150),
fk_categoria_id INT
);

CREATE TABLE IF NOT EXISTS users_tareas(/*deberia ser así pero mejor me aseguro*/
users_tareas_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,/*probablemente esto sobre*/
fk_user_id INTEGER UNSIGNED,
fk_tarea_id INTEGER UNSIGNED,
fk_tarea_categoria_id INTEGER UNSIGNED
);

CREATE TABLE IF NOT EXISTS dias(
dia_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
dia_inicio DATE,
hora_inicio DATETIME, /* ASEGURAR QUE SEA DATETIME*/
dia_final DATE,
hora_final DATETIME,
duracion INT
);


CREATE TABLE IF NOT EXISTS dias_tareas(
dias_tareas_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
fk_dia_id INTEGER UNSIGNED,
fk_tarea_id INTEGER UNSIGNED
);

CREATE TABLE IF NOT EXISTS categorias(
categoria_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
color VARCHAR(45),
color_code VARCHAR(45)
);

