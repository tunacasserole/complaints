'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    templateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taskGroupId: {
      type: DataTypes.INTEGER,
    },
    eta: {
      type: DataTypes.TIME,
    },
    status: {
      type: DataTypes.STRING,
      // defaultValue: 'new',
      // validate: {
      //   isIn: [['new', 'done']]
      // }
    },
    disposition: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.JSON,
    },
    dependencies: {
      type: DataTypes.JSON,
    }
  });

  // Instance Methods
  Task.prototype.performTask = function (userDisposition) {
    console.log('perform start')

    // Compute Tasks: execute corresponding code module

    // Data Capture Tasks: free, boolean, yesNo, singleSelect, multiSelect
    // validate task in not already done
    // validate disposition is valid
    // update status to done
    this.status = 'done'
    // update disposition for task
    this.disposition = userDisposition



    this.save()
    console.log('perform end')
  }


  return Task;
};