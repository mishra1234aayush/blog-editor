import { useEffect, useState } from "react";
import axios from "axios";

const AllBlog = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs`);
        setAllBlogs(res.data);
      } catch (err) {
        console.error("Fetch error:", err.message);
      }
    };
    fetchAllBlogs();
  }, []);

  return (
    <div>
      <h3>📚 All Blogs</h3>
      <ul>
        {allBlogs.map((blog) => (
          <li key={blog._id}>
            <strong>{blog.title}</strong> - <em>{blog.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBlog;

