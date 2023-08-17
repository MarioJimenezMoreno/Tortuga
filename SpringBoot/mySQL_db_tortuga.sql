DROP DATABASE IF EXISTS db_tortuga;
CREATE DATABASE IF NOT EXISTS db_tortuga;
USE db_tortuga;

CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(45) NOT NULL UNIQUE,
    phone INT UNIQUE,
    email VARCHAR(45) NOT NULL UNIQUE
    );

SELECT * FROM users;
INSERT INTO users (username,password,email,phone)
VALUES ('QUIM', 'contraseña1', 'quim@gmail.com', 642480539);

CREATE TABLE IF NOT EXISTS tasks(
    task_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45),
    urgencia BOOLEAN,
    description VARCHAR(150),
    fk_category_id INT,
    initialHour DATETIME,
    finalHour DATETIME,
    taskDay DATETIME,
    duration DOUBLE
    );

INSERT INTO tasks (task,fk_category_id,initialHour,finalHour,duration)
VALUES
    ('descansar',1,'2023-08-11 7:30:00','2023-08-11 9:00:00',1.5),
    ('correr',2,'2023-08-11 9:30:00','2023-08-11 19:00:00',9.5),
    ('trabajar',3,'2023-08-11 19:30:00','2023-08-11 20:00:00',0.5),
    ('ir al bar',1,'2023-08-11 20:15:00','2023-08-11 21:00:00',0.75),
    ('ir al gym',2,'2023-08-11 21:30:00','2023-08-11 22:00:00',0.5);

CREATE TABLE IF NOT EXISTS users_tasks(/*deberia ser así pero mejor me aseguro*/
                                           users_tasks_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,/*probablemente esto sobre*/
                                           fk_user_id INTEGER UNSIGNED,
                                           fk_task_id INTEGER UNSIGNED,
                                           fk_tasks_categories_id INTEGER UNSIGNED
);
INSERT INTO users_tasks (fk_user_id,fk_task_id,fk_tasks_categories_id)
VALUES
    (1,1,1),
    (1,2,2),
    (1,3,3),
    (1,4,1),
    (1,5,2);

CREATE TABLE IF NOT EXISTS categories(
	category_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45),
    color VARCHAR(45),
    color_code VARCHAR(45)
    );
INSERT INTO categories(name,color,color_code)
VALUES
    ("Libre","Rojo","#FF0000"),
    ("Deporte","Verde","#00FF00"),
    ("Trabajo","Azul","#0000FF"),
    ("Ocio","Morado","#800080");	

SELECT username, initialHour, task, duration, color_code
FROM tareas
         JOIN users_tasks ON tasks.task_id = users_tasks.fk_task_id
         JOIN users ON users.id = users_tasks.fk_user_id
         JOIN categories ON categories.category_id = tasks.fk_category_id
WHERE username = "quim";