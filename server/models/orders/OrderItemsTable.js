const Sequelize = require('sequelize');
const db = require('../../config/db');

const OrderItemsTable = db.define('OrderItems', {
    OrderId: {
        type: Sequelize.INTEGER(11)
    },
    qty: {
        type: Sequelize.INTEGER(7)
    },
    total: {
        type: Sequelize.DECIMAL(15,2)
    },
    sourcelocation: {
        type: Sequelize.STRING(15)
    },
    subcategory: {
        type: Sequelize.STRING(15),
    },
    category: {
        type: Sequelize.STRING(15),
    },
    partnumber: {
        type: Sequelize.STRING(15),
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
    price: {
        type: Sequelize.DECIMAL(13,2)
    },
    tabxable: {
        type: Sequelize.STRING(10)
    }
})



module.exports = OrderItemsTable;