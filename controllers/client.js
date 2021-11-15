const constants = require('../constants');
const clientModel =  require('../models/clientModel');
async function addClient(req, res) {
    try {
        let data = req.body
        await clientModel.addClient(data);
        let response = {
            message: 'El registro fue exitoso'
        }
        res.send(response);

    } catch (ex) {
        console.log(ex);
        let data = {
            errorMessage: constants.CATCH_MESSAGE,
            errorData: ex
        }
        res.status(500).send(data);
    }
}
async function getClient(req, res) {
    try {
        let id = req.body.id
        let client =await clientModel.getClient(id);
        let response = {
            client
        }
        res.send(response);

    } catch (ex) {
        console.log(ex);
        let data = {
            errorMessage: constants.CATCH_MESSAGE,
            errorData: ex
        }
        res.status(500).send(data);
    }
}
async function getAllClients(req, res) {
    try {
        let data = req.body
        let clients =await clientModel.getAllClients(data);
        let response = {
            clients
        }
        res.send(response);

    } catch (ex) {
        console.log(ex);
        let data = {
            errorMessage: constants.CATCH_MESSAGE,
            errorData: ex
        }
        res.status(500).send(data);
    }
}
module.exports={
    addClient,
    getClient,
    getAllClients
}