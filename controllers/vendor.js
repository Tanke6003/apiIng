const constants = require('../constants');
const vendorModel =  require('../models/vendorModel');
async function addVendor(req, res) {
    try {
        let data = req.body
        await vendorModel.addVendor(data);
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
async function editVendor(req, res) {
    try {
        let data = req.body
        await vendorModel.editVendor(data);
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
async function getVendor(req, res) {
    try {
        let id = req.body.id
        let vendor =await vendorModel.getVendor(id);
        let response = {
            vendor
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
async function getAllVendors(req, res) {
    try {
        let data = req.body
        let vendors =await vendorModel.getAllVendors(data);
        let response = {
            vendors
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
    addVendor,
    getVendor,
    getAllVendors,
    editVendor
}