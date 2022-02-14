import axios from "axios";

async function getCountryData(name) {
    const containerResult=document.getElementById('results')
    const errorMessage = document.getElementById('error-message')

    errorMessage.innerHTML = ``
    containerResult.innerHTML = ``

    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`)
        console.log(result.data[0])
        const countries = result.data[0]

        containerResult.innerHTML = `
        <div id="name-and-flag">
        <img src="${result.data[0].flag}" alt="vlag" class="flag-country"/>
        <h3>${countries.name}</h3>
        </div>
        <hr>
        <p>${countries.name} is situated in ${countries.subregion}. It has a population of ${countries.population} people.</p>        
        <p>The capital is ${countries.capital} ${getCurrencies(countries.currencies)}</p>
        <p></p>
        `
    }
    catch (e) {
        console.error(e)
        errorMessage.innerHTML = `
        <p>${name} doesn't exist, please try again. </p>
        `
    }
}


function getCurrencies(currencies) {
    if (currencies.length === 2) {
        return `and you can pay with ${currencies[0].name} and ${currencies[1].name}.`
    }
    else {
        return `and you can pay with ${currencies[0].name}.`
    }
}

const searchFrom = document.getElementById('search-form')
searchFrom.addEventListener('submit', searchingCountries)

function searchingCountries(e){
    e.preventDefault()

    const inputField =document.getElementById('search-country')

    getCountryData(inputField.value)
    inputField.innerHTML = ` `;
}