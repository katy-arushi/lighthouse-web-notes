## Security

### Security Issue #1

- Storing Passwords - why not plaintext
- How to encrypt passwords (bcrypt)
- hashing

- [bcrypt](./images/bcrypt.jpg)

### Security Issue #2

- User can see data in cookie and modify, becoming any other user
  = Solution: encrypt the cookie


// login route - POST 
- create a cookie // 
- so the system can remember -
stateless 
- check if a user with that email exists // getUserWithEmail
- check if the password is correct // authenticateUser
- redirect to a route


## issues
- ids sequential - easy to guess - uuid
-  password - easy to guess
- plain text
- hashing - bcrypt


- protect a resource
- condition in ejs that checks cookie
