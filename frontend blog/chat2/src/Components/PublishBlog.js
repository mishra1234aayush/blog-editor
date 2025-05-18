
import axios from "axios";

const PublishBlog = ({ blog, blogId }) => {
  const publisher = async () => {
    try {
                   alert("Blog published successfully!");
      const res = await axios.post("http://localhost:5000/api/blogs/publish", {
        ...blog,
        _id: blogId,
        status: "published",
      });
     

      console.log(res);
    } 
    
    catch (err) {
      alert("Error while publishing");
    }
  };

  return (
    <button className="blog-editor-button" onClick={publisher}>
      🚀 Publish
    </button>
  );
};

export default PublishBlog;
