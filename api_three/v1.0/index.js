var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello v1.0 GET API from api_three');
});

router.post('/', function(req, res, next) {
  res.send('Hello v1.0 POST API from api_three');
});

module.exports = router;
