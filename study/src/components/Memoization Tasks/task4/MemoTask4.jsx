import React, { useMemo, useState } from "react";

const MemoTask4 = () => {
  let [count, setCount] = useState(0);
  let  products = useMemo(() => [
  { price: 1000 },
  { price: 2000 },
  { price: 3000 },
], []);

  let total = useMemo(()=>{
    console.log("calculating total...");
    return products.reduce((acc, item)=> acc + item.price , 0)
  },[products])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">

      <h2 className="text-xl font-semibold">Total Price: ₹{total}</h2>

      {/* This should NOT trigger recalculation */}
      <button 
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      onClick={()=>{
        setCount(count + 1)
      }}>
        Re-render Count:{count}
      </button>

    </div>
  );
};

export default MemoTask4;

// useMemo Tasks
// Task 14 – Expensive Calculation
// Create a function that calculates total order price from a large list.
// Input
// products = [
//  {price:1000},
//  {price:2000},
//  {price:3000}
// ]
// Total = 6000
// Use useMemo so the calculation runs only when products change.
