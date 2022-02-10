import axios from "axios";

async function fetchCountriedata() {
    try{
        const result = await axios.get('https://restcountries.com/v2/name/netherlands')
        console.log(result.data)

        getNameCountry(result.data)
        getOneCountry(result.data)
    }
    catch (error) {
        console.error(error)
    }
}

fetchCountriedata()

function getNameCountry(countries) {
    const countryName = document.getElementById('country-name-information')

    countries.map((allNameCountries)=> {
        const oneCountry = document.createElement('span')
        oneCountry.innerHTML=`
        <img src="${allNameCountries.flag}" alt="country-flag" class="flag-image">
        <h1>${allNameCountries.name} </h1>
        `
        countryName.appendChild(oneCountry)
    })
}

function getOneCountry(countries) {
    const countryInformation= document.getElementById('country-name-information')
    countries.map((allNameCountries)=> {
        const oneCountry = document.createElement('div')
        oneCountry.innerHTML=`
        <p>${allNameCountries.name} is situated in ${allNameCountries.region}. It has a population of ${allNameCountries.population} people </p>
        <p>The capital is ${allNameCountries.capital} and you can pay with ${allNameCountries.currencies[0].name}. </p>
        <p>They speak ${allNameCountries.languages[0].name}</p>
        `
        countryInformation.appendChild(oneCountry)
    })
}

