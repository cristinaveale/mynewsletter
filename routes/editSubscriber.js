const express = require('express');
const router = express.Router();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'dc1'});

client.connect(function( err, result){
  console.log('editSubscriber: cassandra connected to editSubscriber');
}); 

// Get a subscriber by ID
const getSubscriberById = 'SELECT * FROM people.subscribers WHERE id = ?'

/* Edit subscriber listing. */
router.get('/:id', function(req, res) {
  client.execute(getSubscriberById, [req.params.id], function(err, result){
    if(err){
      res.status(404).send({msg: err});
    } else {
      // Renders index, returns rows from query
      // loop through them & output all subscribers
      res.render('editSubscriber', {
        id: result.rows[0].id,
        email: result.rows[0].email,
        first_name: result.rows[0].first_name,
        last_name: result.rows[0].last_name
      })
    } 
  });
});

/* POST edited subscriber */
router.post("/", function(req, res) {
  const upsertSubscriber = "INSERT INTO people.subscribers(id, email, first_name, last_name) VALUES(?, ?, ?, ?)";

  client.execute(
    upsertSubscriber,
    [req.body.id, req.body.email, req.body.first_name, req.body.last_name],
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
