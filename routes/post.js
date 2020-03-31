//routes post

const express = require('express')
const postController = require('../controller/post')
const validator =require('../validator');

const router = express.Router();

router.get('/',postController.getPosts);
router.post('/post',validator.createPostValidator,postController.createPost);

module.exports = router;