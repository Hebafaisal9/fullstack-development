import { useState } from "react"

export const HiddenMessage = () =>{

    const [ showMessage , setShowMessage ] = useState(false);

    const handleClick = () =>{
        setShowMessage(!showMessage);
        // if(showMessage === false){
        //    setShowMessage(true);
        // }
        // else{
        //     setShowMessage(false);
        // }
    }


    return(
        <>
        {showMessage && <p>This is a hidden message</p>}
        <button onClick={handleClick}>{showMessage ? "Hide Message":"Show Message"}</button>
        </>
    )
}