import React, { useEffect } from 'react'
import './Cart.css'
import { data, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faTrash, faMinus, faPlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { increasementQuantity, decreasementQuantity, removeItem, getCartTotal } from '../../redux-slices/cartSlice'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';



const Cart = () => {

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);


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

      {/* disabled={data.quantity === 1} */}

      {/* Cart-Items Ui */}
      
      <div className="cart-items-section">
        <div className="cart-products-section">
          <div className="cart-product-titles">
            <div className="cart-product-image">
              <h1>Image</h1>
            </div>
            <div className="cart-product-prices">
              <div className='cart-product-price'><p>Price</p></div>
              <div className='cart-product-quantity'><p>Quantity</p></div>
              {/* <div className='cart-product-quantity'><p>Total Price</p></div> */}
              <div className='cart-product-price'><p>Remove</p></div>
            </div>
          </div>

          {/* Cart Items */}

          {cart.length > 0 ? (
            cart.map((data) => (
              <div className="cart-product-tab">
                <div className="cart-product">
                  <img src={data.images} alt={data.title} className='product-image' />
                </div>
                <div className="cart-product-details">
                  <div className="cart-price"><p>${data.price}</p></div>
                  <div className="cart-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch(decreasementQuantity(data.id))}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input type="number" value={data.quantity} className='quantity-input' readOnly />
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch(increasementQuantity(data.id))}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  {/* <div className="cart-total-price">TotalPrice</div> */}
                  <div className="cart-delete"><button onClick={() => dispatch(removeItem(data.id))}><i className="fa-regular fa-circle-xmark"></i></button></div>
                </div>
              </div>
            ))
          ) : (
            <p className='empy-cart'>Your Cart is Empty!</p>
          )}
        </div>

        {/* Order Summary */}

        <div className="order-summary-section">
          <div className="order-summary-title">
            <h2>Order Summary</h2>
          </div>
          <div className="order-subtotal">
            <div><p>SubTotal</p></div>
            <div><p>Price</p></div>
          </div>
          <div className="order-discount">
            <div><h3>Total Quantity</h3></div>
            <div><h3>{totalQuantity}</h3></div>
          </div>
          <div className="order-total">
            <div><h3>Total Price</h3></div>
            <div><h3>{totalPrice}</h3></div>
          </div>
          <div className="order-button">
            <Link to='/checkout'><button>PROCESS TO CHECKOUT</button></Link>
          </div>
        </div>
      </div>





      {/* <div>
        <section className="cart-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="cart-items-wrapper">
                  <h5 className="cart-title">Cart - {cart.length} items</h5>
                  {cart.length > 0 ? (
                    cart.map((data) => (
                      <div className="cart-item row" key={data.id}>
                        <div className="col-lg-3 col-md-12">
                          <div className="product-image-wrapper">
                            <img src={data.images} alt={data.title} className="product-image" />
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <p className="product-title">{data.title}</p>
                          <button className="remove-item-btn" onClick={() => dispatch(removeItem(data.id))}>
                            <FontAwesomeIcon icon={faTrash} /> Remove
                          </button>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="quantity-control d-flex align-items-center">
                            <button
                              className="quantity-decrease-btn"
                              onClick={() => dispatch(decreasementQuantity(data.id))}>
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input type="number" className="quantity-input"
                              id='form1'
                              value={data.quantity} readOnly />
                            <button className="quantity-increase-btn" onClick={() => dispatch(increasementQuantity(data.id))}>
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                          <p className="product-price">{data.price}</p>
                        </div>
                        <hr className="product-divider" />
                      </div>
                    ))
                  ) : (
                    <p className="empty-cart-message">Your cart is currently empty.</p>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="cart-summary">
                  <h5 className="summary-title">Summary</h5>
                  <ul className="summary-list">
                    <li className="summary-item">
                      <span className="summary-item-label">Total Quantity:</span>
                      <span className="summary-item-value">{totalQuantity}</span>
                    </li>
                    <li className="summary-item">
                      <span className="summary-item-label">Total Amount:</span>
                      <span className="summary-item-value">{totalPrice}</span>
                    </li>
                  </ul>
                  <button className="checkout-btn">Go to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/*  Cart-Item Ui Ends Here */}

    </div>
  )
}

export default Cart;
