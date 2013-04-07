
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , levelup = require('levelup')
  , db = levelup('./pumbledb');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Put a key-value pair into the store, overwriting any earlier values associated with the given key
app.get('/put', function(req, res){
  db.put(req.query["key"], req.query["value"], function (err) {
    if (err) return console.log('Ooops!', err) // some kind of I/O error
    db.get(req.query["key"], function (err, value) {
      if (err) return console.log('Ooops!', err); // likely the key was not found
      res.send('added');
    })
  })
});

//get a value out of the store using a key
app.get('/get', function(req, res){
  db.get(req.query["key"], function (err, value) {
    if (err) return res.send(404);
    res.send(value);
  })
});

//delete a value from the store
app.get('/delete', function(req, res){
  db.del(req.query["key"], function (err) {
    if (err) return res.send('Ooops! ' + err);
    res.send('deleted');
  })
});

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
