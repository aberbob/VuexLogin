const Sequelize = require('sequelize');
const db = require('../../config/db');

const PlanterSeedTubesTable = db.define('PlanterSeedTubes', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = PlanterSeedTubesTable;