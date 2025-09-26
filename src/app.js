const express = require("express");
const app = express();
const port = 7777;

app.use("/test", (req, res) => {
  res.send("Server started ");
});

app.use("/main", (req, res) => {
  res.send("another route");
});

app.listen(port, () => {
  console.log("Server started running on port " + port);
});
