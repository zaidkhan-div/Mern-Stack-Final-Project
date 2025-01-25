import React from 'react'
import './About.css'
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
      {/* After Hero-Section */}

      <div className='aboutpg'>
        <div className="about-sections">
          <div className="secs"><h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing  elit. Minus deserunt amet !</p>
          </div>
          <div className="secs"><h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing  elit. Minus deserunt amet !</p>
          </div>
          <div className="secs"><h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing  elit. Minus deserunt amet !</p>
          </div>
          <div className="secs"><h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing  elit. Minus deserunt amet !</p>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default About
