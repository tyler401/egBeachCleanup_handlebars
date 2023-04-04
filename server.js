const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 1337;
const publicPath = __dirname + '/public';

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.static(publicPath));
app.use('/css', express.static(publicPath + '/css', { 'Content-Type': 'text/css' }));
app.use('/images', express.static(publicPath + '/images'));
app.use('/js', express.static(publicPath + '/js'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/index', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/events', function(req, res) {
  res.render('events');
});

app.get('/get-involved', function(req, res) {
  res.render('get-involved');
});

app.get('/values', function(req, res) {
  res.render('values');
});

// Add a catch-all handler that sets the status code explicitly and renders the view for a custom 404 page
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

// Add a 500 error handler that sets the status code explicitly and renders the view for a custom 500 page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

// Make the app listen on the port and output the URL to access the server to the console
app.listen(port, function() {
  console.log(`Server running at http://localhost:${port}/`);
});
