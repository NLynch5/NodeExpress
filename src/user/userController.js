//need to pull in the model we created in userModel
const User = require("./userModel");

//similar to CRUD - CREATE (POST)
exports.addUser = async (req, res) => {
  //request and response
  try {
    const newUser = new User(req.body); //creating a new user
    await newUser.save();
    res.status(200).send({ message: "Successfully add user", newUser }); //200 is the code that everything has worked ok
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again" });
  }
};

//similar to CRUD - READ (GET)
exports.listUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ message: "List of all users", users });
  } catch (error) {
    console.log(error);
  }
};

//similar to CRUD - UPDATE (PUT/PATCH)
exports.updateUser = async (req, res) => {
  try {
    updateUser = await User.findByIdAndUpdate(req.body._id, req.body);
    updateUser = await User.findById(req.body._id);
    res.status(200).send({ message: "Updated user", updateUser });
  } catch (error) {
    console.log(error);
  }
};

// //similar to CRUD - DELETE (DELETE)
exports.deleteUser = async (req, res) => {
  try {
    deleteUser = await User.deleteOne(req.params.body);
    res.status(200).send({ message: "User Deleted", deleteUser });
  } catch (error) {
    console.log(error);
  }
};

//check connection in terminal using node src/server.js - once connection is succeessfully established then
//test using GET/POST etc in Insomnia before checking the database has changed correctly in MongoDB/Mongoose
