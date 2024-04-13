const addProduct = () => {
    const productName = document.querySelector('#product-name')
    const product = productName.value;
    const productQuantity = document.getElementById('Product-quantity')
    const quantity = productQuantity.value;
    productName.value=''
    productQuantity.value=''
    allData(product,quantity)
}

const allData = (product,quantity) => {
    const divContainer = document.getElementById('container')
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
    <ul> 
    ${product}
    ${quantity}
    </ul>
    `
    divContainer.appendChild(newDiv);

}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringfield = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfield)
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for (const product in savedCart){
        const quantity = savedCart[product]
        displayProduct(product,quantity)
    }
}

displayProductsFromLocalStorage();