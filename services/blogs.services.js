const BlogsModel = require("../models/blogs.models");

class BlogsServices {
    allBlogs = async() => {
        try{
            const blogs = await BlogsModel.find();
            return blogs;
        }catch(error){
            throw error;
        }
    }


    add = async(body) => {
        try{
            const blogs = new BlogsModel({...body});
            const result = await blogs.save();
            return result;
        }catch(error){
            throw error;
        }
    }


    del = async(id) => {
        try{
            const blogs = await BlogsModel.findOneAndDelete({_id: id});
            return blogs;
        }catch(error){
            throw error;
        }
    }


    edit = async(id, body) => {
        try{
            const blogs = await BlogsModel.findOneAndUpdate({_id: id}, {...body}, {new: true});
            return blogs;
        }catch(error){
            throw error;
        }
    }

    search = async(title) => {
        try{
            const blogs = await BlogsModel.find({title: {$regex : new RegExp(title)}});
            return blogs;
        }catch(error){
            throw error;
        }
    }


}



module.exports = BlogsServices;