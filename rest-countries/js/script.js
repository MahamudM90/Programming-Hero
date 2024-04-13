const restCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
      .then(json => allData(json))
}

const allData = (countries) => {
    const container = document.querySelector('#container')
    countries.forEach((country)=>{
        const createDiv = document.createElement('div');
        createDiv.classList.add('country')
        createDiv.innerHTML = `
        <h5>Name: ${country.name.common}</h5>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `
        container.appendChild(createDiv);


    })

}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = c => {
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
     <h2> Details: ${c.name.common} </h2>
     <img src='${c.flags.png}'>
    `
}

restCountry ()