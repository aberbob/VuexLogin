'use strict';
module.exports = (sequelize, DataTypes) => {
    const Parts = sequelize.define('Parts', {
        PartsSubcategoryId: {
            type: DataTypes.INTEGER(5)
        },
        PartsCategoryId: {
            type: DataTypes.INTEGER(5)
        },
        partnumber: {
            type: DataTypes.STRING(15),
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING(50)
        },
        notes: {
            type: DataTypes.STRING(100)
        },
        uom: {
            type: DataTypes.STRING(10)
        },
        listprice: {
            type: DataTypes.DECIMAL(13,2)
        },
        tabxable: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'Parts',
        freezeTableName: true
    });
    Parts.associate = function(models) {
        Parts.hasMany(models.LocationPartQties);

        Parts.belongsTo(models.PartsSubcategories);
        Parts.belongsTo(models.PartsCategories);

    };
    return Parts;
};
