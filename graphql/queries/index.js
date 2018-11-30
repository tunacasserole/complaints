// Tasks
const listTasks = require('./task/listTasks')
const readTask = require('./task/readTask')

// Task Rules
const listTaskRules = require('./taskRule/listTaskRules')
const readTaskRule = require('./taskRule/readTaskRule')

// Steps
const listSteps = require('./step/listSteps')
const readStep = require('./step/readStep')

// Projects
const listProjects = require('./project/listProjects')
const readProject = require('./project/readProject')

// Project Tasks
const listProjectTasks = require('./projectTask/listProjectTasks')
const readProjectTask = require('./projectTask/readProjectTask')

// Plans
const listPlans = require('./plan/listPlans')
const readPlan = require('./plan/readPlan')

// Plan Steps
const listPlanSteps = require('./planStep/listPlanSteps')
const readPlanStep = require('./planStep/readPlanStep')

// Step Rules
const listStepRules = require('./stepRule/listStepRules')
const readStepRule = require('./stepRule/readStepRule')

// Modules
const listModules = require('./module/ListModules')
const readModule = require('./module/readModule')



module.exports = {

  // Tasks
  listTasks,
  readTask,

  // Task Rules
  listTaskRules,
  readTaskRule,

  // Steps
  listSteps,
  readStep,

  // Projects
  listProjects,
  readProject,

  // Projects Tasks
  listProjectTasks,
  readProjectTask,

  // Plans
  listPlans,
  readPlan,

  // Plan Steps
  listPlanSteps,
  readPlanStep,

  // Step Rules
  listStepRules,
  readStepRule,

  // Modules
  listModules,
  readModule

};
