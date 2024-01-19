const postMedications = async(medicationObj) => {
    const response = await fetch('/api/medications', {
        method: 'POST',
        body: JSON.stringify(medicationObj),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}



const getMedications = async() => {
    const response = await fetch('/api/medications')
    const data = await response.json()
    console.log(data)
}

getMedications()

const button = document.querySelector('#Search')
const med = document.querySelector('#Medication')
const dose = document.querySelector('#Dosage')
console.log(button)
console.log(med)
console.log(dose)
const clickHandler = (event) => {
    console.log(med.value)
    console.log(dose.value)
    const newMed ={name:med.value,dosage:dose.value}
    postMedications(newMed)
}   

button.addEventListener('click', clickHandler)

// Appends medication and dosage to the page when a user enters it into the database
let medList = document.querySelector('#input-group')

const addToList = (event) => {
    event.preventDefault()

    const medP = document.createElement('p')
    medP.textContent = med.value
    medList.appendChild(medP)
    document.querySelector('#Medication').value = ""
    document.querySelector('#Dosage').value = ""
}

button.addEventListener('click', addToList)