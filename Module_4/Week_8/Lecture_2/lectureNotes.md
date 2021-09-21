### difference between HTML, CSS, and JS
  - HTML
    - adds structure
    - layout of content
    - skeleton
  - CSS
    - styles
    - targets element in HTML
    - responsive design to various screen sizes
    - "look and feel" of a website
  - JS
    - adds interactivity, makes it mobile
    - handles complex features and functions
    - enhances functionality
    - manipulate DOM dynamically

### DOM
- DOM is rendered from HTML
- structure of the HTML document
- tree with nodes
- parents and children
- programming interface for HTML

### 3 main browser objects
- window
  - holds the DOM object
  - each tab is a window
  - size of a screen
- navigator
  - contains information about browser
  - access to clipboard, geolocation, useragent (device)
- document
  - represents the DOM

### manipulate the dom
- target the element - via class or ID
- `querySelector()`
  - gives the first appearance of that element in the DOM
  - allows us to access elements in the DOM directly by using the name/HTML tag
  - used to target an event

- document.children -> not a good method
  - array
  - access the HTML with `document.children[0]`
  - access to the body
    - `document.children[0].children[1]`

- `querySelectorAll()`
  - gives all the tags specified, in an array

### event listener
- tells the app to listen for an event
- notification that some action has occured, such as mouse click, hover, key press etc
- specify what event to look for
- do an action when a user does something
- querySelector - target element in your HTML
- `document.addEventListener`
  - takes in 2 arguments, the name of the event, callback to execute when the event has been triggered
- you can console.log the event object to see more

- x and y coordinates
  - (0, 0) is top left
    - going right increases x, going down increases y

### how to change text using dom
`const title = document.querySelector('h1')`
  - grabs h1 in header
`title.innerText = "NEW TITLE"`
`title.style.color = yellow`


## jQuery
- helps us work with the DOM
- lightweight footprint
  - doesn't add heavy loading times to your app like, for ex, React
- CSS3 compliant
  - use same selectors as in CSS
- cross-browser

### how to download jQuery?
- download off website and import into app
- CDN - content delivery network
  - faster downloads
- use in index.HTMl file using `script` tag

### how to use jQuery?
- manipulate DOM by targeting element
- basic syntax
  - `$(target).action()`
  - target = element
  - action = event listener, on-click event
- can still write JS in a JQ file

### using jQuery
`const title = $(header h1)`
`title.text("newText)`
`title.css("color, yellow")`

### using DOM
`const title = document.querySelector('h1')`
`title.innerText = "NEW TITLE"`
`title.style.color = yellow`


- do you need a separate file for jQuery?
  - no, don't need a sep file, still JS
  - technically can write both in same file, but good practice is to separate