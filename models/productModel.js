const connection = require('../connection');
const constants  = require('../constants');
function getCatalogue(){
    let query = `
        SELECT * FROM producto ;
    `
    return connection.runQuery(query);
}
function getProduct(id){
    let query = `
        SELECT * FROM producto WHERE id = ?
    `
    return connection.runQuery(query, id);
}
function addProduct({nombre,descripcion,precioVenta}){
    let query = `
        Insert Into producto(nombre,descripcion,stock,precioVenta)values(?,?,0,?);
    `
    return connection.runQuery(query,[nombre,descripcion,precioVenta]);
}
module.exports={
    getCatalogue,
    addProduct,
    getProduct
}
