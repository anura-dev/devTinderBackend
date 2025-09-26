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

//route handlers

// e.g:: app.use('/test', [cb1, cb2], cb3, cb4)
// you can define multiple callback functions that behave like middleware to handle a route.
// you can also define an array of callback functions to handle a route.
// you can also mix and match the two.
// all the callback functions should call next() to pass the control to the next callback function.
// if a callback function does not call next(), the request will be left hanging.
// if a callback function sends a response, the request will be left hanging unless next() is called before sending the response.
// if a callback function sends a response, the subsequent callback functions will not be executed unless next() is called before sending the response.
// you can also use app.use() to define routes that handle all HTTP methods.
app.use(
  "/test",
  (req, res, next) => {
    console.log("Inside test middleware");
    next();
    res.send("Test middleware");
  },
  (req, res, next) => {
    next();
    console.log("Inside test middleware 2");
    // res.send("Test middleware 2");
  },
  (req, res, next) => {
    console.log("Inside test middleware 3");
    //res.send("Test middleware 3");
    //next();
  }
);

app.listen(port, () => {
  console.log("Server started running on port " + port);
});
