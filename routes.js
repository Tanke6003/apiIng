const pageInitController = require('./controllers/pageInit');
const employeController = require('./controllers/employe');
const clientController = require('./controllers/client');
const productController = require('./controllers/product');
const loadRoutes = (app) => {
    //PageInitialization
    app.get('/pageInit/home',pageInitController.home);
    app.get('/empleados',employeController.getAllEmployes);
    app.post('/empleados',employeController.getEmploye);
    app.post('/agregar-empleado',employeController.addEmploye);
    app.post('/detalles-empleado',employeController.getEmploye);
    app.get('/productos',productController.getCatalogue);
    app.post('/productos',productController.getProduct);
    app.post('/agregar-producto',productController.addProduct);
    app.get('/clientes',clientController.getAllClients);
    app.post('/clientes',clientController.getClient);
    app.post('/agregar-cliente',clientController.addClient);
    
}
module.exports = {
    loadRoutes
}