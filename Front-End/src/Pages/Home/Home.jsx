import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Cart-Sidebar/Sidebar'
import Gallery from '../../Components/Product-Gallery/Gallery'
import Carousal from '../../Components/Swiper-Slider/Swiper'
import TestimonialCarousel from '../../Components/Testimonial/Testimonial'
import BlogsData from '../../Components/Blogs/BlogsData'
import Icon1 from '../../assets/Icon-Box-01.png'
import Icon2 from '../../assets/Icon-Box-02.png'
import Icon3 from '../../assets/Icon-Box-03.png'
import Icon4 from '../../assets/Icon-Box-04.png'




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
      {/* Swiper Carousal */}
      <div className="Swiper-carousal">
        <div className="swiper-text">
          <h2>Essential Collections</h2>
          <p>Lectus mauris ultrices eros in cursus. Viverra <br />adipiscing at in tellus integer feuat scel.</p>
        </div>
        <Carousal />
        <button className='swiper-btn'><Link to='/products'>VIEW ALL</Link></button>
      </div>
      {/* Testimonial */}
      <div className="testimonial">
        <TestimonialCarousel />
      </div>
      {/* Blogs */}
      <div className="blogs">
        <div className="blogs-content">
          <h2>Latest News & Blog</h2>
          <p>Mollis aliquam ut porttitor leo a diam. Imperdiet sed <br /> euismod nisi porta lorem mollis.</p>
        </div>
        <BlogsData />
        </div>
      {/* Icons */}
      <div className="home-icons">
        <div className="icons-box">
          <div className="icon-image">
            <img src={Icon1} alt="" />
          </div>
          <div className="icon-desc">
            <p>Free Shipping</p>
            <span>Free Shipping World wide</span></div>
        </div>
        <div className="icons-box">
          <div className="icon-image">
            <img src={Icon2} alt="" />
          </div>
          <div className="icon-desc"><p>Secured Payment</p>
            <span>Safe & Secured Payments</span></div>
        </div>
        <div className="icons-box">
          <div className="icon-image">
            <img src={Icon3} alt="" />
          </div>
          <div className="icon-desc"><p>24/7 Support</p>
            <span>Support Arround The Clock</span></div>
        </div>
        <div className="icons-box">
          <div className="icon-image">
            <img src={Icon4} alt="" />
          </div>
          <div className="icon-desc"><p>Surprise Gifts</p>
            <span>Free Gift Cards & Vouchers</span></div>
        </div>
      </div>
    </div>
  )
}

export default Home
