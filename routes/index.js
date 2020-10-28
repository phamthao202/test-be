var express = require('express');
const { route } = require('../app');
var router = express.Router();
const postRouter=require("./post")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/posts",postRouter )
module.exports = router;
