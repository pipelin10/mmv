var mongoose = require('mongoose');

const app = require('./app');

//Connection to a database

mongoose.connect('mongodb://localhost/memento', { useNewUrlParser: true } )
  .then(db  =>  console.log('BD is connected'))
  .catch(err =>  console.log(err));

//Connection port

const port = 3001; //Define the port

app.listen(port, () => {
    console.log(`Server is up and running on port number http://localhost:${port}`);
});