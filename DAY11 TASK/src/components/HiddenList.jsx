import { useState } from "react"

export const HiddenList = () => {
    const [showList , setShowList] = useState(true);

    const handleListClick = () => {
        setShowList(!showList);
    }


    const langs = ["html" , "CSS" , "JavaScript" , "Python" , "React" , "Rest"];


    return(
        <>
        {showList && <ul>
            {langs.map((lang,i)=>(
            <li key={i}>{lang}</li>))}
        </ul> }

        <button onClick={handleListClick}> {showList ? "hide list" : "show list"}</button>
        </>
    )
}