import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-6">
        Cart Items
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">
          No items in cart
        </p>
      ) : (

        <div className="grid gap-5">

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow"
            >

              <p className="font-medium">
                {item.name}
              </p>

              <p className="text-blue-600 font-semibold">
                ₹{item.price}
              </p>

            </div>
          ))}

        </div>

      )}

    </div>
  );
};

export default Cart;