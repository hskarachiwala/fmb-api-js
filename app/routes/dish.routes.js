/**
 * Module attaches dish endpoints to the app
 * @param {*} app
 */
module.exports = (app) => {
    const dishController = require('../controllers/dish.controller.js');
    app.post('/v1/dishes', dishController.create);
    app.get('/v1/dishes', dishController.getAll);
    app.get('/v1/dishes/:id', dishController.findById);
    app.put('/v1/dishes/:id', dishController.update);
    app.delete('/v1/dishes/:id', dishController.remove);
}