'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskGroup = sequelize.define('TaskGroup', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
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
    configuration: {
      type: DataTypes.JSON,
      validate: {
        allowNull: true
      }
    }
  },
    {
      instanceMethods: {
        stubbedInstanceMethod: function () {
          return 'ready to do something.'
        }
      }
    }
  );


  return TaskGroup;
};
