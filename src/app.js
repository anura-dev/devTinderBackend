const express = require("express");
require("./config/database");
const userSchema = require("./models/user");

const connectDB = require("./config/database");

const app = express();

app.post("/signup", async (req, res) => {
  // userSchema is used to create a new user
  const user = new userSchema({
    firstName: "Nirvika",
    lastName: " Mohniya",
    email: "nirvika@example.com",
    password: "nirvika123",
  });
  try {
    const newUser = await user.save(); // Save the user to the database
    console.log(newUser);
    res.send("User saved successfully"); // Send a success response
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
