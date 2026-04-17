import { Children, createContext, useState } from "react";
import Home from "../task1 pages/Home";
import Login from "../task1 pages/Login";

export let ToggleContext = createContext();

let ToggleFunc = ()=>{
    let [login, setLogin] = useState(false)
    let handleLogin = ()=>{
        setLogin(!login)
    }
    return(
        <ToggleContext.Provider value={{login, handleLogin}}>
            {Children}
        </ToggleContext.Provider>
    )

}
export default ToggleFunc