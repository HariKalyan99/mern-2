const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {type: String, required: true, maxlength: 100},
    body: {type: String},
    tags: {type: [String]},
    reactions: {type: Number},
    userId: {type: Number}
}, {timestamps: true})



const BlogsModel = new mongoose.model("Blogs", blogSchema, "blog");

module.exports = BlogsModel;