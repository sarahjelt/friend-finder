// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS
var app = express();

module.exports = function(app) {

  // route to home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
  
  // route to survey questions page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  // 404 error page
  app.use(function (req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname + "/../public/error.html"));
  })

  // 500 error
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something went wrong! Please try again!");
  })

};