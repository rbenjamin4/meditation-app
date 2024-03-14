Profile.js

const profileFormHandler = async function(event) {
    preventDefault();
    
    fName = document.querySelector('#fName-input');
    lName = document.querySelector('lName-input');
    uName = document.querySelector('uName-input');
    email = document.querySelector('email-input');
    goal = document.querySelector('goal-input');

};

document
 .querySelector('#profile-form')
 .addEventListener('save', profileFormHandler);
