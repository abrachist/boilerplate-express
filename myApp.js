var express = require('express');
var app = express();
var path = __dirname + "/views/index.html";

app.get('/', (req, res) => {
  res.sendFile(path);
})



































 module.exports = app;
