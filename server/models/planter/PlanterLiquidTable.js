const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterLiquidTable = db.define('PlanterLiquid', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterLiquidTable;