'use strict';
module.exports = (sequelize, DataTypes) => {
  const StepRule = sequelize.define('StepRule', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    StepId: {
      type: DataTypes.UUID
    },
    priorId: {
      type: DataTypes.UUID
    },
    operator: {
      type: DataTypes.STRING
    }
  });

  // StepRule.associate = function (models) {

  //   // StepRule belongs to Template
  //   models.StepRule.belongsTo(models.Step, {
  //     foreignKey: "StepId",
  //     sourceKey: "id"
  //   })
  // }

  return StepRule;
};
