// 1. Grab the elements from the HTML using their IDs
const heading = document.getElementById('heading');
const clickBtn = document.getElementById('clickBtn');

// 2. Add an event listener to listen for a click on the button
clickBtn.addEventListener('click', function() {
  // 3. Change the heading text when the button is clicked
  heading.textContent = 'You clicked the button! JS is working!';
});