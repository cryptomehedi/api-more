const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}


const displayCountry = countries => {
    const countryCon = document.querySelector('.countryName')
    countryCon.classList.add ('grid')
    countryCon.classList.add ('sm:grid-cols-1')
    countryCon.classList.add ('md:grid-cols-2')
    countryCon.classList.add ('lg:grid-cols-3')
    
    for( const country of countries){
        const div = document.createElement('div');
        div.classList.add ('bg-orange-200')
        div.classList.add ('m-8')
        div.classList.add ('p-8')
        // console.log(country);
        const p = document.createElement('p')
        p.innerHTML = `
        <div class="flex">
        <img class="w-2/3 px-2" src="${country.flags.png}">
        <img class="w-1/3 px-2" src="${country.coatOfArms.png}">
        </div>
        Name: ${country.name.common}<br>
        Area: ${country.area}<br>
        Capital: ${country.capital}<br>
        Independent: ${country.independent}<br>
        Car Side: ${country.car.side}<br>
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