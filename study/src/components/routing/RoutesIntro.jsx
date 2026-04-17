
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import LoginPage from '../../pages/LoginPage'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import NotFound from '../../pages/NotFound'

const RoutesIntro = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/contact" element={<Contact></Contact>} ></Route>
        <Route path="/*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesIntro

