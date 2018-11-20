// Tasks
const listTasks = require('./task/listTasks')
const readTask = require('./task/readTask')

// Templates
const listTemplates = require('./template/listTemplates')
const readTemplate = require('./template/readTemplate')

// Groups
const listTaskGroups = require('./taskGroup/ListTaskGroups')
const readTaskGroup = require('./taskGroup/readTaskGroup')

// Rules
const listTaskRules = require('./taskRule/ListTaskRules')
const readTaskRule = require('./taskRule/readTaskRule')

// Modules
const listModules = require('./module/ListModules')
const readModule = require('./module/readModule')


module.exports = {

  // Task
  listTasks,
  readTask,

  // Templates
  listTemplates,
  readTemplate,

  // Groups
  listTaskGroups,
  readTaskGroup,
 
  // Rules
  listTaskRules,
  readTaskRule,

  // Modules
  listModules,
  readModule

};
