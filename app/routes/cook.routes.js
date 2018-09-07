/**
 * Module attaches cook endpoints to the app
 * @param {*} app
 */
module.exports = (app) => {
    const cookController = require('../controllers/cook.controller.js');
    app.post('/v1/cooks', cookController.create);
    app.get('/v1/cooks', cookController.getAll);
    app.get('/v1/cooks/:id', cookController.findById);
    app.put('/v1/cooks/:id', cookController.update);
    app.delete('/v1/cooks/:id', cookController.remove);
}