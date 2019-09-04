
const express = require('express');
const bodyParser = require('body-parser');

const person = require('./routes/person.route'); // Imports routes for the products
const user = require('./routes/user.route');
const app = express(); //Initialice our express app

//Body parser widdleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.use('/people', person);
app.use('/user', user);

module.exports =  app;