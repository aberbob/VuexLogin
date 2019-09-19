const Sequelize = require('sequelize');
const db = require('../../config/db');

const OrgAccountTypesTable = db.define('OrgAccountTypes', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = OrgAccountTypesTable;