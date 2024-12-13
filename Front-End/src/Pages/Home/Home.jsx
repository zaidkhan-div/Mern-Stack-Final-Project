import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Cart-Sidebar/Sidebar'
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>A great contemporary <br /> ankle crop jeans</h1>
          <p>Enteger neque felis, egestas a euismod in, pulvinar et nisl Aliquam ullam. Nulla <br />tincidunt convallis bibendum. Duis sed risus suscipit justo maximus pulvinar. </p>
          <button>SHOP COLLECTION</button>
        </div>
      </div>
    </div>
  )
}

export default Home
