const mongoose = require('mongoose');
const router = require('express').Router();
let Review = require('../models/review.model');
const moment = require('moment');


//@API to fetch the reviews for a given book 
router.route('/byBook').post((req, res) => {
    Review.find(book.isbn = req.body.bookid)
        .then(review => res.json(review))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;