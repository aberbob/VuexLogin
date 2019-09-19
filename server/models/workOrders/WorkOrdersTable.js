const Sequelize = require('sequelize');
const db = require('../../config/db');

const WorkOrdersTable = db.define('WorkOrders', {
    WorkOrderId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    description: {
        type: Sequelize.STRING(50)
    },
    type: {
        type: Sequelize.STRING(30)
    },
    notes: {
        type: Sequelize.STRING(500)
    },
    EquipmentProfileId: {
        type: Sequelize.INTEGER()
    },
    WOCategoryId: {
        type: Sequelize.INTEGER()
    },
    WOStatusId: {
        type: Sequelize.INTEGER()
    },
    CustContactId: {
        type: Sequelize.INTEGER()
    },
    CustOrganizationId: {
        type: Sequelize.INTEGER()
    },
    UserId: {
        type: Sequelize.INTEGER()
    },
    WOPrioirtyId: {
        type: Sequelize.INTEGER()
    }
})



module.exports = WorkOrdersTable;