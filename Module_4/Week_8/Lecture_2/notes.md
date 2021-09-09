
## rough notes followed during lecture

## 3 man  browser objects
  - window
  - navigator 
  - document 
- can manipulate ite

2 things
- target the element
- event handling


- document.addEventListner("click", callback)

- Example of selecting an element then adding an event handler
- We can also use this to see what the event obj looks like

```javascript

document
  .querySelector('body')
  .addEventListener('click', (event) => {
  // do something
  console.log(event)
  });

```


- document.getElementById("my-page")
- document.querySelector("button")  // selects just one button
- document.querySelectorAll("button")  // selects all buttons
- document.querySelector("button:nth-of-type(2")  // selects the nth button

- where can we write our js? in a script tag on the html

- const title = document.getElementById("my-title")
- title.style.color = "yellow"
- title.addEventListener('click', event => console.log(event))
- title.addEventListener('click', event => console.log(event))




- JQuery
- small file compared to react. if its something small, maybe pick jquery
- css compliant - you can use css selectors
- cross browser

#### how to use it?
- download first
- use a CDN
