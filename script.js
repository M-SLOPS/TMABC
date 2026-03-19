//script.js
// Function to handle login
function login() {
    // Get the username and password from input fields
    const username = document.getElementById('username').value;

//log in if username is any one of the names in username array
    const allowedUsers = ['Mark', 'Poppy', 'Howard'];
    if (allowedUsers.includes(username)) {
        alert('Login successful!');
        // Redirect to the home page
        window.location.href = 'home.html';
    } else {
        alert('Invalid username. Please try again.');
    }


}