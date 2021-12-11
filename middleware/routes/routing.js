const express = require("express");
const routing = express.Router();
routing.get("/", (req, res, next) => {
  if (req.query.a == req.query.b)
    res.json({ message: "You are using express.Router class in GET method" });
  else {
    err = new Error("The values of a and b are not same");
    err.status = 400;
    throw err;
  }
});
routing.post("/", (req, res) => {
  if (req.body.username == "admin")
    res.json({ message: "You are using express.Router class in POST method" });
  else {
    err = new Error("Value entered is not valid!");
    err.status = 401;
    throw err;
  }
});
module.exports = routing;
