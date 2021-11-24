# Todo list

- Weather description
- Add new Todos
- Todo list items, marked as complete, remove once complete

# Packages

- Sass
- Axios

# Weather API Responce

{
"coord": {
"lon": -79.4163,
"lat": 43.7001
},
"weather": [
{
"id": 802,
"main": "Clouds",
"description": "scattered clouds",
"icon": "03d"
}
],
"base": "stations",
"main": {
"temp": 275.93,
"feels_like": 274.81,
"temp_min": 273.63,
"temp_max": 278.28,
"pressure": 1020,
"humidity": 53
},
"visibility": 10000,
"wind": {
"speed": 1.34,
"deg": 321,
"gust": 2.68
},
"clouds": {
"all": 40
},
"dt": 1637691626,
"sys": {
"type": 2,
"id": 2043263,
"country": "CA",
"sunrise": 1637670151,
"sunset": 1637703970
},
"timezone": -18000,
"id": 6167865,
"name": "Toronto",
"cod": 200
}

# Data structure

```jsx
interface TodoListItem {
    id: number
    name: string
    description: string
    isComplete: boolean
}
```

```jsx
interface TodoList {
  id: TodoListItem;
}
```

```jsx
interface WeatherInfo {
   city: string
   temp: number,
   description: string

}
```

# HTML Structure

- body
  - header
    - title
    - current weather
      - city
      - temp
      - description
  - main
    - form
      - name
      - description
      - button
    - ul
      - li
        - name
        - description
        - button for marking as complete
        - button for deleting

# Component Structure

- App
  - Header
    - WeatherWidget
  - TodoForm
  - TodoList
    - TodoListItem

# Steps

- Make the plan & data structures
- Create the react app
- Installed the necessary packages (sass and axios)
- Created dummy components
- Created the structure with dummy components
- Updated the components with their respective HTML
- Fancy up the CSS a little
- Replaced static values with dynamic variables (props inside the component)
- Set a state for dynamic data
- Made helper functions to interact with state (complete, delete, create)
- Refactored with a custom hook
- Added backend functionality (axios in custom hook)
