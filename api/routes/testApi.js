var express = require('express');

var router = express.Router();

router.get  ("/", function(req, res, next){
    res.send('testApi is ready and working properly')
}) 
   
module.exports = router;