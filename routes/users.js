const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users_controller');

const khudSe = require('../controllers/trying_create_khudse');

router.get('/profile', usersController.profile);
router.get('/khudse', khudSe.khudse);



module.exports = router;