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
exports.listUser = async () => {
  try {
    User.get("users", async (req, res) => {
      const users = await User.find(req.body);
      res.send({ message: "List of all users" });
    });
  } catch (error) {
    console.log(error);
  }
};

//similar to CRUD - UPDATE (PUT/PATCH)
exports.updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.body_id, req_body);
  } catch (error) {
    console.log(error);
  }
};

//similar to CRUD - DELETE (DELETE)
exports.deleteUser = async (User) => {
  try {
    await User.deleteOne(User);
    mongoose.connecton.close(); // do i need this?
  } catch (error) {
    console.log(error);
  }
};
