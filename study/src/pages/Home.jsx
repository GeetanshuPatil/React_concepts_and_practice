import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="flex">
        <Aside></Aside>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
