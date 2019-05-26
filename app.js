
const express = require('express');
const bodyParser = require('body-parser');

const person = require('./routes/person.route'); // Imports routes for the products
const app = express(); //Initialice our express app

var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/people', person);

mongoose.connect('mongodb://localhost/crud-person')
  .then(db  =>  console.log('BD is connected'))
  .catch(enrr =>  console.log(err));

let port = 1234; //Define the port

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
