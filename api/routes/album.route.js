var express = require('express');
var router = express.Router();

// Require the controllers 
const album_controller = require('../controllers/album.controller');


// Principal routes
router.post('/create', album_controller.create);


module.exports = router;