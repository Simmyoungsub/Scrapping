var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  var url = "http://www.melon.com/chart/index.htm";

  request(url,function(error,res,html){
    if(error) throw error;

      var $ = cheerio.load(html);
      var cnt = 0;
      console.log(html);
      $("#lst50").each(function(){
        cnt++;
      });

      console.log(cnt);
  });
});

module.exports = router;
