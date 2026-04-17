import React, { useState } from 'react'
import Cart from '../pages/Cart'
import { Link } from 'react-router-dom'

const Task1 = () => {
    let [data , setData] = useState([
  { id: 1, name: "Wireless Mouse", price: 799, category: "Electronics", stock: 25 },
  { id: 2, name: "Bluetooth Headphones", price: 1499, category: "Electronics", stock: 18 },
  { id: 3, name: "Laptop Stand", price: 999, category: "Accessories", stock: 30 },
  { id: 4, name: "Mechanical Keyboard", price: 3499, category: "Electronics", stock: 12 },
  { id: 5, name: "USB-C Hub", price: 1299, category: "Accessories", stock: 20 },
  { id: 6, name: "Gaming Mouse Pad", price: 499, category: "Accessories", stock: 40 },
  { id: 7, name: "Smart Watch", price: 4999, category: "Wearables", stock: 10 },
  { id: 8, name: "Fitness Band", price: 1999, category: "Wearables", stock: 22 },
  { id: 9, name: "Portable SSD 500GB", price: 5999, category: "Storage", stock: 8 },
  { id: 10, name: "External Hard Drive 1TB", price: 4499, category: "Storage", stock: 14 },
  { id: 11, name: "LED Desk Lamp", price: 899, category: "Home", stock: 35 },
  { id: 12, name: "Office Chair", price: 7499, category: "Furniture", stock: 6 },
  { id: 13, name: "Study Table", price: 8999, category: "Furniture", stock: 5 },
  { id: 14, name: "Backpack", price: 1299, category: "Bags", stock: 28 },
  { id: 15, name: "Water Bottle", price: 399, category: "Lifestyle", stock: 50 },
  { id: 16, name: "Smartphone Stand", price: 299, category: "Accessories", stock: 45 },
  { id: 17, name: "Noise Cancelling Earbuds", price: 2999, category: "Electronics", stock: 16 },
  { id: 18, name: "Webcam HD", price: 2199, category: "Electronics", stock: 13 },
  { id: 19, name: "Portable Charger 10000mAh", price: 1599, category: "Electronics", stock: 21 },
  { id: 20, name: "Wireless Keyboard", price: 1899, category: "Electronics", stock: 17 }
])

let [cart, setCart] = useState([])
let handleAdd = (prod)=>{
    setCart([...cart, prod])
    console.log(cart);
    
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>

        {/* <Link
          to="/cart"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Cart
        </Link> */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((prod) => {
          return (
            <div
              key={prod.id}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition"
            >
              <h1 className="text-lg font-semibold text-gray-800 mb-2">
                {prod.name}
              </h1>

              <p className="text-gray-600 mb-1">
                Category: {prod.category}
              </p>

              <p className="text-gray-600 mb-3">
                Stock: {prod.stock}
              </p>

              <p className="text-xl font-bold text-green-600 mb-4">
                ₹{prod.price}
              </p>

              <button
                onClick={() => {
                  handleAdd(prod);
                }}
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <div>
        {/* <Cart props={cart}></Cart> */}
      </div>
    </div>
  );
}

export default Task1
