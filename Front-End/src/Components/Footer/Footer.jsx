import React from 'react'
import './Footer.css'
import Logo from './../../assets/Logo.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-section-1">
                    <div className="footer-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="footer-contact">
                        <div><h3>Email</h3><p>zaidwork76@gmail.com</p></div>
                        <div><h3>Phone</h3><p>03432420212</p></div>
                        <div><h3>Address</h3><p>Pakistan,Karachi</p></div>
                    </div>
                </div>
                <div className="footer-section-2">
                    <h2>Information</h2>
                    <p>FaQs</p>
                    <p>Contact Us</p>
                </div>
                <div className="footer-section-3">
                    <h2>Quicl Link</h2>
                    <p><Link to='/'>Home</Link></p>
                    <p>About Us</p>
                    <p>Products</p>
                    <p>Contact Us</p>
                </div>
                <div className="footer-section-4">
                    <h2>Customer Service</h2>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Exchanger Policy</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>	&#169;2024 E-commerce Zaidkhan. All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
