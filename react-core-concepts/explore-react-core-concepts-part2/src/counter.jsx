import { useState } from "react"

export default function Counter() {
    const [count,setCount] = useState(0);
    function Increment (){
        const newCount = count+1;
        setCount(newCount);
    }
    const Decrement = () => {
        const updateCount = count-1;
        setCount(updateCount);
    }
    return (
        <>
        <h4>Counter App</h4>
        <h3>{count}</h3>
        <button  onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </>
    )
}