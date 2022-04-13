var express = require('express');
var app = express();
var path = __dirname + "/views/index.html";
var public = __dirname + "/public";

app.use("/public",express.static(public));

app.get('/', (req, res) => {
  res.sendFile(path);
});

app.get('/json', (req, res) => {
  res.json({
    "message": "Hello json"
  });
});




































 module.exports = app;
