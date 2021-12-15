//using a built in method to get something from a library use {}. Router is also built into express
const { Router } = require("express");
const {
  addUser,
  listUser,
  updateUser,
  deleteUser,
} = require("./userController.js");
const userRouter = Router();
const { hashPassword } = require("../middleware");

userRouter.post("/user", hashPassword, addUser); // this is our path to pass in a function to add a new user
userRouter.get("/user", listUser); //CRUD READ
userRouter.put("/user", hashPassword, updateUser); //CRUD UPDATE
userRouter.delete("/user", deleteUser); //CRUD DELETE

module.exports = userRouter;
