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

let medList = document.querySelector('#parent')

const getMedications = async() => {
    const response = await fetch('/api/medications')
    const data = await response.json()
    medList.innerHTML = ""
    console.log(data)
   for (let i=0; i<data.length;i++){
    addToList(data[i])  
   }
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
const addToList = (item) => {
    const newListItem = document.createElement('div')
    newListItem.setAttribute('class', 'appendedListItem')

    const medP = document.createElement('p')
    medP.textContent = item.name + " " + item.dosage
    
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'

    deleteButton.addEventListener('click', function(){
        newListItem.remove();
    })

    newListItem.appendChild(medP)
    newListItem.appendChild(deleteButton)

    medList.appendChild(newListItem)
}

// Clears input boxes once input has been submitted
button.addEventListener("click", () => {
    med.value = ""
})

console.log(dose.value)
const newMed ={name:med.value,dosage:dose.value}
postMedications(newMed)
button.addEventListener('click', clickHandler)
    
const inputBox = document.querySelector("#Medication");
const suggBox = document.querySelector(".autocom-box");

console.log (inputBox)
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        console.log (userData)
        
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

    let suggestions = [  
         'Acetaminophen',
         'Adderall',
         'Amitriptyline',
         'Amlodipine',
         'Amoxicillin',
         'Ativan',
         'Atorvastatin',
         'Azithromycin',
         'Benzonatate',
         'Brilinta',
         'Bunavail',
         'Buprenorphine',
         'Cephalexin',
         'Ciprofloxacin',
         'Citalopram',
         'Clindamycin',
         'Clonazepam',
         'Cyclobenzaprine',
         'Cymbalta',
         'Doxycycline',
         'Dupixent',
         'Entresto',
         'Entyvio',
         'Farxiga',
         'Fentanyl Patch',
         'Gabapentin',
         'Gilenya',
         'Humira',
         'Hydrochlorothiazide',
         'Hydroxychloroquine',
         'Ibuprofen',
         'Imbruvica',
         'Invokana',
         'Januvia',
         'Jardiance',
         'Kevzara',
         'Leqvio',
         'Lexapro',
         'Lisinopril',
         'Lofexidine',
        'oratadine',
         'Lyrica',
         'Melatonin',
         'Meloxicam',
         'Metformin',
         'Methadone',
         'Methotrexate',
         'Metoprolol',
         'Mounjaro',
         'Naloxone',
         'Naltrexone',
         'Naproxen',
         'Narcan',
         'Nurtec',
         'Omeprazole',
         'Onpattro',
         'Otezla',
         'Ozempic',
         'Pantoprazole',
         'Plan B',
         'Prednisone',
         'Probuphine',
         'Rybelsus',
         'secukinumab',
         'Sublocade',
         'Tramadol',
         'Trazodone',
         'Viagra',
         'Wegovy',
         'Wellbutrin',
         'Xanax',
         'Zubsolv',
    ]
