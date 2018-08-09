const Cook = require('../models/cook.models.js');

exports.create = (req, res) => {
    const cook = new Cook({
        name: req.body.name,
        contact: req.body.contact,
        address: req.body.address
    });

    cook.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.getAll = (res) => {
    Cook.find().then( cooks => {
        res.send(cooks);
    }).catch(err=>{
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findById = (req, res) => {
    Cook.findById(req.params.id).then(cook => {
        if(!res) {
            return res.status(404).send({
                message: `Cook with id ${req.params.id} not found`
            });
        }
        res.send(cook);
    });
};

exports.update = (req, res) => {
    Cook.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        contact: req.body.contact,
        address: req.body.address
    }, {new:true}).then(cook => {
        res.send(cook);
    }).catch(err => {
        if(err.kind==='ObjectId') {
            return res.status(404).send({
                message: `Cook with id ${req.params.id} not found`
            });
        }
        return res.status(500).send(err => {
            message: err.message;
        });
    });
};

exports.remove = (req, res) => {
    Cook.findByIdAndRemove(req.params.id).then(() => {
        res.send({message: `Cook with id ${req.params.id} removed`});
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        });
    });
};