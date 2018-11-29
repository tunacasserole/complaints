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
    }
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
