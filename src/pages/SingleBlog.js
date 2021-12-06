import React from "react"
import {Link, useParams} from "react-router-dom"

const SingleBlog = ({blogs, edit, deleteBlog}) => {
    // get the params from the url
    const params = useParams()
    const id = parseInt(params.id)
    const blog = blogs.find((b) => b.id === id)

    const div = {
        textAlign: "center",
        border: "3px solid red",
        width: "80%",
        margin: "30px auto"
    }
    return <div style={div}>
        <h1>{blog?.title}</h1>
        <h2>{blog?.body}</h2>
        <button onClick={() => deleteBlog(blog)}>Delete</button>
        <button onClick={() => edit(blog)}>Edit</button>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
}

export default SingleBlog;