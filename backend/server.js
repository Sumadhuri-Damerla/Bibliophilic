//module imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
var multer = require('multer');


//environment 
require('dotenv').config();

//express server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //to parse JSON


//mongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//routings
const booksRouter = require('./routes/book');
const bookshelfsRouter = require('./routes/bookshelf');
const reviewsRouter = require('./routes/review');
const usersRouter = require('./routes/user');

app.use('/book',booksRouter);
app.use('/bookshelf',bookshelfsRouter);
app.use('/reviews',reviewsRouter);
app.use('/user',usersRouter);

//starts server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});