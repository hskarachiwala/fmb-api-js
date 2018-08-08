function dishRoute (app) {

    const dishes = require('../controllers/dish.controller.js');

    app.post('/dishes', dishes.create);

    app.get('/dishes', dishes.find);

    app.get('/dishes/:id', dishes.findById);

    app.put('/dishes/:id', dishes.update);

    app.delete('/dishes/:id', dishes.remove);

}

export default dishRoute;