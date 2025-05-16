import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/BlogEditor.css"; // ✅ Import CSS

const BlogEditor = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    status: "draft"
  });

  const [blogId, setBlogId] = useState(null);
  const [inputBlogId, setInputBlogId] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      autoSave();
    }, 5000);

    return () => clearInterval(interval);
  });

  const autoSave = async () => {
    try {
      const res = await axios.post("http://localhost:5000", {
        ...blog,
        _id: blogId,
        status: "draft"
      });
      setBlogId(res.data._id);
      console.log("Auto-saved:", new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Auto-save error:", err.message);
    }
  };

  const publishBlog = async () => {
    try {
      const res = await axios.post("http://localhost:5000", {
        ...blog,
        _id: blogId,
        status: "published"
      });
      console.log(res);
      
      alert("Blog published successfully!");
    } catch (err) {
      alert("Error while publishing");
    }
  };

  const fetchBlogById = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/blog/${inputBlogId}`);
      setBlog({
        title: res.data.title,
        content: res.data.content,
        status: res.data.status
      });
      setBlogId(res.data._id);
      alert("Blog loaded successfully!");
    } catch (err) {
      alert("Blog not found");
      console.error("Fetch error:", err.message);
    }
  };

  return (
    <div className="blog-editor-container">
      <h2>📝 Blog Editor</h2>

      <div className="fetch-by-id-section">
        <input
          type="text"
          placeholder="Enter Blog ID to Load"
          value={inputBlogId}
          onChange={(e) => setInputBlogId(e.target.value)}
          className="blog-editor-input2"
        />
        <button className="blog-editor-button2" onClick={fetchBlogById}>
          🔍 Load Blog
        </button>
      </div>

      <input
        type="text"
        placeholder="Blog Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        className="blog-editor-input"
      />

      <textarea
        placeholder="Write your blog content here..."
        value={blog.content}
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        className="blog-editor-textarea"
      ></textarea>

      <div>
        <button className="blog-editor-button" onClick={publishBlog}>
          🚀 Publish
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;
