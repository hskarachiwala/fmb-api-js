const express = require('express');
const bodyParser = require('body-parser');

//Init routes
var app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "FMB API test route"});
});

//DB connection
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url).then(() => {
    console.log(`Successfully connected to the database url - ${dbConfig.url}`);
}).catch((err) => {
    console.log('Could not connect to the database');
    console.log(err);
    process.exit();
});

require('./app/routes/dish.routes.js') (app);
require('./app/routes/cook.routes.js') (app);
require('./app/routes/dailyMenu.routes.js') (app);

app.listen(8080, ()=> {
    console.log('Server running on 8080...');
});

