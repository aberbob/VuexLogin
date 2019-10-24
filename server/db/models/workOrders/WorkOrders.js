'use strict';
module.exports = (sequelize, DataTypes) => {
    const WorkOrdersTable = sequelize.define('WorkOrders', {
        description: {
            type: DataTypes.STRING(50)
        },
        type: {
            type: DataTypes.STRING(30)
        },
        notes: {
            type: DataTypes.STRING(500)
        },
        EquipmentProfileId: {
            type: DataTypes.INTEGER(11)
        },
        WOCategoryId: {
            type: DataTypes.INTEGER(11)
        },
        WOStatusId: {
            type: DataTypes.INTEGER(11)
        },
        CustContactId: {
            type: DataTypes.INTEGER(11)
        },
        CustOrganizationId: {
            type: DataTypes.INTEGER(11)
        },
        UserId: {
            type: DataTypes.INTEGER(11)
        },
        WOPriorityId: {
            type: DataTypes.INTEGER(11)
        }
    }, {
        tableName: 'WorkOrders',
        freezeTableName: true
    });
    WorkOrdersTable.associate = function(models) {
        WorkOrdersTable.belongsTo(models.EquipmentProfiles);
        WorkOrdersTable.belongsTo(models.WOCategories);
        WorkOrdersTable.belongsTo(models.WOStatuses);
        WorkOrdersTable.belongsTo(models.CustContacts);
        WorkOrdersTable.belongsTo(models.CustOrganizations);
        WorkOrdersTable.belongsTo(models.Users);
        WorkOrdersTable.belongsTo(models.WOPriorities);

    };
    return WorkOrdersTable;
};
