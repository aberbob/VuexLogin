const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterDriveTable = db.define('PlanterDrive', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterDriveTable;