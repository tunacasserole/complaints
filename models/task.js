'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      validate: {
        allowNull: false
      }
    },
    TemplateId: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false
      }
    },
    taskGroupId: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false
      }
    },
    eta: {
      type: DataTypes.TIME,
      validate: {
        allowNull: false
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [0, 50]
      }
    },
    data: {
      type: DataTypes.JSON,
      validate: {
        notEmpty: false
      }
    },
    dependencies: {
      type: DataTypes.JSON,
      validate: {
        notEmpty: false
      }
    }
  },
    {
      instanceMethods: {
        perform: function () {
          return 'you just performed this task, whatever that means.'
        },
        finalize: function () {
          return 'you just finalized this task, whatever that means.'
        }
      }
    });

  return Task;
};