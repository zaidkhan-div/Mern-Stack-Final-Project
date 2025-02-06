import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './BlogsData.css'
import { blogs } from './Blogs';


const BlogsData = () => {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
            // autoplay={{ delay: 2000 }}
            >
                {/* blogs.slice(0,3).map */}
                {blogs.map((blog, index) => (
                    <SwiperSlide key={index}>
                        <div key={blog.id} className="blog-list">
                            <img src={blog.image} alt={blog.title} />
                            <h3>{blog.title}</h3>
                            <p>{blog.excerpt}</p>
                            <Link to={`/blog/${blog.id}`} className='read-more'>Read More</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BlogsData
