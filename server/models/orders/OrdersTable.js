const Sequelize = require('sequelize');
const db = require('../../config/db');

const OrdersTable = db.define('Orders', {
    CustOrganizationId: {
        type: Sequelize.INTEGER(11)
    },
    OrderStatusId: {
        type: Sequelize.INTEGER(11)
    },
    notes: {
        type: Sequelize.STRING(100)
    },
    total: {
        type: Sequelize.DECIMAL(15,2)
    },
})



module.exports = OrdersTable;