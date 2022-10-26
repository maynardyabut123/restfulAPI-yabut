var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "mySong6" : {
      "songname" : "Talk that Talk",
      "singer" : "Twice",
      "Genre" : "KPOP",
      "link" : "https://youtu.be/pmkWBgayoUk",
      
   }
}

app.delete('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["mySong" + req.params.id];
       
      console.log(data);
      res.end( JSON.stringify(data));
   });
})


app.post('/addSong', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["mySong6"] = user["mySong6"];
      console.log(data);
      res.end( JSON.stringify(data));
   });
})

app.get('/listSongs', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["mySong" + req.params.id] 
      console.log(mySong);
      res.end( JSON.stringify(mySong));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})