import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-semibold mb-2">
        {product.name}
      </h3>

      <p className="text-gray-600 mb-4">
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;