var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");



var app = express();

var port = process.env.PORT || 3005 // sets a relative port

const CLIENT_FOLDER = path.join(__dirname + '/../client');

app.use(express.static(CLIENT_FOLDER)); 
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}));
app.use(bodyParser.json({limit: "50mb"}));



app.listen(port, function() {
    console.log('We have successfully connected to port: ', port);
  });

