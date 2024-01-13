// This is an example JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Run this code when the DOM is fully loaded

    // Get the h1 element
    var heading = document.querySelector('.second h1');

    // Add a click event listener to the heading
    heading.addEventListener('click', function() {
        // Change the background color of the heading when clicked
        heading.style.backgroundColor = 'red';
    });
});