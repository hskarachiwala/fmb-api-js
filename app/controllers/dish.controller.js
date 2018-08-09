const Dish = require('../models/dish.models.js');

exports.create = (req, res) => {
    const dish = new Dish({
        name: req.body.name,
        protein: req.body.protein,
        sauce: req.body.sauce,
        ingredients: req.body.ingredients,
        dishType: req.body.dishType,
        isVeg: req.body.isVeg
    });

    dish.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.getAll = (req, res) => {
    Dish.find().then( dishes => {
        res.send(dishes);
    }).catch(err=>{
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findById = (req, res) => {
    console.log('Route')
    Dish.findById(req.params.id).then(dish => {
        if(!res) {
            return res.status(404).send({
                message: `Dish with id ${req.params.id} not found`
            });
        }
        res.send(dish);
    });
};

exports.update = (req, res) => {
    Dish.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        protein: req.body.protein,
        sauce: req.body.sauce,
        ingredients: req.body.ingredients,
        dishType: req.body.dishType,
        isVeg: req.body.isVeg
    }, {new:true}).then(dish => {
        res.send(dish);
    }).catch(err => {
        if(err.kind==='ObjectId') {
            return res.status(404).send({
                message: `Dish with id ${req.params.id} not found`
            });
        }
        return res.status(500).send(err => {
            message: err.message;
        });
    });
};

exports.remove = (req, res) => {
    Dish.findByIdAndRemove(req.params.id).then(dish => {
        res.send({message: `Dish with id ${req.params.id} removed`});
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        });
    });
};