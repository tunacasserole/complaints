'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlanStep = sequelize.define('PlanStep', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    planId: {
      type: DataTypes.UUID
    },
    stepId: {
      type: DataTypes.UUID
    },
    sequence: {
      type: DataTypes.INTEGER
    },
    offset: {
      type: DataTypes.INTEGER
    }
  });

  PlanStep.associate = function (models) {

    // Plan Step belongs to Plan
    models.PlanStep.belongsTo(models.Plan, {
      foreignKey: "planId",
      sourceKey: "id"
    })
  }

  return PlanStep;
};
