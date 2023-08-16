DROP DATABASE IF EXISTS db_tortuga;
CREATE DATABASE IF NOT EXISTS db_tortuga;
USE db_tortuga;
<<<<<<< HEAD

CREATE TABLE IF NOT EXISTS users(
                                    id INTEGER PRIMARY KEY AUTO_INCREMENT,
                                    username VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(45) NOT NULL UNIQUE,
    phone INT UNIQUE,
    email VARCHAR(45) NOT NULL UNIQUE
    );

=======

CREATE TABLE IF NOT EXISTS users(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(45) NOT NULL UNIQUE,
	password VARCHAR(45) NOT NULL UNIQUE,
	phone INT UNIQUE,
	email VARCHAR(45) NOT NULL UNIQUE
);

>>>>>>> 0d44d694adbd82de023a5614dc7d462e4dc1ce66
INSERT INTO users (username,password,email,phone)
VALUES ('QUIM', 'contraseña1', 'quim@gmail.com', 642480539);

CREATE TABLE IF NOT EXISTS tareas(
<<<<<<< HEAD
                                     tarea_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                                     tarea VARCHAR(45),
    urgencia BOOLEAN,
    nota VARCHAR(150),
    fk_categoria_id INT,
    inicio DATETIME,
    final DATETIME,
    duracion DOUBLE
    );

INSERT INTO tareas (tarea,fk_categoria_id,inicio,final,duracion)
VALUES
    ('descansar',1,'2023-08-11 7:30:00','2023-08-11 9:00:00',1.5),
    ('correr',2,'2023-08-11 9:30:00','2023-08-11 19:00:00',9.5),
    ('trabajar',3,'2023-08-11 19:30:00','2023-08-11 20:00:00',0.5),
    ('ir al bar',1,'2023-08-11 20:15:00','2023-08-11 21:00:00',0.75),
    ('ir al gym',2,'2023-08-11 21:30:00','2023-08-11 22:00:00',0.5);
=======
tarea_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
tarea VARCHAR(45),
urgencia BOOLEAN,
nota VARCHAR(150),
fk_categoria_id INT,
inicio DATETIME,
final DATETIME,
duracion DOUBLE
);
>>>>>>> 0d44d694adbd82de023a5614dc7d462e4dc1ce66

INSERT INTO tareas (tarea,fk_categoria_id,inicio,final,duracion)
VALUES 
('descansar',1,'2023-08-11 7:30:00','2023-08-11 9:00:00',1.5),
('correr',2,'2023-08-11 9:30:00','2023-08-11 19:00:00',9.5),
('trabajar',3,'2023-08-11 19:30:00','2023-08-11 20:00:00',0.5),
('ir al bar',1,'2023-08-11 20:15:00','2023-08-11 21:00:00',0.75),
('ir al gym',2,'2023-08-11 21:30:00','2023-08-11 22:00:00',0.5);

CREATE TABLE IF NOT EXISTS users_tareas(/*deberia ser así pero mejor me aseguro*/
<<<<<<< HEAD
                                           users_tareas_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,/*probablemente esto sobre*/
                                           fk_user_id INTEGER UNSIGNED,
                                           fk_tarea_id INTEGER UNSIGNED,
                                           fk_tarea_categoria_id INTEGER UNSIGNED
);
INSERT INTO users_tareas (fk_user_id,fk_tarea_id,fk_tarea_categoria_id)
VALUES
    (1,1,1),
    (1,2,2),
    (1,3,3),
    (1,4,1),
    (1,5,2);

CREATE TABLE IF NOT EXISTS categorias(
                                         categoria_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                                         name VARCHAR(45),
    color VARCHAR(45),
    color_code VARCHAR(45)
    );
INSERT INTO categorias(name,color,color_code)
VALUES
    ("Libre","Rojo","#FF0000"),
    ("Deporte","Verde","#00FF00"),
    ("Trabajo","Azul","#0000FF"),
    ("Ocio","Morado","#800080");

SELECT username, inicio, tarea, duracion, color_code
FROM tareas
         JOIN users_tareas ON tareas.tarea_id = users_tareas.fk_tarea_id
         JOIN users ON users.id = users_tareas.fk_user_id
         JOIN categorias ON categorias.categoria_id = tareas.fk_categoria_id
=======
users_tareas_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,/*probablemente esto sobre*/
fk_user_id INTEGER UNSIGNED,
fk_tarea_id INTEGER UNSIGNED,
fk_tarea_categoria_id INTEGER UNSIGNED
);
INSERT INTO users_tareas (fk_user_id,fk_tarea_id,fk_tarea_categoria_id)
VALUES 
(1,1,1),
(1,2,2),
(1,3,3),
(1,4,1),
(1,5,2);

CREATE TABLE IF NOT EXISTS categorias(
categoria_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(45),
color VARCHAR(45),
color_code VARCHAR(45)
);
INSERT INTO categorias(name,color,color_code)
VALUES 
("Libre","Rojo","#FF0000"),
("Deporte","Verde","#00FF00"),
("Trabajo","Azul","#0000FF"),
("Ocio","Morado","#800080");

SELECT username, inicio, tarea, duracion, color_code
FROM tareas
JOIN users_tareas ON tareas.tarea_id = users_tareas.fk_tarea_id
JOIN users ON users.id = users_tareas.fk_user_id
JOIN categorias ON categorias.categoria_id = tareas.fk_categoria_id
>>>>>>> 0d44d694adbd82de023a5614dc7d462e4dc1ce66
WHERE username = "quim";
