const AffectiveRelation = require('../models/affectiveRelation.model');
const Photo = require('../models/photo.model');
const mongoose = require('mongoose');



exports.newPhotoUpdate = function(req, res){
    AffectiveRelation.findOne({_id: req.params.id})
    .then((affectiveRelation,err) => {

    const newPhoto = new Photo({
        description: req.body.description,
        img: req.file.path,
        affectiveRelation: affectiveRelation._id
    })

    newPhoto.save(function (err) {
        if (err) {
            return res.status(400).send({message: `Error uploading photo ${err}`});
            
        }
        
        res.status(200).send(`${newPhoto}`);
    })

    affectiveRelation.photo.push(newPhoto)
    affectiveRelation.save()

    .catch((err) => {
        console.error(err);
    });
})

}

exports.pruebaconjson = function(req, res){
    const {images} = req.body;
    images.forEach(element => {
        console.log(element.description)
    });
    console.log(req.body)

}

//Find all the affective relations
exports.findAll = (req, res) => {
  
    AffectiveRelation.find()
      .then(affectiveRelation => {
          res.send(affectiveRelation);
      }).catch(err => {
          res.status(500).send({
              message: err.message
          });
      });
};

//Find all affectiveRelations by a user
exports.findByUserAffective = (req, res) => {
    AffectiveRelation.find({ user : req.params.userId })
    .populate('photo')
    .exec(function (err, affectiverelations) {
      if (err){
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
            message:"Affections not found with given Affective Relation Id " + req.params.userId
          });                
        }
        return res.status(500).send({
          message: "Error retrieving Affections with given user Id " + req.params.userId
        });
      }
            
      res.send(affectiverelations);
    });
  };