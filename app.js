
const express = require('express');
const bodyParser = require('body-parser');

const person = require('./routes/person.route'); // Imports routes for the products
const app = express(); //Initialice our express app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.use('/people', person);











//Connection to a database

mongoose.connect('mongodb://localhost/crud-person', { useNewUrlParser: true } )
  .then(db  =>  console.log('BD is connected'))
  .catch(enrr =>  console.log(err));

//Connection port

let port = 3000; //Define the port

app.listen(port, () => {
    console.log(`Server is up and running on port number http://localhost:${port}`);
});
