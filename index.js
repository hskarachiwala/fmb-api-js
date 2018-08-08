import express from 'express';
import bodyParser from 'body-parser';

//DB connection
import { url } from './config/database.config.js';
const mongoose = require('mongoose');
require('mongoose').Promise = Promise
mongoose.Promise = global.Promise;
mongoose.connect(url).then(() => {
    console.log('Successfully connected to the database');
}).catch((err) => {
    console.log('Could not connect to the database');
    console.log(err);
    process.exit();
});

//Init routes
const app = express();

app.use(bodyParser.json());

require('./app/routes/dish.routes.js').default (app);

app.listen(3000, ()=> {
    console.log('Server running...');
});

