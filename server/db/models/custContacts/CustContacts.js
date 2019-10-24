'use strict';
module.exports = (sequelize, DataTypes) => {
    const CustContacts = sequelize.define('CustContacts', {
        fn: {
            type: DataTypes.STRING(20)
        },
        ln: {
            type: DataTypes.STRING(20)
        },
        phonenumber: {
            type: DataTypes.INTEGER(11)
        },
        email: {
            type: DataTypes.STRING(11)
        },
        CustOrganizationId: {
            type: DataTypes.INTEGER(11)
        },
        CustContactStatusId: {
            type: DataTypes.INTEGER(12)
        }
    }, {
        tableName: 'CustContacts',
        freezeTableName: true
    });
    CustContacts.associate = function(models) {
        // associations can be defined here
        CustContacts.hasMany(models.WorkOrders);

        CustContacts.belongsTo(models.CustOrganizations);
        CustContacts.belongsTo(models.CustContactStatuses);

    };
    return CustContacts;
};
