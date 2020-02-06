const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AffectiveRelation = require('./affectiveRelation.model');
const SessionTherapy = require('./sessionTherapy.model');
const bcrypt = require('bcrypt');

let UserSchema = new Schema({
    name: {type: String, required: true, max: 30},
    last_name: {type: String, required: true, max: 30},
    password: {type: String},
    birthdate: {type: Date, required: true},
    cc: {type: Number, required: true, useCreateIndex: true},
    adress: {type: String, required: true, max: 15},
    signup_Date: {type: Date, default: Date.now},
    last_login: Date,
    dementia_stage:  {type: String, enum: ['Inicial', 'Moderada'], required: true},
    sessionTime: Number,
    profileImg: {type: String},
    coverImg: {type: String},
    affectiveRelation:[{type: Schema.Types.ObjectId, ref: "AffectiveRelation"}],
    question: [{type: Schema.Types.ObjectId, ref: "Question"}],
    sessionTherapy:[{type: Schema.Types.ObjectId, ref: "SessionTherapy"}]
});


//This function is executed before saving the data, that is why the name is "pre"
UserSchema.pre('save', function(next) {
    let user = this
    if(!user.isModified('password')) return next()
    bcrypt.genSalt(10, (err,salt) => {
        if(err) return next(err)
        bcrypt.hash(user.password, salt,function(err, hash) {
            if(err) return next(err)

            //Case where dosn't exist a mistake, so the hash that I've created now is the user.password
            
            user.password = hash
            next()
        })
    })

})

// Export the model
module.exports = mongoose.model('User', UserSchema);
