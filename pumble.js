/**
 * PUMBLE
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , level = require('level')
  , fs = require('fs')
  , db = level('./pumbledb');

var app = express();


app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'UI')));


//Put a key-value pair into the store using GET, overwriting any earlier values associated with the given key
app.get('/put', function(req, res){
  db.put(req.query["key"], req.query["value"], function (err) {
    if (err) return console.log('Ooops!', err) // some kind of I/O error
    db.get(req.query["key"], function (err, value) {
      if (err) return console.log('Ooops!', err); // likely the key was not found
      res.send('added');
    })
  })
});

//Put a key-value pair into the store using POST, overwriting any earlier values associated with the given key
app.post('/postput', function(req, res){
  db.put(req.body.key, req.body.value, function (err) {
    if (err) return console.log('Ooops!', err) // some kind of I/O error
    db.get(req.body.key, function (err, value) {
      if (err) return console.log('Ooops!', err); // likely the key was not found
      res.send('added');
    })
  })
});

//POST a pair value to the store where the value is binary
//for example:
//curl --form value=@image.png --form key=image.png localhost:3000/postputfile
//or use
app.post('/postputfile', function(req, res){
  //use key if found, if no key is found set filename to be key.
  var key = (req.body.key?req.body.key:req.files.value.name);
  db.put(key, fs.readFileSync(req.files.value.path), { encoding: 'binary' }, function (err) {
    db.get(key, { encoding: 'binary' }, function (err, value) {
      if (err) return console.log('Ooops!', err); // likely the key was not found
      res.send('added ' + key);
    })
  })
});


//get a value out of the store using a key
app.get('/get', function(req, res){
  db.get(req.query["key"],  { encoding: 'binary' }, function (err, value) {
    if (err) return res.send(404);
    //manually set MIME type, see for example
    //http://webdesign.about.com/od/multimedia/a/mime-types-by-content-type.htm
    if (req.query["Content-Type"]) {
      console.log("setting Content-Type to " + req.query["Content-Type"]);
      res.setHeader('Content-Type', req.query["Content-Type"]);
    }
    else {
      res.contentType(req.query["key"]);
    }
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


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
