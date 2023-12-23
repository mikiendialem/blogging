const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/auth/auth');
const Blog = require('../model/Blog');

router.post('/blogging', authenticateUser, async (req, res) => {
    try {
        const { title, content } = req.body;
        const author = req.user.userId;

        const newBlog = new Blog({
            title,
            content,
            author
        });

        const savedBlog = await newBlog.save();
        res.status(201).json({ blog: savedBlog, message: 'Blog post created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create a new blog post' });
    }
});
router.get('/blogs', async (req, res) => {
    console.log('Received request to fetch blogs');
    try {
        const blogs = await Blog.find();
        console.log('Blogs:', blogs);
        res.json({ blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve blog posts' });
    }
});
router.get('/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve the blog post' });
    }
});
router.put('/blogs/:id', authenticateUser, async (req, res) => {
    try {
        const { title, content } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.json({ blog: updatedBlog, message: 'Blog post updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update the blog post' });
    }
});
router.delete('/blogs/:id', authenticateUser, async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete the blog post' });
    }
});

module.exports = router;
