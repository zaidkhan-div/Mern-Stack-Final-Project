import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Cart = () => {


  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)



  return (
    <div>
      <div className="cart-hero">
        <h1>Shoppig Cart</h1>
        <div className="breadcrumbs">
          <div className="crumbs-text">
            <Link to='/'><p>Home</p></Link>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p> Shopping-Cart</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
