console.log('hi')

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


const postMedications = async(medicationObj) => {
    const response = await fetch('/api/medications', {
        method: 'POST',
        body: JSON.stringify(medicationObj),
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


const getMedications = async() => {
    const response = await fetch('/api/medications')
    const data = await response.json()
    console.log(data)
}

getMedications()