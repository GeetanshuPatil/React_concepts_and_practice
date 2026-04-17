let StateTask3 = ()=>{

    let handleClick = (e)=>{

        let color = ["red","blue","green","grey","black","purple"]

        let randomNum = Math.floor(Math.random()*6)



        e.target.style.background = color[randomNum]

    }

    return(
        <>
        <div onClick={handleClick}
        style={{width:"200px", height:"200px", border:"1px solid"}}></div>
        </>
    )
}
export default StateTask3