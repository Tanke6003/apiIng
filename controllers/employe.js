const constants = require('../constants');
const employeModel =  require('../models/employeModel');
async function addEmploye(req, res) {
    try {
        let data = req.body
        await employeModel.addEmploye(data);
        let response = {
            message: 'Empleado Registrado'
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
async function getEmploye(req, res) {
    try {
        let data = req.body
        let employe =await employeModel.getEmploye(data);
        let response = {
            employe
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
async function getAllEmployes(req, res) {
    try {
        let data = req.body
        let employes =await employeModel.getAllEmployes(data);
        let response = {
            employes
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
    addEmploye,
    getEmploye,
    getAllEmployes
}