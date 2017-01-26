var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  var url = "http://localhost:8080/board/home.page";

  request(url,function(error,res,body){
    if(error) throw error;
      console.log(body);
  });
});

module.exports = router;
