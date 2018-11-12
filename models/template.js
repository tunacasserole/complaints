'use strict';
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('Template', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      validate: {
        notEmpty: true
      }
    },
    moduleName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    moduleVersion: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
        len: [0,50]
      }
    },
    version: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        len: [0,50]
      }
    },
    configuration: {
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
  }
  );


  return Template;
};
