const Sequelize = require('sequelize');
const db = require('../config/db');

const OrgFarmTypesTable = db.define('OrgFarmTypes', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = OrgFarmTypesTable;