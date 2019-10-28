'use strict';
module.exports = (sequelize, DataTypes) => {
  const EquipmentInspections = sequelize.define('EquipmentInspections', {
    date: DataTypes.DATE,
    WorkOrdersId: DataTypes.INTEGER,
    measurements: DataTypes.STRING,
    PlantersId: DataTypes.INTEGER
  }, {});
  EquipmentInspections.associate = function(models) {
    // associations can be defined here
  };
  return EquipmentInspections;
};