var express = require('express');
var app = express();
var path = __dirname + "/views/index.html";
var public = __dirname + "/public";

app.use(function(req, res, next){
  console.log(req.method+" "+req.path+" - "+req.ip);
  next();
});

app.use("/public",express.static(public)); 

app.get('/', (req, res) => {
  res.sendFile(path);
});

app.get('/json', (req, res) => {
  if (process.env['MESSAGE_STYLE'] === 'uppercase'){
    res.json({
      "message": "HELLO JSON".toLocaleUpperCase()
    });
  } else {
    res.json({
      "message": "Hello json".toLocaleLowerCase()
    });
  }
});

app.get('/now', function(req, res, next) {
   req.time = new Date().toString(); 
   next();
}, function(req, res) {
   if (process.env['MESSAGE_STYLE'] === 'uppercase'){
      res.json({
        "time": req.time.toLocaleUpperCase()
      });
    } else {
      res.json({
        "time": req.time.toLocaleLowerCase()
      });
    }
});




































 module.exports = app;
