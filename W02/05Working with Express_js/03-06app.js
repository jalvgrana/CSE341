//************************************************/
// Installing Express.js (3:47)
// Adding Middleware (5:13)
// How Middleware Works (2:58)
// Express.js - Looking Behind the Scenes (3:42)
//************************************************/
const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
