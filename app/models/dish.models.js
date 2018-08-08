import { Schema, model } from 'mongoose';

const Dish = Schema({
        name: String,
        protein: String,
        sauce: String,
        ingredients: [String],
        isVeg: Boolean,
        dishType: String
        },{
        timestamps: true
    });

export default model('Dish', Dish);