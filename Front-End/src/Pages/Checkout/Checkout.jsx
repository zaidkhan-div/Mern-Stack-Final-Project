import React from 'react';
import './Checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { cart, totalPrice } = useSelector((state) => state.allCart);

  return (
    <div>
      <div className="checkout-hero">
        <h1>Checkout for Payment</h1>
        <div className="breadcrumbs">
          <div className="crumbs-text">
            <Link to="/"><p>Home</p></Link>
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
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="input-fields">
              <input type="text" placeholder="Email" required />
              <input type="text" placeholder="Phone" required />
            </div>
            <div className="form-btn">
              <button>PAYMENT</button>
            </div>
          </form>
        </div>
        
        <div className="parent-order">
          <h1>Your Order</h1>
          <div className="order-section">
            {cart.map((item) => (
              <div className="checkout-items" key={item.id}>
                <div className="checkout-image">
                  <img src={item.image || logo} alt={item.title} />
                </div>
                <div className="checkout-title">
                  {item.title}
                </div>
                <div className="checkout-price">
                  ${item.price} x {item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <div><h2>Total</h2></div>
            <div><h2>Rs: ${totalPrice}</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
