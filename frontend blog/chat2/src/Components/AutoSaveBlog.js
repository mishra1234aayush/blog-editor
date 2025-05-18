import { useEffect } from "react";
import axios from "axios";


const AutoSaveBlog = ({ blog, blogId, setBlogId }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      autoSave();
    }, 5000);

    return () => clearInterval(interval);
  });

  const autoSave = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/blogs/save-draft", {
        ...blog,
        _id: blogId,
        status: "draft",
      });
      setBlogId(res.data._id);
      console.log("Auto-saved:", new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Auto-save error:", err.message);
    }
  };

  return null;
};

export default AutoSaveBlog;

