const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterDownForceTable = db.define('PlanterDownForce', {
    name: {
        type: Sequelize.STRING(25)
    }
})



module.exports = PlanterDownForceTable;