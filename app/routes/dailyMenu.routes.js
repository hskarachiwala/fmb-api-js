module.exports = (app) => {

    const dailyMenuController = require('../controllers/dailyMenu.controller.js');

    app.post('/v1/dailyMenus', dailyMenuController.create);

    app.get('/v1/dailyMenus', dailyMenuController.getAll);

    app.get('/v1/dailyMenus/:id', dailyMenuController.findById);

    app.put('/v1/dailyMenus/:id', dailyMenuController.update);

}