const mongoose = require('mongoose');

const DailyMenu = mongoose.Schema({
        dishId: String,
        cookId: String,
        date: String,
        hasEvent: Boolean,
        },{
        timestamps: true
    });

module.exports = mongoose.model('DailyMenu', DailyMenu);