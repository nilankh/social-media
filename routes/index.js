//this index.js is entry point of all the routes
const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');
// console.log('router loaded');
router.get('/', homeController.home);

router.use('/users', require('./users'));
//for any  further routes, acces from here
//router.use('/routerName', require('./routerFile'));

// ye line jo likh rhe h wo schema create krn ke baad databas wala module me h
router.use('/posts', require('./posts'));
module.exports = router;
