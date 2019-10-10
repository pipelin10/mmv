const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');
const Activity = require('./activity.model');

let SessionTherapySchema = new Schema({
    sessionDate: {type: Date, required: true},
    minutesDuration: {type: Number, required: true}, 
    user: { type: Schema.Types.ObjectId, ref: "User" },
    activity: [{ type: Schema.Types.ObjectId, ref: "Activity" }]
});

// Export the model
module.exports = mongoose.model('SessionTherapy', SessionTherapySchema);