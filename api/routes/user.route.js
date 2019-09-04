var express = require('express');
var router = express.Router();

// Require the controllers 
const user_controller = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware')


// Principal routes
router.post('/create', user_controller.create)
router.post('/login', user_controller.login)
router.get('/private', auth.isAuth, (req, res) => {
    res.status(200).send({message: 'You have my permission'})
})



module.exports = router

