export default function Bottle({bottle,handleCart}) {
    
    const{name,img,seller} = bottle
    
    return(
        <div>
        <img className="w-fit h-fit" src={img}></img>    
        <h1 className="text-center">{name}</h1>
        <p className="text-center">{seller}</p>
        <button onClick={()=>handleCart(bottle)} className='rounded bg-emerald-900 mx-24 text-white w-1/3 p-2'>Purchase</button>
        </div>
    )
}