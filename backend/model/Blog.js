const mongoose = require('mongoose');

const Blogpost = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    author: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now() 
    } ,  //current time when the post is created
    content: {
        type:String,
        required:true
    }
});

const Blog = mongoose.model('blog', Blogpost);
module.exports=Blog;