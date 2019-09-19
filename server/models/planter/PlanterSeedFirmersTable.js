const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterSeedFirmersTable = db.define('PlanterSeedFirmers', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterSeedFirmersTable;