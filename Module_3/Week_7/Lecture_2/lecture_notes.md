- create helper function called authenticateUser
- object destructuring
  `const {email, password} = req.body;`
- 2 helper functions for login
  - if email exists
  - if password is correct

- custom middleware
  ```js 
  app.use((req, res, next) => {
    next()
  })
  ```