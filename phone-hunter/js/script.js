const loadPhones = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data);

}


const displayPhones =(phones) => {
    phones = phones.slice(0,10)
    const divContainer = document.querySelector('#container')
    divContainer.innerHTML = ``
    const noPhone = document.querySelector('#no-found-message')
    if(phones.length === 0){
      noPhone.classList.remove('d-none')
    }
    else{
      noPhone.classList.add('d-none')
    }
    phones.forEach((phone)=>{
        
    const createDiv = document.createElement('div')
    createDiv.classList.add('card-deck')
    createDiv.innerHTML = `
    <div class="card">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">${phone.brand}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted text-center">Add to Cart</small>
    </div>
  </div>
    
    `
    divContainer.appendChild(createDiv)

    })
    toggleSpinner(false)


}


const specificData = () =>{
    const dataField = document.getElementById('search-field')
    toggleSpinner(true);
    const FinalValue = dataField.value
    loadPhones(FinalValue);
}

const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if (isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }
}

loadPhones('iphone');