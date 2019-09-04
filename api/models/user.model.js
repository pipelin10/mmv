const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let UserSchema = new Schema({
    name: {type: String, required: true, max: 10},
    last_name: {type: String, required: true, max: 10},
    password: {type: String},
    birthdate: {type: Date, required: true},
    cc: {type: Number, required: true},
    adress: {type: String, required: true, max: 15},
    signup_Date: {type: Date, default: Date.now},
    last_login: Date,
    dementia_stage:  {type: String, enum: ['Inicial', 'Moderada'], required: true},
    setionTime: Number,
});


//This function is executed before saving the data, that is why the name is "pre"
UserSchema.pre('save', function(next) {
    let user = this
    console.log(`${user}`);
    if(!user.isModified('password')) return next()
    console.log(`hahaha`);
    bcrypt.genSalt(10, (err,salt) => {
        if(err) return next(err)
        console.log(`hahaha`);
        bcrypt.hash(user.password, salt,function(err, hash) {
            console.log(`hahaha`);
            if(err) return next(err)

            //Case where dosn't exist a mistake, so the hash that I've created now is the user.password
            
            user.password = hash
            next()
        })
    })

})

// Export the model
module.exports = mongoose.model('User', UserSchema);
