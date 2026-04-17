import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart }) => {

  const products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1000 },
    { id: 3, name: "Headphones", price: 1500 }
  ];

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          addToCart={addToCart}
        />
      ))}

    </div>
  );
};

export default ProductList;