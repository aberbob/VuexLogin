const Sequelize = require('sequelize');
const db = require('../../config/db');

const TransferStatusesTable = db.define('TransferStatuses', {
    name: {
        type: Sequelize.STRING(10)
    }
})



module.exports = TransferStatusesTable;