const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn: {type:String, unique: true, required: true, trim:true},
    title: { type: String, required: true, trim: true },
    author: {type: String},
    published_date: { type: Date, required: true },
    category: {type: String, required: true, trim: true},
    book_description: {type: String, required: true, trim:true},
    cover_photo: {
        data: Buffer, 
        contentType: String,
    },
    language: { type: String, trim: true },
    flag_count: {type:Number},
    read_count: {type: Number}
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;