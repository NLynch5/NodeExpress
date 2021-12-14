//need to use bcrypt library
const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

//create a new function
exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again" }); //500 means has not worked error message
  }
};
