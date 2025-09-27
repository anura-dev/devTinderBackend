const express = require("express");
require("./config/database");

const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  //Creating new instance of User model
  console.log(req.body);
  const user = new User(req.body);

  //   const user = new User({
  //     firstName: "Nirvika",
  //     lastName: " Mohniya",
  //     email: "nirvika@example.com",
  //     password: "nirvika123",
  //   });
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
