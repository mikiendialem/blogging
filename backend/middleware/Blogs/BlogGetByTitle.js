const Blog = require('../../model/Blog');

const GetBlogByTitle = async (req,res)=>{
    let title= req.params.title;
    try{
        let blog = await Blog.findOne({ title });
        if (!blog) {
            return res.status(404).json({ error: 'No such blog found' });
        }
        res.status(200).json(blog);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = GetBlogByTitle;