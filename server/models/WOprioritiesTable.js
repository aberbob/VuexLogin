const Sequelize = require('sequelize');
const db = require('../config/db');

const WOPrioritiesTable = db.define('WOPriorities', {
    name: {
        type: Sequelize.STRING(10)
    }
})



module.exports = WOPrioritiesTable;