const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterInsecticideTable = db.define('PlanterInsecticide', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterInsecticideTable;