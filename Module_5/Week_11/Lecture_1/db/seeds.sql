INSERT INTO students (id, name, email, birthdate) VALUES (1, 'Mahsa Aghajani', 'mahsa.aghajani@gmail.com', '1991-07-02T07:00:00.000Z');
INSERT INTO students (id, name, email, birthdate) VALUES (2, 'Billie Mitchell', 'alfredo.littel@gmail.com', '1992-07-02T07:00:00.000Z');
INSERT INTO students (id, name, email, birthdate) VALUES (3, 'Jeramie Volkman', 'lucile.lynch@abbie.tv', '1993-07-02T07:00:00.000Z');
INSERT INTO students (id, name, email, birthdate) VALUES (4, 'Darien Luettgen', 'issac_collins@pink.io', '1994-07-02T07:00:00.000Z');
INSERT INTO students (id, name, email, birthdate) VALUES (5,  'Ibrahim Schimmel', 'paucek.misael@gmail.com', '1995-07-02T07:00:00.000Z');
INSERT INTO students (id, name, email, birthdate) VALUES (6, 'Cade Greenfelder', 'rippin_assunta@yahoo.com', '1996-07-02T07:00:00.000Z');
INSERT INTO students (id, name, email, birthdate) VALUES (7, 'Jerrold Lindgren', 'jabari.stoltenberg@witting.biz', '1997-07-02T07:00:00.000Z');



INSERT INTO authors (id, name) VALUES (1, 'J. K. Rowling');
INSERT INTO authors (id, name) VALUES (2, 'F. Scott Fitzgerald');
INSERT INTO authors (id, name) VALUES (3, 'Marcel Proust');
INSERT INTO authors (id, name) VALUES (4, 'James Joyce');
INSERT INTO authors (id, name) VALUES (5, 'Gabriel Garcia Marquez');
INSERT INTO authors (id, name) VALUES (6, 'William Faulkner');
INSERT INTO authors (id, name) VALUES (7, 'Virginia Woolf');
INSERT INTO authors (id, name) VALUES (8, 'Leo Tolstoy');
INSERT INTO authors (id, name) VALUES (9, 'Vladimir Nabokov');
INSERT INTO authors (id, name) VALUES (10, 'Charles Dickens');


INSERT INTO books (id, title, author_id) VALUES (1, 'Lolita', 9);
INSERT INTO books (id, title, author_id) VALUES (2, 'Harry Potter and the Philosopher''s Stone', 1);
INSERT INTO books (id, title, author_id) VALUES (3, 'Harry Potter and the Chamber of Secrets', 1);
INSERT INTO books (id, title, author_id) VALUES (4, 'Harry Potter and the Prisoner of Azkaban', 1);
INSERT INTO books (id, title, author_id) VALUES (5, 'Harry Potter and the Goblet of Fire', 1);
INSERT INTO books (id, title, author_id) VALUES (6, 'Harry Potter and the Order of the Phoenix', 1);
INSERT INTO books (id, title, author_id) VALUES (7, 'Harry Potter and the Half-Blood Prince', 1);
INSERT INTO books (id, title, author_id) VALUES (8, 'Harry Potter and the Deathly Hallows', 1);
INSERT INTO books (id, title, author_id) VALUES (9, 'The Great Gatsby', 2);
INSERT INTO books (id, title, author_id) VALUES (10, 'In Search of Lost Time', 3);
INSERT INTO books (id, title, author_id) VALUES (11, 'Ulysses', 4);
INSERT INTO books (id, title, author_id) VALUES (12, 'Dubliners', 4);
INSERT INTO books (id, title, author_id) VALUES (13, 'One Hundred Years of Solitude', 5);
INSERT INTO books (id, title, author_id) VALUES (14, 'The Sound and the Fury ', 6);
INSERT INTO books (id, title, author_id) VALUES (15, 'To The Lighthouse', 7);
INSERT INTO books (id, title, author_id) VALUES (16, 'Pale Fire', 9);




INSERT INTO borrowings (id, takenDate, broughtDate, student_id, book_id) 
VALUES (1, '2018-10-22T07:00:00.000Z', '2018-12-22T07:00:00.000Z', 1, 1),
(2, '2018-11-22T07:00:00.000Z', '2019-02-01T07:00:00.000Z', 1, 2),
(3, '2019-02-05T07:00:00.000Z', '2019-03-20T07:00:00.000Z', 1, 3),
(4, '2019-04-02T07:00:00.000Z', '2019-05-05T07:00:00.000Z', 1, 4),
(5, '2019-05-06T07:00:00.000Z', '2019-05-20T07:00:00.000Z', 1, 5),
(6, '2019-06-01T07:00:00.000Z', '2019-06-15T07:00:00.000Z', 1, 6),
(7, '2019-06-17T07:00:00.000Z', '2019-07-15T07:00:00.000Z', 1, 7),
(8, '2019-07-22T07:00:00.000Z', '2019-08-22T07:00:00.000Z', 1, 8),
(9, '2019-09-01T07:00:00.000Z', '2019-09-15T07:00:00.000Z', 1, 9),
(10, '2018-10-22T07:00:00.000Z', '2019-03-22T07:00:00.000Z', 2, 10),
(11, '2018-10-22T07:00:00.000Z', '2018-11-22T07:00:00.000Z', 3, 9),
(12, '2020-01-22T07:00:00.000Z', '2020-03-22T07:00:00.000Z', 5, 15),
(13, '2020-03-15T07:00:00.000Z', '2020-06-22T07:00:00.000Z', 5, 1);