import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import icons1 from '../../assets/icon-05 (1).svg'
import icons2 from '../../assets/icon-05 (2).svg'
import icons3 from '../../assets/icon-05 (3).svg'
import icons4 from '../../assets/icon-05 (4).svg'

const About = () => {
  return (
    <>
      <div className="cart-hero">
        <h1>About Us</h1>
        <div className="cart-breadcrumbs">
          <div className="cart-crumbs-text">
            <Link to='/'><p>Home</p></Link>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>About</p>
          </div>
        </div>
      </div>
      {/* After Hero-Section */}

      <div className='aboutpg'>
        <div className="about-sections">
          <div className="secs">
            <div className="sec-image">
              <img src={icons1} alt="" />
            </div>
            <h3>24/7 Customer Service</h3>
            <p>We're here to help you with any questions or concerns you have, 24/7.</p>
          </div>
          <div className="secs">
            <div className="sec-image">
              <img src={icons2} alt="" />
            </div>
            <h3>Our Guarantee</h3>
            <p>We stand behind our products and services and guarantee your satisfaction.</p>
          </div>
          <div className="secs">
            <div className="sec-image">
              <img src={icons3} alt="" />
            </div>
            <h3>Shipping Worldwide</h3>
            <p>We ship our products worldwide, making them accessible to customers everywhere.</p>
          </div>
          <div className="secs">
            <div className="sec-image">
              <img src={icons4} alt="" />
            </div>
            <h3>Secure Payment</h3>
            <p>Your payment information is securely processed, ensuring a safe transaction.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
