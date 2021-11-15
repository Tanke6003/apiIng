const connection = require('../connection');
const constants  = require('../constants');
function addEmploye({nombres,apellidos,puesto,direccion,telefono,fechaNacimiento}){
    let query = `
        Insert Into empleado(nombres,apellidos,puesto,status,direccion,telefono,fechaNacimiento)values(?,?,?,1,?,?,?);
    `
    return connection.runQuery(query,[nombres,apellidos,puesto,direccion,telefono,fechaNacimiento]);
}
function getEmploye(id){
    let query = `
        select * from empleado where id = ?
    `
    return connection.runQuery(query,id)
}
function getAllEmployes(){
    let query = `
        select * from empleado
    `
    return connection.runQuery(query)
}
module.exports={
    addEmploye,
    getEmploye,
    getAllEmployes
}