-- Query 1: Get all the students.
SELECT *
FROM students; 

-- Query 2: Get the student with name as "Mahsa".
SELECT *
FROM students
WHERE name LIKE '%Mahsa%'; 


-- Query 3: Get the student who are born after 1995.
SELECT *
FROM students
WHERE birthdate > '1995-01-01'; 


-- Query 4: Which students borrowed which books?
SELECT *
FROM students
JOIN borrowings ON students.id = borrowings.student_id
JOIN books ON book_id = book.id; 


-- Query 5: Get writers and the books they have written.
SELECT *
FROM authors
JOIN books on authors.id = books.author_id; 


-- Query 6: Get the youngest student.
SELECT *
FROM students
WHERE birthdate =
        (SELECT MAX(birthdate)
         FROM students); 
         

-- Query 7: Get the average age of students;
SELECT AVG(AGE(birthdate)) 
FROM students;

-- Query 8: The last time each student has borrowed a book.
SELECT name,
       MAX(broughtdate) AS maxBroughtDate
FROM students
JOIN borrowings ON students.id = student_id
GROUP BY students.name
HAVING MAX(broughtDate) > '2018-11-23'; 


-- Query 9: How many times each students has borrowed a book?
SELECT students.name, COUNT(book_id) 
FROM students 
JOIN borrowings 
ON students.id = student_id 
GROUP BY students.name; 

-- Query 10: How many times each book was borrowed?
 SELECT title, COUNT(*) 
 FROM students 
 JOIN borrowings 
 ON students.id = student_id 
 JOIN books 
 ON books.id = book_id 
 GROUP BY title; 
