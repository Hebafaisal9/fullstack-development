import { useEffect } from "react";
import { useState } from "react"


export const UserList =() =>{
    const [user , setUser ] = useState([]);
    const [ loading , setLoading ] = useState(true);
    const [ error , setError ] = useState(null);

    const API = "https://jsonplaceholder.typicode.com/users";

    const fetchApi  = async() =>{
        try {
            setLoading(true);
            const res = await fetch(API);
            if (!res.ok){
                throw new Error (" API not fetched");
            }
            
            const data = await res.json();
            setUser(data);

    }
        catch(err)
        {
            setError(err.message);
        }

        finally {
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchApi();
    },[]);

    if (loading){
        return(
            <h1>loading...</h1>
        )
    }

    if(error){
        return(
            <h1>{error}</h1>
        )
    }
    return(
        <>
        {user.map( (ele) =>
            <div key={ele.id}>
                <h1>Username: {ele.username}
                </h1>
                <p>Company name: {ele.company.name}</p>
                <p>Phone number: {ele.phone}</p>
                <hr />
            </div>
        )}
        </>
    )
}