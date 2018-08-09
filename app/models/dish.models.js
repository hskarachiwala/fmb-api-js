const mongoose = require('mongoose');

const Dish = mongoose.Schema({
        name: String,
        protein: String,
        sauce: String,
        ingredients: [String],
        isVeg: Boolean,
        dishType: String
        },{
        timestamps: true    //add createdAt and updatedAt
    });

module.exports = mongoose.model('Dish', Dish);