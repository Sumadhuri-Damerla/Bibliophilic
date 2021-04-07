const router = require('express').Router();
let User = require('../models/user.model');

//fetch all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//to add a new user
router.route('/add').post((req, res) => {
    const userName = req.body.username;
    const emailId = req.body.useremail;
    const contact = req.body.contact;
    const newUser = new User({ userName, emailId, contact });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;