// server.js
// load the things we need
const express = require("express");
const path = require("path");

// grab routes
const indexRouter = require("./routes/index");
const subscribersRouter = require("./routes/subscribers");
const subscriberRouter = require("./routes/subscribers");


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/subscribers", subscribersRouter);
app.use("/subscriber", subscriberRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// index page
app.get("/", function(req, res) {
  res.render("pages/index");
});

// subscriber page
app.get("/subscribers", function(req, res) {
  res.render("pages/subscribers");
});

app.listen(8080);
console.log("8080 is the magic port");

module.exports = app;
