// Installeren axios -> npm install axios
// Enpoint hebben we straks nodig : https://restcountries.com
// asynchrone functie moeten we aanmaken met een variabele

import axios from "axios";

async function fetchCountriedata() {
    try{
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data[2].name)
    }
    catch (error) {
        console.error(error)
    }
}


function countries(country) {
    for (let i = 0; i < country.length; i++) {
        let countryName = ' '
        countryName = ` ${countryName} ${country.length.data[i].name}`
    }
}

countries(fetchCountriedata());

function flags(flag) {
    for (let i = 0; i < flag.length; i++) {
        let flagImage = ' '
        flagImage = ` ${flagImage} ${flag.length.data[i].flags.png}`
    }
}

flags(fetchCountriedata());
