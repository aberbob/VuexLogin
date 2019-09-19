const Sequelize = require('sequelize');
const db = require('../../config/db');

const WOPrioritiesTable = db.define('WOPriorities', {
    WOPrioritiesname: {
        type: Sequelize.STRING(10)
    }
})



module.exports = WOPrioritiesTable;