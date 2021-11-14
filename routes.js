const pageInitController = require('./controllers/pageInit');
// const collectionController = require('./controllers/collection');
// const modelController = require('./controllers/model');
const employeController = require('./controllers/employe')
const loadRoutes = (app) => {
    //PageInitialization
    app.get('/pageInit/home',pageInitController.home);
    // app.get('/Catalogo/Principal',collectionController.GetCollection);
    // app.post('/model',modelController.GetModel);
    app.post('/agregar-empleado',employeController.addEmploye);
    app.post('/empleados',employeController.getAllEmployes);
}
module.exports = {
    loadRoutes
}