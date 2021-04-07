const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./book.model');
require('./user.model');
var bookschema = require('mongoose').model('Book').schema;

const bookshelfSchema = new Schema({
    read_books: [bookschema],
    flagged_books: [bookschema],
    user_Id: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true,
});

const BookShelf = mongoose.model('BookShelf', bookshelfSchema);

module.exports = BookShelf;