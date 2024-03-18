// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.querySelector('.login-form');

//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const email = document.getElementById('email-login').value;
//         const password = document.getElementById('password-login').value;

//         if (email.trim() === '') {
//             displayError('email-login', 'Email is required');
//         }

//         if (password.trim() === '') {
//             displayError('password-login', 'Password is required');
//         }

//     });

//     function displayError(inputId, message) {
//         const errorElement = document.createElement('div');
//         errorElement.className = 'error-message';
//         errorElement.innerText = message;

//         const inputField = document.getElementById(inputId);
//         const formGroup = inputField.parentElement;
//         formGroup.appendChild(errorElement);
//     }

// });

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const body = await response.json()
      console.log(response)
  
      if (response.ok) {
        localStorage.setItem('userId', body.user.id)
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);