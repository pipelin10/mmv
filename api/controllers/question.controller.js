const Question = require('../models/question.model');

//Find all the questions
exports.findAll = (req, res) => {
  
    Question.find()
      .then(question => {
          res.send(question);
      }).catch(err => {
          res.status(500).send({
              message: err.message
          });
      });
};

//Find all questions by a user
exports.findByUserQuestions = (req, res) => {
    Question.find({ user : req.params.userId })
    .populate('user')
    .exec(function (err, questions) {
      if (err){
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
            message:"Affections not found with given user Id " + req.params.userId
          });                
        }
        return res.status(500).send({
          message: "Error retrieving Affections with given user Id " + req.params.userId
        });
      }
            
      res.send(questions);
    });
  };