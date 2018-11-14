'use strict';
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('Template', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      validate: {
        allowNull: false,
      }
    },
    moduleName: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
      }
    },
    moduleVersion: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false,
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        allowNull: false,
        len: [0, 50]
      }
    },
    version: {
      type: DataTypes.FLOAT,
      validate: {
        allowNull: false,
        len: [0, 50]
      }
    },
    configuration: {
      type: DataTypes.JSON,
      validate: {
        allowNull: false,
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
    }
  );


  return Template;
};
