import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Cart-Sidebar/Sidebar'
import Gallery from '../../Components/Product-Gallery/Gallery'
import Carousal from '../../Components/Swiper-Slider/Swiper'


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
      <div className="signle-image">
        <h2>Classically Beautiful Outfits</h2>
        <button><Link to='/products'>SHOP COLLECTION</Link></button>
      </div>
      <div className="Swiper-carousal">
        <Carousal items={items} loading={loading} dispatch={dispatch} addToCart={addToCart} productLimit={4} />
      </div>
    </div>
  )
}

export default Home
