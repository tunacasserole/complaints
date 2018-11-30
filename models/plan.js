'use strict';

// const Models = require('../models/index.js')

module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      unique: true,
    },
    parentId: {
      type: DataTypes.UUID,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      unique: true,
    },
    businessUnit: {
      type: DataTypes.STRING,
      unique: true,
    },
    productClass: {
      type: DataTypes.STRING,
      unique: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    version: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    scheduleMethod: {
      type: DataTypes.STRING,
      unique: true,
    },
  }
  );

  Plan.associate = function (models) {

    models.Plan.belongsToMany(models.Step, { through: models.PlanStep })

    // Plan has many plan steps
    // models.Plan.hasMany(models.PlanStep, {
    //   foreignKey: "planId",
    //   sourceKey: "id"
    // })
  }

  return Plan;
};
