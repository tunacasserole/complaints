'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskGroup = sequelize.define('TaskGroup', {
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

  TaskGroup.associate = function (models) {

    // TaskGroup has many tasks
    models.TaskGroup.hasMany(models.Task, {
      foreignKey: "taskGroupId",
      sourceKey: "id"
    })
  }

  return TaskGroup;
};
