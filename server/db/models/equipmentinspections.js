'use strict';
module.exports = (sequelize, DataTypes) => {
  const EquipmentInspections = sequelize.define('EquipmentInspections', {
    date: DataTypes.DATE,
    WorkOrderId: DataTypes.INTEGER,
    measurements: DataTypes.STRING,
    PlanterId: DataTypes.INTEGER
  }, {});
  EquipmentInspections.associate = function(models) {
    // associations can be defined here
  };
  return EquipmentInspections;
};