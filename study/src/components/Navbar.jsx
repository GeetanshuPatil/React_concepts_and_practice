import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-blue-700 text-white h-[10vh] flex justify-between">
      <div>Navbar</div>
      <div className=" w-[50vw] flex justify-around ">
        <Link to="/home">Home</Link>
        <Link to="/home/about">About</Link>
        <Link to="/home/contact">Contact</Link>
        <Link to="/home/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
