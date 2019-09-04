const Sequelize = require('sequelize');
const db = require('../config/db');

const CustContactStatusesTable = db.define('CustContactStatuses', {
    name: {
        type: Sequelize.STRING(11)
    }
}) 




module.exports = CustContactStatusesTable;