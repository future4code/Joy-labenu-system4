USE `database-419802-lucas-fonceca`;

CREATE TABLE student (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES class(id)
);

CREATE TABLE student_hobby (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    student_id VARCHAR(255) NOT NULL,
    hobby_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (hobby_id) REFERENCES hobby(id)
);

CREATE TABLE hobby (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE class (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    module VARCHAR(255) NOT NULL DEFAULT 0
);

CREATE TABLE teacher (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES class(id)
);

CREATE TABLE teacher_speciality (
	id VARCHAR(255) PRIMARY KEY,
    teacher_id VARCHAR(255) NOT NULL,
    speciality_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES teacher(id),
    FOREIGN KEY (speciality_id) REFERENCES speciality(id)
);

CREATE TABLE speciality (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);


DROP TABLE student;
DROP TABLE class;
DROP TABLE student_hobby;
DROP TABLE hobby;
DROP TABLE teacher;
DROP TABLE teacher_speciality;
DROP TABLE speciality;