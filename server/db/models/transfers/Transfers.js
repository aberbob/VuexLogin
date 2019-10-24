'use strict';
module.exports = (sequelize, DataTypes) => {
    const TransfersTable = sequelize.define('Transfers', {
        CustOrganizationId: {
            type: DataTypes.INTEGER(11)
        },
        TransferStatusId: {
            type: DataTypes.INTEGER(11)
        },
        notes: {
            type: DataTypes.STRING(100)
        },
        destination: {
            type: DataTypes.STRING(100)
        },
        source: {
            type: DataTypes.STRING(100)
        },
    }, {
        tableName: 'Transfers',
        freezeTableName: true
    });
    TransfersTable.associate = function(models) {
        // associations can be defined here
        TransfersTable.hasMany(models.TransferItems);

        TransfersTable.belongsTo(models.CustOrganizations);
        TransfersTable.belongsTo(models.TransferStatuses);

    };
    return TransfersTable;
};
