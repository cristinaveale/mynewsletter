const express = require("express");
const router = express.Router();
const cassandra = require("cassandra-driver");

const client = new cassandra.Client({
  contactPoints: ["127.0.0.1"],
  localDataCenter: "dc1"
});

client.connect(function(err, result) {
  console.log("addSubscriber: cassandra connected to add subscriber");
});

// GET subscriber listing
router.get("/", function(req, res) {
  res.render("addSubscriber");
});

// POST add subscriber
router.post("/", function(req, res) {
  id = cassandra.types.uuid();

  // using 'upsert' because Cassandra will
  // auto update for insert and update, p cool
  const upsertSubscriber = "INSERT INTO people.subscribers(id, email, first_name, last_name) VALUES(?, ?, ?, ?)";
  client.execute(
    upsertSubscriber,
    [id, req.body.email, req.body.first_name, req.body.last_name],
    function(err, result) {
      if (err) {
        res.status(404).send({ msg: err });
      } else {
        console.log('Subscriber Added');
        res.redirect('/');
      }
    }
  );
});

module.exports = router;
