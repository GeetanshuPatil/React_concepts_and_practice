import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layouts/Layout1'
import Login from '../task1 pages/Login'
import Home from '../task1 pages/Home'

const RouterToggle = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<Layout></Layout>,
            children: [
                {
                    path:"/",
                    element:<Login></Login>
                },
                {
                    path:"/home",
                    element:<Home></Home>
                },
            ]
        },
        
    ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default RouterToggle
