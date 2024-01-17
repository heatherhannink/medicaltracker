

// const trip = {
//     name: 'Mountains',
//     description: 'fun time with friends'
// }

// const postTrip = async() => {
//     const response = await fetch(`/api/trips`, {
//         method: 'POST',
//         body: JSON.stringify(trip),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
    
//       const data = await response.json()
    
//       console.log(data)
// }


const postMedications = async(medObj) => {
    const response = await fetch('/api/medicaltracker', {
        method: 'POST',
        body: JSON.stringify(medObj),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

// const newTrip = {
//     name: 'pretty cool mountain adventure',
//     description: 'more than okay!!!'
// }

// postTrips(newTrip)


const  getMedications= async() => {
    const response = await fetch('/api/medicaltracker')
    const data = await response.json()
    console.log(data)
}

getMedications()

// const text = localStorage.getItem(hoursArr[i].id)
//     if(text){
//         console.log(text)
//         hoursArr[i].children[1].value=text
//     }
    
// }    
// const clickHandler = (event) => {
//     const text = event.target.previousElementSibling.value
//     const parentID = event.target.parentNode.id
//     console.log (text)
//     console.log (parentID)
//     localStorage.setItem(parentID, text)

// }
// const buttonArr = document.querySelectorAll('button')
// const textAreaArr = document.querySelectorAll('.description')

// for (let i = 0; i < buttonArr.length; i++){
    

//     buttonArr[i].addEventListener('click', clickHandler)
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