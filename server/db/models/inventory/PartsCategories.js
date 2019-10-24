'use strict';
module.exports = (sequelize, DataTypes) => {
    const PartsCategories = sequelize.define('PartsCategories', {
        name: {
            type: DataTypes.STRING(25)
        }
    }, {
        tableName: 'PartsCategories',
        freezeTableName: true
    });
    PartsCategories.associate = function(models) {
        // associations can be defined here
        PartsCategories.hasMany(models.PartsSubcategories);
        PartsCategories.hasMany(models.Parts);
    };
    return PartsCategories;
};
