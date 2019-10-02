const Sequelize = require('sequelize');
const db = require('../../config/db');

const TransfersTable = db.define('Transfers', {
    CustOrganizationId: {
        type: Sequelize.INTEGER(11)
    },
    TransferStatusId: {
        type: Sequelize.INTEGER(11)
    },
    notes: {
        type: Sequelize.STRING(100)
    },    
    destination: {
        type: Sequelize.STRING(100)
    },    
    source: {
        type: Sequelize.STRING(100)
    },    
})



module.exports = TransfersTable;