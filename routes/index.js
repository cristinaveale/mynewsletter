const express = require("express");
const router = express.Router();
const cassandra = require("cassandra-driver");
const client = new cassandra.Client({
  contactPoints: ["127.0.0.1"],
  localDataCenter: "dc1",
  keyspace: "people"
});

const query =
  "CREATE TABLE IF NOT EXISTS subscribers (id uuid, email text, first_name text,last_name text, PRIMARY KEY (id))";

client
  .execute(query, []);


client.connect(function(err, result) {
  console.log("index: cassandra connected to index");
});

// Gets all subscribers from DSE table
const getAllSubscribers = "SELECT * FROM people.subscribers";

/* GET home page. */
router.get("/", function(req, res, next) {
  client.execute(getAllSubscribers, [], function(err, result) {
    if (err) {
      res.status(404).send({ msg: err });
    } else {
      // Renders index, returns rows from query
      // loop through them & output all subscribers
      res.render("index", {
        subscribers: result.rows
      });
    }
  });
});

module.exports = router;
