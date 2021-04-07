const mongoose = require('mongoose');
const router = require('express').Router();
let Book = require('../models/book.model');

//@API to fetch all the books
router.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@API to fetch top 10 most read books
router.route('/topreadbooks').get((req, res) => {
    Book.find().sort({read_count: -1}).limit(10)
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@API to fetch top 10 most flagged books
router.route('/topflaggedbooks').get((req, res) => {
    Book.find().sort({flag_count: -1}).limit(10)
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});


//@API to add books
router.route('/add').post(function (req, res) {
    isbn = req.body.isbn;
    title = req.body.title;
    author = req.body.author;
    published_date = req.body.date;
    category = req.body.category;
    description = req.body.description;
    if (req.body.flag_count != null || req.body.flag_count != undefined) {
        flag_count = req.body.flag_count;
    };

    if (req.body.read_count != null || req.body.read_count != undefined) {
        read_count = req.body.read_count;
    };

    if(req.body.language != null || req.body.language != undefined){
        language = req.body.language;
    }

    //image
    const newBook = new Book({ isbn: isbn, title: title, author: author, published_date: published_date , category: category, book_description: description, language: language, flag_count: flag_count, read_count: read_count });

    newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;