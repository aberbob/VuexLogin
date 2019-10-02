const Sequelize = require('sequelize');
const db = require('../../config/db');

const WorkOrdersTable = db.define('WorkOrders', {
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
        type: Sequelize.INTEGER(11)
    },
    WOCategoryId: {
        type: Sequelize.INTEGER(11)
    },
    WOStatusId: {
        type: Sequelize.INTEGER(11)
    },
    CustContactId: {
        type: Sequelize.INTEGER(11)
    },
    CustOrganizationId: {
        type: Sequelize.INTEGER(11)
    },
    UserId: {
        type: Sequelize.INTEGER(11)
    },
    WOPriorityId: {
        type: Sequelize.INTEGER(11)
    }
})



module.exports = WorkOrdersTable;