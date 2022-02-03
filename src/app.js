// Installeren axios -> npm install axios
// Enpoint hebben we straks nodig : https://restcountries.com
// asynchrone functie moeten we aanmaken met een variabele

import axios from "axios";

async function fetchCountriedata() {
    try{
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data)
    }
    catch (error) {
        console.error(error)
    }
}

fetchCountriedata()

