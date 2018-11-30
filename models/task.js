// const computers = require('../lib/modules')
const baseTaskModule = require('../lib/modules/baseTaskModule')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    stepId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    completeDate: {
      type: DataTypes.DATE,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'blocked',
      validate: {
        isIn: [['blocked', 'ready', 'complete']]
      }
    },
    result: {
      type: DataTypes.STRING
    },
    answeredBy: {
      type: DataTypes.UUID
    }
  });


  // //========== ASSOCIATIONS ==========//
  // Task.associate = function (models) {

  //   // Task belongs to a Project Task
  //   models.Task.belongsTo(models.ProjectTask, {
  //     foreignKey: "taskId",
  //     sourceKey: "id"
  //   })

  //   // Task has many task rules
  //   models.Task.hasMany(models.TaskRule, {
  //     foreignKey: "taskId",
  //     sourceKey: "id"
  //   })

  // }


  //========== INSTANCE METHODS ==========//

  //  Record result and set task status to done
  Task.prototype.complete = async function (userResult) {
    console.log('----completing-----')
    // update result for task
    this.result = userResult

    // update status to done
    this.status = 'done'
    this.save()
  }

  //  Set task status back to new, blank out result and complete date  
  Task.prototype.resetTask = async function () {
    this.result = ""
    this.status = 'new'
    this.save()
  }


  //  Validate the user supplied result of the task
  Task.prototype.validateResult = async function (userResult, template) {
    console.log('------- validating result --------')
    // validate custom result for Data Capture Tasks: singleSelect, multiSelect
    if (['boolean', 'yesNo', 'select', 'multiSelect'].includes(template.type)) {
      switch (template.type) {
        case 'boolean': var results = ['true', 'false'];
        case 'yesNo': var results = ['yes', 'no'];
        case 'select': var results = template.results.split(',');
        case 'multiSelect': var results = template.results.split(',');
        // TODO: handle validating multiple results for multiSelect
      }

      if (!results.includes(userResult)) {
        return 'Invalid result for this template.  Valid results are: ' + results.toString()
      }
    }

    // validate result is a date field for date based data capture tasks
    if (template.type === 'date') {
      if (!userResult instanceof Date) {
        return 'result must be a valid date'
      }
    }
    return 'success'
  }


  Task.prototype.performTask = async function (userResult, configuration) {
    var template = await this.getTemplate()

    var message = this.validateResult(userResult, template)
    if (message !== 'success') { return 'Invalid result for this task.' }

    this.complete(userResult)

    // Compute Tasks: execute corresponding code module
    if (template.moduleName) {
      return baseTaskModule().perform(template.moduleName, configuration)
      return info
    }
  }

  return Task;
};
