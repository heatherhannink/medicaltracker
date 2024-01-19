const postMedications = async(medicationObj) => {
    const response = await fetch('/api/medications', {
        method: 'POST',
        body: JSON.stringify(medicationObj),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    getMedications()
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
    // console.log(buttonArr)

    // window.localStorage.setItem("buttonArr", JSON.stringify(buttonArr));
    // medArr.appendChild(paragraph);
    // const paragraph = document.createElement("p");
// paragraph.innerText = date;
// const text = localStorage.getItem(medArr[i].id)
//     if(text){
//         console.log(text)
//         medArr[i].children[1].value=text
//     }
// }
    
    
// 
//     const text = event.target.previousElementSibling.value
//     const parentID = event.target.parentNode.id
//     console.log (text)
//     console.log (parentID)
//     localStorage.setItem(parentID, text)

// }



// // get data from local storage

// // loop

// // localStorage.getItem()

// //textAreaArr[i].value = whatever came back from local

// var currentHour = dayjs().hour();
// let date = dayjs().format ("DD, MMMM, YYYY");
// console.log (date);
// //current day is displayed at top when you open//
// let currentDay = document.querySelector ('#currentDay');

// const paragraph = document.createElement("p");
// paragraph.innerText = date;
// currentDay.appendChild(paragraph);
