const Sequelize = require('sequelize');
const db = require('../config/db');

const EquipmentProfilesTable = db.define('EquipmentProfiles', {
    name: {
        type: Sequelize.STRING(15)
    },
    description: {
        type: Sequelize.STRING(15)
    },
    type: {
        type: Sequelize.STRING(15)
    },
    make: {
        type: Sequelize.STRING(15)
    },
    model: {
        type: Sequelize.STRING(15)
    },
    rowqty: {
        type: Sequelize.STRING(15)
    },
    PlanterClosingWheelId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterDepthAdjustId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterDownForceId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterDriveId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterInsecticideId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterMeterId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterLiquidId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterMonitorId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterHarnessingId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterSeedFirmerId: {
        type: Sequelize.INTEGER(11)
    },
    PlanterSeedTubeId: {
        type: Sequelize.INTEGER(11)
    },
    CustOrganizationId: {
        type: Sequelize.INTEGER(11)
    }
})



module.exports = EquipmentProfilesTable;