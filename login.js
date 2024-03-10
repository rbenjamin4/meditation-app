document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;

        if (email.trim() === '') {
            displayError('email-login', 'Email is required');
        }

        if (password.trim() === '') {
            displayError('password-login', 'Password is required');
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