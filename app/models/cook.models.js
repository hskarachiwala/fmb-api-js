const mongoose = require('mongoose');

const Cook = mongoose.Schema({
        name: String,
        contact: String,
        address: String
        },{
        timestamps: true
    });

module.exports = mongoose.model('Cook', Cook);