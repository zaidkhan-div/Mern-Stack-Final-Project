import React, { useEffect, useState } from 'react'
import './Products.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux-slices/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ProductsData = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   ;async
  // }) one is this method for async

  useEffect(() => {
    async function fecthData() {
      setLoading(true)
      const url = await fetch('https://node-setup-for-project.vercel.app/products');
      const json = await url.json();
      setLoading(false)
      setItems(json)
    }
    fecthData()
  }, [])
  // console.log(items.length);

  // console.log(items);

  // ?. (optional chaining) to check the 
  // const user = { profile: { name: "Zaid" } };
  // console.log(user.profile?.name); // "Zaid"
  // console.log(user.profile?.age); // undefined (doesn't throw an error)

  return (
    <>
      <div className="cart-hero">
        <h1>All Products</h1>
        <div className="cart-breadcrumbs">
          <div className="cart-crumbs-text">
            <Link to='/'><p>Home</p></Link>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Products</p>
          </div>
        </div>
      </div>

      {/* Hero-Section */}

      <div className='products-container'>
        {
          loading ? <p style={{ fontSize: "3.5rem", textAlign: "center", marginTop: "5.5rem" }}>Loading...</p> : (
            items.map((data) => (
              <div className="product-card" key={data.id}>
                <div className="product-image">
                  <img src={data.image} alt="Product Image" />
                </div>
                <div className="card-content">
                  <h3 className="product-title">{data.title}</h3>
                  <p className="product-desc">{data.description}</p>
                  <p className="product-price">${data.price}</p>
                  <button className="add-to-cart" onClick={() => dispatch(addToCart(data))}>Add to Cart</button>
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
