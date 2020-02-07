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
const user_controller = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware')


// Principal routes
router.post('/create', user_controller.create)
router.post('/login', user_controller.login)
router.post('/:id/newrelation', user_controller.newAffectionAndUpdate)
router.post('/:cc/newsession', user_controller.newSessionTherapy)
router.post('/:cc/newquestion', user_controller.newQuestion)
router.put('/:id/uploadProfilePhoto', upload.single('image'), user_controller.updateProfilePhoto);
router.get('/private', auth.isAuth, (req, res) => {
    res.status(200).send({message: 'You have my permission'})
})



module.exports = router;

