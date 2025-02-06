import React from "react";
import "./Blogs.css";
import { blogs } from "../../Components/Blogs/Blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div className="blogs-container">
            {blogs.map((blog) => (
                <div key={blog.id} className="single-blog">
                    <div className="blog-image">
                        <img src={blog.image} alt={blog.title} />
                    </div>
                    <h2>{blog.title}</h2>
                    <p>{blog.excerpt}</p>
                    <Link to={`/blog/${blog.id}`} target="black" className="read-more">Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
