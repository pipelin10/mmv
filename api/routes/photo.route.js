var express = require('express');
var router = express.Router();


// Require the controllers 
const photo_controller = require('../controllers/photo.controller');


// Principal routes
router.get('/photos', photo_controller.findAll);
router.delete('/delete/:id', photo_controller.delete);


// Find all Photos of an AffectiveRelation
router.get('/:affectiveId', photo_controller.findByAffectiveRelation);


module.exports = router;