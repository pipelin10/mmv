
const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user.route');
const photo = require('./routes/photo.route');
const affectiveRelation = require('./routes/affectiveRelation.route');
const session = require('./routes/sessionTherapy.route');
const activity = require('./routes/activity.route');
const question = require('./routes/question.route');
const app = express(); //Initialice our express app

//Body parser widdleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use('/api',apiRoutes)
app.use('/user', user);
app.use('/photo', photo);
app.use('/affective', affectiveRelation);
app.use('/session', session);
app.use('/activity', activity);
app.use('/question', question);
app.use('/uploads', express.static('uploads'));

module.exports =  app;