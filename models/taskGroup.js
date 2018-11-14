'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskGroup = sequelize.define('TaskGroup', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    eta: {
      type: DataTypes.TIME,
    },
    name: {
      type: DataTypes.STRING
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
