const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterMeterTable = db.define('PlanterMeter', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterMeterTable;