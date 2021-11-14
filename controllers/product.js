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
module.exports={
    getCatalogue
}
