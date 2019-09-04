const Sequelize = require('sequelize');
const db = require('../config/db');

const OrgServicePlanTypesTable = db.define('OrgServicePlanTypes', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = OrgServicePlanTypesTable;