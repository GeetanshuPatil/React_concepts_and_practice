import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";

export let UserContext = createContext()

let UserProvider = ()=>{
    let [apiData, setApiData] = useState([])
     useEffect(()=>{
        axios.get("https://dummyjson.com/quotes").then((res)=>{
           
           setApiData(res.data.quotes)
           
        })
    },[])
    
    return(
        <UserContext.Provider value={apiData}>
            <Home></Home>
            <Cart></Cart>
            <Pay></Pay>
        </UserContext.Provider>
    )
}
export default UserProvider