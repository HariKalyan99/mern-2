const { getAllBlogs, postBlogs, editBlogs, delBlogs, getBlogSearch } = require('../controllers/blogs.controllers');
const postBlogMiddleWare = require('../middlewares/blogs.middlewares');
const blogsRouter = require('express').Router();

blogsRouter.get("/blogs", getAllBlogs);
blogsRouter.get("/blogs/search", getBlogSearch)
blogsRouter.post("/blogs/new", postBlogMiddleWare, postBlogs);
blogsRouter.delete("/blogs/:id", delBlogs);
blogsRouter.put('/blogs/:id', editBlogs);

module.exports = blogsRouter;