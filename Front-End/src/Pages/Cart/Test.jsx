import React, { useEffect } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { } from '../../redux-slices/cartSlice'
import { increasementQuantity, decreasementQuantity, removeItem, getCartTotal } from '../../redux-slices/cartSlice'

const Test = () => {

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <>
            <div className="cart-items-section">
                <div className="cart-products-section">
                    {/* Titles */}
                    <div className="cart-product-titles">
                        <div className="cart-product-image"><h3>Image</h3></div>
                        <div className="cart-product-details-header">
                            <div className="cart-product-price"><h3>Price</h3></div>
                            <div className="cart-product-quantity"><h3>Quantity</h3></div>
                            <div className="cart-product-total"><h3>Total</h3></div>
                        </div>
                    </div>

                    {/* Cart Items */}
                    {cart.length > 0 ? (
                        cart.map((data) => (
                            <div className="cart-product-tab" key={data.id}>
                                {/* Image */}
                                <div className="cart-product">
                                    <img src={data.images} alt={data.title} className="product-image" />
                                </div>

                                {/* Details */}
                                <div className="cart-product-details">
                                    {/* Price */}
                                    <div className="cart-price"><p>${data.price}</p></div>

                                    {/* Quantity Controls */}
                                    <div className="cart-quantity">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => dispatch(decreasementQuantity(data.id))}
                                            disabled={data.quantity === 1}
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input
                                            type="number"
                                            value={data.quantity}
                                            className="quantity-input"
                                            readOnly
                                        />
                                        <button
                                            className="quantity-btn"
                                            onClick={() => dispatch(increasementQuantity(data.id))}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>

                                    {/* Total Price */}
                                    <div className="cart-total-price"><p>${data.price * data.quantity}</p></div>

                                    {/* Delete */}
                                    <div className="cart-delete">
                                        <button onClick={() => dispatch(removeItem(data.id))}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="empty-cart-message">Your cart is empty.</p>
                    )}
                </div>

                {/* Order Summary */}
                <div className="order-summary-section">
                    <h2 className="order-summary-title">Order Summary</h2>
                    <ul className="summary-list">
                        <li className="summary-item">
                            <span>Subtotal:</span>
                            <span>${totalPrice}</span>
                        </li>
                        <li className="summary-item">
                            <span>Total Quantity:</span>
                            <span>{totalQuantity}</span>
                        </li>
                        <li className="summary-item">
                            <span>Total Amount:</span>
                            <span>${totalPrice}</span>
                        </li>
                    </ul>
                    <div className="order-button">
                        <Link to="/checkout">
                            <button>PROCESS TO CHECKOUT</button>
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Test
