import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import ProductsData from './Pages/Products/ProductsData'
import Contact from './Pages/Contact/Contact'
import Checkout from './Pages/Checkout/Checkout'
import Cart from './Pages/Cart/Cart'
import Admin from './Components/Admin-Pannel/Admin'
import Resgister from './Components/Register/Resgister'
import Login from './Components/Login/Login'
import Protected from './Components/Protected-Routes/Protected'




const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Protected><Home/><Protected/> */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Protected><Home /></Protected>} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Protected><ProductsData /></Protected>} />
        <Route path='contact' element={<Contact />} />
        <Route path='admin' element={<Admin />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='cart' element={<Cart />} />
        <Route path='register' element={<Resgister />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
