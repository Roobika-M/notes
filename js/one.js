// Select the button by its ID
const button = document.getElementById('onclick');

// Add event listener to handle button click
button.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.href = 'templates/first.html';
});
