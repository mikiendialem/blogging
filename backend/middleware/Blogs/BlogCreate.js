const Blog = require("../../model/Blog");

const CreateBlog = async (req, res) => {
  try {
    const blog = new Blog({
        title: req.body.Title,
        content: req.body.Content,
        author: req.session.user._id,
    });

        await blog.save();
        res.status(201).send(blog); // Changed 'service' to 'blog' for consistency
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};

module.exports = CreateBlog;
