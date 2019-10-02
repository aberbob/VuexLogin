const Sequelize = require('sequelize');
const db = require('../../config/db');

const TransferItemTable = db.define('TransferItems', {
    TransferId: {
        type: Sequelize.INTEGER(11)
    },
    qty: {
        type: Sequelize.INTEGER(5)
    },
    partssubcategory: {
        type: Sequelize.STRING(50)
    },
    partscategory: {
        type: Sequelize.STRING(50)
    },
    partnumber: {
        type: Sequelize.STRING(10),
    },
    description: {
        type: Sequelize.STRING(50)
    },
    notes: {
        type: Sequelize.STRING(100)
    },
    uom: {
        type: Sequelize.STRING(10)
    },
})



module.exports = TransferItemTable;