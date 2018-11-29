'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    }
  }
  );

  Plan.associate = function (models) {

    // Plan has many plan templates
    models.Plan.hasMany(models.PlanStep, {
      foreignKey: "PlanId",
      sourceKey: "id"
    })
  }

  return Plan;
};
