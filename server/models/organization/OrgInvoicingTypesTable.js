const Sequelize = require('sequelize');
const db = require('../../config/db');

const OrgInvoicingTypesTable = db.define('OrgInvoicingTypes', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = OrgInvoicingTypesTable;