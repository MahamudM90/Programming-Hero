const countryAll = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
      .then(json => allData(json))
}

const allData = (countries) => {
    const containerDiv = document.getElementById('container')
    countries.forEach((country)=>{
        const createDiv = document.createElement('div')
        createDiv.classList.add('another')
        createDiv.innerHTML = `
        <h5>Name:${country.name.common} </h5>
        <p>Capital:${country.capital ? country.capital: "Not avilable"} </p>
        <button onclick=detailData('${country.cca2}')>Detail</button>
        `
        containerDiv.appendChild(createDiv);

    })

}

const detailData = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(response => response.json())
    .then(data => indivualData(data[0]));

}
const indivualData = (c) => {
    console.log(c)
    const inData = document.getElementById('data')
    inData.innerHTML= `
    <h1>User:${c.name.common}</h1>
    <img style='height:20px weight:20px' src="${c.flags.png}">
    
    `

}

countryAll();