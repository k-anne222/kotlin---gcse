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

// document.getElementById("togglePassword").addEventListener("click", function() {
//     var passwordInput = document.getElementById("inputPassword");
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         this.innerHTML = '<i class="fas fa-eye-slash"></i>'; // change icon to eye-slash
//     } else {
//         passwordInput.type = "password";
//         this.innerHTML = '<i class="fas fa-eye"></i>'; // change icon to eye
//     }
// });

// get the element which has the id of "togglePassword"

const togglePasswordBtn = document.getElementById("togglePassword");

togglePasswordBtn.addEventListener("click", function() { 
    // original icon should be deleted and new icon that hides password should be added
    
    // if password is already hidden and button is already toggled, if someone 
    // clicks on it again, password should show and original icon turns back on
    // get an input element by id
    var inputPassword = document.getElementById("inputPassword");
    if (inputPassword.type == "password") { 
        inputPassword.type = "text";
        // write a code that changes the icon through innerHTML
        this.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
    else { 
        inputPassword.type = "password";
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
    }
});