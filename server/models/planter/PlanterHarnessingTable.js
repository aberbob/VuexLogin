const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterHarnessingTable = db.define('PlanterHarnessing', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterHarnessingTable;