var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.post('/newRegister', function(req, res) {
    res.send('success');
}) //everytime you save data it is a post, bulk create

module.exports = router;