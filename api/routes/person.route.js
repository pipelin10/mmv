
var express = require('express');
var router = express.Router();

// Require the controllers 
const person_controller = require('../controllers/person.controller');


// Principal routes
router.get('/test', person_controller.test);
router.post('/create', person_controller.person_create);
router.get('/:id', person_controller.person_details);
router.put('/:id/update', person_controller.person_update);
router.delete('/:id/delete', person_controller.person_delete);


// All these are for proofing
router.get('/proof/:id',(req,res)=>{ //For access to an unique recourse
  var objetoCualquiera = {
    params:req.params.id,
    body:req.body };
  
  res.json(objetoCualquiera);
})

// Express know that a different method with the same route isn't the same thing
router.get('/proof',(req,res)=>{
  res.status(200).send({"hola": []})
})

router.post('/proof',(req,res)=>{
  console.log(req.body)
  res.send(200, )
})


module.exports = router;
