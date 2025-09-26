const express = require("express");

const app = express();

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Something broke from middleware!");
//   }
// });

app.get("/getUserData", (req, res, next) => {
  //try {
  //Logic to get user data

  //throw new Error("User data not found");
  console.log("Inside user middleware");
  res.send("User Authenticated");
  //   } catch (err) {
  //     res.status(403).send("Forbidden");
  //   }
});

//err is the first parameter to identify it as an error-handling middleware.
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something broke!");
  }
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
