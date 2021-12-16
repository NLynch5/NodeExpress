//need to use bcrypt library
const bcrypt = require("bcrypt");
const User = require("../user/userModel");

//create a new function to hash passwords for new users

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8); //body is the username/email/password
    await //is instructing bcrypt to wait for password to pass through and hash it
    next(); // next function to pass from the parameter on line 6
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again" }); //500 means has not worked error message
  }
};

//then need to use compare the original password with the hash password using bcyrpt.compare
exports.passwordMatch = async (req, res) => {
  try {
    const userPassword = await req.body.password; //need to create a variable for the original password
    //const userId = await User.findOne(req.body._id);
    const match = await bcrypt.compare(userPassword, req.body.password); //compare original password with new hashed password
    if (match) {
      res.status(201).send({ message: "Bingo!" });
    } else {
      //console.log(error);
      res.status(202).send("Password does not a match");
    }
  } catch (error) {
    //console.log(error);
    res.status(501).send({ message: "Unsuccessful" });
  }
};

// //decrpyt version built into the same function for hashing the password

// exports.hashPassword = async (req, res, next) => {
//   try {
//     const password = await req.body.password;
//     req.body.password = await bcrypt.hash(req.body.password, 8);
//     const match = await bcrypt.compare(password, req.body.password);
//     if (match) {
//       res.status(200).send({ message: "Bingo!" });
//       console.log("Password matches");
//     } else {
//       res.status(500).send({ message: "Error in password, please try again" });
//       console.log("Password does not match");
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Unsuccessful, please try again" }); //500 means has not worked, error message
//   }
// };
