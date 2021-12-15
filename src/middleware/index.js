//need to use bcrypt library
const bcrypt = require("bcrypt");
const User = require("../user/userModel");

//create a new function to hash passwords for new users
// exports.hashPassword = async (req, res, next) => {
//   try {
//     req.body.password = await bcrypt.hash(req.body.password, 8); //body is the username/email/password
//await is instructing bcrypt to wait for password to pass through and hash it
//     next(); // next function to pass from the parameter on line 6
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Unsuccessful, please try again" }); //500 means has not worked error message
//   }
// };

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      res.status(200).send({ message: "Bingo!" });
    } else {
      res.status(500).send({ message: "Error in password, please try again" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Unsuccessful, please try again" }); //500 means has not worked, error message
  }
};

// exports.passwordMatch = async (req, res) => {
//   try {
//     const userEmail = await User.findOne(req.body.email); //fetching the email from db to match encrypted password to
//     const match = await bcrypt.compare(password, userEmail.password); //comparing the password with new encrypted password res== true or res == false
//     if (match) {
//       res.status(200).send({ message: "Bingo!" });
//     } else {
//       console.log(error);
//       res.send("Password not a match");
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Unsuccessful" });
//   }
// };
