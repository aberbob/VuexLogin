'use strict';
module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        CustOrganizationId: {
            type: DataTypes.INTEGER(11)
        },
        OrderStatusId: {
            type: DataTypes.INTEGER(11)
        },
        notes: {
            type: DataTypes.STRING(100)
        },
        total: {
            type: DataTypes.DECIMAL(15,2)
        },
    }, {
        tableName: 'Orders',
        freezeTableName: true
    });
    Orders.associate = function(models) {
        // associations can be defined here
        Orders.hasMany(models.OrderItems);

        Orders.belongsTo(models.CustOrganizations);
        Orders.belongsTo(models.OrderStatuses);

    };
    return Orders;
};
