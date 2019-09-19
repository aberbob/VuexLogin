const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterMonitorTable = db.define('PlanterMonitor', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterMonitorTable;