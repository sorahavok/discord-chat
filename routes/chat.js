var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('In Chat');
  res.render('chat', { title: 'Chat' });
});

router.get('/:message', function(req, res) {
  console.log(req.params);
  res.render('chat', { 
    title: 'Chat',
    message: req.params.message
  });
});

module.exports = router;
