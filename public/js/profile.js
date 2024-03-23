const saveBtn = document.getElementById('saveBtn')
const weeklyGoal = document.getElementById('goal')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const form = document.querySelector("form")

const updateProfile = async(goalObj) => {
    try{
    const userId = localStorage.getItem('userId')
    const response = await fetch(`/api/users/updateprofile/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(goalObj),
        headers: {
            'Content-Type': 'application/json',
        }
    })
} catch (err) {
}
}

form.addEventListener('submit', (event) => {
event.preventDefault()

const goalObj = {
    firstName:  firstName.value,
    lastName: lastName.value,
    weeklyGoal: weeklyGoal.value
  }

    updateProfile(goalObj)
    console.log(goalObj)

})