DROP DATABASE IF EXISTS db_tortuga;
CREATE DATABASE IF NOT EXISTS db_tortuga;
USE db_tortuga;

CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL ,
    password VARCHAR(255) NOT NULL ,
    phone INT ,
    email VARCHAR(45) NOT NULL UNIQUE
    );


SELECT * FROM users;
INSERT INTO users (username,password,email,phone)
VALUES ('Mario', '123123', 'mariojm2612@gmail.com', 644343107);


CREATE TABLE IF NOT EXISTS tasks (
    task_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45),
    description VARCHAR(150),
	category VARCHAR(45),
    color_code VARCHAR(45),
    beginning_hour VARCHAR(255),
    final_hour VARCHAR(255),
    date DATE,
    duration VARCHAR(255)
);

CREATE TABLE tasks_users (
    task_id INTEGER UNSIGNED,
    id INT,
    PRIMARY KEY (task_id, id),
    FOREIGN KEY (task_id) REFERENCES tasks(task_id)
);

INSERT INTO tasks (title, description, category, color_code, beginning_hour, final_hour, date, duration)
VALUES 
    ('Meeting with Team',
    'Discuss project progress and updates with the team.',
    'Meeting',
    'bg-success-300',
    '10:00',
    '11:30',
    '2023-08-21',
    '1 hour 30 minutes'
),
    ('Write Blog Post',
    'Write an informative blog post about recent industry trends.',
    'Content Creation',
    'bg-success-300',
    '14:00',
    '16:00',
    '2023-08-21',
    '2 hours'
),
    ('Gym exercise',
    'Hit the gym for a cardio and strength training session.',
    'Health & Fitness',
    'bg-primary-300',
    '17:30',
    '18:30',
    '2023-08-21',
    '1 hour'
),
    ('Read Book',
    'Read chapters 5-8 of "The Great Novel"',
    'Personal Development',
    'bg-warning-300',
    '20:00',
    '21:30',
    '2023-08-21',
    '1 hour 30 minutes'
),
    ('Cook Dinner',
    'Prepare a healthy and delicious dinner.',
    'Cooking',
    'bg-danger-300',
    '19:00',
    '21:00',
    '2023-08-21',
    '1 hour'
),

    ('Cook Lunch',
    'Prepare a healthy and delicious lunch.',
    'Cooking',
    'bg-danger-300',
    '13:00',
    '13:20',
    '2023-08-21',
    '20 minutes'),
    
    ('Client Meeting',
    'Meet with a new client to discuss project requirements.',
    'Business',
    'bg-secondary-300',
    '09:30',
    '10:30',
    '2023-08-22',
    '1 hour'),

    ('Research Workshop',
    'Attend a research workshop on emerging technologies.',
    'Learning',
    'bg-primary-300',
    '14:00',
    '17:00',
    '2023-08-22',
    '3 hours'),

    ('Yoga Session',
    'Join a relaxing yoga session to unwind and stretch.',
    'Health & Fitness',
    'bg-success-300',
    '18:00',
    '19:00',
    '2023-08-22',
    '1 hour'),

    ('Code Review',
    'Conduct a code review for a colleague\'s project.',
    'Work',
    'bg-warning-300',
    '11:00',
    '12:30',
    '2023-08-22',
    '1 hour 30 minutes'),

    ('Movie Night',
    'Watch a classic movie with friends at home.',
    'Leisure',
    'bg-danger-300',
    '20:30',
    '23:00',
    '2023-08-22',
    '2 hours 30 minutes'),

    ('Grocery Shopping',
    'Purchase groceries and household essentials.',
    'Errands',
    'bg-secondary-300',
    '16:30',
    '17:00',
    '2023-08-22',
    '30 minutes'), 
    
    ('Team Workshop',
    'Attend a team-building workshop with coworkers.',
    'Work',
    'bg-primary-300',
    '10:00',
    '12:00',
    '2023-08-23',
    '2 hours'),

    ('Study Group',
    'Study with classmates for upcoming exams.',
    'Learning',
    'bg-warning-300',
    '14:00',
    '16:30',
    '2023-08-23',
    '2 hours 30 minutes'),

    ('Evening Walk',
    'Enjoy a peaceful evening walk in the park.',
    'Leisure',
    'bg-success-300',
    '19:00',
    '19:45',
    '2023-08-23',
    '45 minutes'),

    ('Webinar: Marketing Trends',
    'Attend a webinar on the latest marketing trends.',
    'Learning',
    'bg-secondary-300',
    '15:30',
    '17:00',
    '2023-08-23',
    '1 hour 30 minutes'),

    ('Family Dinner',
    'Have a special dinner with family members.',
    'Family',
    'bg-danger-300',
    '18:30',
    '20:00',
    '2023-08-23',
    '1 hour 30 minutes'),

    ('Creative Writing',
    'Spend time writing creatively and journaling.',
    'Personal Development',
    'bg-primary-300',
    '21:00',
    '22:30',
    '2023-08-23',
    '1 hour 30 minutes'),
    
	('Project Presentation',
    'Deliver a presentation on the project status to stakeholders.',
    'Work',
    'bg-primary-300',
    '09:00',
    '10:30',
    '2023-08-24',
    '1 hour 30 minutes'),

    ('Lunch with Friends',
    'Meet up with friends for a casual lunch outing.',
    'Social',
    'bg-success-300',
    '12:30',
    '13:30',
    '2023-08-24',
    '1 hour'),

    ('Client Follow-up',
    'Follow up with a client regarding their inquiries.',
    'Business',
    'bg-secondary-300',
    '15:00',
    '15:45',
    '2023-08-24',
    '45 minutes'),

    ('Coding Practice',
    'Solve coding challenges to improve coding skills.',
    'Learning',
    'bg-warning-300',
    '16:00',
    '18:00',
    '2023-08-24',
    '2 hours'),

    ('Guitar Practice',
    'Practice playing the guitar and learn new chords.',
    'Hobby',
    'bg-danger-300',
    '19:30',
    '20:30',
    '2023-08-24',
    '1 hour'),

    ('Movie Marathon',
    'Have a movie marathon night with favorite films.',
    'Leisure',
    'bg-primary-300',
    '21:00',
    '23:20',
    '2023-08-24',
    '3 hours'),
    ('Team Meeting',
    'Attend a team meeting to discuss project updates.',
    'Meeting',
    'bg-primary-300',
    '10:00',
    '11:00',
    '2023-08-25',
    '1 hour'),

    ('Online Course',
    'Take an online course on digital marketing strategies.',
    'Learning',
    'bg-warning-300',
    '13:00',
    '15:30',
    '2023-08-25',
    '2 hours 30 minutes'),

    ('Volunteer Work',
    'Participate in a local community service event.',
    'Community',
    'bg-success-300',
    '16:00',
    '18:30',
    '2023-08-25',
    '2 hours 30 minutes'),

    ('Read Research Papers',
    'Read and analyze recent research papers in the field.',
    'Learning',
    'bg-secondary-300',
    '19:00',
    '20:30',
    '2023-08-25',
    '1 hour 30 minutes'),

    ('Cooking Experiment',
    'Try out a new cooking recipe for dinner.',
    'Cooking',
    'bg-danger-300',
    '21:00',
    '22:00',
    '2023-08-25',
    '1 hour'),

    ('Relaxation Time',
    'Allocate time for relaxation and mindfulness practice.',
    'Self-Care',
    'bg-primary-300',
    '22:30',
    '23:00',
    '2023-08-25',
    '30 minutes'),
     ('Product Demo',
    'Conduct a product demonstration for potential clients.',
    'Business',
    'bg-secondary-300',
    '11:00',
    '12:30',
    '2023-08-26',
    '1 hour 30 minutes'),

    ('Visit Art Exhibition',
    'Visit a local art exhibition showcasing contemporary artists.',
    'Leisure',
    'bg-primary-300',
    '14:00',
    '16:00',
    '2023-08-26',
    '2 hours'),

    ('Coding Workshop',
    'Attend a coding workshop focusing on web development.',
    'Learning',
    'bg-warning-300',
    '17:30',
    '19:00',
    '2023-08-26',
    '1 hour 30 minutes'),

    ('Family Game Night',
    'Have a fun-filled game night with family members.',
    'Family',
    'bg-danger-300',
    '19:30',
    '22:00',
    '2023-08-26',
    '2 hours 30 minutes'),

    ('Read New Book',
    'Start reading the newly released novel from a favorite author.',
    'Personal Development',
    'bg-secondary-300',
    '22:30',
    '23:20',
    '2023-08-26',
    '1 hour'),
    
    ('Plan Weekend Getaway',
    'Research and plan activities for an upcoming weekend trip.',
    'Travel',
    'bg-success-300',
    '09:00',
    '10:00',
    '2023-08-26',
    '1 hour'),
    ('Morning Jog',
    'Go for an invigorating morning jog in the park.',
    'Health & Fitness',
    'bg-success-300',
    '07:00',
    '08:00',
    '2023-08-27',
    '1 hour'),

    ('Brunch with Friends',
    'Meet friends for a delightful brunch at a local cafe.',
    'Social',
    'bg-primary-300',
    '10:30',
    '12:00',
    '2023-08-27',
    '1 hour 30 minutes'),

    ('Nature Photography',
    'Capture stunning nature shots during a photography outing.',
    'Hobby',
    'bg-warning-300',
    '13:30',
    '15:30',
    '2023-08-27',
    '2 hours'),

    ('Online Webinar',
    'Attend an online webinar on effective time management.',
    'Learning',
    'bg-secondary-300',
    '16:00',
    '17:30',
    '2023-08-27',
    '1 hour 30 minutes'),

    ('Cooking Class',
    'Join a virtual cooking class to learn a new recipe.',
    'Cooking',
    'bg-danger-300',
    '18:00',
    '19:30',
    '2023-08-27',
    '1 hour 30 minutes'),

    ('Gaming Night',
    'Enjoy a gaming session with friends online.',
    'Leisure',
    'bg-primary-300',
    '20:00',
    '23:00',
    '2023-08-27',
    '3 hours');

INSERT INTO tasks_users (id,task_id)
VALUES
	(1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6),
    (1, 7),
    (1, 8),
    (1, 9),
    (1, 10),
    (1, 11),
    (1, 12),
    (1, 13),
    (1, 14),
    (1, 15),
    (1, 16),
    (1, 17),
    (1, 18),
    (1, 19),
    (1, 20),
    (1, 21),
    (1, 22),
    (1, 23),
    (1, 24),
    (1, 25),
    (1, 26),
    (1, 27),
    (1, 28),
    (1, 29),
    (1, 30),
    (1, 31),
    (1, 32),
    (1, 33),
    (1, 34),
    (1, 35),
    (1, 36),
    (1, 37),
    (1, 38),
    (1, 39),
    (1, 40),
    (1, 41),
    (1, 42);

    

-- Puedes agregar más registros siguiendo la misma estructura

SELECT *
FROM tasks
JOIN tasks_users ON tasks.task_id = tasks_users.task_id
JOIN users ON users.id = tasks_users.id
WHERE email = 'quim@gmail.com';

SELECT * from users;

/*
INSERT INTO tasks (title,beginning_hour,final_hour,date,duration)
VALUES
    ('descansar','7:30','9:00','2012-11-11',1.5),
    ('correr',2,'9:30','19:00','2011-11-11',9.5),
    ('trabajar',3,'19:30','20:00','2011-11-11',0.5),
    ('ir al bar',1,'20:15','21:00','2011-11-11',0.75),
    ('ir al gym',2,'21:30','22:00','2011-11-11',0.5);
*/
/*
CREATE TABLE IF NOT EXISTS users_tasks(
users_tasks_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
fk_user_id INTEGER UNSIGNED,
fk_task_id INTEGER UNSIGNED,
fk_tasks_categories_id INTEGER UNSIGNED
);

*/



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


/*
SELECT username, date, name, duration, color_code
FROM tasks
         JOIN users_tasks ON tasks.task_id = users_tasks.fk_task_id
         JOIN users ON users.id = users_tasks.fk_user_id
         JOIN categories ON categories.category_id = tasks.fk_category_id
WHERE username = "quim";



SELECT username, name, duration, color_code
FROM tasks
         JOIN users_tasks ON tasks.task_id = users_tasks.fk_task_id
         JOIN users ON users.id = users_tasks.fk_user_id
         JOIN categories ON categories.category_id = tasks.fk_category_id
WHERE username = "quim";



/*username: "Quim",
        dia: -1,
        tarea: "Libre",
        duracion: 6,
        color_code: "#FCD8D4"*/
