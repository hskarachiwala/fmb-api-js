const DailyMenu = require('../models/dailyMenu.models.js');

exports.create = (req, res) => {
    const dailyMenu = new DailyMenu({
        date: req.body.date,
        dishId: req.body.dishId,
        cookId: req.body.cookId
    });

    dailyMenu.save().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: err.message
        });
    });
};

exports.getAll = (req, res) => {
    DailyMenu.find().then( cooks => {
        res.send(cooks);
    }).catch(err=>{
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findById = (req, res) => {
    DailyMenu.findById(req.params.id).then(cook => {
        if(!res) {
            return res.status(404).send({
                message: `Menu with id ${req.params.id} not found`
            });
        }
        res.send(cook);
    });
};

exports.update = (req, res) => {
    DailyMenu.findByIdAndUpdate(req.params.id, {
        date: req.body.date,
        dishId: req.body.dishId,
        cookId: req.body.cookId
    }, {new:true}).then(cook => {
        res.send(cook);
    }).catch(err => {
        if(err.kind==='ObjectId') {
            return res.status(404).send({
                message: `Menu with id ${req.params.id} not found`
            });
        }
        return res.status(500).send(err => {
            message: err.message;
        });
    });
};
