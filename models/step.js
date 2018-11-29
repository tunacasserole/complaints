// const computers = require('../lib/modules')
const baseTaskModule = require('../lib/modules/baseTaskModule')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Step = sequelize.define('Step', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    parentID: {
      type: DataTypes.UUID,
    },
    resultType: {
      type: DataTypes.STRING,
    },
    module: {
      type: DataTypes.STRING,
    },
    resultList: {
      type: DataTypes.STRING
    },
    duration: {
      type: DataTypes.INTEGER
    }
  });


  //========== ASSOCIATIONS ==========//
  Step.associate = function (models) {

    // Step belongs to a task group
    models.Step.belongsTo(models.PlanStep, {
      foreignKey: "stepId",
      sourceKey: "id"
    })

    // Step has many task rules
    // models.Step.hasMany(models.StepRule, {
    //   foreignKey: "stepId",
    //   sourceKey: "id"
    // })

  }


  //========== INSTANCE METHODS ==========//

  //  Record result and set task status to done
  Step.prototype.complete = async function (userResult) {
    console.log('----completing-----')
    // update result for task
    this.result = userResult

    // update status to done
    this.status = 'done'
    this.save()
  }

  //  Set task status back to new, blank out result and complete date  
  Step.prototype.resetStep = async function () {
    this.result = ""
    this.status = 'new'
    this.save()
  }


  //  Validate the user supplied result of the task
  Step.prototype.validateResult = async function (userResult, template) {
    console.log('------- validating result --------')
    // validate custom result for Data Capture Steps: singleSelect, multiSelect
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


  Step.prototype.performStep = async function (userResult, configuration) {
    var template = await this.getTemplate()

    var message = this.validateResult(userResult, template)
    if (message !== 'success') { return 'Invalid result for this task.'}

    this.complete(userResult)

    // Compute Steps: execute corresponding code module
    if (template.moduleName) {
      return baseStepModule().perform(template.moduleName, configuration)
      return info
    }
  }

  return Step;
};
