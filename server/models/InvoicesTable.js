const Sequelize = require('sequelize');
const db = require('../config/db');

const InvoicesTable = db.define('Invoices', {
    category: {
        type: Sequelize.INTEGER(3)
    },
    group: {
        type: Sequelize.INTEGER(3)
    },
    partnumber: {
        type: Sequelize.STRING(15)
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
    listprice: {
        type: Sequelize.DECIMAL(13,2)
    }
})



module.exports = InvoicesTable;