const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SessionTherapy = require('./sessionTherapy.model');
const Question = require('./question.model');
const Album = require('./album.model');

let ActivitySchema = new Schema({
    score: {type: Number, required: true},
    sessionTherapy: { type: Schema.Types.ObjectId, ref: "SessionTherapy" },
    album: { type: Schema.Types.ObjectId, ref: "Album" }
});

// Export the model
module.exports = mongoose.model('Activity', ActivitySchema);