import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import ProductsData from './Pages/Products/ProductsData'
import Contact from './Pages/Contact/Contact'
import Admin from './Components/Admin-Pannel/Admin'
import Login from './Pages/Login-&-Register/Login'
import Checkout from './Pages/Checkout/Checkout'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<ProductsData />} />
        <Route path='contact' element={<Contact />} />
        <Route path='admin' element={<Admin />} />
        <Route path='login' element={<Login />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
