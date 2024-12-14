import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Products.css'


const Products = () => {
  const [items, setItems] = useState()


  // useEffect(()=>{
  //   ;async
  // }) one is this method for async



  useEffect(() => {
    async function fecthData() {
      const url = await fetch('https://dummyjson.com/products');
      const json = await url.json();
      setItems(json)
    }
    fecthData()
  }, [])
  console.log(items);


  return (
    <>
      <Navbar />
      <div className='products-container'>
        <h1>This is Products Page</h1>
        <div className="product-card">
          <div className="product-image">
            <img src="https://via.placeholder.com/300" alt="Product Image" />
          </div>
          <div className="card-content">
            <h3 className="product-title">Product Title</h3>
            <p className="product-desc">This is a short description of the product.</p>
            <p className="product-price">$49.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
