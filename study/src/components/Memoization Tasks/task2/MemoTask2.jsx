import React, { useEffect, useState } from "react";
import ProdustsDisplay from "./ProdustsDisplay";

const MemoTask2 = () => {
  let products = ["Laptop", "phone", "mouse", "keyboard", "monitor"];

  let [input, setInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 🔥 Debounce Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(input);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [input]);

  // 🔍 Filter using debounced value
  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center gap-6 p-6 bg-gray-100">
        <h2 className="text-xl font-semibold">Product List</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-4 py-2 rounded-lg w-64"
        />

        {/* List */}
        <div className="w-full max-w-md space-y-2">
          {filteredProducts.map((product, index) => (
            <ProdustsDisplay key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoTask2;

// Task 12 – Product List Optimization
// Display a list of products.
// Laptop
// Phone
// Mouse
// Keyboard
// Monitor
// When a filter or search changes, only necessary components should render.
// Wrap product items using React.memo.
