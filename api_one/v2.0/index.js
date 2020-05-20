var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello v2.0 GET API for api_one');
});

 router.get('/api', function(req, res, next) {
        res.send('ffffffffffff');
    });

router.post('/', function(req, res, next) {
  res.send('Hello v2.0 POST API for api_one');
});

module.exports = router;
