import { useEffect, useState } from "react"
import Bottle from "../bottle/bottle";
import Cart from "../cart/cart";
import { addToLS,getStoredCart, removeFromLS } from "../utilities/localstorage";


export default function Bottles(){
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(response=>response.json())
        .then(data=> setBottles(data));
    },[])

     // load cart from local storage
     useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if (bottles.length) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }

            console.log('saved cart', savedCart)
            setCart(savedCart);

        }
    }, [bottles])


    const handleCart= (bottle) =>{
     const newCart = [...cart, bottle]
     setCart(newCart)
     addToLS(bottle.id)
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS 
        removeFromLS(id);
    }
    return(
        <div>
            <h1 className="text-center bold text-xl">Total Bottle:{bottles.length}</h1>
            <h5 className="text-center">Cart Item List: {cart.length} </h5>
            
            {
                cart.map((cart)=><Cart key={cart.id} cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>)
            }
            <div className="grid grid-cols-5 gap-4 m-6">
        {
           bottles.map((bottle)=><Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}> </Bottle>)

            }
            </div>
        
        </div>
    )

}