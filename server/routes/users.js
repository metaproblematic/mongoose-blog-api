const express = require('express');
const router = express.Router();
const User = require('../models/User.js');


//get a list of all users from the db
router.get('/', (req, res) => {
    User.find().then(users => { // first parameter in a promise (e.g. users) is a new variable storing the information obtained by the get request and method
            res.status(200).json(users);
        });
});

//get a user by id from the db
router.get('/:id', (req, res) => {
    User.findById(req.params.id).then(user => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send();
        }
    });
});

//add new user to the db 201 status code means "created"
router.post('/', (req, res) => {
    User.create(req.body).then(function (newUser) {
        res.status(201).json(newUser);
    });
});

//update a user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then(function (updatedUser) {
        res.status(204).json(updatedUser);
    });
});

//delete a user
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then(function (deletedUser) {
        res.status(200).json(deletedUser);
    });
});

module.exports = router;