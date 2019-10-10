const SessionTherapy = require('../models/sessionTherapy.model');
const Activity = require('../models/activity.model')
const mongoose = require('mongoose');

//Find all the sessions 
exports.findAll = (req, res) => {
  
    Activity.find()
      .then(activity => {
          res.send(activity);
      }).catch(err => {
          res.status(500).send({
              message: err.message
          });
      });
};

//Find all activities by a Session
exports.findBySessionActivity = (req, res) => {
    Activity.find({ id : req.params._id })
    .populate('sessionTherapy')
    .exec(function (err, activities) {
      if (err){
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
            message:"Sessions not found with given user Id " + req.params.userId
          });                
        }
        return res.status(500).send({
          message: "Error retrieving Sessions not found with given user Id  " + req.params.userId
        });
      }
            
      res.send(activities);
    });
  };

exports.addQuestionsGroupToActivity = function(req, res){

}