### Responsive Design
- responsive to different devices, mobile tablet etc
- making the app enabled to respond to different screen sizes and orientations

### CSS Length Units
#### Absolute vs Relative Units
- absolute
  - cm, mm, in, px
- relative
  - em : font size of the parent
  - rem : font size of the root element - outmost parent of the page, by default this is 16px
  - vw : 1% of the viewport's width
  - vh : 1% of the viewport's height
#### Viewport
  - Visible parts of the document
  - can get viewport by doing `window.innerWidth` and `window.innerHeight`
#### Percentages
- % means % of the parent element
- only works when the parent element's size is defined
- can also specifiy `min-width` to decide what the min width should be

### Media Queries
#### Media Types
  - screen, print, speech, all
#### Media Features
  - color, height, width, hover
#### Logical Operators 
- and, not, only, comma (or)
#### Min vs Max width
- min, start with increasing order
- max, do decreasing order
- min and max don't have to be absolute values
- condition is true when:
    - min-width:  currentWidth > min-width
    - max-width:  currentWidth < max-width

### SASS
- Syntactically awesome style sheets
- css processer
- superset of css
  - everything that css offers, plus more
- written in SCSS (sassy css), uses SASS to process, and outputs css
- browsers uses the outputted css
- why use SASS?
  - can write variables, functions, files
- steps to use
  - install globally
  - npm i sass -g
- styles.scss
  - need to render css from scss files
      - in terminal, navigate to folder
      - sass {name of file} {name of output css file you want to generate}
- defining variables
    - `$primary-color: aquamarine;`
    - `$border-style: solid;`
    - `$border-width-main: 1px;`
- mixins are like functions that you pass in values
