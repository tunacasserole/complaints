'use strict';
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('Template', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    moduleName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
        isIn: [['free', 'compute', 'boolean', 'multiSelect', 'singleSelect']]
      }
    },
    moduleVersion: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: false,
        len: [0, 50]
      }
    },
    version: {
      type: DataTypes.FLOAT,
      defaultValue: 1
    },
    configuration: {
      type: DataTypes.JSON,
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
    }
  );


  return Template;
};
