'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskRule = sequelize.define('TaskRule', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    taskId: {
      type: DataTypes.UUID
    },
    priorId: {
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    priorResult: {
      type: DataTypes.STRING
    },
    operator: {
      type: DataTypes.STRING
    }
  });

  TaskRule.associate = function (models) {

    // TaskRule has many tasks
    models.TaskRule.belongsTo(models.Task, {
      foreignKey: "taskId",
      sourceKey: "id"
    })
  }

  return TaskRule;
};
