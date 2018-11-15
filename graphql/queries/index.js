// Tasks
const listTasks = require('./task/listTasks')
const readTask = require('./task/readTask')

// Templates
const listTemplates = require('./template/listTemplates')
const readTemplate = require('./template/readTemplate')

// Groups
const listTaskGroups = require('./TaskGroup/ListTaskGroups')
const readTaskGroup = require('./TaskGroup/readTaskGroup')

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
  listGroups,
  readGroup,

  // Modules
  listModules,
  readModule

};
