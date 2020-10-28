var express = require('express');
var router = express.Router();
const postController = require("../controllers/post.controller")
/* GET all post */
router.get('/', postController.getAllPost)

/* Create a post */
router.post('/', postController.createNewPost )

module.exports = router;
