
import React, { useState } from "react";
import "../Css/BlogEditor.css";
import AutoSaveBlog from "./AutoSaveBlog";
import AllBlog from "./AllBlog";
import PublishBlog from "./PublishBlog";
import SingalBlog from "./SingalBlog";

const BlogSave = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    status: "draft",
  });

  const [blogId, setBlogId] = useState();

  return (
    <div className="blog-editor-container">
      <h2>📝 Blog Editor</h2>

      <SingalBlog setBlog={setBlog} setBlogId={setBlogId} />

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

      <PublishBlog blog={blog} blogId={blogId} />
      <AutoSaveBlog blog={blog} blogId={blogId} setBlogId={setBlogId} />
      <AllBlog />
    </div>
  );
};

export default BlogSave;
