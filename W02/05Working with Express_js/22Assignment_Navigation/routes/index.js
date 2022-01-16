const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //res.send("Route 1");
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
router.get("/users", (req, res, next) => {
  //res.send("Route 2");
  res.sendFile(path.join(__dirname, "..", "views", "users.html"));
});

module.exports = router;

//me daba error porque tenía el puerto ocupado del proyecto anterior.
//Cerramos todo, arranco y el npm start bien
