
import { useState } from "react";
import axios from "axios";


const SingalBlog = ({ setBlog, setBlogId }) => {
  const [inputBlogId, setInputBlogId] = useState("");
  

  const fetchBlogById = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/blogs/${inputBlogId}`);
      setBlog({
        title: res.data.title,
        content: res.data.content,
        status: res.data.status,
      });
      setBlogId(res.data._id);
      alert("Blog loaded successfully!");
    } catch (err) {
      alert("Blog not found");
      console.error("Fetch error:", err.message);
    }
  };

  return (
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
  );
};

export default SingalBlog;
