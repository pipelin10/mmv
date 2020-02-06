const AffectiveRelation = require('../models/affectiveRelation.model');
const SessionTherapy = require('../models/sessionTherapy.model');
const Question = require('../models/question.model');
const User = require('../models/user.model');
const service = require('../services/jwt.service');
const bcrypt = require('bcrypt');

//Input validator
const validateRegisterInput = require('../validators/register');
const validateLoginInput = require('../validators/login');


exports.create = function (req, res) {

    let { errors, isValid } = validateRegisterInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ cc: req.body.cc }).then(user => {
        if (!user) {
            const user = new User(
                {
                    name: req.body.name,
                    last_name: req.body.last_name,
                    password: req.body.password,
                    cc: req.body.cc,
                    dementia_stage: req.body.dementia_stage,
                    adress: req.body.adress,
                    birthdate: req.body.birthdate,
                }
            )

            user.save(function (err) {
                if (err) {
                    return res.status(500).send({ message: `Error creating the user ${err}` });

                }
                //Send the token create for the user
                console.log(`${user}`);

                res.status(200).json({
                    token: service.createToken(user),
                    user: {
                        name: user.name,
                        last_name: user.last_name,
                        cc: user.cc,
                        dementia_stage: user.dementia_stage,
                        adress: user.adress,
                        birthdate: user.birthdate,
                    }
                });
            })

        } else {
            return res.status(400).json({ cc: "Ya existe un usuario asociado a la identificación" });
        }
    })

}

exports.login = function (req, res) {

    let { errors, isValid } = validateLoginInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ cc: req.body.cc })
        .then((user, err) => {
            if (err) return res.status(500).send({ message: err })
            if (!user) return res.status(404).send({ message: 'El usuario no existe, debe registrarse' })

            bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
                if (isMatch) {

                    req.user = user
                    res.status(200).json({
                        token: service.createToken(user),
                        user: {
                            name: user.name,
                            last_name: user.last_name,
                            cc: user.cc,
                            dementia_stage: user.dementia_stage,
                            adress: user.adress,
                            birthdate: user.birthdate,
                        },
                        message: 'Te has logueado correctamente'
                    });
                }
                else {
                    return res.status(400).send({ message: 'Contraseña incorrecta' });
                }
            }

            )
        })
        .catch((err) => {
            console.error(err);
        });
}

exports.newAffectionAndUpdate = function (req, res) {

    User.findOne({ _id: req.params.id })
        .then((user, err) => {
            const newAffectiveRelation = new AffectiveRelation({
                name: req.body.name,
                last_name: req.body.last_name,
                relationship: req.body.relationship,
                user: user._id
            })

            newAffectiveRelation.save(function (err) {
                if (err) {
                    return res.status(400).send({ message: `Error adding affective relation ${err}` });

                }

                res.status(200).send(`${newAffectiveRelation}`);
            })

            user.affectiveRelation.push(newAffectiveRelation)
            user.save()

        })
        .catch((err) => {
            console.error(err);
        });
}

exports.updateProfilePhoto = function (req, res) {

    User.updateOne({ _id: req.params.id }, { $set: { img: req.file.path } })
        .then((user, err) => {
            if (err) {
                return res.status(400).send({ message: `Error adding affective relation ${err}` });

            }

            res.status(200).send(`${user.img}`);

        })
        .catch((err) => {
            console.error(err);
        });
}


exports.newQuestion = function (req, res) {

    User.findOne({ cc: req.params.cc })
        .then((user, err) => {
            const newQuestion = new Question(
                {
                    question: req.body.question,
                    answer: req.body.answer,
                    optionalAnswerOne: req.body.optionalAnswerOne,
                    optionalAnswerTwo: req.body.optionalAnswerTwo,
                    kind: req.body.kind,
                    score: req.body.score,
                    user: user._id
                }
            )

            newQuestion.save(function (err) {
                if (err) {
                    return res.status(400).send({ message: `Error adding affective relation ${err}` });

                }

                res.status(200).send(`${newQuestion}`);
            })

            user.question.push(newQuestion)
            user.save()

        })
        .catch((err) => {
            console.error(err);
        });
}


exports.newSessionTherapy = function (req, res) {
    User.findOne({ cc: req.params.cc })
        .then((user, err) => {
            const newSessionTherapy = new SessionTherapy({
                sessionDate: req.body.sessionDate,
                minutesDuration: req.body.minutesDuration,
                user: user._id
            })

            newSessionTherapy.save(function (err) {
                if (err) {
                    return res.status(400).send({ message: `Error adding affective relation ${err}` });

                }

                res.status(200).send({ message: `sucess` });
            })

            user.sessionTherapy.push(newSessionTherapy)
            user.save()

        })
        .catch((err) => {
            console.error(err);
        });

}