const Photo = require('../models/photo.model');
const mongoose = require('mongoose');

exports.delete = function(req, res){

    Photo.findByIdAndRemove({_id: req.params.id})
    .then(function(photo){
        res.send(photo)
    });
}

//Find all the images
exports.findAll = (req, res) => {
  
    Photo.find()
      .then(photo => {
          res.send(photo);
      }).catch(err => {
          res.status(500).send({
              message: err.message
          });
      });
};

// Find all photos by a affectiveRelationId
exports.findByAffectiveRelation = (req, res) => {
    Photo.find({ affectiveRelation : req.params.affectiveId })
    .exec(function (err, photos) {
      if (err){
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
            message: "Photos not found with given Affective Relation Id " + req.params.affectiveId
          });                
        }
        return res.status(500).send({
          message: "Error retrieving Photos with given Affective Relation Id " + req.params.affectiveId
        });
      }
            
      res.send(photos);
    });
};