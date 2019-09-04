const Sequelize = require('sequelize');
const db = require('../config/db');

const InvoiceItemsTable = db.define('InvoiceItems', {
    cost: {
        type: Sequelize.INTEGER(3)
    },
    qty: {
        type: Sequelize.INTEGER(3)
    },
    total: {
        type: Sequelize.STRING(15)
    }
})



module.exports = InvoiceItemsTable;