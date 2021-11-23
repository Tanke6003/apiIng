const pageInitController = require('./controllers/pageInit');
const employeController = require('./controllers/employe');
const clientController = require('./controllers/client');
const vendorController = require('./controllers/vendor');
const productController = require('./controllers/product');
const loadRoutes = (app) => {
    //PageInitialization
    app.get('/pageInit/home',pageInitController.home);
    // Empleados
    app.get('/empleados',employeController.getAllEmployes);
    app.post('/empleados',employeController.getEmploye);
    app.post('/agregar-empleado',employeController.addEmploye);
    app.post('/detalles-empleado',employeController.getEmploye);
    app.post('/editar-empleado',employeController.editEmploye);
    app.post('/inactivo-empleado',employeController.inactiveEmploye);
    // Productos
    app.get('/productos',productController.getCatalogue);
    app.post('/productos',productController.getProduct);
    app.post('/agregar-producto',productController.addProduct);
    // Clientes
    app.get('/clientes',clientController.getAllClients);
    app.post('/clientes',clientController.getClient);
    app.post('/agregar-cliente',clientController.addClient);
    app.post('/detalles-cliente',clientController.getClient);
    app.post('/editar-cliente',clientController.editClient);
    //Ventas
    app.get('/proveedores',vendorController.getAllVendors);
    app.post('/proveedores',vendorController.getVendor);
    app.post('/agregar-proveedor',vendorController.addVendor);
    //Proveedores

    //Pedidos

}
module.exports = {
    loadRoutes
}