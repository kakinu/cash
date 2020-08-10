var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// var http = require('http');
// var html = require('fs').readFileSync('views/index.html');
 
// var server = http.createServer(function(request, response) {
 
 
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.end(html);
 
// });
 
// server.listen(8080);

module.exports = router;
