const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterClosingWheelsTable = db.define('PlanterClosingWheels', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterClosingWheelsTable;