import React from "react"
import Blog from "../components/blog"

const AllBlogs = (props) => {
    return props.blogs.map((blog) => {
        return <Blog key={blog.id} blog={blog}/>
    })
}

export default AllBlogs;