'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectTask = sequelize.define('ProjectTask', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    projectId: {
      type: DataTypes.UUID
    },
    taskId: {
      type: DataTypes.UUID
    },
    sequence: {
      type: DataTypes.INTEGER
    },
  });

  // ProjectTask.associate = function (models) {

  //   // Project Tasks belongs to Project
  //   models.ProjectTask.belongsTo(models.Project, {
  //     foreignKey: "projectId",
  //     sourceKey: "id"
  //   })
  //   // Project Tasks belongs to Tasks
  //   models.ProjectTask.belongsTo(models.Task, {
  //     foreignKey: "taskId",
  //     sourceKey: "id"
  //   })
  // }

  return ProjectTask;
};
