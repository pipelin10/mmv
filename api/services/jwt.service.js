const jwt = require('jwt-simple');
const moment = require('moment');
var secret = 'mi_clave_de_tokens';

createToken = function(user){
    const payload = {
        sub: user._id, //This part compromise the id of the database but it's faster to implement
        iat: moment().unix(), //Date of creation of the token
        exp: moment().add(14, 'days').unix(), //14 days to expire, starting with the creation date
    }

    return jwt.encode(payload, secret);
}

decodeToken = function(token){
    const decoded = new Promise((resolve, reject) => {
    try{
        const payload = jwt.decode(token, secret)
        if(payload.exp <= moment().unix()){
            reject({
                status: 401,
                message: 'token expired'
            })
        }
        
        resolve(payload.sub)
        }catch(err){
        reject({
            status: 500,
            message: 'Invalid token'
        })
    }
})
return decoded
}

module.exports = {createToken, 
    secret: "secretToken",
    decodeToken
}