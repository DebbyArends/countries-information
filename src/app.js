//Ophalen van de data:
// 1. Het request zelf (endpoint voor naam)
// GET 'https://restcountries.com/v2/all?fields=name,region,flags,population'
// 2. Asynchrone functie (async/await)
// 3. Een try and catch maken.
// 4. Maak een variabele die als waarde het resultaat van de endpoint krijgt (await axios.get)
// 5. Maak een container/anker in je html
// 6. Haal deze binnen in je javascript file
// 7. Maak een nieuw element waar je alle data in wilt opslaan
// 8. Zet de data die je nodig hebt in dit element.
// 9. Append dit element aan je container/anker

import axios from "axios";

async function fetchCountriedata() {
    try{
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data)

        result.data.sort((a,b) => {
            return a.population - b.population
        })

        getAllCountries(result.data)
    }
    catch (error) {
        console.error(error)
    }
}

fetchCountriedata()

function getAllCountries(countries) {
    const countryUnorderedList = document.getElementById('country-information')

    countries.map((allCountries)=> {
        const countrylist = document.createElement('li')
        countrylist.innerHTML=`
        <a href="${allCountries.flag}"><img src="${allCountries.flag}" class="flag"/></a>
        <span class="${allCountries.region}"> ${allCountries.name} </span> 
        <p> Has a population of <strong>${allCountries.population}</strong> people</p>
        `
        countryUnorderedList.appendChild(countrylist)
    })
}
