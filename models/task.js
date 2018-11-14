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
      defaultValue: 'new',
      validate: {
        isIn: [['new', 'done']]
      }
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

  // Task.belongsTo(Template)

  Task.associate = function (models) {
    models.Task.belongsTo(models.Template, {
      foreignKey: "id",
      sourceKey: "templateId"
    })
  }

  // Instance Methods
  Task.prototype.performTask = function (userDisposition) {
    // validate task in not already done
    if (this.status === 'done') { return 'This task has already been performed.' }

    // validate disposition for Data Capture Tasks: boolean, yesNo, singleSelect, multiSelect
    sequelize.models.Template.findByPk(this.templateId).then(template => {
      if (['singleSelect', 'multiSelect', 'boolean', 'yesNo'].includes(template.moduleName)) {
        var dispositions = ['verified', 'unverified']
        if (!dispositions.includes(userDisposition)) {
          console.log('bad dispositon')
          return 'Invalid disposition for this template'
        }
      }
    })

    // Compute Tasks: execute corresponding code module
    if (this.module === 'compute') {
      return 'Executed computation module'
    }

    // update status to done
    this.status = 'done'

    // update disposition for task
    this.disposition = userDisposition

    this.save().then(() => {
      return 'Succesfully performed the task.'
    })

  }

  return Task;
};