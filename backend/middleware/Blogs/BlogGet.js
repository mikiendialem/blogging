const Blog = require('../../model/Blog');

const GetBlog = async (req, res) => {
  try {
        const title = req.body.title;

        if (!title) {
        return res.status(400).json({ error: 'Title is required' });
        }

        const blog = await Blog.findOne({ title });

        if (!blog) {
        return res.status(404).json({ error: 'No blog found with the specified title' });
        }

        res.status(200).json(blog);
    } catch (error) {
        console.error(`Error in GetBlog: ${error}`);
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = GetBlog;
