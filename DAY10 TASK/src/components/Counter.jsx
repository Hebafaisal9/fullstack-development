import { useState } from "react";
export const Counter = () =>{
    
    const [ count , setCount ] = useState(0);

    const increment = () =>{
        setCount( count + 1 );
    }

    const decrement = () =>{
        setCount( count - 1);
    }


    return (

        <>
        <h3>{count}</h3>
        <button onClick={ increment }>increment</button>
        <button onClick={ decrement }>decrement</button>
        </>
    )
}