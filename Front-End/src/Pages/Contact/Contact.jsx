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
      <div id='contact-form'>
        <h2>Drop Us A Line</h2>
       <form action="#">
        <div className='form-inputs'>
        <input type="text" placeholder='Firt Name' required/>
        <input type="text" placeholder='Last Name' required />
        </div>
        <div className='form-inputs'>
          <input type="email" placeholder='Email Address' />
          <input type="number" placeholder='Phone Number'/>
        </div>
        <button type='submit' id=''>PAYMENT</button>
       </form>
        </div>
    </>
  )
}

export default Contact
