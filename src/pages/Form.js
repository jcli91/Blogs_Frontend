import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Form = ({ initialBlog, handleSubmit, buttonLabel }) => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialBlog)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        navigate("/")
    }


    return <form onSubmit={handleSubmission}>
        <input
            type="text"
            onChange={handleChange}
            value={formData.title}
            name="title"
        />
        <input
            type="text"
            onChange={handleChange}
            value={formData.body}
            name="body"
        />
        <input type="submit" value={buttonLabel}/>
    </form>
}

export default Form;