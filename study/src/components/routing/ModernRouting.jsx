import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import NotFound from "../../pages/NotFound";

const ModernRouting = () => {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "/home",
      element: <Home></Home>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default ModernRouting;
