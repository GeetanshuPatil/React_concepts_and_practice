import React, { Fragment } from "react";

 let JsxRule3 = ()=> {
    return(
        <>
        <h2 style={{
            color: "white",
            backgroundColor: "black"
        }}>Jsx Rule 3</h2>
        <p>Enclosed everything inside a parent tag.</p>
        <p>Or use React fragment to avoid extra node in DOM to improve the performance.</p>
        <h3>Following are the ways to use fragment:</h3>
    
        <>
        <p>1. {"< > < />"} </p>
        </>

        <p>We'll go with following methods to add extra attributes with the tag:</p>
        <Fragment>
        <p>2. {"<Fragment> </Fragment>"}</p>
        
        </Fragment>

        <React.Fragment>
        <p>3. {"<React.Fragment> </React.Fragment>"}</p>
        
        </React.Fragment>

        </>
        
    )
}

export default JsxRule3;