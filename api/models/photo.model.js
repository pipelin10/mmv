const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AffectiveRelation = require('./affectiveRelation.model');

let PhotoSchema = new Schema({
    img: {type: String, required: true},
    description: {type: String, required: true},
    affectiveRelation: {type: Schema.Types.ObjectId, ref: 'AffectiveRelation'}
});

// Export the model
module.exports = mongoose.model('Photo', PhotoSchema);