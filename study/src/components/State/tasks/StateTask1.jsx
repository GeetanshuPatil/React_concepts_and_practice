let SatateTask1 = ()=>{

    let count = 0
    let handleAdd = ()=>{
        count += 1
        console.log(count);
        // return() =>{
        //     console.log("Not supposed to be called ");
            
        // }
    }

// not recommended way for event handling 
    // we should go with hook
    return(
        <div>
            <p>StateTask1</p>
            <p>count:{count}</p>
            {/* <button onClick="handleAdd">Add</button> */}
            {/* <button onClick={handleAdd()}>Add</button> */}
            <button onClick={handleAdd}>Add</button>
            
        </div>
    )
}
export default SatateTask1