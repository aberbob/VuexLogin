'use strict';
module.exports = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('Users', {
        fn: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        ln: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        permgroup: {
            type: DataTypes.INTEGER(2)
        }
    }, {
        tableName: 'Users',
        freezeTableName: true
    });
    UsersTable.associate = function(models) {
        // associations can be defined here
        UsersTable.hasMany(models.WorkOrders);
        UsersTable.hasMany(models.CartDrafts);
        UsersTable.belongsTo(models.UserPerms);

    };
    return UsersTable;
};
