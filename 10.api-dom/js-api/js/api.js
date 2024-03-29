function allUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then(json => specificUser(json))
}

function specificUser(users) {
    const containerDiv = document.getElementById('container')
    for(const user of users){
        console.log(user)
        const createDiv = document.createElement('div')
        createDiv.innerHTML = `
        <h5>Name:${user.name}</h5>
        <p>Email:${user.email}</p>
        `
        containerDiv.appendChild(createDiv);
        
    }

}