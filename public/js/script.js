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
document.getElementById("med", "dose").reset();
}   

    button.addEventListener('click', clickHandler)
