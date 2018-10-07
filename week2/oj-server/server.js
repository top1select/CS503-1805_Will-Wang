const express = require('express');

const app = express();

// connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds117858.mlab.com:17858/problems');

const restRouter = require('./routes/rest');

// app.get('/', (req, res) => {
// 	res.send('Hello world from express!');
// });

app.use('/api/v1', restRouter);

app.listen(3000, () => {
	console.log('App is listening to port 3000!');
});