- set the state in the `.then()` of the axios get request
- dependency array
  - put the state in the array if you only want it to get called when that piece has changed

**3 options for useEffect**
1. if no array: get called each time it re-renders
2. if empty array: get called just once, on mount
3. if something in array: only get called when that piece has changed

**custom hooks**
- returning an object rather than returning JSX
- has to use the keyword `use` at beginning
- goes in separate hook folder in `src`