const express = require("express");
require("./config/database");

const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
app.use(express.json());

//signup api to create a new user
app.post("/signup", async (req, res) => {
  //Creating new instance of User model
  //console.log(req.body);
  const user = new User(req.body);

  //   const user = new User({
  //     firstName: "Nirvika",
  //     lastName: " Mohniya",
  //     email: "nirvika@example.com",
  //     password: "nirvika123",
  //   });
  try {
    const newUser = await user.save(); // Save the user to the database
    //console.log(newUser);
    res.send("User saved successfully"); // Send a success response
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//get all users by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  console.log("userEmail:: ", userEmail);
  try {
    const users = await User.find({ email: userEmail });
    if (users.length === 0) {
      return res.status(404).send("No users found with the provided email");
    } else {
      res.send(users);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//get one user by email
app.get("/userone", async (req, res) => {
  const userEmail = req.body.email;
  console.log("userEmail:: ", userEmail);
  try {
    const user = await User.findOne({ email: userEmail }); // Fetch one user by email
    //const user = await User.findOne(); // if no condition is passed it will return first document
    if (!user) {
      return res.status(404).send("No user found with the provided email");
    } else {
      res.send(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//feed api to get all users
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

connectDB()
  .then(() => {
    console.log("DB Connection Successful");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed", err);
  });
