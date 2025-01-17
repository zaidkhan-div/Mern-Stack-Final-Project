import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="cart-hero">
        <h1>Contact Us</h1>
        <div className="cart-breadcrumbs">
          <div className="cart-crumbs-text">
            <Link to='/'><p>Home</p></Link>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Contact</p>
          </div>
        </div>
      </div>

      {/* Hero-Section */}
      <div>
        <h1>This is Contact Page</h1>
        </div>
    </>
  )
}

export default Contact
