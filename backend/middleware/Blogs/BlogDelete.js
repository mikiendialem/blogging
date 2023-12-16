const Blog = require('../../model/Blog');

const DeleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete({ _id: req.params.blog_id });

    if (!deletedBlog) {
      return res.status(404).json({ error: 'No blog found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error(`Error in DeleteBlog: ${error}`);
    res.status(500).json({ error: 'Service error' });
  }
};

module.exports = DeleteBlog;
