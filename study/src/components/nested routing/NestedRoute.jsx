import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import LandingPage from "../../pages/LandingPage";
import Cart from "../../pages/Cart";
import NotFound from "../../pages/NotFound";


export let routess = createBrowserRouter([
    { path: "/", element: <LoginPage></LoginPage> },
    {
      path: "/home",
      element: <Home></Home>,
      children: [
        { path: "/home", element: <LandingPage></LandingPage>,},
        { path: "/home/about", element: <About></About> },
        { path: "/home/contact", element: <Contact></Contact> },
        { path: "/home/cart", element: <Cart></Cart> },
      ],
    },
    { path: "/about", element: <About></About> },
    { path: "/contact", element: <Contact></Contact> },
    {
      path: "/landing",
      element: <LandingPage></LandingPage>,
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
    {
      path: "/*",
      element: <NotFound></NotFound>,
    },
  ]);
 