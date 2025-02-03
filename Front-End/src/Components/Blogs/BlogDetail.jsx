import React from 'react'
import './BlogDetail.css'
import { useParams } from 'react-router-dom'
import { blogs } from './Blogs'
import ErrorPage from '../../Pages/ErrorPage.jsx/Error'

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id))
    if (!blog) return <ErrorPage />

    return (
        <div className='blog-details'>
            <div className="details-Image">
                <img src={blog.image} alt="" />
            </div>
            <div className="detail-desc">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
            </div>
        </div>
    )
}

export default BlogDetail
