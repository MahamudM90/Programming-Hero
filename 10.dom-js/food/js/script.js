const mealData = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(response => response.json())
      .then(data => specificData(data.meals))

}

const specificData = (meals) => {
    const containerDiv = document.getElementById('container')
    containerDiv.innerHTML = ``
    meals.forEach((meal)=>{
        const createDiv = document.createElement('div')
        createDiv.classList.add('card')
        createDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div onclick='everyData(${meal.idMeal})' class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strTags? meal.strTags:"No Name Found"}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">${meal.strArea}</small>
        `
        containerDiv.appendChild(createDiv)

    })
    

}

const searchItem = () =>{
    const proView = document.getElementById('product')
    const proShow = proView.value;
    mealData(proShow);
    proView.value=''
}

const everyData = (code) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`
  fetch(url)
  .then(response => response.json())
      .then(data => console.log(data.meals[0]))
}




mealData('');