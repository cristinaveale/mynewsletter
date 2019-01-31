// server.js
// load the things we need
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

// grab routes
const indexRouter = require("./routes/index");
const subscriber = require("./routes/subscriber");
const subscribers = require("./routes/subscribers");
const addSubscriber = require("./routes/addSubscriber");
const editSubscriber = require("./routes/editSubscriber");




// view e ngine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter); 
app.use("/subscriber", subscriber);
app.use("/subscribers", subscribers);
app.use("/addSubscriber", addSubscriber);
app.use("/editSubscriber", editSubscriber);

// set the home page route
app.get('/', function(req, res) {

  // ejs render automatically looks in the views folder
  res.render('index');
});


app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});

module.exports = app;
