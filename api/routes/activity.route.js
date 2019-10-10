var express = require('express');
var router = express.Router();

// Require the controllers 
const activity_controller = require('../controllers/activity.controller');

router.get('/allactivities', activity_controller.findAll);
router.get('/:id', activity_controller.findBySessionActivity);


module.exports = router;
