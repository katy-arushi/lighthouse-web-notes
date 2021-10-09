### What is a database?
- systematic collection of data
- a collection of related pieces of data

### What is a database management system?
- a collection of programs that enable its users to
  - access databases
  - manipulate data
  - report
  - represent data
- a computerized data-keeping system
- allows us to work with a database
- without DBMS, database is useless

### Types of Databases
- relational
  - composed of tables (rows and columns)
  - MySQl, PostgreSQL
  - SQLite
- key-value stores
- column stores
- graph databases
- document databases
  - MongoDB
- real time databases

### Entity Relationship Diagram
- tables
  - authors
  - books
  - borrowing
  - students
- author 
  - can have 0 to many books
  - an author can exist that is not related to any books
- books 
  - can have 1 to 1 authors
  - should have at least 1, and at most 1 author
  - so 1 author
  - there cannot be a book that has 0 authors
- borrowing
  - a student can have 0 to many borrowings
  - a borrowing can have 1 to 1 students
- student
  - 0 to many borrowings
- books to borrowings
  - one to many relationship
  - each book can be borrowed 0 to many times
  - each borrowing is related to one book
- students and books
  - many to many relationship
  - 

- in one to many relationships, keep the foreign key in the many side

- foreign keys can never be null 

- does author id need to be in the borrowing table?
  - not really, avoid redundancy, be concise

### SQL
- DDL and DML
- DDL
  - creating and dropping tables
- DML
  - change data that is stored in the database
- CRUD
  - Create - INSERT
  - Read - SELECT
  - Update - UPDATE
  - Delete - DELETE

- naming conventions for db depends on the team 
  - lighthouse
    - tables in plural
    - table name, column name lowercase
    - FK - name of table in lowercase, underscore, id

- show all tables
  - `\dt`

- schema
  - structure of db
  - create and drop statements
- seeds
  - base information, initial values

- on delete cascade

- foreign keys
  - `book_id INTEGER REFERENCES books(id)`

- DROP TABLE
  - completely delete a table, contents and structure
  - if just remove information, use DELETE
  - keep inside schema

- when creating tables
  - create the table that is referenced
    - the table with no FKs


### Joins
- goal is to use the information in 2 tables by relating them
- **inner join**
  - does not display for those rows that do not associate with each other
    - cannot display name likes for a like without a name, or a name without a like
  - just the common parts are returned
- **left join**
  - from the left table with the value of null from the right table
- **right join**
  - from the right table with the value of null from the left table
- **outer join**
  - keeps both nulls from left and right table

### Inner Queries / Nested Queries
```SQL
SELECT *
FROM students
WHERE birthdate =
        (SELECT MAX(birthdate)
         FROM students); 
```

### GROUP BY
- when you want a specific value for each unique occurrence
- for each value that is related to the group, first group them
- for each group, calculate the 1 value you want (min, max etc)
- be careful, when you do a GROUP BY, the column inside the SELECT clause should be either the column you are doing the GROUP BY on or the result of an aggregate function on
- need to end up with a column with one value to group by

### HAVING
- when you want to apply a condition in a result of a group by

### Renaming a column
- use `AS`