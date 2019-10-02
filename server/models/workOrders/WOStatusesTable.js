const Sequelize = require('sequelize');
const db = require('../../config/db');

const WOStatusesTable = db.define('WOStatuses', {
    name: {
        type: Sequelize.STRING(10)
    }
})

module.exports = WOStatusesTable