var express = require('express');
var router = express.Router();

// Require the controllers 
const sessionTherapy_controller = require('../controllers/sessionTherapy.controller');

router.get('/allaffections', sessionTherapy_controller.findAll);
router.get('/:userId', sessionTherapy_controller.findByUserSession);
router.post('/newactivity/:id', sessionTherapy_controller.newActivity);


module.exports = router;