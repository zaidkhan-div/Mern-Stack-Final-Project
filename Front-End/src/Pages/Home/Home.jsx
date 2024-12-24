import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Cart-Sidebar/Sidebar'
import Gallery from '../../Components/Product-Gallery/Gallery'

const Home = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>A great contemporary <br /> ankle crop jeans</h1>
          <p>Enteger neque felis, egestas a euismod in, pulvinar et nisl Aliquam ullam. Nulla <br />tincidunt convallis bibendum. Duis sed risus suscipit justo maximus pulvinar. </p>
          <Link to='/products'><button>SHOP COLLECTION</button></Link>
        </div>
      </div>
      <Gallery />
    </div>
  )
}

export default Home
