// this the route index for v1 routes

const express = require('express');

const router = express.Router();

router.use('/posts', require('./posts'));


module.exports = router;