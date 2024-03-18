const profileFormHandler = async function (event) {
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


function saveWeeklyGoal() {

    let goalInput = document.getElementById("goal").value;

    if (Number.isInteger(Number(goalInput))) {
        // Input is a valid integer
        let weeklyGoal = parseInt(goalInput);

        saveWeeklyGoalAsInteger(weeklyGoal);

        document.getElementById("goal").value = "";
    } else {

        alert("Please enter a valid integer for the weekly goal.");
    }
}

function saveWeeklyGoalAsInteger(goal) {

    console.log("Weekly Goal as an integer: " + goal);

}

function saveUser() {
    // Your code to save user data goes here

    // Reset the form fields after saving
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("uname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("goal").value = "";
}

var logout = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target == logout) {
        logout.style.display = "none";
    }
}

var deleteAct = document.getElementById('id02');

window.onclick = function (event) {
    if (event.target == deleteAct) {
        deleteAct.style.display = "none";
    }
}