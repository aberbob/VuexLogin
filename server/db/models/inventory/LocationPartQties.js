'use strict';
module.exports = (sequelize, DataTypes) => {
    const LocationPartQties = sequelize.define('LocationPartQties', {
        InventoryLocationId: {
            type: DataTypes.INTEGER(10)
        },
        PartId: {
            type: DataTypes.INTEGER(15)
        },
        qty: {
            type: DataTypes.INTEGER(7)
        },
    }, {
        tableName: 'LocationPartQties',
        freezeTableName: true
    });
    LocationPartQties.associate = function(models) {
        LocationPartQties.belongsTo(models.Parts);
        LocationPartQties.belongsTo(models.InventoryLocations);

    };
    return LocationPartQties;
};
