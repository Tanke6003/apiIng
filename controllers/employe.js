const constants = require('../constants');
const employeModel =  require('../models/employeModel');
async function addEmploye(req, res) {
    try {
        let data = req.body
        await employeModel.addEmploye(data);
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
async function editEmploye(req, res) {
    try {
        let data = req.body
        await employeModel.editEmploye(data);
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
async function inactiveEmploye(req, res) {
    try {
        let data = req.body
        await employeModel.inactiveEmploye(data);
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
async function getEmploye(req, res) {
    try {
        let id = req.body.id

        let employe =await employeModel.getEmploye(id);
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
    getAllEmployes,
    editEmploye,
    inactiveEmploye
}