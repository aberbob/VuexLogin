const Sequelize = require('sequelize');
const db = require('../../config/db');

const LocationPartQtyTable = db.define('LocationPartQty', {
    InventoryLocationId: {
        type: Sequelize.INTEGER(10)
    },
    PartId: {
        type: Sequelize.INTEGER(15)
    },
    qty: {
        type: Sequelize.INTEGER(7)
    },
})

module.exports = LocationPartQtyTable;