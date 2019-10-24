'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartDrafts = sequelize.define('CartDrafts', {
    items: DataTypes.STRING,
      UsersId: {
          type: DataTypes.INTEGER(11)
      },
  }, {});
  CartDrafts.associate = function(models) {

      CartDrafts.belongsTo(models.Users);
  };
  return CartDrafts;
};
