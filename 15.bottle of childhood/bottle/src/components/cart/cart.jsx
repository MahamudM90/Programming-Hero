import PropTypes from 'prop-types';
export default function Cart ({cart,handleRemoveFromCart}) {
    const {name,img} = cart;
    return(
        <div className="mx-2">
        <h1 className="mx-6">{name}</h1>
        <img className="w-1/5 h-1/5" src={img}></img>
        <button className='rounded bg-emerald-900 text-white w-1/5 mt-2' onClick={() => handleRemoveFromCart(cart.id)}>Remove</button>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}