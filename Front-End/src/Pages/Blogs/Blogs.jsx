import React from "react";
import "./Blogs.css";
import { blogs } from "../../Components/Blogs/Blogs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <>
            <div className="cart-hero">
                <h1>Blogs</h1>
                <div className="cart-breadcrumbs">
                    <div className="cart-crumbs-text">
                        <Link to='/'><p>Home</p></Link>
                        <FontAwesomeIcon icon={faGreaterThan} />
                        <p>Blogs</p>
                    </div>
                </div>
            </div>
            <div className="blogs-container">
                {blogs.map((blog) => (
                    <div key={blog.id} className="single-blog">
                        <div className="blog-image">
                            <img src={blog.image} alt={blog.title} />
                        </div>
                        <h2>{blog.title}</h2>
                        <p>{blog.excerpt}</p>
                        <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Blogs;
