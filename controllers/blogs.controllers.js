const BlogsServices = require("../services/blogs.services");
const Blogs = new BlogsServices();

const getAllBlogs = async(request, response) => {
    try{
        const result = await Blogs.allBlogs();
        return response.status(200).json(result); 
    }catch(error){
        return response.status(422).json({message: error.message})
    }
}


const postBlogs = async(request, response) => {
    try{
        const result = await Blogs.add({...request.body});
        return response.status(200).json(result);
    }catch(error){
        return response.status(422).json({message: error.message})
    }
}  

const editBlogs = async(request, response) => {
    try{
        const result = await Blogs.edit(request.params.id, {...request.body});
        return response.status(200).json(result);
    }catch(error){
        return response.status(500).json({message: error.message})
    }
}

const delBlogs = async(request, response) => {
    try{
        const result = await Blogs.del(request.params.id);
        return response.status(200).json(result)
    }catch(error){
        return response.status(500).json({message: "Could not delete blogs", error})
    }
}

const getBlogSearch = async(request, response) => {
    try{
        const result = await Blogs.search(request.query.title);
        return response.status(200).json(result);
    }catch(error){
        return response.status(500).json({message: "Could not search blogs", error});

    }
}

module.exports = {getAllBlogs, postBlogs, editBlogs, delBlogs, getBlogSearch};