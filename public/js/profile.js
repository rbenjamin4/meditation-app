const saveBtn = document.getElementById('saveBtn')
const weeklyGoal = document.getElementById('goal')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const form = document.querySelector("form")
const userId = document.getElementById('id').value;


const updateProfile = async(goalObj) => {
    try{
    // const userId = document.getElementById('id').value;
    console.log('GETELEM', document.getElementById('id').value)
    console.log('USERID', userId)
    const response = await fetch(`/api/users/updateprofile/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(goalObj),
        headers: {
            'Content-Type': 'application/json',
        }
    },
    alert('Your profile has been updated successfully!')
    )
} catch (err) {
    console.log(err)
}
}

form.addEventListener('submit', (event) => {
event.preventDefault()

const goalObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    weeklyGoal: weeklyGoal.value || 0
  }

    updateProfile(goalObj)
    console.log(goalObj)
})