import AllBlogs from "./pages/AllBlogs";
import SingleBlog from "./pages/SingleBlog";
import Form from "./pages/Form";

// import hooks from react
import { useState, useEffect } from "react"

// import router 6 component
import { Route, Routes, Link, useNavigate } from "react-router-dom"

// style object
const h1 = {
  textAlign: "center",
  margin: "10px"
}
const button = {
  backgroundColor: "purple",
  display: "block",
  margin: "auto"
}

function App() {

  const navigate = useNavigate()

  const url = "https://blogs-backend-jl.herokuapp.com/blogs/"

  const [blogs, setBlogs] = useState([])

  const nullBlog = {
    title: "",
    body: ""
  }
  const [targetBlog, setTargetBlog] = useState(nullBlog);

  // FUNCTIONS
  const getBlogs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBlogs(data);
  }

  const addBlogs = async (newBlog) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBlog)
    });

    getBlogs()
  }

  const getTargetBlog = (blog) => {
    setTargetBlog(blog)
    navigate("/edit")
  }

  const updateBlog = async (blog) => {
    await fetch(url + blog.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    getBlogs();
  }

  const deleteBlog = async (blog) => {
    await fetch(url + blog.id, {
      method: "delete"
    })
    getBlogs()
    navigate("/")
  }



  // useEffects
  useEffect(() => {
    getBlogs()
  }, [])




  return (
    <div className="App">
      <h1 style={h1}>My Blogs</h1>
      <Link to="/new"><button style={button}>Create New Blog</button></Link>
      <Routes>
        <Route path="/" element={<AllBlogs blogs={blogs} />} />
        <Route path="/blog/:id" element={<SingleBlog
         blogs={blogs}
         edit={getTargetBlog}
         deleteBlog={deleteBlog}
         />} />
        <Route path="/new" element={<Form
          initialBlog={nullBlog}
          handleSubmit={addBlogs}
          buttonLabel="Add New Blog"
        />} />
        <Route path="/edit" element={<Form
        initialBlog={targetBlog}
        handleSubmit={updateBlog}
        buttonLabel="Update Blog"
        />} />
      </Routes>
    </div>
  );
}

export default App;
