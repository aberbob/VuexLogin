'use strict';
module.exports = (sequelize, DataTypes) => {
    const PartsSubcategories = sequelize.define('PartsSubcategories', {
        name: {
            type: DataTypes.STRING(80)
        },
        PartsCategoriesId: {
            type: DataTypes.STRING(25)
        }
    }, {
        tableName: 'PartsSubcategories',
        freezeTableName: true
    });
    PartsSubcategories.associate = function(models) {
        // associations can be defined here
        PartsSubcategories.hasMany(models.Parts);
        PartsSubcategories.belongsTo(models.PartsCategories);

    };
    return PartsSubcategories;
};
