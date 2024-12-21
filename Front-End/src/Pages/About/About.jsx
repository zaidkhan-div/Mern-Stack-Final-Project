import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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

      {/* Hero-Section */}
      <div>
        This is about us page
      </div>
    </>
  )
}

export default About
