document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username-signup').value;
        const email = document.getElementById('email-signup').value;
        const password = document.getElementById('password-signup').value;

        if (username.trim() === '') {
            displayError('username-signup', 'Username is required');
        }

        if (email.trim() === '') {
            displayError('email-signup', 'Email is required');
        }

        if (password.trim() === '') {
            displayError('password-signup', 'Password is required');
        }

    });

    function displayError(inputId, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;

        const inputField = document.getElementById(inputId);
        const formGroup = inputField.parentElement;
        formGroup.appendChild(errorElement);
    }
    
});