const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterDepthAdjustTable = db.define('PlanterDepthAdjust', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterDepthAdjustTable;