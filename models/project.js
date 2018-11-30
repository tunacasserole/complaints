'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
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
    planId: {
      type: DataTypes.UUID,
      unique: true,
    },
    parentId: {
      type: DataTypes.UUID,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      unique: true,
    },
    type: {
      type: DataTypes.STRING,
      unique: true,
    },
    state: {
      type: DataTypes.STRING,
      unique: true,
    },
    startDate: {
      type: DataTypes.STRING,
      unique: true,
    },
    dueDate: {
      type: DataTypes.STRING,
      unique: true,
    },
    completeDate: {
      type: DataTypes.STRING,
      unique: true,
    },
    ownerId: {
      type: DataTypes.UUID,
      unique: true,
    },
  }
  );

  // Project.associate = function (models) {

  //   // Project has many tasks
  //   models.Project.hasMany(models.Task, {
  //     foreignKey: "ProjectId",
  //     sourceKey: "id"
  //   })
  // }

  return Project;
};
