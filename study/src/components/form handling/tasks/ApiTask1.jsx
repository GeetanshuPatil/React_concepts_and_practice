import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiTask1 = () => {
    let [search, setSearch] = useState("")
    let [data, setData] = useState([])
    let [filtered, setFiltered] = useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/recipes").then((res)=>{
        
        setData(res.data.recipes)
        console.log(res.data.recipes);
        
    })
    })
    let handleChange = (e)=>{

      let searchVal = e.target.value
      setSearch(searchVal)
        let newRecipes = data.filter((ele)=>
            ele.name.toLowerCase().includes(searchVal.toLowerCase())
        )
        
        setFiltered(newRecipes)
        console.log(data);

    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
  
  {/* Search Section */}
  <div className="flex gap-3 mb-6 w-full max-w-md">
    <input
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search..."
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200">
      Search
    </button>
  </div>

  {/* Results Section */}
  <div className="w-full max-w-md space-y-3">
    {
    data.map((ele) => (
      <div
        key={ele.id}
        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200 border border-gray-200"
      >
        <p className="text-gray-800 font-medium">{ele.name}</p>
      </div>
    ))}
  </div>

</div>
  )
}

export default ApiTask1
