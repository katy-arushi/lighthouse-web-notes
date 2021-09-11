- cookie = information that is stored in your browser
  - key value pair
  - sometime said that a cookie is a file - not true
    - may be a file, may be saved as a file, but it is not a file
    - part of an object
  - information transmitted from browser to server

- why do we use them?
  - HTTP is stateless, does not remember which requests came before
  - use them to stay logged in to the server

- cookies are saved only on the browser
  - browser may save as a file, in memory, in database

**Sequence of Events**
- client logins to browser
- server, in the response, asks client to set the cookie
  - sends a suggestion, a request
- client probably follow the request and set a cookie
- all subsequent request will contain the cookie
  - more or less unchanged
  
- cookies are domain specific - tied to that site
  - no other domain can read that cookie, only the domain that requested you to set that cookie
  - browser does not sent the cookie to anyone else than the server who sent the cookie request
- all modern browsers will not leak cookies to others

- cookies in ads
  - tracking cookies
    - sometimes disallowed by modern browsers such as firefox and chrome
  - persistant cookies - ones that stick around

- setting cookies
   - `res.cookie = ('cookieKey', 'cookieValue')`
- reading cookies
  - need cookieParser
  - `req.cookies.cookieKey`

- 2 things you need for a form
  - action
    - don't need the domain name, just the route
  - method
    - default method for a form is get, but usually form needs post

- form
  - label
  - input
    - needs a name attribute
  - button to submit
    - type = submit
      - default type is submit, but good to put it there