var express = require('express');
var router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage: storage})

// Require the controllers 
const affectiveRelation_controller = require('../controllers/affectiveRelation.controller');

// Principal routes
router.post('/:id/uploadPhoto', upload.single('image'), affectiveRelation_controller.newPhotoUpdate);
router.post('/hola', affectiveRelation_controller.pruebaconjson);
router.get('/allaffections', affectiveRelation_controller.findAll);
router.get('/:userId', affectiveRelation_controller.findByUserAffective);


module.exports = router;