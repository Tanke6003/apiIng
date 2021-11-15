const constants       = require('../constants');
const productModel    = require('../models/productModel');
async function getCatalogue(req,res){
    try {
        let catalogue = await productModel.getCatalogue();
        let data = {
            catalogue
        }

        res.send(data);
    } catch (ex) {
        console.log(ex);
        let data = {
            errorMessage: constants.CATCH_MESSAGE,
            errorData: ex
        }
        res.status(500).send(data);
    }
}
async function addProduct(req, res) {
    try {
        let data = req.body
        console.log(data)
        await productModel.addProduct(data);
        let response = {
            message: 'Producto Registrado'
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
async function getProduct(req,res){
    try {
        let id = req.body.id
        let Product = await productModel.getProduct(id);
        let data = {
            Product
        }

        res.send(data);
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
    getCatalogue,
    addProduct,
    getProduct
}
