const Sequelize = require('sequelize');
const db = require('../../config/db');

const OrderStatusesTable = db.define('OrderStatuses', {
    name: {
        type: Sequelize.STRING(10)
    }
})



module.exports = OrderStatusesTable;