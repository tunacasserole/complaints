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
  Task.prototype.performTask = async function (userDisposition) {

    // TODO: Check Dependencies

    // validate task has not already been completed
    if (this.status === 'done') { return 'This task has already been performed.' }

    // TODO: need to get this template from eagerly loaded association
    var template = await sequelize.models.Template.findByPk(this.templateId)

    // validate custom disposition for Data Capture Tasks: singleSelect, multiSelect
    if (['boolean', 'yesNo', 'singleSelect', 'multiSelect'].includes(template.type)) {
      switch (template.type) {
        case 'boolean': var dispositions = ['true', 'false'];
        case 'yesNo': var dispositions = ['yes', 'no'];
        default: var dispositions = template.dispositions.split(',')
      }
      if (!dispositions.includes(userDisposition)) {
        return 'Invalid disposition for this template.  Valid dispositions are: ' + dispositions.toString()
      }
    }

    // validate disposition is a date field for date based data capture tasks
    if (template.type === 'date') {
      if (!userDisposition instanceof Date) {
        return 'Disposition must be a valid date'
      }
    }

    // Compute Tasks: execute corresponding code module
    if (template.type === 'compute') {
      // Execute corresponding module 

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