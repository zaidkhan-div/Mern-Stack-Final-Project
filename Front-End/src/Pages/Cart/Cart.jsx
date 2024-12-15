import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
  return (
    <div>
      <div className="cart-hero">
        <h1>Shopping Cart</h1>
        <div className="cart-breadcrumbs">
          <div className="cart-crumbs-text">
            <Link to='/'><p>Home</p></Link>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Shopping Cart</p>
          </div>
        </div>
      </div>
    </div>
    )}

export default Cart;
