const connection = require('../connection');
const constants  = require('../constants');
function getCatalogue(){
    let query = `
        SELECT * FROM product ;
    `
    return connection.runQuery(query);
}
module.exports={
    getCatalogue
}
