import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Products.css'


const ProductsData = () => {
  const [items, setItems] = useState()
  const [loading, setLoading] = useState(false)


  // useEffect(()=>{
  //   ;async
  // }) one is this method for async



  useEffect(() => {
    async function fecthData() {
      setLoading(true)
      const url = await fetch('https://dummyjson.com/products');
      const json = await url.json();
      setLoading(false)
      setItems(json)
    }
    fecthData()
  }, [])
  console.log(items);



  return (
    <>
      <Navbar />
      <div className='products-container'>
        {
          loading ? <p style={{ fontSize: "3.5rem", textAlign: "center", marginTop: "5.5rem" }}>Loading...</p> : (
            items?.products?.map(data => (
              <div className="product-card" key={data.id}>
                <div className="product-image">
                  <img src={data.images} alt="Product Image" />
                </div>
                <div className="card-content">
                  <h3 className="product-title">{data.title}</h3>
                  <p className="product-desc">{data.description}</p>
                  <p className="product-price">${data.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))
          )
        }
      </div>
    </>
  )
}

export default ProductsData
