const Blogmodel = require('../Schema/schema')

exports.insertBlog = async(req,res)=>{
try {
    const { _id, title, content, status } = req.body;
    console.log(req.body);
    
    let blog;

    if (_id) {
      blog = await Blogmodel.findByIdAndUpdate(
        _id,
        { title, content, status, updatedAt: new Date() },
        { new: true }
      );
    } else {
      blog = new Blogmodel({ title, content, status });
      await blog.save();
    }

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: "Error saving blog" });
  }
}




exports.getBlog = async(req,res) =>{
 try {
    const blog = await Blogmodel.findById(req.params.id);

    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json(blog);

  } catch (err) {
    res.status(500).json({ error: "Error fetching blog" });
  }
}



