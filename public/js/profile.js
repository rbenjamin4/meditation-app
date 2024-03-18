const saveBtn = document.getElementById('saveBtn')
const weeklyGoal = document.getElementById('goal')
const form = document.querySelector("form")

const putGoal = async(goalObj) => {
    try{
    const userId = document.querySelector("[name='userId']").value;
    console.log(userId)
    const response = await fetch(`/api/users/updategoal/${userId}`, {
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
    weeklyGoal: weeklyGoal.value
  }

    putGoal(goalObj)
    console.log(goalObj)

})