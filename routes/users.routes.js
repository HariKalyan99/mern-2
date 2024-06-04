const { getUsersById, getUsers, getUserServer, userWelcome, getUsersByGenderOrAge } = require('../controllers/users.controllers');
const searchQuery = require('../middlewares/users.middleware');

const usersRouter = require('express').Router();

usersRouter.get("/", userWelcome);
usersRouter.get("/server", getUserServer);
usersRouter.get("/users", getUsers);
usersRouter.get("/users/search",searchQuery, getUsersByGenderOrAge)
usersRouter.get("/users/:uuid", getUsersById);

module.exports = usersRouter;