var express = require('express');
var router = express.Router();
var db = require('../db/api');
var path = require('path');


var components = require('./components');
router.use('/components', components);

var employees = require('./employees');
router.use('/employees', employees);

var technologies = require('./technologies');
router.use('/technologies', technologies);



module.exports = router;
