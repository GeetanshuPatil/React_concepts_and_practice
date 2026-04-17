let JsxRule4 = () => {
    
    let age = 25;
    
    
    return(
        <>
            <h2 style={{
                color: "white",
                backgroundColor: "black"
            }}> Jsx Rule 4</h2>
            
        <div style={{
            color: "yellow",
            backgroundColor: "red"
        }}>
            <p>age : {age}</p>

        </div>
        
        <p>To write JS inside JSX, use curly braces {"{}"}.</p>
        <p>It is called as JSX expression.</p>
        </>
    )
}

export default JsxRule4