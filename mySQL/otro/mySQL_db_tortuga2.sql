DROP DATABASE IF EXISTS db_tortuga;
CREATE DATABASE IF NOT EXISTS db_tortuga;
USE db_tortuga;

/* USERS */
CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(45) NOT NULL UNIQUE,
    phone INT UNIQUE,
    email VARCHAR(45) NOT NULL UNIQUE
);


INSERT INTO users (username,password,email,phone) VALUES
('QUIM', 'contraseña1', 'quim@gmail.com', 642480539),
('DAVID', 'contraseña2', 'david@gmail.com', 123456789);



/* CATEGORIES */
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




/* TASK */
CREATE TABLE IF NOT EXISTS tasks(
    task_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45),
    description VARCHAR(150),
    fk_category_id INT,
    beginning_hour TIME,
    final_hour TIME,
    date DATE,
    duration DOUBLE,
    category_id  INTEGER UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

INSERT INTO tasks (title,fk_category_id,beginning_hour,final_hour,date,duration,category_id)
VALUES
    ('descansar',1,'7:30','9:00','2012-11-11',1.5,1),
    ('correr',2,'9:30','19:00','2011-11-11',9.5,2),
    ('trabajar',3,'19:30','20:00','2011-11-11',0.5,3),
    ('ir al bar',1,'20:15','21:00','2011-11-11',0.75,4),
    ('ir al gym',2,'21:30','22:00','2011-11-11',0.5,2);

CREATE TABLE IF NOT EXISTS users_tasks(/*deberia ser así pero mejor me aseguro*/
users_tasks_id INTEGER UNSIGNED AUTO_INCREMENT,/*probablemente esto sobre*/
user_id INTEGER UNSIGNED,
task_id INTEGER UNSIGNED,
PRIMARY KEY (users_tasks_id),
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (task_id) REFERENCES tasks(task_id)
);
INSERT INTO users_tasks (user_id,task_id)
VALUES
    (1,1),
    (1,2),
    (1,3),
    (2,3),
    (2,2);
    
SELECT username, name, duration, color_code
FROM tasks
         JOIN users_tasks ON tasks.task_id = users_tasks.task_id
         JOIN users ON users.user_id = users_tasks.user_id
         JOIN categories ON categories.category_id = tasks.category_id;