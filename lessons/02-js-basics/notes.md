# Lesson 02: JavaScript Basics & Interactivity

## My Notes & Understanding

### 1. HTML5 Setup (`<!DOCTYPE html>`)
* When we write `<!DOCTYPE html>`, we are telling the browser we are using the latest version of HTML (HTML5), since HTML has evolved through many versions over time.
* `lang="en"` tells the browser the page is written specifically in English.

### 2. The `<head>` (The Behind-the-Scenes Room)
* Visitors to the website don't see what's inside the `<head>`, but us as developers put essential settings here.
* **`meta charset="UTF-8"`**: Allows special characters, accents, and emojis to load correctly so the server doesn't break.
* **`<title>`**: Sets the name that appears at the top of the browser tab.
* **`link rel="stylesheet"`**: Connects our CSS stylesheet to the HTML so we can style the page.

### 3. The `<body>` & Unique IDs
* Everything inside the `<body>` is what actually shows up on the screen for users.
* We gave our elements IDs (`id="heading"` and `id="clickBtn"`). An ID acts like a unique identifier or passport number so that when we do styling or write JavaScript, we can target that exact unique component by itself without affecting anything else.

### 4. Why put the script tag at the bottom?
* **Question:** Why don't we put `<script src="script.js"></script>` at the top of the page inside the `<head>` like we do with the CSS stylesheet?
* **Answer:** Because the browser reads code from top to bottom. If JavaScript runs at the top, it will look for elements like `#clickBtn` or `#heading` before the browser has even finished drawing them on the screen, which would cause an error. Putting it at the very bottom ensures the HTML elements are fully loaded and waiting first.

### 5. JavaScript Logic (`script.js`)
* **Grabbing Elements (`document.getElementById`)**: This is like going to a specific location in the HTML document to fetch our unique IDs so JavaScript can interact with them.
* **Constants (`const`)**: Ensures our variables are locked in place and won't accidentally change.
* **Event Listeners (`addEventListener`)**: Acts like a listener waiting for something to happen. In our case, it waits for a `'click'` action on the button. Once that happens, the function runs.
* **Dynamic Updates (`textContent`)**: When the button is clicked, JavaScript instantly swaps out the heading text without needing to reload or refresh the entire page.