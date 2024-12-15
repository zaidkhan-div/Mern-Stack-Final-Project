import React from 'react'
import './Checkout.css'
import logo from './../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const checkout = () => {





  return (
    <div>
      <div className="checkout-hero">
        <h1>Checkout for Payment</h1>
        <div className="breadcrumbs">
          <div className="crumbs-text">
            <Link to='/'><p>Home</p></Link>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Checkout For Payment</p>
          </div>
        </div>
      </div>
      
      <div className="checkout-details">
        <div className="checkout-information">
          <h1>Information</h1>
          <form action="#">
            <div className="input-fields">
              <input type="text" placeholder='First Name' required />
              <input type="text" placeholder='Last Name' required />
            </div>
            <div className="input-fields">
              <input type="text" placeholder='First Name' required />
              <input type="text" placeholder='Last Name' required />
            </div>
            <div className="form-btn">
              <button>PAYMENT</button>
            </div>
          </form>
        </div>
        <div className='parent-order'>
          <h1>Your Order</h1>
        <div className="order-section"> 
          <div className="checkout-items">
            <div className="checkout-image">
              <img src={logo} alt="" />
            </div>
            <div className="checkout-title">
              Title
            </div>
            <div className="checkout-price">
              Price
            </div>
          </div>
        </div>
        <div className="checkout-total">
          <div><h2>Total</h2></div>
          <div><h2>Rs:</h2></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default checkout
