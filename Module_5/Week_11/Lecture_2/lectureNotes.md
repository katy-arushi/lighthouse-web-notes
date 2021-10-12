## W11L2 - Database Design

### To Do

- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Breakout: Convert 2 Spreadsheets [15 mins]
- [x] Student Suggestion ERD

### Primary Key
- The usual data type is **auto-incrementing** integer (INTEGER or BIGINT)
- want to use a number that auto-increments
  - could also be a string or any other valid data-type
- why can't it be an email?
  - people update their email, and databases don't usually update foreign keys when the primary key from another table changes
- A way of uniquely identifying a particular record within a table
- Must be **unique** (within the table) and can never be null
- A Primary Key stored in another table is known as a **Foreign Key**
- **The Primary Key and Foreign Key MUST be the same data type**
**- composite key**
  - don't use!
  - combined from primary key and FK
  - making querying that table much harder


### Naming Conventions
- Table and field names are written in **snake_case**
  - because SQL is case insensitive
- Table names are always **pluralized**
- The primary key for each table will simply be called **id**
- A foreign key is made up of the singular of the primary keys table and the suffix _id (eg. user_id is the foreign key for the id field in the users table)

### Data Types
- more of a problem in the old days i.e. 10 years ago
  - not as much of an issue for conserving space
- Each field in a table must have a data type defined for it
- The data type tells the database how much room to set aside to store the value and allows the database to perform type validation on data before insertion (to protect the data integrity of the table)
- Choosing the perfect data type is less of a concern nowadays because memory is now comparably cheap
- integer, varchar, text, boolean, blob (Binary Large OBject - everything that isn't the previously mentioned - images, videos, music files)
- postal codes and phone numbers are varchar

### Relationship Types
- 3 types
- **One-to-One:** One record in the first table is related to one (and only one) record in the second table
  - basically useless
  - one table is only one record, which is related to the one record in the second table
  - primarily used to save space, which you don't really need to do anymore
- **One-to-Many:** One record in the first table is related to one or more records in the second table
  - most common
- **Many-to-Many:** One or more records in the first table are related to one or more records in the second table
  - 3 tables of one to many
- It could be argued that there is really only one relationship type: One-to-Many as One-to-One's are extremely rare and Many-to-Many's are implemented using two One-to-Many's

### Design Concepts
- Make fields required based on the record's state upon initial creation (remember that additional data can be added to a record after it has been created)
  - require the least amount of data to get a user into the app
    - then after, ask all the questions and set avatar etc
- Intelligent default values can be set for fields (such as the current timestamp for a created_on field)
  - use now()
  - active as boolean value
    - `user_active: true`
- bad design is doing `full_name` as opposed to `first_name` and `last_name`, since a last name can change
- Don't use calculated fields (a field that can be derived from one or more other fields, such as full_name is a combination of first_name and last_name)
  - split up the fields
- SQL is much faster than JS, try and put the heavy logic in the database
- Pull repeated values out to their own table and make reference to them with a foreign key
- Try not to delete anything (use a boolean flag instead to mark a record as active or inactive)
- Consider using a type field instead of using two (or more) tables to store very similar data (eg. create an orders table with an order_type field instead of a purchase_orders and a sales_orders table)

### Entity Relationship Diagram (ERD)
- A visual depiction of the database tables and how they are related to each other
- Extremely useful for reasoning about how the database should be structured
- Can be created using pen and paper, a whiteboard, or using an online application