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
        type: Sequelize.STRING(20)
    },
    PlanterDepthAdjustId: {
        type: Sequelize.STRING(20)
    },
    PlanterDownForceId: {
        type: Sequelize.STRING(20)
    },
    PlanterDriveId: {
        type: Sequelize.STRING(20)
    },
    PlanterInsecticideId: {
        type: Sequelize.STRING(20)
    },
    PlanterMeterId: {
        type: Sequelize.STRING(20)
    },
    PlanterLiquidId: {
        type: Sequelize.STRING(20)
    },
    PlanterMonitorId: {
        type: Sequelize.STRING(20)
    },
    PlanterHarnessingId: {
        type: Sequelize.STRING(20)
    },
    PlanterSeedFirmerId: {
        type: Sequelize.STRING(20)
    },
    PlanterSeedTubeId: {
        type: Sequelize.STRING(20)
    },
    CustOrganizationId: {
        type: Sequelize.INTEGER(100)
    }
})



module.exports = EquipmentProfilesTable;