const Blogmodel = require('../Schema/schema')


exports.basicInformation = (req, res) => {
res.send(`
  <h1>Welcome to the Blog Editor API!</h1>
  <p>Available endpoints:</p>
  <ul>
    <li>POST /blogs/save-draft - Save or update a draft</li>
    <li>POST /blogs/publish - Publish a blog</li>
    <li>GET /blogs - Get all blogs</li>
    <li>GET /blogs/:id - Get a blog by ID</li>
  </ul>
`);
};



exports.saveOrUpdateDraft  = async(req,res)=>{
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
    } 

    else{
       blog = await Blogmodel.create({ title, content, status, createdAt : new Date()});
        return res.json({ message: "Draft saved", blog });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: "Error updating blog" });
  }
}



exports.publishBlog  = async(req,res) => {

 const { title, content, status } = req.body;
   
  try{  
       const blog = await Blogmodel.create({ title, content, status,createdAt : new Date()});
       console.log(blog);
       
    return res.json({ message: "Blog published", blog });
     
   }

   catch(err){
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



exports.getAllBlog = async(req,res) =>{
 try {
    const blog = await Blogmodel.find();

    res.status(200).json(blog);

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}



