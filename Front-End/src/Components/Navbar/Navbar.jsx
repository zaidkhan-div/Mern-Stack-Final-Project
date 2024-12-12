// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'


// const Navbar = () => {

//     let [menu, setMenu] = useState('Home')

//     return (
//         <div className='navbar'>
//             <Link to='/'> <h1>Logo</h1></Link>
//             <ul className="navbar-menu">
//                 <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
//                 <a href='#explore-menu' onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
//                 <a href='#app-download' onClick={() => setMenu('Mobile-app')} className={menu === 'Mobile-app' ? 'active' : ''}>Mobile-app</a>
//                 <a href='#footer' onClick={() => setMenu('Contact Us')} className={menu === 'Contact Us' ? 'active' : ''}>Contact Us</a>
//             </ul>
//             <div className="navbar-right">
//                 <img src="" alt="" />
//                 <div className="navbar-search-icon">
//                     <Link to='/cart'><img src="" alt="" /></Link>
//                     <div className='dot'></div>
//                 </div>
//                 <button>Sign in</button>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <>
    <div className="container">
      <div className='navbar'>
        <div className="logo">
          <Link to='/'> <h1>Logo</h1></Link>
        </div>
        <div className="menu">
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/products'>Shop-Online</Link>
            <Link to='/products'>Products</Link>
            <Link to='contact'>Contact Us</Link>
          </ul>
        </div>
        <div className="cart-section">
          <div className="login">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
