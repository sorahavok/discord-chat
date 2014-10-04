// Set up App
var express = require('express');

var app = express();
app.set('view engine', 'jade')
app.set('views', './views')

// Routes
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/hello', function(request, response) {
  response.send('Hello World!');
});


// Run Application
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});