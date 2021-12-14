require("./db/connection.js");
//Import the Express framework
const express = require("express");
//Import cross origin resource sharing (cors)
const cors = require("cors");
//
const userRouter = require("./user/userRoutes");
//create the express app
const app = express();
// set the port number - 5000 is a common port number, alt is 3000
const port = 5000;

//need to pass in JSON data
app.use(express.json());
app.use(cors());

//set up the connection using Express with a static folder (public) and setting up a /static
app.use(userRouter);

//this function is used to listen and bind the port and file
app.listen(port, () => {
  console.log("Listening on port 5000");
});

//you would then type into a browser localhost:5000/static, this is how you seperate your website pages/landing pg/shopping basket etc

// app2.use("/homepage", express.static("public"));
// app2.use("/", express.static("public", { index: "homepage.html" }));
// app2.listen(5001, () => {
//   console.log("Listening on port 5001");
// });
