
--------------- AGENDA ------------------

# End to End testing with Cypress

- Why Test? and What is E2E Testing
- Cypress -
- Install Cypress -
- Write a Bunch Cypress Tests -


### Why testing
- to make sure working as expected
- confidence 
- incremental building - we wont have to manually check if we broke anything already built
- avoid midnight calls 

- excessive testing ? is there such a thing? 

### Types of testing
Unit <seperate functions>
Integration <test components working together>
Static <linting tests, writing things in the right era>
E2E <user story testing >

- Cypress is E2E testing framework
- you get to code a user and tell this user what to dowith your page
- you get to watch how that user interacts with a page

Installing Cypress

 - npm install -D cypress

  - add cypress script
  
```json
      "cypress": "cypress open -P .",
```

 - npm run cypress

 - add cypress.json

