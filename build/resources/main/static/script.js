function updateMessage() {
    document.getElementById('dynamic-message').textContent = 'This message is set by JavaScript!';
}

function showWarning() { 
    alert('Warning alert!')
}

// Defines a function to handle the login form submission.
function handleLoginFormSubmission() {
    // Adds an event listener to the form element with ID 'loginForm'.
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // Prevents the default form submission which reloads the page.
        event.preventDefault();
        // Retrieves the value entered in the input field with ID 'username'.
        const username = document.getElementById('username').value;
        // Retrieves the value entered in the input field with ID 'password'.
        const password = document.getElementById('password').value;

        // Sends a POST request to the server at the endpoint '/login_endpoint'.
        fetch('/login_endpoint', {
            method: 'POST', // Specifies the HTTP method, POST, for the request.
            headers: {
                'Content-Type': 'application/json', // Sets the content type of the request body to JSON.
            },
            body: JSON.stringify({ username: username, password: password }), // Converts the username and password to a JSON string.
        })
        // Parses the JSON response from the server.
        .then(response => response.json())
        // Handles the data from the parsed JSON.
        .then(data => {
            console.log('Success:', data); // Logs the success message and data to the console.
            // Handle success (e.g., redirect or show message)
        })
        // Catches and logs any errors that occur during the fetch.
        .catch((error) => {
            console.error('Error:', error); // Logs the error message to the console.
            // Handle error
        });
    });
}

// Adds an event listener that waits for the HTML document to be fully parsed and loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    handleLoginFormSubmission(); // Calls the function to handle the form submission after the DOM is loaded.
});

document.addEventListener('DOMContentLoaded', (event) => {
    handleLoginFormSubmission();
});
