const express = require("express");
const app = express();
const port = 7777;

//order of routes matter. More specific routes should be defined before less specific ones.

//app.get is used to define routes that specifically handle GET requests.
// /ab+c = /abc, /abbc, /abbbc => b occurs one or more times
// /ab?c = /ac, /abc ==> b is optional
// /ab?cd = /acd, /abcd ==> b is optional
// /ab*c = /abxxxxc => b occurs zero or more times
// /ab(c|d) = /abc, /abd ==> either c or d
// /a.b = /a_b, /a-b, /aXb ==> . matches any single character
// /ab+cd = /abcd, /abbcd, /abbbcd ==> b occurs one or more times

app.get("/abc", (req, res) => {
  res.send({ first_name: "ANura", last_name: "Doe" });
});

//route parameters
// /user/:userid/:name/:password
// req.params = { userid: '123', name: 'anura', password: '1234' }
app.get("/user/:userid/:name/:password", (req, res) => {
  res.send({ first_name: "ANura", last_name: "Doe" });
  console.log(req.params);
});

app.listen(port, () => {
  console.log("Server started running on port " + port);
});
