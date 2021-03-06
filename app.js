var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api_one', require('./api_one'));


var fs=require("fs");

function processRoutePath(routePath, currentLevel, maxLevel){
  if (currentLevel > maxLevel){
    return;
  }
  else{
      fs.readdirSync(routePath).forEach(function(file) {
      var filepath = routePath + '/' + file;
      var stat= fs.statSync(filepath);
      if (stat.isDirectory()) {            
            processRoutePath(filepath, currentLevel+1, maxLevel);
      } else {
            if (file == 'index.js'){
              app.use(routePath.substring(1), require(routePath));
            }            
        }    
  });
  }
}

var route="./api_two"; 
processRoutePath(route,0,1);
var route="./api_three"; 
processRoutePath(route,0,1);
var route="./api_four"; 
processRoutePath(route,0,1);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
