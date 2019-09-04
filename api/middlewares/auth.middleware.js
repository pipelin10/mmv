const config = require('../services/jwt.service')

function isAuth(req, res, next){
    
    if(!req.headers.authorization){
        return res.status(403).send({
            message: 'You dont have permission to access'
        })
    }

    const token = req.headers.authorization.split(" ")[1]

    config.decodeToken(token)
    .then(response => {
        req.user = response
        next()

    })
    .catch(response => {
        res.status(response.status)
    })

}

module.exports = {
    isAuth
}