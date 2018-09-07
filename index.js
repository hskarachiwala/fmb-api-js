const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const appPort = 3000;

/**
 * This app uses the Express framework
 * Mongoose does not work well with ES6, avoid using ES6 syntax or trying to use Babel Webpack on this API
 */

var app = express();        // init the express app
app.use(bodyParser.json())  // parse requests of content-type - application/json

// DB connection
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url).then(() => {
    console.log(`Successfully connected to the database url - ${dbConfig.url}`);
}).catch((err) => {
    console.log('Could not connect to the database');
    console.log(err);
    process.exit();
});

// Init API routes
require('./app/routes/dish.routes.js') (app);
require('./app/routes/cook.routes.js') (app);
require('./app/routes/dailyMenu.routes.js') (app);

// Start the server
app.listen(appPort, ()=> { console.log('Server running on ' + appPort + '...');});

