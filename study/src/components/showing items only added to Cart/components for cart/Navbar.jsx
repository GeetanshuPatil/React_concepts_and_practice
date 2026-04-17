import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-900 text-white shadow-md">

      <h1 className="text-2xl font-bold tracking-wide">
        MyStore
      </h1>

      <div className="flex gap-6 text-lg">

        <Link
          to="/"
          className="hover:text-yellow-400 transition"
        >
          Home
        </Link>

        <Link
          to="/cart"
          className="bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-300 transition"
        >
          Cart ({cartCount})
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;