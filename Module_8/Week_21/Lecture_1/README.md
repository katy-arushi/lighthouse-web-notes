#### M8W21 - Real World React - Next Steps

So far you have learned:

- react (itself)
- state ( useState )
- useEffect ( and/or life cycle of the app )
- JEST
- Cypress
- Selector pattern

Today we covered what comes __next__ after all the stuff you have learned before.

We `re-built` tiny app (front-end mostly, and made api-end point from server side)

## Style components

### Third Party CSS Libraries

- [MATERIAL UI](https://mui.com/)
- [Best React UI Component Libraries for 2020](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)


We then used material UI to make an example nav for our app.

- npm install @mui/material
- add following `link` tag in `index.html` inside public folder

```html

//roboto font

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

// font icons

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

```

### example usage

```javascript

import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}

```

- css libraries help us write beautiful components without having to write a lot of css. we just import already 'styled' components


### React Router (v6)

Finally we Looked into react router. This 3rd party library that helps you conditionally render components, that act like seperate pages. In short it makes your SPA have multiple pages without refresh!

- We used v6 and explained some differences with earlier versions (v5 and before)

[React Router Docs (VERY EASY TO READ)](https://reactrouter.com/)

### Usage

- `npm install react-router-dom`
 ### Example usage


 ```javascript

 import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
<BrowserRouter>
    <Routes>
        {/* 
            - for each route, add a path and an element
            - an element represents the JSX you want rendered at the path
            - you can also 
        */}
        <Route path="/" element={<h2> Welcome Home </h2>} />

        {/* nested routes */}
        <Route path="urls" element={<Urls urls={urls}/>} >
            {/* you can also parse props to each component on each route  */}
          <Route path="new" element={<NewUrl addUrl={addUrl} />} >
          <Route path="shortURL" element={<ShowUrl urls={urls}/>} >
        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
</BrowserRouter>

 ```

- use the `useNavigate` hook to redirect to a new route
- usually used after a form submit event, 

```javascript

const navigate = useNavigate()

navigate("/urls")

```

- use the `useParams` hook to grab url parameters

```javascript

// route => "/urls/:shortURL, url => "/urls/123
const {shortURL} = useParams()
console.log({shortURL}) // shortURL: "123"

```

- use the `useLocation` hook to get the pathname 

```javascript

// from "/urls/new
const {pathname} = useLocation()
console.log({pathname}) // pathname: "/urls/new"

```

One suggestion from Alumni ( and me ) if you need to do some practice on your own for react but do not have a good project to start with: Make a resume site for yourself in `React`!! its a fun, and small project that you can explore!!