const computers = require('../lib/modules')

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
      type: DataTypes.UUID,
      allowNull: false
    },
    taskGroupId: {
      type: DataTypes.UUID,
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'new',
      validate: {
        isIn: [['new', 'done']]
      }
    },
    result: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.JSON,
    },
    dependencies: {
      type: DataTypes.JSON,
    }
  });


  //========== ASSOCIATIONS ==========//
  Task.associate = function (models) {

    // Task belongs to a template
    models.Task.belongsTo(models.Template, {
      foreignKey: "templateId",
      sourceKey: "id"
    })

    // Task belongs to a task group
    models.Task.belongsTo(models.TaskGroup, {
      foreignKey: "taskGroupId",
      sourceKey: "id"
    })

  }


  //========== INSTANCE METHODS ==========//

  //  Set task status back to new, blank out result and complete date  
  Task.prototype.resetTask = async function () {
    this.result = ""
    this.status = 'new'
    this.save()
  }

  // 

  
  Task.prototype.validateResult = async function () {
    console.log('----validateResultType----')
  }


  

  Task.prototype.performTask = async function (userResult, configuration) {

    
    this.validateResult()
    
    var template = await this.getTemplate()

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

    // update result for task
    this.result = userResult

    // update status to done
    this.status = 'done'
    this.save()

    // Compute Tasks: execute corresponding code module
    if (template.type === 'compute') {
      await eval('computers.' + template.moduleName + '.perform(configuration)')
      return 'Succesfully performed the task.'
    }

  }

  return Task;
};