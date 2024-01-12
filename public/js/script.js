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


const postBooks = async(bookObj) => {
    const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify(bookObj),
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


const getBooks = async() => {
    const response = await fetch('/api/books')
    const data = await response.json()
    console.log(data)
}

getBooks()