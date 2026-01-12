import { useState } from "react"

export const LiveText = () =>{
    const [message , setMessage] = useState("");

    const handleChange = (e) =>{
        setMessage (e.target.value)
    }
    return(
        <>
        <p>{message}</p>
        <input type="text" onChange={handleChange} placeholder="Enter something"/>
        </>
    )
}