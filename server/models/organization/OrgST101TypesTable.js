const Sequelize = require('sequelize');
const db = require('../../config/db');

const OrgST101TypesTable = db.define('OrgST101Types', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = OrgST101TypesTable;