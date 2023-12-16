const Blog = require('../../model/Blog');

const UpdateBlog = async (req, res) => {
  try {
        let id = req.params.id;

        if (!ObjectId.isValid(id)) {
        return res.status(400).send('Invalid Id');
        }
        const blogData = { title: ' ', content: ' ' };

        ['title', 'content'].forEach((key) => {
        if (req.body[key] !== undefined) {
            blogData[key] = req.body[key];
        }
        });

        if (!blogData.title.trim() || !blogData.content.trim()) {
        return res.status(400).send('Missing Data');
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, { $set: blogData }, { new: true });

        if (!updatedBlog) {
        return res.status(404).send('No post found with this id');
        }

        res.status(201).json({ blog: updatedBlog });
    } catch (error) {
        console.log(`Error in UpdateBlog: ${error}`);
        res.status(500).json({ error: error.message });
    }
};

module.exports = UpdateBlog;
