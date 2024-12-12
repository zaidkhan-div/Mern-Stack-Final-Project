import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar />
      <center>
        <h1>This is the Login Page</h1>
        <input type="text" placeholder='Enter Your Name' name="" id="" />
        <input type="email" placeholder='Enter Your Email' name="" id="" />
      </center>
    </div>
  )
}

export default Login
