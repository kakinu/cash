var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  // console.log(req.body.menu);
  // console.log(req.body.sex);
  // console.log(req.body.ages);
  res.send('hello by post');
});

module.exports = router;
