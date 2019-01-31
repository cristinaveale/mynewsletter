const express = require('express');
const router = express.Router();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'dc1'});

client.connect(function( err, result){
  console.log('subscriber: cassandra connected to subscriber');
}); 

// Get a subscriber by ID
const getSubscriberById = 'SELECT * FROM people.subscribers WHERE id = ?';

/* GET subscriber listing. */
router.get('/:id', function(req, res) {
  client.execute(getSubscriberById, [req.params.id], function(err, result){
    if(err){
      res.status(404).send({msg: err});
    } else {
      // Renders index, returns rows from query
      // loop through them & output all subscribers
      res.render('subscriber', {
        id: result.rows[0].id,
        email: result.rows[0].email,
        first_name: result.rows[0].first_name,
        last_name: result.rows[0].last_name
      })
    } 
  });
});

const deleteSubscriber = 'DELETE FROM people.subscribers WHERE id = ?';

router.delete('/:id', function(req, res){
	client.execute(deleteSubscriber,[req.params.id], function(err, result){
		if(err){
			res.status(404).send({msg: err});
		} else {
      console.log('Subscriber Deleted');
			res.json(result);
		}
	});
});

module.exports = router;
