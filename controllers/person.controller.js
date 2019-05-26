const Person = require('../models/person.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.person_create = function (req, res) {
    let person = new Person(
        {
            name: req.body.name,
            last_name: req.body.last_name,
            age: req.body.age
        }
    );

    person.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Person Created successfully')
    })
};
