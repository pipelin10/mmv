const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Activity = require('./activity.model');

let AlbumSchema = new Schema({
    description: {type: String, required: true, max: 200 },
    photoSelection: {type: String, required: true},
    score: {type: Number},
    activity: { type: Schema.Types.ObjectId, ref: "Activity"}
})

// Export the model
module.exports = mongoose.model('Album', AlbumSchema);