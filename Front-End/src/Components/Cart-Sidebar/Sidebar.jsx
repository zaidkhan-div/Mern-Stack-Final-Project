import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className='cart-sider-bar'>
            <div className="cart-top-bar">
                <h3>Shopping Car</h3>
                <div className="cross">
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>

            <div className="cart-items">

            </div>

            <div className="cart-side-bar-info">
                <div className="cart-subtotal">
                    <p>SUBTOTAL</p>
                    <p>Rs:<span id='subtotal'>000</span> </p>
                </div>
                <div className="cart-button-section">
                    <div className="cart-btn cart">VIEW CART</div>
                    <div className="cart-btn checkout">CHECK OUT</div>
                </div>
                <div className="continue-shopping">
                    <p>OR CONTINUE SHOPPING</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
