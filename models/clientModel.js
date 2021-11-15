const connection = require('../connection');
const constants  = require('../constants');
function addClient({nombres,apellidos,direccion,telefono,correo}){
    let query = `
        Insert Into cliente(nombres,apellidos,direccion,telefono,correo)values(?,?,?,?,?);
    `
    return connection.runQuery(query,[nombres,apellidos,direccion,telefono,correo]);
}
function getClient(id){
    let query = `
        select * from cliente where id = ?
    `
    return connection.runQuery(query,id)
}
function getAllClients(){
    let query = `
        select * from cliente
    `
    return connection.runQuery(query)
}
module.exports={
    addClient,
    getClient,
    getAllClients
}