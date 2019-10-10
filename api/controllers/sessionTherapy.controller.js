const SessionTherapy = require('../models/sessionTherapy.model');
const Activity = require('../models/activity.model')
const mongoose = require('mongoose');

//Find all the sessions 
exports.findAll = (req, res) => {
  
    SessionTherapy.find()
      .then(sessionTherapy => {
          res.send(sessionTherapy);
      }).catch(err => {
          res.status(500).send({
              message: err.message
          });
      });
};

//Find all affectiveRelations by a user
exports.findByUserSession = (req, res) => {
    SessionTherapy.find({ user : req.params.userId })
    .populate('user')
    .exec(function (err, sessionTherapy) {
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
            
      res.send(sessionTherapy);
    });
  };


exports.newActivity = function(req, res){
    SessionTherapy.findOne({id: req.params._id})
    .then((sessionTherapy,err) => {
        const newActivity = new Activity({
            score: req.body.score,
            sessionTherapy: sessionTherapy._id
        })

        newActivity.save(function (err) {
            if (err) {
                return res.status(400).send({message: `Error adding activity ${err}`});
                
            }
            
            res.status(200).send(`${newActivity}`);
        }) 

        sessionTherapy.activity.push(newActivity);
        sessionTherapy.save()

    })
    .catch((err) => {
        console.error(err);
    });

}