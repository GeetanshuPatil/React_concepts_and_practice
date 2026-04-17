import { useState } from "react"

let StateTask2 = ()=>{


    let [state, setState] = useState(0)
    
    let handleInc = ()=>{
        setState(state + 1)
    }
    let handleDec = ()=>{
        setState(state - 1)
    }
    return(
        <div>
            <h1>count: {state}</h1>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
        </div>
    )

    
}
export default StateTask2