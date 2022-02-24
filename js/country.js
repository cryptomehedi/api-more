const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}


const displayCountry = countries => {
    const countryCon = document.querySelector('.countryName')
    countryCon.classList.add ('grid')
    countryCon.classList.add ('grid-cols-4')
    
    for( const country of countries){
        const div = document.createElement('div');
        div.classList.add ('bg-orange-200')
        div.classList.add ('m-8')
        div.classList.add ('p-8')
        console.log(country);
        const p = document.createElement('p')
        p.innerHTML = `
        <img src="${country.flags.png}" style="width: 200px; height: 100px;" >
        Name: ${country.name.common}<br>
        Area: ${country.area}<br>
        Capital: ${country.capital}<br>
        Language: ${country.languages.eng}<br>
        Independent: ${country.independent}<br>
        Population: ${country.population}<br>
        Region: ${country.region}<br>
        Subregion: ${country.subregion}<br>
        Start Of Week: ${country.startOfWeek}<br>
        Time Zone: ${country.timezones}<br>
        
        `;
        
        div.appendChild(p)
        countryCon.appendChild(div)
    }
}