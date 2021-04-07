const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./user.model');
require('./book.model');
var userschema = require('mongoose').model('User').schema;


const reviewSchema = new Schema({
    book_Id: [{
        type: Schema.ObjectId,
        ref: 'Book'
    }],
    user: [userschema],
    review:{type: String, required: true, trim: true},
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;