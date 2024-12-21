import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Save token in localStorage
        alert('Login Successful!');
        window.location.href = '/'
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };


  return (
    <>

      <div className="cart-hero">
        <h1>Login</h1>
        <div className="cart-breadcrumbs">
          <div className="cart-crumbs-text">
            <Link to='/'><p>Home</p></Link>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p>Login</p>
          </div>
        </div>
      </div>

      {/* Hero-Section */}

      <div className="form-container">
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-btn">Login</button>
          <Link to='/register'><p style={{ marginTop: 10, }}>Create an account!</p></Link>
        </form>
      </div>
    </>
  );
};

export default Login;
