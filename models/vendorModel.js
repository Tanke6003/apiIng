const connection = require('../connection');
const constants  = require('../constants');
function addVendor({nombre,nombreEmpresa,telefono,correo}){
    let query = `
        Insert Into proveedor(nombre,nombreEmpresa,telefono,correo)values(?,?,?,?);
    `
    return connection.runQuery(query,[nombre,nombreEmpresa,telefono,correo]);
}
function editVendor({nombre,nombreEmpresa,telefono,correo,id}){
    let query = `
    UPDATE proveedor SET nombre = ? ,nombreEmpresa =?,telefono = ?, correo = ? WHERE id = ?
    `
    return connection.runQuery(query,[nombre,nombreEmpresa,telefono,correo,id]);
}
function getVendor(id){
    let query = `
        select * from proveedor where id = ?
    `
    return connection.runQuery(query,id)
}
function getAllVendors(){
    let query = `
        select * from proveedor
    `
    return connection.runQuery(query)
}
module.exports={
    addVendor,
    getVendor,
    getAllVendors,
    editVendor,
}