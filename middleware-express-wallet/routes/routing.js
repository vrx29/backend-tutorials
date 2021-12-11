const express = require("express");
const routing = express.Router();
const dbModule = require("../model/data");
//routing for Login - EXPECTS NAME AND PASSWORD!!
routing.post("/login", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log("request for log in received!!");
  let result = dbModule.LoginUser(username, password);
  if (result)
    res.json({
      message: "User successfully Logged in with user name: " + result,
    });
  else {
    let err = new Error();
    err.status = 401;
    err.message = "Unauthorized access!!";
    next(err);
  }
});
//---------------------------------------------------------------------------------------
//Routing for Transactions tab
routing.get("/myTransactions/:username", (req, res, next) => {
  let username = req.params.username;
  console.log(username);
  let tlist = dbModule.retrieveUsersTransactions(username);
  if (tlist && tlist.length > 0) res.json(tlist);
  else {
    let err = new Error();
    err.status = 404;
    err.message = "No transaction details found!!";
    next(err);
  }
});
module.exports = routing;
