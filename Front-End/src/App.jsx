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
import Blogs from './Pages/Blogs/Blogs'
import Resgister from './Components/Register/Resgister'
import Login from './Components/Login/Login'
import Protected from './Components/Protected-Routes/Protected'
import ErrorPage from './Pages/ErrorPage.jsx/Error'
import BlogDetail from './Components/Blogs/BlogDetail'

// Context
import { ProductsProvider } from './Components/Context/ProductsContext'
import Faqs from './Pages/Faqs/Faqs'

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductsProvider>
        <Routes>
          {/* <Protected><Home/><Protected/> */}
          <Route path='/login' element={<Login />} />
          {/* <Route path='/' element={<Protected><Home /></Protected>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<ProductsData />} />
          <Route path='faqs' element={<Faqs/>} />
          {/* <Route path='products' element={<Protected><ProductsData /></Protected>} /> */}
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='cart' element={<Cart />} />
          <Route path='register' element={<Resgister />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ProductsProvider>
      <Footer />
    </div>
  )
}

export default App
