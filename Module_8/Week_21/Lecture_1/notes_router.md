- 
- whats difference between front-end routing and backend routing
- why not use href to go to next page
- Use <Link> to replace the href

- ERROR - You cant use <Link> outside of a route

- Now changes but the pages actually dont change, only the url

- Build routes same way we name routes in back-end
- 1 route for each component we need to display

- Router does partial matching. to avoid partial matching, either change the order or use the keyword exact ... (for v5 and earlier)



---- Questions.......

- have a ul and map the items to display a single component for a hero <li>

- we need a key prop when doing an iteration

--- Questions

- now link each item to a new url displaying the individual item
- either hardcode the initial path, or use useLocation to keep it dynamic, in case it changes in future

- wrap item around <Link > tag
- parse whole array as props to individual component
- filter vs find in individual component - filter returns array so you'll have to check array if empty first. find return item/undefined so best if expecting 1 item
- Where do I get the id from? useParams vs useLocation

--------RECAP------BREAK---------
- we have new urls page - then redirect page
- explain handleSubmit function => useParams > useLocation => useHistory. you can't use re-direct as with express
