import React, { useEffect, useMemo, useState } from 'react'

const MemoTask5 = () => {
    let [search, setSearch ] = useState("")
    let [debouncSearch, setDebounceSearch] = useState("")

    let products = [
        "Laptop" , "Phone", "Headphones", "Camera", "Tablet", "Smartwatch"
    ]
    useEffect(()=>{
        let timer = setTimeout(() => {
          setDebounceSearch(search)
        }, 500);

       return ()=> clearTimeout(timer)
    },[search])

    let filteredProducts = useMemo(()=>{
        console.log("filtering...");
        
        return products.filter((item)=> item.toLowerCase().includes(debouncSearch.toLowerCase()))

    },[debouncSearch])

  return (
    <div>
      <input type="text" placeholder='type...' onChange={(e)=>{setSearch(e.target.value)}}
      className="border px-4 py-2 rounded-lg" />
      <div className="space-y-2">
        {
            filteredProducts.map((prod, index)=>(
                <div key={index}>
                    {prod}
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default MemoTask5

// Task 15 – Product Search Optimization
// Product list:
// Laptop
// Phone
// Headphones
// Camera
// Tablet
// Smartwatch
// Search input:
// "ph"
// Expected result:
// Phone
// Headphones
// Optimize search using useMemo.