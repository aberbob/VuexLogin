'use strict';
module.exports = (sequelize, DataTypes) => {
    const EquipmentProfilesTable = sequelize.define('EquipmentProfiles', {
        name: {
            type: DataTypes.STRING(15)
        },
        description: {
            type: DataTypes.STRING(15)
        },
        type: {
            type: DataTypes.STRING(15)
        },
        make: {
            type: DataTypes.STRING(15)
        },
        model: {
            type: DataTypes.STRING(15)
        },
        rowqty: {
            type: DataTypes.STRING(15)
        },
        PlanterClosingWheelId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterDepthAdjustId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterDownForceId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterDriveId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterInsecticideId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterMeterId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterLiquidId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterMonitorId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterHarnessingId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterSeedFirmerId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterSeedTubeId: {
            type: DataTypes.INTEGER(11)
        },
        CustOrganizationId: {
            type: DataTypes.INTEGER(11)
        }
    }, {
        tableName: 'EquipmentProfiles',
        freezeTableName: true
    });
    EquipmentProfilesTable.associate = function(models) {
        // associations can be defined here
        EquipmentProfilesTable.hasMany(models.WorkOrders);

        EquipmentProfilesTable.belongsTo(models.CustOrganizations);
        EquipmentProfilesTable.belongsTo(models.PlanterClosingWheels);
        EquipmentProfilesTable.belongsTo(models.PlanterDepthAdjusts);
        EquipmentProfilesTable.belongsTo(models.PlanterDownForces);
        EquipmentProfilesTable.belongsTo(models.PlanterDrives);
        EquipmentProfilesTable.belongsTo(models.PlanterHarnessings);
        EquipmentProfilesTable.belongsTo(models.PlanterInsecticides);
        EquipmentProfilesTable.belongsTo(models.PlanterLiquids);
        EquipmentProfilesTable.belongsTo(models.PlanterMeters);
        EquipmentProfilesTable.belongsTo(models.PlanterMonitors);
        EquipmentProfilesTable.belongsTo(models.PlanterSeedFirmers);
        EquipmentProfilesTable.belongsTo(models.PlanterSeedTubes);
    };
    return EquipmentProfilesTable;
};
