import React, { useState } from "react";

function CreateArea(props) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    theme:"",
    description:""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setBlog(prevBlog => {
      return {
        ...prevBlog,
        [name]: value
      };
    });
  }

  function submitBlog(event) {
    props.onAdd(blog);
    setBlog({
      title:"",
      content: "",
      theme:"",
      description: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={blog.title}
          placeholder="Theme"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={blog.content}
          placeholder="Take a blog note..."
          rows="3"
        />
        <textarea
        name="theme"
        onChange={handleChange}
        value={blog.theme}
        placeholder="Write your title"
        rows="2"
        />
        <textarea
        name="description"
        onChange={handleChange}
        value={blog.description}
        placeholder="Write your description"
        rows="2"
        />
        <button onClick={submitBlog}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
