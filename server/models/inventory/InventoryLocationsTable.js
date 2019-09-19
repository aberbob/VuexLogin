const Sequelize = require('sequelize');
const db = require('../../config/db');

const InventoryLocationsTable = db.define('InventoryLocations', {
    name: {
        type: Sequelize.STRING(20)
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
    state: {
        type: Sequelize.STRING(3)
    },
    zipcode: {
        type: Sequelize.STRING(3)
    }
})

module.exports = InventoryLocationsTable;