DROP TABLE IF EXISTS students CASCADE;


DROP TABLE IF EXISTS authors CASCADE;


DROP TABLE IF EXISTS books CASCADE;


DROP TABLE IF EXISTS borrowings CASCADE;


CREATE TABLE students (id SERIAL PRIMARY KEY NOT NULL,
                                             name VARCHAR(255) NOT NULL,
                                                               email VARCHAR(255),
                                                                     birthdate DATE);


CREATE TABLE authors (id SERIAL PRIMARY KEY NOT NULL,
                                            name VARCHAR(255) NOT NULL);


CREATE TABLE books
    (id SERIAL PRIMARY KEY NOT NULL,
                           title VARCHAR(255) NOT NULL,
                                              author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE);


CREATE TABLE borrowings
    (id SERIAL PRIMARY KEY NOT NULL,
                           takenDate DATE NOT NULL,
                                          broughtDate DATE, student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
                                                                                                                 book_id INTEGER REFERENCES books(id) ON DELETE CASCADE);