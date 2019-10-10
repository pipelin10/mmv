const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');

let QuestionSchema = new Schema({
    question: {type: String, required: true, max: 100 },
    answer: {type: String, required: true, max: 50}, 
    optionalAnswerOne: {type: String, max: 50}, 
    optionalAnswerTwo: {type: String, max: 50}, 
    kind:  {type: String, enum: ['Perfil', 'Espacial'], required: true},
    score: {type: Number} ,
    user: { type: Schema.Types.ObjectId, ref: "User" },
})

// Export the model
module.exports = mongoose.model('Question', QuestionSchema);