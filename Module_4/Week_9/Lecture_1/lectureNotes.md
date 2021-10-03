### Single Page App
- posts in JSON
- script.js file
- in SPA, when a button is pressed and "get request" is sent, HTML is never rendered again - just updates with new information from the server
- for example, google.com autocomplete search uses AJAX for updating search suggestions


### Async JS and XML
- run by JS - script.js handles AJAX
- previously, respone was formatted as XML, but now the standard is JSON
- asynchronous - use AJAX for updating portion of the page without updating the whole page
-  uses XMLHTTPREQUEST object
    - uses this to send requests to server, recieve information, and update parts of the page without reloading the whole page
- in bootcamp, not going to use AJAX directly but using jQuery

### Sequence
- 3 elements: browser, server, db
1. when you click on the "create post" button in the browser
    - AJAX is going to send the request, not the form itself
      - need to tell the browser that when this button is clicked, don't send a get request from the button
      - script.js will handle the AJAX request to the server
2. server retrieve data from DB
3. server responds to browser with data, in the form of JSON
4. browser runs script.js to update portions of the page with the received data 

### app setup
- server.js
    - posts.json has all the posts in JSON format
    - get request for /posts
    - post request for /posts take info, makes object from it, adds object to all posts 
- index.html
    - stylesheet, jQuery, script tag
- script.js
    - jQuery document ready, runs the script once the document is ready and the DOM tree is loaded
        - can use `$(document).ready(() => {});` or `$(() => {});`
    - ```js
      $.ajax({
        url: '/api/posts',
        method: "GET",
        dataType: "json",
        success: (posts) => {
          console.log(posts);
        };
        error: () => {
          console.log(error);  
        };
      });
      ```

- form for making new post
    - don't specify method and action since AJAX will take care of that

- add post to list of posts, but show earliest posts first
    - prepend syntax
    - reverse loop


### summary
- event handler for submit event of form
    - stop default - don't do anything
    - inside input of form, use serialized on jQuery obj which returns the input values of the jQuery obj
    - send info in post request to url, using ajax by jQuery
    - server, in the event handler, receives request, and because of the express middleware (url endcoded), knows how to parse the JSON information inside the request so it can read the values from the request body
    