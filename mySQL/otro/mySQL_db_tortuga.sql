CREATE TABLE IF NOT EXISTS users_tareas(/*deberia ser así pero mejor me aseguro*/
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
WHERE username = "quim";

/*username: "Quim",
        dia: -1,
        tarea: "Libre",
        duracion: 6,
        color_code: "#FCD8D4"*/