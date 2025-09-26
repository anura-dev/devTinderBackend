const express = require("express");
const app = express();
const port = 7777;

//order of routes matter. More specific routes should be defined before less specific ones.

//app.get is used to define routes that specifically handle GET requests.
app.get("/user", (req, res) => {
  res.send({ first_name: "John", last_name: "Doe" });
});

app.post("/user", (req, res) => {
  res.send("user route post method");
});

app.delete("/user", (req, res) => {
  res.send("user route delete method");
});

//app.use is used to define middleware and routes in Express.js.
//It can handle all HTTP methods (GET, POST, PUT, DELETE, etc.) for the specified path.

app.use("/test/2", (req, res) => {
  res.send("test route 2 use method");
});
app.use("/test", (req, res) => {
  res.send("test route use method");
});

// app.use("/main", (req, res) => {
//   res.send("main route");
// });

// app.use("/", (req, res) => {
//   res.send("Dashboard route");
// });

app.listen(port, () => {
  console.log("Server started running on port " + port);
});
