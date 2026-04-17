import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const Home = () => {
    let quoteData = useContext(UserContext)
    console.log(quoteData);
    
    

  return (
    <div>
      Home
      <div>{
        quoteData.map((prod)=>{
          return(
            <div key={prod.id}>
              {prod.quote}
            </div>
          )
        })
        
        }</div>
    </div>
  )
}

export default Home
