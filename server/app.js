const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

mongoose.connect('mongodb://localhost/my-blog', { useNewUrlParser: true });

// enable Promises for Mongoose
mongoose.Promise = Promise;

const app = express();

app.use(morgan('dev'));

//use the bodyParser to detect json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send();
})

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

module.exports = app;