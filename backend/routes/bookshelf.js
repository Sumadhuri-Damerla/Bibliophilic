const mongoose = require('mongoose');
const router = require('express').Router();
let Bookshelf = require('../models/bookshelf.model');
const moment = require('moment');


//@API to fetch the bookshelf details for a given user
router.route('/byUser').post((req, res) => {
    Bookshelf.find(user.emailId = req.body.useremail)
        .then(bookshelf => res.json(bookshelf))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;