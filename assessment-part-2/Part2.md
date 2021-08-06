# Unit 1 Assessment

![langs](https://clipart.info/images/ccovers/1499794874html5-js-css3-logo-png.png)

## Goal

The goal of this assessment is to gauge your ability to develop a **minimal** front-end web application using HTML, CSS & JavaScript, including your ability to:

- Write HTML that provides the application's overall structure and content.
- Use CSS to provide styling.
- Use JavaScript to:
  - Define variables that hold application state, cache DOM elements, hold lookup data (constants), etc.
  - Select elements in the DOM.
  - Listen for browser events, such as `click`, being dispatched by DOM elements.
  - Manipulate a DOM element's content and style.

## Overall Application

This is what your application should look like when you finish. The application's UI consists of:

- A count display
- Two buttons ("+" & "-")
- An `<input>` element

<img src="https://i.imgur.com/nsLfnoG.png">

Application requirements are covered in further detail below. Make sure you read through the instructions completely.
Use the screenshots below as your "wireframes". The styling does not have to be exact, however, the closer it is to the screenshots, the better!

## Process

- This assessment is an **individual** assignment - no collaboration please.
- The good news is that it's "open book" - you may reference anything on your computer, Google, use notes, etc.
- However, don't spend too much time researching unless you're stuck - **do not over-think this application!!!**

## Instructions

![steps](https://www.learnupon.com/wp-content/uploads/@2x-Blog-ADDIE-stairs-animation.gif)

## Step 1 - Prepare

- Briefly read through the rest of this assignment to better understand what is required before starting to code.

## Step 2 - Set Up the App

- You'll be working in the `assessment-part-2` folder in the `script.js`, `styles.css`, and `index.html` files in this part
- Add an HTML boilerplate to get started (remember `! + tab` can help with this)
- `<link>` your `styles.css` stylesheet in the `<head>` tag of your `index.html`
- Connect your `script.js` with a `<script>` tag at the bottom of the `<body>` tag in your `index.html`
- Open your `index.html` in your browser
- You can check to see if your `script.js` is connected by adding a console.log() and then opening your developer tools in your browser

## Step 3 - Implement the App's Requirements

### Upon Loading

- When the application initially loads, the `<input>`'s value should be set to `1` and the initial count of `0` is rendered such that the display looks something like this:

<img src="https://i.imgur.com/nsLfnoG.png">

### When the "+" Button is Clicked

- When the "+" button is clicked, the value entered in the `<input>` is added to the count and the new count value displayed.
- For example, if the "+" button is clicked immediately after the app loading, the display should look something like this:

<img src="https://i.imgur.com/xNdlBn2.png">

### When the "-" Button is Clicked

- When the "-" button is clicked, the value entered in the `<input>` is subtracted from the count and the new count value displayed.
- Continuing from the previous example, if the number 200 is typed in the `<input>` and the "-" button is clicked, the display should look something like this:

<img src="https://i.imgur.com/QjtcAJT.png">

### Hovering Over the "+" or "-" Button

- When the mouse is over the "+" or "-" button, the button should reverse its background and text colors:

<img src="https://i.imgur.com/agT3aGX.png">

Congrats, that's all there is to it!

![success](https://media.tenor.co/images/71c367112da172a580f9abbdef5b67e2/raw)

## Step 4 - Bonus

- As a bonus, display the count in red if it is a negative value!
- You can also code for edge cases (for example, if someone puts a string in the input area)

<img src="https://i.imgur.com/LCSG1Wg.png">

## Hints

- **Prioritize functionality over layout/styling.** Once the functionality is complete, then work on styling to get the UI as close as possible to the wireframes/images (see the below hint for using flexbox for layout).
- The principles in [Guide on How to Build a Browser App](https://github.com/ga-students/wdi-dt-57/blob/master/work/w01/d5/03-guide-to-building-a-browser-app.md) apply!
- Use CSS flexbox to ease horizontal and vertical centering:

  ```css
  section {
    display: flex; /* defaults to row layout */
    justify-content: center; /* centers items horizontally in row layout */
    align-items: center; /* centers vertically in row layout */
    /* flex-direction: column; will set layout to column instead of row */
  }
  ```
