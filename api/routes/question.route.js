var express = require('express');
var router = express.Router();

// Require the controllers 
const question_controller = require('../controllers/question.controller');


// Principal routes

router.get('/allaffections', question_controller.findAll);
router.get('/:userId', question_controller.findByUserQuestions);


module.exports = router;