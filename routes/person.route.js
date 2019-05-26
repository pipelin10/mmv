
var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const person_controller = require('../controllers/person.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', person_controller.test);

router.post('/create', person_controller.person_create);

module.exports = router;
