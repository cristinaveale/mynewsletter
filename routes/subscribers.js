const express = require('express');
const router = express.Router();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'dc1'});

client.connect(function( err, result){
  console.log('subscribers: cassandra connected to subscribers');
});

// Gets all subscribers from DSE table
const getAllSubscribers = 'SELECT * FROM people.subscribers'

/* GET home page. */
router.get('/', function(req, res, next) {
  client.execute(getAllSubscribers, [], function(err, result){
    if(err){
      res.status(404).send({msg: err});
    } else {
      // Renders index, returns rows from query
      // loop through them & output all subscribers
      res.render('subscribers', {
        subscribers: result.rows
      })
    }
  });
});

module.exports = router;
