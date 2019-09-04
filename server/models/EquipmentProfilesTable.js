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
    downforce: {
        type: Sequelize.STRING(15)
    },
    monitor: {
        type: Sequelize.STRING(15)
    },
    drivetype: {
        type: Sequelize.STRING(15)
    },
    meter: {
        type: Sequelize.STRING(15)
    },
    harnessing: {
        type: Sequelize.STRING(15)
    },
    seedtubes: {
        type: Sequelize.STRING(15)
    },
    seedfirmers: {
        type: Sequelize.STRING(15)
    },
    liquid: {
        type: Sequelize.STRING(15)
    },
    insecticide: {
        type: Sequelize.STRING(15)
    },
    closingwheels: {
        type: Sequelize.STRING(15)
    },
    depthadjust: {
        type: Sequelize.STRING(15)
    },
    CustOrganizationId: {
        type: Sequelize.INTEGER(100)
    }
})



module.exports = EquipmentProfilesTable;