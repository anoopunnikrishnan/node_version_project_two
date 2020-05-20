var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello v1.0 GET API for api_one');
});

router.get('/user', function(req, res, next) {
  res.send('Here is v1.0 user details');
});

router.post('/', function(req, res, next) {
  res.send('Hello v1.0 POST API for api_one');
});

module.exports = router;
