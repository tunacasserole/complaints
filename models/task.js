'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      validate: {
          notEmpty: true
      }
    },
    TemplateId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    taskGroupId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    eta: {
      type: DataTypes.TIME,
      validate: {
        notEmpty: true
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [0,50]
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
        perform: function(){
          return 'you just performed this task, whatever that means.'
        },
        finalize: function(){
          return 'you just finalized this task, whatever that means.'
      }
    }
  });

  return Task;
};