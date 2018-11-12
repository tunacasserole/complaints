'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskGroup = sequelize.define('TaskGroup', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
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
    configuration: {
      type: DataTypes.JSON,
      validate: {
        notEmpty: false
      }
    }
  },
  {
    instanceMethods: {
      stubbedInstanceMethod: function(){
        return 'ready to do something.'
      }
    }
  }
  );


  return TaskGroup;
};
