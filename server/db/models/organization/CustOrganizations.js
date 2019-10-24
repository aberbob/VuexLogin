'use strict';
module.exports = (sequelize, DataTypes) => {
    const CustOrganizations = sequelize.define('CustOrganizations', {
        name: {
            type: DataTypes.STRING(30)
        },
        street: {
            type: DataTypes.STRING(50)
        },
        street2: {
            type: DataTypes.STRING(15)
        },
        city: {
            type: DataTypes.STRING(21)
        },
        state: {
            type: DataTypes.STRING(2)
        },
        zip: {
            type: DataTypes.INTEGER(5)
        },
        country: {
            type: DataTypes.STRING(3)
        },
        phone: {
            type: DataTypes.INTEGER(11)
        },
        email: {
            type: DataTypes.STRING(25)
        },
        salescontact: {
            type: DataTypes.STRING(11)
        },
        billingcontact: {
            type: DataTypes.STRING(11)
        },
        OrgAccountTypeId: {
            type: DataTypes.INTEGER(11)
        },
        OrgFarmTypeId: {
            type: DataTypes.INTEGER(11)
        },
        OrgInvoicingTypeId: {
            type: DataTypes.INTEGER(11)
        },
        OrgMarketId: {
            type: DataTypes.INTEGER(11)
        },
        OrgServicePlanTypeId: {
            type: DataTypes.INTEGER(11)
        },
        OrgST101TypeId: {
            type: DataTypes.INTEGER(11)
        },
    }, {
        tableName: 'CustOrganizations',
        freezeTableName: true
    });
    CustOrganizations.associate = function(models) {
        // associations can be defined here

        CustOrganizations.hasMany(models.EquipmentProfiles);
        CustOrganizations.hasMany(models.CustContacts);
        CustOrganizations.hasMany(models.WorkOrders);
        CustOrganizations.hasMany(models.Orders);
        CustOrganizations.hasMany(models.Transfers);

        CustOrganizations.belongsTo(models.OrgST101Types);
        CustOrganizations.belongsTo(models.OrgServicePlanTypes);
        CustOrganizations.belongsTo(models.OrgMarkets);
        CustOrganizations.belongsTo(models.OrgInvoicingTypes);
        CustOrganizations.belongsTo(models.OrgFarmTypes);
        CustOrganizations.belongsTo(models.OrgAccountTypes);

    };
    return CustOrganizations;
};
