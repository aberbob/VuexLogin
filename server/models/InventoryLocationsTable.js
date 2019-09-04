const Sequelize = require('sequelize');
const db = require('../config/db');

const InventoryLocationsTable = db.define('InventoryLocations', {
    name: {
        type: Sequelize.INTEGER(3)
    },
    street: {
        type: Sequelize.INTEGER(3)
    },
    street2: {
        type: Sequelize.STRING(15)
    },
    city: {
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



module.exports = InventoryLocationsTable;